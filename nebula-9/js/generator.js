/**
 * Gives a random index.
 */
let random_index = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {*} type 
 * @param {*} node 
 * @param {*} delay 
 */
let add_animation = (type, node, delay) => {
    node.classList.add("animated");
    node.classList.add(type);

    let formatted_delay = "delay-" + delay + "s";

    node.classList.add(formatted_delay);
};

/**
 * 
 */
let add_onset = (node, onset) => {
    node.style.animation = onset + "s fadeIn";
    node.style.animationFillMode = "forwards";
    node.style.visibility = "hidden";
};

/**
 * 
 * @param {*} configuration 
 */
let generate_stimulus = (configuration) => {
    const flankers = configuration["FLANKERS"];

    let table_node = document.createElement('table');

    /**
     * Add Styling.
     */
    table_node.className = 'stimuli-container';

    let row = document.createElement('tr');

    flankers.forEach((flanker_configuration, index) => {
        let flanker_container = document.createElement('th');

        let flanker = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        /**
         * Set attributes for flanker.
         */
        flanker.setAttribute("width", "100%");
        flanker.setAttribute("height", "100%");
        flanker.setAttribute("viewBox", "0 0 15 24");
        flanker.setAttribute("class", "flanker");

        flanker.style.fill = flanker_configuration["COLOR"];
        flanker.style.opacity = flanker_configuration["OPACITY"];
        flanker_configuration.animation = flanker_configuration["ANIMATION"];
        flanker_configuration.onset = flanker_configuration["ONSET"];

        // add_animation(flanker_configuration.animation, flanker, flanker_configuration.onset);

        // if (flanker_configuration["DIRECTION"] !== DIRECTION.RIGHT) {
        //     flanker.id = "flanker-left";
        // }

        if (flanker_configuration["VISIBILITY_DELAY"] !== undefined) {
            add_onset(flanker, flanker_configuration["VISIBILITY_DELAY"]);
        }

        add_animation(flanker_configuration.animation, flanker, flanker_configuration.onset);

        /**
         * Create path node and add attributes.
         */
        let path_node = document.createElement('PATH');

        path_node.setAttribute('d', flanker_configuration["PATH"]);


        /**
         * Final addition of nodes.
         */
        flanker.appendChild(path_node);

        flanker_container.appendChild(flanker);

        row.appendChild(flanker_container);

        /**
         * Check if at target point.
         */
        if (index === (configuration["TARGET"]["INDEX"] - 1)) {
            let target = generate_target(configuration["TARGET"]);

            row.appendChild(target);
        }
    });

    table_node.appendChild(row);
  
    return table_node.outerHTML;
    
};

/**
 * 
 * @param {*} configuration 
 */
let generate_target = (configuration) => {
    const target_color = configuration["COLOR"];
    const target_onset = configuration["ONSET"];
    const target_direction = configuration["DIRECTION"];
    const target_opacity = configuration["OPACITY"];
    const target_path = configuration["PATH"];
    const target_animation = configuration["ANIMATION"];

    let target_container = document.createElement("th");

    let target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    target.setAttribute("width", "100%");
    target.setAttribute("height", "100%");
    target.setAttribute("viewBox", "0 0 15 24");

    if (configuration["VISIBILITY_DELAY"] !== undefined) {
        add_onset(target, configuration["VISIBILITY_DELAY"]);
    }


    /**
     * Create path node and add attributes.
     */
    let path_node = document.createElement('path');

    path_node.setAttribute('d', target_path);

    target.appendChild(path_node);


    /**
     * Styling section.
     */
    target.style.fill = target_color;

    target.style.opacity = target_opacity;

    add_animation(target_animation, target, 0);

    // if (target_direction !== DIRECTION.RIGHT) {
    //     target.classList.add("left");
    // }

    target_container.appendChild(target);

    return target_container;
};

/**
 * This generates an instruction block.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} level 
 */
let generate_instructions_block = (experiment_array, configuration, level) => {
    let pages = configuration[level]["INSTRUCTIONS"];

    let instructions_block = {
        type: 'instructions',
        data: {
            trial_id: "instruction"
        },
        pages: pages,
        timing_post_trial: 1000,
        show_clickable_nav: true,
        allow_keys: true,
        key_forward: '2',
        key_backward: '1',
        button_label_previous: 'Previous (<kbd>1</kbd>)',
        button_label_next: 'Next (<kbd>2</kbd>)'
    };

    let instructions_node = {
        timeline: [instructions_block]
    };

    experiment_array.push(instructions_node);
};

/**
 * 
 * @param {Array} experiment_array 
 * @param {*} configuration 
 * @param {*} level 
 */
let generate_trial_block = (experiment_array, configuration, level, run_guid) => {
    let audio = configuration[level]["AUDIO"];
    let distractors = configuration[level]["DISTRACTORS"];
    let messages = configuration[level]["MESSAGES"];
    let parameters = configuration[level]["PARAMETERS"];
    let stims = configuration[level]["STIMS"];

    let trials = jsPsych.randomization.repeat(stims, Math.ceil(parameters["LENGTH"] / stims.length))
        .slice(0, parameters["LENGTH"]);

    trials.forEach((trial) => {
        let fixation = {
            type: 'html-keyboard-response',
            stimulus: '<div class = centerbox><div class = fixation></div></div>',
            is_html: true,
            data: {
                type: "fixation"
            },
            response_ends_trial: false,
            stimulus_duration: 1000,
            trial_duration: 1000,
            choices: jsPsych.NO_KEYS
        };

        experiment_array.push(fixation);

        let visibility_delay;

        if (trial["TARGET"]["VISIBILITY_DELAY"] !== undefined) {
            visibility_delay = trial["TARGET"]["VISIBILITY_DELAY"];   
        }

        let block = {
            type: 'flanker-html-keyboard-response',
            stimulus: generate_stimulus(trial),
            stimulus_duration: parameters["STIMULI_DURATION"],
            stimulus_delay: visibility_delay,
            fixation: '<div class = centerbox><div class = fixation></div></div>',
            trial_duration: parameters["TRIAL_DURATION"],
            response_ends_trial: false,
            response_timeout: parameters["RESPONSE_DURATION"],
            correct_response: trial.DATA.CORRECT_RESPONSE,
            data: {
                type: "stim",
                run_guid: run_guid,
                congruency: trial.DATA.CONDITION,
                trial_num: parameters["LENGTH"],
                stim_duration: parameters["STIMULI_DURATION"],
                response_window: parameters["RESPONSE_DURATION"],
                trial_duration: parameters["TRIAL_DURATION"],
                post_response: parameters["POST_TRIAL_DURATION"],
                target_onset_delay: configuration[level]["STIMS"][0]["TARGET"]["VISIBILITY_DELAY"],
                flanker_onset_delay: configuration[level]["STIMS"][0]["FLANKERS"][0]["ONSET"],
                timely_warning_onset_delay: distractors["ONSET_MESSAGE"]["DELAY"],
                peripheral_distractor_density: configuration[level]["DISTRACTOR_DENSITY"],
                level: level
            },

            /**
             * 
             */
            possible_choices: parameters["POSSIBLE_CHOICES"],
            valid_choices: parameters["VALID_CHOICES"],

            /**
             * Timely warning message parameters.
             */
            timely_warning_message: distractors["ONSET_MESSAGE"]["MESSAGE"],
            timely_warning_message_duration: distractors["ONSET_MESSAGE"]["DURATION"],
            timely_warning_message_onset: distractors["ONSET_MESSAGE"]["DELAY"],

            /**
             * Text snippets for feedback.
             */
            correct_text: messages["CORRECT"],
            incorrect_text: messages["INCORRECT"],
            invalid_text: messages["INVALID"],
            timeout_text: messages["TIMEOUT"],
            
            /**
             * Audio Clips.
             */
            audio_enabled: audio["ENABLED"],
            all_audio: audio["SOURCE"],
            background_audio: audio["BACKGROUND"],
            correct_audio: audio["CORRECT"],
            incorrect_audio: audio["INCORRECT"],
            invalid_audio: audio["INVALID"],
            timeout_audio: audio["TIMEOUT"],
            distractor_audio: audio["DISTRACTOR"]
        };

        experiment_array.push(block);
    });
};

/**
 * Generates a break slide for a set duration.
 * @param {Array} experiment_array 
 * @param {Number} duration (ms) 
 */
let generate_break_slide = (experiment_array, duration) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: '<p> Take a break. </p>',
        data: {
            trial_id: "break-slide",
            duration: duration
        },
        trial_duration: duration,
        response_ends_trial: false
    });
};

/**
 * Generates a fixation slide for some set duration.
 * @param {Array} experiment_array 
 * @param {Number} duration 
 */
let generate_fixed_fixation = (experiment_array, duration) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: '<div class="fixation">+</div>',
        data: {
            trial_id: "fixed-fixation",
            duration: duration
        },
        trial_duration: duration,
        response_ends_trial: false
    });
};

/**
 * Generates a slide that waits for an MRI 
 * trigger to continue.
 * @param {Array} experiment_array 
 */
let generate_MRI_trigger_slide = (experiment_array) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div><h1>please wait...</h1>',
        data: {
            trial_id: "mri-trigger-slide",
            correct_response: null,
            MRI: "start"
        },
        choices: ['5'],
        trial_duration: null,
        response_ends_trial: true
    });
};

/**
 * Returns computed values for a given trial type and level.
 * @param {String} trial_type 
 * @param {String} run_guid
 * @returns {Object} Returns an object with rt and accuracy attributes. 
 */
let compute_experiment_summary = (trial_type, run_guid) => {
    let trials = jsPsych.data.get().filter({ 
        trial_type: trial_type,
        run_guid: run_guid
    }).values();

    let trial_count = 0;
    let correct_trials_count = 0;
    let correct_trials_rt_sum = 0;
    let correct_trials_rt_count = 0;

    /**
     * Loop through all the trials of proper type.
     */
    for (let i = 0; i < trials.length; i++) {
        let trial = trials[i];

        trial_count++;

        if (trial["performance"] === "correct") {
            correct_trials_count++;

            if (trial["rt"] > -1) {
                correct_trials_rt_sum += trial["rt"];

                correct_trials_rt_count++;
            }
        }
    }

    let all_rts = trials
        .map((trial)=> {
            return trial.rt;
        })
        .sort((a,b)=>a-b);
    
    let rtsLength = all_rts.length;
    let median_rt;

    if (rtsLength % 2 === 0){
        median_rt = all_rts[rtsLength / 2 - 1] + all_rts[rtsLength / 2] / 2;
    } else {
        median_rt = all_rts[(rtsLength - 1) / 2];
    }

    let congruent_rts = trials
        .filter((trial)=>trial.congruency === 'congruent')
        .map((trial)=> {
            return trial.rt;
        })
        .sort((a,b)=>a-b);

    let congruentRtsLength = congruent_rts.length;
    let congruent_median_rt;
    
        if (congruentRtsLength % 2 === 0){
            congruent_median_rt = congruent_rts[congruentRtsLength / 2 - 1] + congruent_rts[congruentRtsLength / 2] / 2;
        } else {
            congruent_median_rt = congruent_rts[(congruentRtsLength - 1) / 2];
        }

    let incongruent_rts = trials
        .filter((trial)=>trial.congruency === 'incongruent')
        .map((trial)=> {
            return trial.rt;
        })
        .sort((a,b)=>a-b);

    let incongruentRtsLength = incongruent_rts.length;
    let incongruent_median_rt;
    
        if (incongruentRtsLength % 2 === 0){
            incongruent_median_rt = incongruent_rts[incongruentRtsLength / 2 - 1] + incongruent_rts[incongruentRtsLength / 2] / 2;
        } else {
            incongruent_median_rt = incongruent_rts[(incongruentRtsLength - 1) / 2];
        }

    return {
        rt: Math.floor(correct_trials_rt_sum / correct_trials_rt_count),
        accuracy: Math.floor(correct_trials_count / trial_count * 100),
        median_rt: Math.floor(median_rt),
        congruent_median_rt: Math.floor(congruent_median_rt),
        incongruent_median_rt: Math.floor(incongruent_median_rt),
        // median_difference_rt: Math.floor(Math.abs(incongruent_median_rt - congruent_median_rt)),
        median_difference_rt: Math.floor(incongruent_median_rt - congruent_median_rt)
    };
};

/**
 * Loads a level to the timeline given the paramaters.
 * @param {Number} level 
 * @param {JSON} configuration 
 * @param {Boolean} inter_session
 * @param {Array<object>} experiment_array 
 */
let load_level = (level, configuration, inter_session, experiment_array) => {
    let level_configuration = configuration[level];

    /**
     * If no more levels then end task and move on.
     */
    if (level_configuration === undefined || level_configuration === null) {
        let task_data = JSON.stringify(jsPsych.data.get().values());

        TaskFlow.Client.sendTaskData(task_data);
        TaskFlow.Client.endTask();
    }

    /**
     * Store the level to be easily accessed by rest of app.
     */
    localStorage.setItem("Level", level.toString());

    if (inter_session) {
        let timeline = [];

        let run_guid = uuidv4();

        if (level_configuration["DISTRACTOR_LAYER"] !== undefined){
            document.getElementById("distractor-layer").innerHTML = level_configuration["DISTRACTOR_LAYER"]
        }

        if (level_configuration["INSTRUCTIONS"] !== undefined) {
            generate_instructions_block(timeline, configuration, level);
        }
    
        if (level_configuration["STIMS"] !== undefined) {
            generate_trial_block(timeline, configuration, level, run_guid);
    
            generate_results_block(timeline, "flanker-html-keyboard-response", run_guid, configuration);
        }

        timeline.forEach(element => {
            jsPsych.addNodeToEndOfTimeline(element, () => {
                console.log(element);
            });
        });

    } else {
        let run_guid = uuidv4();

        if (level_configuration["DISTRACTOR_LAYER"] !== undefined){
            document.getElementById("distractor-layer").innerHTML = level_configuration["DISTRACTOR_LAYER"]
        }

        if (level_configuration["INSTRUCTIONS"] !== undefined) {
            generate_instructions_block(experiment_array, configuration, level);
        }
    
        if (level_configuration["STIMS"] !== undefined) {
            generate_trial_block(experiment_array, configuration, level, run_guid);
    
            generate_results_block(experiment_array, "flanker-html-keyboard-response", run_guid, configuration);
        }
    }
};

/**
 * This generates a results block to display their performance.
 * @param {*} experiment_array 
 * @param {*} trial_type 
 * @param {*} level 
 */
let generate_results_block = (experiment_array, trial_type, run_guid, configuration) => {
    let response_block = {
        type: 'html-keyboard-response',
        timing_response: 180000,
        data: {
            trial_id: "end",
        },
        stimulus: () => {
            let data = compute_experiment_summary(trial_type, run_guid);

            let current_level = parseInt(localStorage.getItem("Level"));

            let advancement_flag = "";
            let message = "";

            if (configuration === null || configuration === undefined) {
                message = "<p class='centerbox'>You responded correctly on " + data.accuracy + "% of the trials. " +
                    "Your average response time was <strong>" + data.rt + "ms</strong>. Press enter to continue." +
                    "Thank you!</p>";
            }
            configuration[current_level]["BLOCK_FEEDBACK"].sort((a,b) => {
                return a["THRESHOLD"]["MIN"] - b["THRESHOLD"]["MIN"];
            });

            
            configuration[current_level]["BLOCK_FEEDBACK"].forEach(element => {    
                console.log('***CHECKING FOR ' + element["ADVANCE"] + ' CRITERIA:***');
                console.log('data.accuracy = ' + data.accuracy + ' and element[thresh][min] = ' + element["THRESHOLD"]["MIN"]);
                console.log('data.accuracy = ' + data.accuracy + ' and element[thresh][max] = ' + element["THRESHOLD"]["MAX"]);
                console.log('data.median_rt = ' + data.median_rt + ' and element[rt_thresh][median][max] = ' + element["RT_THRESHOLDS"]["MEDIAN"]["MAX"]);
                console.log('data.median_rt = ' + data.median_rt + ' and element[rt_thresh][median][min] = ' + element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]);
                console.log('data.median_difference_rt = ' + data.median_difference_rt + ' and element[rt_thresh][difference][min] = ' + element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"]);
                console.log('data.median_difference_rt = ' + data.median_difference_rt + ' and element[rt_thresh][difference][max] = ' + element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"]);
                if (element["ADVANCE"] === "ADVANCE.NEUTRAL"){
                    if (
                        (data.accuracy >= element["THRESHOLD"]["MIN"] && data.accuracy < element["THRESHOLD"]["MAX"]) ||
                        (data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MAX"] && data.median_rt >= element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]) ||
                        (data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"] && data.median_difference_rt >= element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"])
                    ) {
                        /// performance block ///
                        let icon_fail = '<i class="material-icons feedback-x">clear</i>'
                        let icon_pass = '<i class="material-icons feedback-check">check_circle</i>'
                        let performance_block = `<div class="feedback-box">`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.accuracy >= element["THRESHOLD"]["MAX"] ? icon_pass : icon_fail}</div>`
                                +`<h2>Accuracy</h2>`
                                +`<p>Your score:<br><span id='data-accuracy' class=${data.accuracy >= element["THRESHOLD"]["MAX"] ? 'pass' : 'fail'}>${data.accuracy}%</span><p>`
                                +`<p>Score to pass:<br><span id='goal-accuracy'> >= ${element["THRESHOLD"]["MAX"]}%</span><p>`
                            +`</div>`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]-1 ? icon_pass : icon_fail}</div>`
                                +`<h2>Reaction Time</h2>`
                                +`<p>Your score:<br><span id='data-median_rt' class=${data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]-1 ? 'pass' : 'fail'}>${data.median_rt}ms</span><p>`
                                +`<p>Score to pass:<br><span id='goal-median_rt'> <= ${element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]-1}ms</span><p>`
                            +`</div>`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"]-1 ? icon_pass : icon_fail}</div>`
                                +`<h2>Focus</h2>`
                                +`<p>Your score:<br><span id='data-median_difference_rt' class=${data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"]-1 ? 'pass' : 'fail'}>${data.median_difference_rt}ms</span><p>`
                                +`<p>Score to pass:<br><span id='goal-median_difference_rt'> <= ${element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"]-1}ms</span><p>`
                            +`</div>`
                        +`</div>`;
                        /// -------------- ///
                        console.log('neutral criterion met');
                        advancement_flag = element["ADVANCE"];
                        message = element["MESSAGE"];
                        message += performance_block;
                    }
                } else if (element["ADVANCE"] === "ADVANCE.FORWARD" || element["ADVANCE"] === "ADVANCE.GAMEOVER") {
                    if (
                        (data.accuracy >= element["THRESHOLD"]["MIN"] && data.accuracy < element["THRESHOLD"]["MAX"]) &&
                        (data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MAX"] && data.median_rt >= element["RT_THRESHOLDS"]["MEDIAN"]["MIN"]) &&
                        (data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"] && data.median_difference_rt >= element["RT_THRESHOLDS"]["DIFFERENCE"]["MIN"])
                    ) {
                        /// performance block ///
                        let icon_fail = '<i class="material-icons feedback-x">clear</i>'
                        let icon_pass = '<i class="material-icons feedback-check">check_circle</i>'
                        let performance_block = `<div class="feedback-box">`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.accuracy >= element["THRESHOLD"]["MIN"] ? icon_pass : icon_fail}</div>`
                                +`<h2>Accuracy</h2>`
                                +`<p>Your score:<br><span id='data-accuracy' class=${data.accuracy >= element["THRESHOLD"]["MIN"] ? 'pass' : 'fail'}>${data.accuracy}%</span><p>`
                                +`<p>Score to pass:<br><span id='goal-accuracy'> >= ${element["THRESHOLD"]["MIN"]}%</span><p>`
                            +`</div>`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MAX"] ? icon_pass : icon_fail}</div>`
                                +`<h2>Reaction Time</h2>`
                                +`<p>Your score:<br><span id='data-median_rt' class=${data.median_rt <= element["RT_THRESHOLDS"]["MEDIAN"]["MAX"] ? 'pass' : 'fail'}>${data.median_rt}ms</span><p>`
                                +`<p>Score to pass:<br><span id='goal-median_rt'> <= ${element["RT_THRESHOLDS"]["MEDIAN"]["MAX"]}ms</span><p>`
                            +`</div>`
                            +`<div class='feedback-sub'>`
                                +`<div class='icon-container'>${data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"] ? icon_pass : icon_fail}</div>`
                                +`<h2>Focus</h2>`
                                +`<p>Your score:<br><span id='data-median_difference_rt' class=${data.median_difference_rt <= element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"] ? 'pass' : 'fail'}>${data.median_difference_rt}ms</span><p>`
                                +`<p>Score to pass:<br><span id='goal-median_difference_rt'> <= ${element["RT_THRESHOLDS"]["DIFFERENCE"]["MAX"]}ms</span><p>`
                            +`</div>`
                        +`</div>`;
                        /// -------------- ///
                        console.log('advance criteria met');
                        advancement_flag = element["ADVANCE"];
                        message = element["MESSAGE"];
                        message += performance_block;
                    }
                };
   
            });

            if (advancement_flag === undefined || advancement_flag === null) {
                console.error("You need to define advancement flags in configuration!");
            }

            if (advancement_flag === ADVANCE.BACKWARDS) {
                load_level(current_level - 1, configuration, true);
            } else if (advancement_flag === ADVANCE.NEUTRAL) {
                load_level(current_level, configuration, true);
            } else if (advancement_flag === ADVANCE.FORWARD) {
                load_level(current_level + 1, configuration, true);
            } else if (advancement_flag === ADVANCE.GAMEOVER) {
                // same as neutral. Replay final level until time is up.
                load_level(current_level, configuration, true);
            }

            return message;
        },
        cont_key: [13],
        timing_post_trial: 0
    };

    experiment_array.push(response_block);
};