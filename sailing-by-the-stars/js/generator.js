/**
 * Draws a random element from the provided list.
 * @param {Array} list 
 * @returns {Object} object
 */
let random_draw = (list) => {
    let index = Math.floor(Math.random() * (list.length));
    return list[index];
};

/**
 * Returns a random index from a given list.
 * @param {Array} list 
 * @returns {Number} index
 */
let random_draw_index = (list) => {
    return Math.floor(Math.random() * (list.length));
};

/**
 * Pops a random element from the list and returns
 * it.
 * @param {Array} list 
 * @returns {Object} item
 */
let random_pop = (list) => {
    let index = random_draw_index(list);
    let element = list[index];

    /**
     * Remove element from array.
     */
    list.splice(index, 1);

    return element;
}

/**
 * Get random arbitrary number in range.
 * @param {Number} min 
 * @param {Number} max 
 */
let get_random_arbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
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
 * Generates an instructions block that lasts for a
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
 * Returns computed values for a given trial type and level.
 * @param {String} trial_type 
 * @param {Number} level
 * @returns {Object} Returns an object with rt and accuracy attributes. 
 */
let compute_experiment_summary = (trial_type, run_guid) => {

    let trials = jsPsych.data.get().filter({ 
        trial_type: trial_type,
        run_guid: run_guid
     }).values();


     /**
      * General numbers to track.
      */
     let trial_count = 0;
     let correct_trials_count = 0;
     let correct_trials_rt_sum = 0;
     let correct_trials_rt_count = 0;
 
      /**
       * Cue tracking numbers.
       */
      let cues_trial_count = 0;
      let cues_correct_count = 0;
      let cues_trials_rt_sum = 0;
      let cues_trials_rt_count = 0;
 
     /**
      * Probe tracking numbers.
      */
     let probes_trial_count = 0;
     let probes_correct_count = 0;
     let probes_trials_rt_sum = 0;
     let probes_trials_rt_count = 0;
 
     /**
      * Condition specific.
      */
     let total_ay_trials = 0;
     let total_ay_correct_trials = 0;
     let total_bx_trials = 0;
     let total_bx_correct_trials = 0;
     let total_by_trials = 0;
     let total_by_correct_trials = 0;
 
     let last_cue = null;

     /**
      * Loop through all the trials of proper type.
      */
     trials.forEach((trial) => {

         /**
          * Check if trial is from the proper level.
          */
         if (trial["stimuli_type"] !== "distractor") {
             trial_count++;
 
             if (trial["performance"] == "correct") {
                 correct_trials_count++;
 
                 if (trial["rt"] > -1) {
                     correct_trials_rt_sum += trial["rt"];
                     correct_trials_rt_count++;
                 }
             }
 
            /**
             * Check for cues.
             */
            if (trial["stimuli_type"] === "cue") {
                cues_trial_count++;

                last_cue = trial["trial_condition"];
    
                if (trial["performance"] === "correct") {
                    cues_correct_count++;
    
                    if (trial["rt"] > -1) {
                        cues_trials_rt_sum += trial["rt"];
                        cues_trials_rt_count++;
                    }
                }
            }
    
            /**
             * Check for probes.
             */
            if (trial["stimuli_type"] === "probe") {
                probes_trial_count++;

                if (last_cue === "A" && trial["trial_condition"] === "Y") {
                    total_ay_trials = total_ay_trials += 1;
                }

                if (last_cue === "B" && trial["trial_condition"] === "X") {
                    total_bx_trials = total_bx_trials += 1;
                }

                if (last_cue === "B" && trial["trial_condition"] === "Y") {
                    total_by_trials = total_by_trials += 1;
                }

                if (trial["performance"] === "correct") {
                    if (last_cue === "A" && trial["trial_condition"] === "Y") {
                        total_ay_correct_trials = total_ay_correct_trials += 1;
                    }
    
                    if (last_cue === "B" && trial["trial_condition"] === "X") {
                        total_bx_correct_trials = total_bx_correct_trials += 1;
                    }

                    if (last_cue === "B" && trial["trial_condition"] === "Y") {
                        total_by_correct_trials = total_by_correct_trials += 1;
                    }

                    probes_correct_count++;
    
                    if (trial["rt"] > -1) {
                        probes_trials_rt_sum += trial["rt"];
                        probes_trials_rt_count++;
                    }
                }
            }
        }
     });
 
     return {
         rt: Math.floor(correct_trials_rt_sum / correct_trials_rt_count),
         accuracy: Math.floor(correct_trials_count / trial_count * 100),
         cue: {
             rt: Math.floor(cues_trials_rt_sum / cues_trials_rt_count),
             accuracy: Math.floor(cues_correct_count / cues_trial_count * 100)
         },
         probe: {
             rt: Math.floor(probes_trials_rt_sum / probes_trials_rt_count),
             accuracy: Math.floor(probes_correct_count / probes_trial_count * 100)
         },
         ay: {
            accuracy: Math.floor(total_ay_correct_trials / total_ay_trials * 100),
            correct_trials: total_ay_correct_trials,
            errors: total_ay_trials - total_ay_correct_trials
         },
         bx: {
            accuracy: Math.floor(total_bx_correct_trials / total_bx_trials * 100),
            correct_trials: total_bx_correct_trials,
            errors: total_bx_trials - total_bx_correct_trials
         },
         by: {
             accuracy: Math.floor(total_by_correct_trials / total_by_trials * 100),
             correct_trials: total_by_correct_trials,
             errors: total_by_trials - total_by_correct_trials
         }
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
    
            generate_results_block(timeline, "dpx-html-keyboard-response", run_guid, configuration);
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
    
            generate_results_block(experiment_array, "dpx-html-keyboard-response", run_guid, configuration);
        }
    }
};

/**
 * Generate proportions list.
 * @param {Number} target_num 
 * @param {Number} length 
 * @returns {Array} proportions
 */
let generate_proportions = (configuration, level) => {
    let parameters = configuration[level]["PARAMETERS"];
    
    let distractor_count = parameters["DISTRACTOR_TRIAL_COUNT"];
    let distractor_number = parameters["DISTRACTOR_NUMBER"];
    let AX_trials = parameters["AX_TRIALS"];
    let AY_trials = parameters["AY_TRIALS"];
    let BX_trials = parameters["BX_TRIALS"];
    let BY_trials = parameters["BY_TRIALS"];

    let proportions = [];

    for (let i = 0; i < AX_trials; i++) {
        proportions.push([
            {
                condition: "A",
                correct_response: parameters["NONTARGET_KEY"]
            },
            {
                condition: 'X',
                correct_response: parameters["TARGET_KEY"]
            }
        ]);
    }

    for (let i = 0; i < AY_trials; i++) {
        proportions.push([
            {
                condition: "A",
                correct_response: parameters["NONTARGET_KEY"]
            },
            {
                condition: "Y",
                correct_response: parameters["NONTARGET_KEY"]
            }
        ]);
    }

    for (let i = 0; i < BX_trials; i++) {
        proportions.push([
            {
                condition: "B",
                correct_response: parameters["NONTARGET_KEY"]
            },
            {
                condition: "X",
                correct_response: parameters["NONTARGET_KEY"]
            }
        ]);
    }

    for (let i = 0; i < BY_trials; i++) {
        proportions.push([
            {
                condition: "B",
                correct_response: parameters["NONTARGET_KEY"]
            },
            {
                condition: "Y",
                correct_response: parameters["NONTARGET_KEY"]
            }
        ]);
    }

    /**
     * Insert fixed number of distractors for all trials on a level
     */
    let total_distractor_trials = 0;
    
    proportions.forEach((element) => {
        if (total_distractor_trials < distractor_count) {

            let i = 0;

            while (i < distractor_number) {
                element.splice(1, 0, {
                    condition: 'D',
                    correct_response: null
                });

                i++;
            }

            total_distractor_trials += 1;
        }
    });

    /**
     * Shuffle.
     */
    return jsPsych.randomization.shuffle(proportions);
};

/**
 * Compute ISI and ITI for each block
 * @param {*} timing_configuration 
 * @param {*} block_length 
 */
let compute_ISI_ITI  = (timing_configuration, block_length) => {
    let ITI = timing_configuration[block_length - 1].FIXATION;
    let ISI = 0;
    let i = 0; 

    while (i < (block_length - 1)) {
        ISI = ISI + timing_configuration[i].STIM + timing_configuration[i].FIXATION;
        i++;
    }

    ISI = ISI - timing_configuration[0].STIM;

    return {ISI:ISI,ITI:ITI};
}

/**
 * Generates a trial block for DPX.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} level 
 */
let generate_trial_block = (experiment_array, configuration, level, run_guid) => {
    let audio = configuration[level]["AUDIO"];
    let messages = configuration[level]["MESSAGES"];
    let parameters = configuration[level]["PARAMETERS"];
    let proportions = configuration[level]["PROPORTIONS"];
    let stims = configuration[level]["STIMS"];
    let timing_blocks = configuration[level]["TIMING_OPTIONS"];

    if (proportions === undefined || proportions.length === 0) {
        proportions = generate_proportions(
            configuration,
            level
        );
    }

    let cue_options = ['A', 'B'];
    let probe_options = ['X', 'Y'];
    
    let trial_count = 0;

    proportions.forEach((block, index) => {
        let timing_options = timing_blocks[block.length - 2];

        let timing_configuration = random_draw(timing_options);

        let block_length = block.length;
        let ISI_ITI = compute_ISI_ITI (timing_configuration, block_length);
        trial_count++;

        block.forEach((token, index) => {
            let stimulus_duration = timing_configuration[index].STIM;
            let trial_duration = timing_configuration[index].STIM + timing_configuration[index].FIXATION;

             if (cue_options.indexOf(token.condition) !== -1) {
                let stimulus;

                if (token.condition === "A") {
                    stimulus = random_draw(stims[token.condition]);
                } else {
                    stimulus = random_draw(stims[token.condition]);
                }

                let cue = {
                    type: "dpx-html-keyboard-response",
                    stimulus: stimulus,
                    stimulus_duration: stimulus_duration,
                    fixation: "+",
                    data: {
                        trial_condition: token.condition,
                        trial_id: index,
                        run_guid: run_guid,
                        stimuli_type: "cue",
                        stim_duration: parameters["STIMULI_DURATION"],
                        fixation: timing_configuration[index].FIXATION,
                        response_window: parameters["RESPONSE_TIMEOUT"],
                        ISI: ISI_ITI["ISI"],
                        ITI: ISI_ITI["ITI"],
                        AX_num: parameters ["AX_TRIALS"],
                        AY_num: parameters ["AY_TRIALS"],
                        BX_num: parameters ["BX_TRIALS"],
                        BY_num: parameters ["BY_TRIALS"],
                        distractor_trial_count: parameters["DISTRACTOR_TRIAL_COUNT"],
                        distractor_num: parameters ["DISTRACTOR_NUMBER"],
                        level:level,
                        trial_count: trial_count
                    },
                    correct_response: token.correct_response,
                    trial_duration: trial_duration,
                    response_ends_trial: false,
                    response_timeout: parameters["RESPONSE_TIMEOUT"],
                    valid_choices: parameters["VALID_CHOICES"],
                    possible_choices: parameters["POSSIBLE_CHOICES"],

                    /**
                     * Audio parameters.
                     */
                    // audio_enabled: true,
                    // all_audio: audio["SOURCE"],
                    // correct_audio: audio["CORRECT"],
                    // incorrect_audio: audio["INCORRECT"],
                    // timeout_audio: audio["TIMEOUT"],
                    // invalid_audio: audio["INVALID"],
                    // distractor_audio: audio["DISTRACTOR"],

                    audio_enabled: audio["ENABLED"],
                    all_audio: audio["SOURCE"],
                    background_audio: audio["BACKGROUND"],
                    correct_audio: audio["CORRECT"],
                    incorrect_audio: audio["INCORRECT"],
                    invalid_audio: audio["INVALID"],
                    timeout_audio: audio["TIMEOUT"],
                    distractor_audio: audio["DISTRACTOR"],
                    
                    /**
                     * Text snippets for feedback.
                     */
                    correct_text: messages["CORRECT"],
                    incorrect_text: messages["INCORRECT"],
                    invalid_text: messages["INVALID"],
                    timeout_text: messages["TIMEOUT"],             
                };
        
                experiment_array.push(cue);
            } else if (probe_options.indexOf(token.condition) !== -1){
                let stimulus;
    
                if (token.condition === "X") {
                    stimulus = random_draw(stims[token.condition]);
                } else {
                    stimulus = random_draw(stims[token.condition]);
                }

                let probe = {
                    type: "dpx-html-keyboard-response",
                    stimulus: stimulus,
                    stimulus_duration: stimulus_duration,
                    fixation: "+",
                    data: {
                        trial_condition: token.condition,
                        trial_id: index,
                        run_guid: run_guid,
                        stimuli_type: "probe",
                        stim_duration: parameters["STIMULI_DURATION"],
                        fixation: timing_configuration[index].FIXATION,
                        response_window: parameters["RESPONSE_TIMEOUT"],
                        ISI: ISI_ITI["ISI"],
                        ITI: ISI_ITI["ITI"],
                        AX_num: parameters ["AX_TRIALS"],
                        AY_num: parameters ["AY_TRIALS"],
                        BX_num: parameters ["BX_TRIALS"],
                        BY_num: parameters ["BY_TRIALS"],
                        distractor_trial_count: parameters["DISTRACTOR_TRIAL_COUNT"],
                        distractor_num: parameters ["DISTRACTOR_NUMBER"],
                        level:level,
                        trial_count: trial_count
                    },
                    correct_response: token.correct_response,
                    trial_duration: trial_duration,
                    response_ends_trial: false,
                    response_timeout: parameters["RESPONSE_TIMEOUT"],
                    valid_choices: parameters["VALID_CHOICES"],
                    possible_choices: parameters["POSSIBLE_CHOICES"],

                    /**
                     * Audio parameters.
                     */
                    // audio_enabled: true,
                    // all_audio: audio["SOURCE"],
                    // correct_audio: audio["CORRECT"],
                    // incorrect_audio: audio["INCORRECT"],
                    // timeout_audio: audio["TIMEOUT"],
                    // invalid_audio: audio["INVALID"],
                    // distractor_audio: audio["DISTRACTOR"],

                    audio_enabled: audio["ENABLED"],
                    all_audio: audio["SOURCE"],
                    background_audio: audio["BACKGROUND"],
                    correct_audio: audio["CORRECT"],
                    incorrect_audio: audio["INCORRECT"],
                    invalid_audio: audio["INVALID"],
                    timeout_audio: audio["TIMEOUT"],
                    distractor_audio: audio["DISTRACTOR"],

                    
                    /**
                     * Text snippets for feedback.
                     */
                    correct_text: messages["CORRECT"],
                    incorrect_text: messages["INCORRECT"],
                    invalid_text: messages["INVALID"],
                    timeout_text: messages["TIMEOUT"],        
                };
        
                experiment_array.push(probe);
            } else if (token.condition === "D") {
                let stimulus = random_draw(stims["DISTRACTORS"]);

                let distractor = {
                    type: "dpx-html-keyboard-response",
                    stimulus: stimulus,
                    stimulus_duration: stimulus_duration,
                    fixation: "+",
                    data: {
                        trial_id: index,
                        run_guid: run_guid,
                        stimuli_type: "distractor",
                        stim_duration: parameters["STIMULI_DURATION"],
                        fixation: timing_configuration[index].FIXATION,
                        ISI: ISI_ITI["ISI"],
                        ITI: ISI_ITI["ITI"],
                        AX_num: parameters ["AX_TRIALS"],
                        AY_num: parameters ["AY_TRIALS"],
                        BX_num: parameters ["BX_TRIALS"],
                        BY_num: parameters ["BY_TRIALS"],
                        distractor_trial_count: parameters["DISTRACTOR_TRIAL_COUNT"],
                        distractor_num: parameters ["DISTRACTOR_NUMBER"],
                        level: level,
                        trial_count: trial_count
                    },
                    correct_response: "NA",
                    trial_duration: trial_duration,
                    response_ends_trial: false,
                    response_timeout: parameters["RESPONSE_TIMEOUT"],
                    valid_choices: parameters["VALID_CHOICES"],
                    possible_choices: parameters["POSSIBLE_CHOICES"],

                    /**
                     * Audio parameters.
                     */
                    // audio_enabled: true,
                    // all_audio: audio["SOURCE"],
                    // correct_audio: audio["CORRECT"],
                    // incorrect_audio: audio["INCORRECT"],
                    // timeout_audio: ["TIMEOUT"],
                    // invalid_audio: ["INVALID"],
                    // distractor_audio: ["DISTRACTOR"],

                    audio_enabled: audio["ENABLED"],
                    all_audio: audio["SOURCE"],
                    background_audio: audio["BACKGROUND"],
                    correct_audio: audio["CORRECT"],
                    incorrect_audio: audio["INCORRECT"],
                    invalid_audio: audio["INVALID"],
                    timeout_audio: audio["TIMEOUT"],
                    distractor_audio: audio["DISTRACTOR"],

                    
                    /**
                     * Text snippets for feedback.
                     */
                    correct_text: messages["CORRECT"],
                    incorrect_text: messages["INCORRECT"],
                    invalid_text: messages["INVALID"],
                    timeout_text: messages["TIMEOUT"],        
                };
        
                experiment_array.push(distractor);
            }
        });
    });
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

            configuration[current_level]["BLOCK_FEEDBACK"].forEach(element => {
                let valid_condition = true;

                /**
                 * AY Check.
                 */
                if (element["THRESHOLD"]["AY"]["ALLOWED_ERRORS"] !== null) {
                    if (element["THRESHOLD"]["AY"]["ALLOWED_ERRORS"] < data.ay.errors) {
                        valid_condition = false;
                    } else {
                        if (element["THRESHOLD"]["AY"]["ACCURACY"] !== null) {
                            /**
                             * Null Check.
                             */
                            if (element["THRESHOLD"]["AY"]["ACCURACY"]["MIN"] !== null && element["THRESHOLD"]["AY"]["ACCURACY"]["MAX"] !== null) {
                                if (data.ay.accuracy < element["THRESHOLD"]["AY"]["ACCURACY"]["MIN"]|| data.ay.accuracy >= element["THRESHOLD"]["AY"]["ACCURACY"]["MAX"]) {
                                    valid_condition = false;
                                }
                            } else {
                                console.error("You need to define AY min and max accuracy in configuration!")
                            }
                        } else {
                            console.error("You need to define AY min and max accuracy in configuration!")
                        }
                    }
                } else {
                    if (element["THRESHOLD"]["AY"]["ACCURACY"] !== null) {
                        /**
                         * Null Check.
                         */
                        if (element["THRESHOLD"]["AY"]["ACCURACY"]["MIN"] !== null && element["THRESHOLD"]["AY"]["ACCURACY"]["MAX"] !== null) {
                            if (data.ay.accuracy < element["THRESHOLD"]["AY"]["ACCURACY"]["MIN"]|| data.ay.accuracy >= element["THRESHOLD"]["AY"]["ACCURACY"]["MAX"]) {
                                valid_condition = false;
                            }
                        } else {
                                console.error("You need to define AY min and max accuracy in configuration!")
                        }
                    } else {
                        console.error("You need to define AY min and max accuracy in configuration!")
                    }
                }

                /**
                 * BX Check.
                 */
                if (element["THRESHOLD"]["BX"]["ALLOWED_ERRORS"] !== null) {
                    if (element["THRESHOLD"]["BX"]["ALLOWED_ERRORS"] < data.bx.errors) {
                        valid_condition = false;
                    } else {
                        if (element["THRESHOLD"]["BX"]["ACCURACY"] !== null) {
                            /**
                             * Null Check.
                             */
                            if (element["THRESHOLD"]["BX"]["ACCURACY"]["MIN"] !== null && element["THRESHOLD"]["BX"]["ACCURACY"]["MAX"] !== null) {
                                if (data.bx.accuracy < element["THRESHOLD"]["BX"]["ACCURACY"]["MIN"]|| data.bx.accuracy >= element["THRESHOLD"]["BX"]["ACCURACY"]["MAX"]) {
                                    valid_condition = false;
                                }
                            } else {
                                console.error("You need to define BX min and max accuracy in configuration!")
                            }
                        } else {
                            console.error("You need to define BX min and max accuracy in configuration!")
                        }
                    }
                } else {
                    if (element["THRESHOLD"]["BX"]["ACCURACY"] !== null) {
                        /**
                         * Null Check.
                         */
                        if (element["THRESHOLD"]["BX"]["ACCURACY"]["MIN"] !== null && element["THRESHOLD"]["BX"]["ACCURACY"]["MAX"] !== null) {
                            if (data.ay.accuracy < element["THRESHOLD"]["BX"]["ACCURACY"]["MIN"]|| data.ay.accuracy >= element["THRESHOLD"]["BX"]["ACCURACY"]["MAX"]) {
                                valid_condition = false;
                            }
                        } else {
                                console.error("You need to define BX min and max accuracy in configuration!")
                        }
                    } else {
                        console.error("You need to define BX min and max accuracy in configuration!")
                    }
                }

                /**
                 * BY Error Check.
                 */
                if (element["THRESHOLD"]["BY"]["ALLOWED_ERRORS"] !== null) {
                    if (data.by.errors > element["THRESHOLD"]["BY"]["ALLOWED_ERRORS"]) {
                        valid_condition = false;
                    }
                } else {
                    console.error("You need to define BY allowed errors in configuration!")
                }


                if (valid_condition) {
                    advancement_flag = element["ADVANCE"];
                    message = element["MESSAGE"];
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
 * Generates a slide that waits for an MRI 
 * trigger to continue.
 * @param {Array} experiment_array 
 */
let generate_MRI_trigger_slide = (experiment_array) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: "<div class = 'fixation-blue'>+</div>",
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
 * Generates a slide that waits for an MRI
 * scan to end.
 * @param {Array} experiment_array 
 */
let generate_MRI_end_bluefixation_slide = (experiment_array) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: "<div class = 'fixation-blue'>+</div>",
        data: {
            trial_id: "mri-end-slide",
            correct_response: null,
            MRI: "wait_to_end"
        },
        choices: [32],
        trial_duration: null,
        response_ends_trial: true
    });
};

/**
 * Generates a display that requires a certain key press to 
 * continue.
 * @param {Array} experiment_array 
 */
let generate_manual_continue = (experiment_array) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: "<h1><p>Please respond as quickly and accurately as possible.</p>"+
        "<p>Remember: everyone makes some mistakes because it’s so important to respond quickly.</p>"+
        "<p>&nbsp</p>" +
        "<p><i>Administrator: when ready for the next run,</p>"+
        "<p>press space, then start the sequence.</p></i></h1>",
        data: {
            trial_id: "manual-continue"
        },
        choices: [32],
        trial_duration: null,
        response_ends_trial: true
    });
};

/**
 * Generates a choice page that allows you to choose to rerun a certain
 * trial block.
 * @param {Array} experiment_array 
 * @param {Object} configuration 
 * @param {Number} repeat_level 
 */
let generate_administrator_choice_page = (experiment_array, configuration) => {
    experiment_array.push({
        type: "html-keyboard-response",
        stimulus: () => {
            let results = compute_experiment_summary("html-response", 0);

            return '<p> <strong>Please wait.</strong></p>' +
                '<p> Experimenter: To end the experiment, press <strong> space </strong></p>' +
                "<p>&nbsp</p>" +
                '<p> If you need to repeat a run, follow the instructions below: </p>' +
                '<p> Press "f" to repeat the first run. </p>' +
                '<p> Press "s" to repeat the second run. </p>'+
                '<p> Press "t" to repeat the third run. </p>'
        },
        data: {
            trial_id: "administrator-choice-page",
        },
        choices: [ 32, 70, 83, 84 ],
        trial_duration: null,
        response_ends_trial: true,
        on_finish: () => {
            RUN_NUMBER = RUN_NUMBER + 1;

            let last_trial = JSON.parse(jsPsych.data.getLastTrialData().json())[0];

            if (last_trial.key_press === 70) {
                var sequence = 1; 
            } else if (last_trial.key_press === 83) {
                var sequence = 2;
            } else if (last_trial.key_press === 84) {
                var sequence = 3;
            }

            if (last_trial.key_press === 70 || last_trial.key_press === 83 || last_trial.key_press === 84) {
                let local_timeline = [];
                generate_manual_continue(local_timeline);

                generate_MRI_trigger_slide(local_timeline);

                generate_fixed_fixation(local_timeline, 10000);

                generate_trial_block(local_timeline, configuration, sequence);

                generate_fixed_fixation(local_timeline, 10000);

                generate_MRI_end_bluefixation_slide(local_timeline);
                
                generate_administrator_choice_page(local_timeline, CONFIGURATION);

                local_timeline.forEach((element) => {
                    jsPsych.addNodeToEndOfTimeline(element, () => {})
                });
            } else {
                jsPsych.endExperiment();
            }
        }
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
        choices: jsPsych.NO_KEYS,
        response_ends_trial: false
    });
};