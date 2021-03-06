/**
 * HTML Response for Space Flanker. 
 * Task Specific-Plugin - *SPECIAL.
 */
jsPsych.plugins["html-response"] = (() => {

    let plugin = {};

    plugin.info = {
        name: 'html-response',
        description: '',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus',
                default: undefined,
                description: 'The HTML string to be displayed'
            },
            stimulus_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Stimulus duration',
                default: null,
                description: 'How long to hide the stimulus.'
            },
            fixation: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Fixation',
                default: undefined,
                description: 'This is the fixation HTML string.'
            },
            valid_choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: true,
                pretty_name: 'Valid Choices',
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            possible_choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: true,
                pretty_name: 'Possibe Choices',
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            correct_response: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: false,
                pretty_name: 'Correct Response',
                default: 0,
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            audio_enabled: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Timeout audio.',
                default: false,
                description: 'Audio feedback for timeout.'
            },
            correct_audio: {
                type: jsPsych.plugins.parameterType.AUDIO,
                pretty_name: 'Timeout audio.',
                default: undefined,
                description: 'Audio feedback for timeout.'
            },
            incorrect_audio: {
                type: jsPsych.plugins.parameterType.AUDIO,
                pretty_name: 'Timeout audio.',
                default: undefined,
                description: 'Audio feedback for timeout.'
            },
            timeout_audio: {
                type: jsPsych.plugins.parameterType.AUDIO,
                pretty_name: 'Timeout audio.',
                default: undefined,
                description: 'Audio feedback for timeout.'
            },
            invalid_audio: {
                type: jsPsych.plugins.parameterType.AUDIO,
                pretty_name: 'Invalid audio.',
                default: undefined,
                description: 'Audio feedback for Invalid.'
            },
            trial_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Trial duration',
                default: null,
                description: 'How long to show trial before it ends.'
            },
            response_timeout: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Response timeout.',
                default: null,
                description: 'How long to allow for response.'
            },
            response_ends_trial: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Response ends trial',
                default: true,
                description: 'If true, trial will end when subject makes a response.'
            },
            correct_text : {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: "Correct text",
                default: "",
                description: "Correct text for feedback."
            },
            incorrect_text: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: "Incorrect text",
                default: "",
                description: "Incorrect text for feedback"
            },
            invalid_text: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: "Invalid text",
                default: "",
                description: "Invalid text for feedback"
            },
            timeout_text: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: "Timeout text",
                default: "",
                description: "Timeout text for feedback"
            }
        }
    }

    /**
     * Main trial function responsible for all operations
     * inside this plugin.
     */
    plugin.trial = (display_element, trial) => {
        let AUDIO;
        let keyboardListener;

        const performance_labels = {
            CORRECT: "correct",
            INCORRECT: "incorrect",
            INVALID: "invalid",
            NA: "NA",
            TIMEOUT: "timeout"
        };

        let timing_object = {
            plugin_onset: performance.now(),
            plugin_loaded: null,
            trial_finished: null
        };

        let display_stage_html = trial.fixation;

        if (trial.audio_enabled) {
            AUDIO = {
                CORRECT: new Howl({
                    src: [trial.correct_audio]
                }),
                INCORRECT: new Howl({
                    src: [trial.incorrect_audio]
                }),
                TIMEOUT: new Howl({
                    src: [trial.timeout_audio]
                }),
                INVALID: new Howl({
                    src: [trial.invalid_audio]
                })
            };
        }

        /**
         * Response object.
         */
        let response = {
            rt: null,
            key: null,
            performance: null
        };

        /**
         * Swap stimuli function.
         */
        let swap_stimuli = () => {
            display_element.innerHTML = trial.stimulus;
        };

        /**
         * Give timeout feedback if timeout enabled.
         */
        let give_timeout_feedback = () => {
            if (trial.timeout_audio.length > 0) {
                if (typeof keyboardListener !== 'undefined') {
                    jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }

                if (trial.audio_enabled && trial.correct_response !== performance_labels.NA) {
                    display_feedback(display_element, performance_labels.TIMEOUT);
                    
                    AUDIO.TIMEOUT.play();

                    setTimeout(() => {
                        AUDIO.TIMEOUT.stop();
                    }, 200);
                }
            }
        };

        /**
         * Function to handle responses by the subject
         */
        let after_response = (info) => {
            /**
             * Only record the first response.
             */
            if (response.key === null) {
                response.key = info.key;
                response.rt = info.rt;

                jsPsych.pluginAPI.clearAllTimeouts();

                let performance_label = get_performance_label();

                display_feedback(display_element, performance_label);

                if (trial.correct_response !== performance_labels.NA && trial.audio_enabled) {
                    play_response_audio(performance_label);
                }
            }

            if (trial.response_ends_trial) {
                end_trial();
            }
        };

        /**
         * Displays text feedback depending on performance
         * label.
         * @param {HTMLNode} display_element
         * @param {String} performance_label 
         */
        let display_feedback = (display_element, performance_label) => {
            if (performance_labels.INCORRECT === performance_label) {
                display_element.innerHTML = trial.incorrect_text;
            } else if (performance_labels.CORRECT === performance_label) {
                display_element.innerHTML = trial.correct_text;
            } else if (performance_labels.INVALID === performance_label) {
                display_element.innerHTML = trial.invalid_text;
            } else if (performance_labels.TIMEOUT === performance_label) {
                display_element.innerHTML = trial.timeout_text;
            }
        };

        /**
         * Plays response audio.
         */
        let play_response_audio = (performance_label) => {
            if (performance_label === performance_labels.CORRECT) {
                AUDIO.CORRECT.play();

                setTimeout(() => {
                    AUDIO.CORRECT.stop();
                }, 200);
            } else if (performance_label === performance_labels.INCORRECT) {
                AUDIO.INCORRECT.play();

                setTimeout(() => {
                    AUDIO.INCORRECT.stop();
                }, 200);
            } else if (performance_label === performance_labels.INVALID) {
                AUDIO.INVALID.play();

                setTimeout(() => {
                    AUDIO.INVALID.stop();
                }, 200);
            }
        };

        let get_performance_label = () => {
            if (trial.correct_response === performance_labels.NA) {
                return performance_labels.NA;
            } else if (response.key === null) {
                return performance_labels.TIMEOUT;
            } else if (response.key === trial.correct_response) {
                return performance_labels.CORRECT;
            } else if (trial.valid_choices.indexOf(response.key) !== -1 && response.key !== trial.correct_response) {
                return performance_labels.INCORRECT;
            } else if (trial.valid_choices.indexOf(response.key) === -1 && trial.possible_choices.indexOf(response.key) !== -1) {
                return performance_labels.INVALID;
            }
        };

        /**
         * This function ends the trial when it is time and does
         * all the necessary cleanup operations.
         */
        let end_trial = () => {

            /**
             * Clear all timeouts.
             */
            jsPsych.pluginAPI.clearAllTimeouts();

            /**
             * Kills all the currently active keyboard listeners.
             */
            if (typeof keyboardListener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            }

            /**
             * Object to collect the trial data.
             */
            let trial_data = {
                "rt": response.rt,
                "stimulus": trial.stimulus,
                "key_press": response.key,
                "timestamp": new Date().toString(),
                "correct_response": trial.correct_response,
                "performance": get_performance_label(),
                "trial_onset": timing_object.plugin_onset,
                "trial_loaded": timing_object.plugin_loaded
            };

            /**
             * Clears the display.
             */
            display_element.innerHTML = '';

            trial_data.trial_finished = performance.now();

            /**
             * Finishes the trial.
             */
            jsPsych.finishTrial(trial_data);
        };

        timing_object.plugin_loaded = performance.now();

        if (trial.choices != jsPsych.NO_KEYS) {
            keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                rt_method: 'performance',
                persist: false,
                allow_held_key: false,
                valid_responses: trial.possible_choices
            });
        }


        /**
         * Sets the stimulus inside the display element.
         */
        display_element.innerHTML = new_html;

        /**
         * Set the swapping of stimuli for previous parameters.
         */
        setTimeout(swap_stimuli, trial.stimulus_duration);

        /**
         * End trial if duration is set.
         */
        if (trial.trial_duration !== null) {
            setTimeout(() => {
                end_trial();
            }, trial.trial_duration);
        }

        /**
         * Give timeout feedback audio.
         */
        if (trial.response_timeout !== null) {
            jsPsych.pluginAPI.setTimeout(give_timeout_feedback, trial.response_timeout);
        }
    };

    return plugin;
})();