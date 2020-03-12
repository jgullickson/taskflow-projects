/**
 * Draws a random element from the provided list.
 * @param {Array} list 
 */
let random_draw = (list) => {
    let index = Math.floor(Math.random() * (list.length));
    return list[index];
};

/**
 * Gives a random index.
 */
let random_index = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
 * Generate an instruction block that expires after a 
 * set amount of time.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} level 
 * @param {Number} duration
 */
let generate_timed_instructions_block = (experiment_array, configuration, level, duration) => {
    let stimulus = configuration[level]["INSTRUCTIONS"];

    let instructions_block_timed = {
        type: 'html-keyboard-response',
        data: {
            trial_id: "instruction-timed"
        },
        choices: jsPsych.NO_KEYS,
        stimulus: stimulus,
        trial_duration: duration,
        response_ends_trial: false
    };

    experiment_array.push(instructions_block_timed);
};

/**
 * Returns a proportion shuffled block.
 * @param {Number} target_num 
 * @param {Number} length
 * @returns {Array}
 */
let generate_proportions_block = (target_num, distractor_num, length, n) => {
    let stim_proportions = [];

    for (let i = 0; i < target_num; i++) {
        let options = ['t', 'T'];

        stim_proportions.push(random_draw(options));
    }

    for (let i = 0; i < distractor_num; i++) {
        stim_proportions.push('D');
    }

    let remaining_length = (length - stim_proportions.length) - n;

    for (let i = 0; i < remaining_length; i++) {
        stim_proportions.push('N');
    }

    var shuffled_proportions = jsPsych.randomization.shuffle(stim_proportions);

    for (let i = 0; i < n; i++) {
        shuffled_proportions.push('N');
    }

    return shuffled_proportions.reverse();
};


/**
 * Finds the flipped stim for a specific Id.
 * @param {Array} stims 
 * @param {Number} id 
 */
let get_flipped_stim = (stims, id) => {
    if (id === id.toUpperCase()) {
        return stims.filter(obj => {
            return obj.id === id.toLowerCase()
        });
    } else {
        return stims.filter(obj => {
            return obj.id === id.toUpperCase()
        });
    }
}

/**
 * Generates a block of trials for a proportion block.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} level 
 */
let generate_trial_block = (experiment_array, configuration, level, run_guid) => {
    let stims_list = [];

    let audio = configuration[level]["AUDIO"];
    let distractors = configuration[level]["DISTRACTORS"];
    let messages = configuration[level]["MESSAGES"];
    let parameters = configuration[level]["PARAMETERS"];
    let proportions = configuration[level]["PROPORTIONS"];
    let stims = configuration[level]["STIMS"];

    if (proportions === undefined) {
        proportions = generate_proportions_block(parameters["TARGET_NUM"],
            parameters["DISTRACTORS_NUM"],
            parameters["LENGTH"],
            parameters["N"]);
    }

    proportions.forEach((element, index) => {
        let correct_response;
        let stim;

        if (element === 't' || element === 'T') {
            correct_response = parameters["TARGET_KEY"];

            stim = stims_list[stims_list.length - parameters["N"]];
        } else if (element === 'D') {
            stim = random_draw(distractors);

            correct_response = parameters["NONTARGET_KEY"];
        } else {
            if (stims_list.length >= parameters["N"]) {
                let previous_stim = stims_list[stims_list.length - parameters["N"]];

                let options = stims.filter((obj) => {
                    return obj.id.toLowerCase() !== previous_stim.id.toLowerCase();
                });

                stim = random_draw(options);
            } else {
                stim = random_draw(stims);
            }

            correct_response = parameters["NONTARGET_KEY"];
        }

        if (index <= (parameters["N"] - 1)) {
            correct_response = "NA";
        }

        if (element !== 'D') {
            stims_list.push(stim);
        }

        let stim_block = {
            type: "html-response",
            stimulus: stim["path"],
            stimulus_duration: parameters["STIM_DURATION"],
            fixation: '<div class = "fixation">+</div>',
            valid_choices: parameters["VALID_CHOICES"],
            possible_choices: parameters["POSSIBLE_CHOICES"],
            trial_duration: parameters["TRIAL_DURATION"],
            response_ends_trial: false,
            correct_response: correct_response,
            data: {
                level: level,
                run_guid: run_guid,
                N: parameters["N"],
                distractor_num: parameters ["DISTRACTORS_NUM"],
                block_length: parameters["LENGTH"],
                target_num: parameters ["TARGET_NUM"],
                stim_num: stims.length,
                stim_duration: parameters ["STIM_DURATION"],
                response_window: parameters ["RESPONSE_DURATION"],
                post_response: parameters ["POST_TRIAL_DURATION"],
                trial_duration: parameters ["TRIAL_DURATION"]
            },
            response_timeout: parameters["RESPONSE_DURATION"],
            audio_enabled: audio["ENABLED"],
            all_audio: audio["SOURCE"],
            correct_audio: audio["CORRECT"],
            incorrect_audio: audio["INCORRECT"],
            timeout_audio: audio["TIMEOUT"],
            invalid_audio: audio["INVALID"],
            correct_text: messages["CORRECT"],
            incorrect_text: messages["INCORRECT"],
            invalid_text: messages["INVALID"],
            timeout_text: messages["TIMEOUT"]
        };

        experiment_array.push(stim_block);
    })
};

/**
 * Generates a trial block for zero back.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} level 
 */
let generate_zero_back_trial_block = (experiment_array, configuration, level) => {
    let stims_list = [];

    let audio = configuration[level]["AUDIO"];
    let messages = configuration[level]["MESSAGES"];
    let parameters = configuration[level]["PARAMETERS"];
    let stims = configuration[level]["STIMS"];
    let target_stims = parameters["TARGET_STIMS"];

    let proportions = generate_proportions_block(parameters["TARGET_NUM"],
        parameters["DISTRACTORS_NUM"],
        parameters["LENGTH"],
        parameters["N"]);

    proportions.forEach((element, index) => {
        let correct_response;
        let stim;

        if (element === 't' || element === 'T') {
            correct_response = parameters["TARGET_KEY"];

            stim = random_draw(target_stims);
        }  else {
            correct_response = parameters["NONTARGET_KEY"];
            stim = random_draw(stims);
        }

        stims_list.push(stim);

        let stim_block = {
            type: "html-response",
            stimulus: stim["path"],
            stimulus_duration: parameters["STIM_DURATION"],
            fixation: '<div class = "fixation">+</div>',
            valid_choices: parameters["VALID_CHOICES"],
            possible_choices: parameters["POSSIBLE_CHOICES"],
            trial_duration: parameters["TRIAL_DURATION"],
            response_ends_trial: false,
            correct_response: correct_response,
            data: {
                level: level,
                run_guid: run_guid
            },
            response_timeout: parameters["RESPONSE_DURATION"],
            audio_enabled: true,
            correct_audio: audio["CORRECT"],
            incorrect_audio: audio["INCORRECT"],
            timeout_audio: audio["TIMEOUT"],
            invalid_audio: audio["INVALID"],
            correct_text: messages["CORRECT"],
            incorrect_text: messages["INCORRECT"],
            invalid_text: messages["INVALID"],
            timeout_text: messages["TIMEOUT"]
        };

        experiment_array.push(stim_block);
    })
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
 * Generates a fixation slide for some set duration/
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
    let raw_trials = jsPsych.data.get().filter({ 
        trial_type: trial_type,
        run_guid: run_guid
    }).values();

    let trials = raw_trials.filter((element) => {
        return element.performance !== "NA";
    });

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

        /**
         * Check if trial is from the proper level.
         */
        if (trial["performance"] === "correct") {
            correct_trials_count++;

            if (trial["rt"] > -1) {
                correct_trials_rt_sum += trial["rt"];

                correct_trials_rt_count++;
            }
        }
    }

    return {
        rt: Math.floor(correct_trials_rt_sum / correct_trials_rt_count),
        accuracy: Math.floor(correct_trials_count / trial_count * 100)
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

        if (level_configuration["INSTRUCTIONS"] !== undefined) {
            generate_instructions_block(timeline, configuration, level);
        }
    
        if (level_configuration["STIMS"] !== undefined) {
            generate_trial_block(timeline, configuration, level, run_guid);
    
            generate_results_block(timeline, "html-response", run_guid, configuration);
        }

        timeline.forEach(element => {
            jsPsych.addNodeToEndOfTimeline(element, () => {
                console.log(element);
            });
        });

    } else {
        let run_guid = uuidv4();

        if (level_configuration["INSTRUCTIONS"] !== undefined) {
            generate_instructions_block(experiment_array, configuration, level);
        }
    
        if (level_configuration["STIMS"] !== undefined) {
            generate_trial_block(experiment_array, configuration, level, run_guid);
    
            generate_results_block(experiment_array, "html-response", run_guid, configuration);
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
                    "Your average response time was <strong>" + data.rt + "ms</strong>. Press enter to complete the " +
                    "experiment. Thank you!</p>";
            }

            configuration[current_level]["BLOCK_FEEDBACK"].sort((a,b) => {
                return a["THRESHOLD"]["MIN"] - b["THRESHOLD"]["MIN"];
            });

            configuration[current_level]["BLOCK_FEEDBACK"].forEach((element,index) => {
                if (data.accuracy >= element["THRESHOLD"]["MIN"] && data.accuracy < element["THRESHOLD"]["MAX"]) {
                    advancement_flag = element["ADVANCE"];
                    message =  "<div class='feedback-percent'><p class='centerbox accuracy-msg'>You got orders right <span style='color: green'>"+ data.accuracy + "%</span> of the time.</p></div>" + element["MESSAGE"];
                }
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
            }

            return message;
        },
        cont_key: [13],
        timing_post_trial: 0
    };

    experiment_array.push(response_block);
};


/**
 * Displays feedback and asks for manual choice.
 * @param {Array<Object>} experiment_array 
 * @param {Object} configuration 
 */
let generate_manual_threshold_continue_choice_slide = (experiment_array, configuration, repeat_sequence, continue_sequence, run_guid) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: () => {
            let results = compute_experiment_summary("html-response", run_guid);

            return '<p><strong>Results: </strong></p>' + 
                '<p>Accuracy: <span style="color:Green; font-size:30px">' + results.accuracy + '%</span></p>' +
                '<p>Average RT: <span style="color:Green; font-size:30px">' + results.rt + 'ms</span></p>' +
                '<p> Experimenter: check performance. </p>' +
                '<p> Press "R" to repeat the zero back.</p>'+
                '<p> Press "C" to continue.</p>'+
                '<p> Press "E" to end practice. </p>';
            },
        data: {
            trial_id: "administrator-choice-page",
        },
        choices: [
            67, /// C
            69, /// E
            82  /// R
         ],
        trial_duration: null,
        response_ends_trial: true,
        on_finish: () => {
            let last_trial = JSON.parse(jsPsych.data.getLastTrialData().json())[0];

            /**
             * Repeat block.
             */
            if (last_trial.key_press === 82) {
                let local_timeline = [];

                let n = configuration[repeat_sequence]["PARAMETERS"]["N"];

                generate_timed_instructions_block(local_timeline, configuration, repeat_sequence, 10000);

                generate_fixed_fixation(local_timeline, 3000);

                if (n === 0) {
                    generate_zero_back_trial_block(local_timeline, configuration, repeat_sequence);
                } else {
                    generate_trial_block(local_timeline, configuration, repeat_sequence);
                }

                generate_manual_threshold_continue_choice_slide(local_timeline, 
                    configuration, 
                    repeat_sequence, 
                    continue_sequence);

                jsPsych.addNodeToEndOfTimeline({
                    timeline: local_timeline
                }, () => {

                });

            /**
             * Continue block.
             */
            }  else if (last_trial.key_press === 67) {
                let local_timeline = [];

                let n = configuration[continue_sequence]["PARAMETERS"]["N"];

                generate_timed_instructions_block(local_timeline, CONFIGURATION, continue_sequence, 10000);
            
                generate_fixed_fixation(local_timeline, 3000);

                if (n === 0) {
                    generate_zero_back_trial_block(local_timeline, configuration, continue_sequence);
                } else {
                    generate_trial_block(local_timeline, configuration, continue_sequence);
                }

                jsPsych.addNodeToEndOfTimeline({
                    timeline: local_timeline
                }, () => {

                });

            /**
             * End.
             */
            }  else if (last_trial.key_press === 69) {
                jsPsych.endExperiment();
            }
        }
    });
};