/**
 * Custom HTML Keyboard Response plugin for DPX.
 */
jsPsych.plugins["dpx-html-keyboard-response"] = (() => {
    let plugin = {};

    plugin.info = {
        name: 'dpx-html-keyboard-response',
        description: '',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus',
                default: undefined,
                description: 'The HTML string to be displayed'
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
            trial_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Trial duration',
                default: null,
                description: 'How long to show trial before it ends.'
            },
            response_ends_trial: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Response ends trial',
                default: true,
                description: 'If true, trial will end when subject makes a response.'
            },
            audio_enabled: {
                type: jsPsych.plugins.parameterType.BOOL,
                pretty_name: 'Audio enabled.',
                default: false,
                description: 'Enable audio features in task.'
            },
            all_audio: {
                type: jsPsych.plugins.parameterType.AUDIO,
                pretty_name: 'All audio',
                default: undefined,
                description: 'Full audio file from which to derive audio sprites'
            },
            correct_audio: {
                type: jsPsych.plugins.parameterType.ARRAY,
                pretty_name: 'Correct audio.',
                default: undefined,
                description: 'Audio feedback (sprite) for correct response.'
            },
            incorrect_audio: {
                type: jsPsych.plugins.parameterType.ARRAY,
                pretty_name: 'Incorrect audio.',
                default: undefined,
                description: 'Audio feedback (sprite) for incorrect response.'
            },
            timeout_audio: {
                type: jsPsych.plugins.parameterType.ARRAY,
                pretty_name: 'Timeout audio.',
                default: undefined,
                description: 'Audio feedback (sprite) for timeout.'
            },
            invalid_audio: {
                type: jsPsych.plugins.parameterType.ARRAY,
                pretty_name: 'Invalid audio.',
                default: undefined,
                description: 'Audio feedback (sprite) for invalid response.'
            },
            distractor_audio: {
                type: jsPsych.plugins.parameterType.ARRAY,
                pretty_name: 'Distractor audio',
                default: undefined,
                description: 'Audio (sprite) accompanying the timely warning message.'
            }
        }
    }

    plugin.trial = (display_element, trial) => {
        let sounds;
        let keyboard_listener;

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

        let new_html = '<div id="jspsych-html-keyboard-response-stimulus"><img src="' + trial.stimulus + '" ></div>';

        if (trial.audio_enabled) {
            sounds = new Howl({
                src: [trial.all_audio],
                sprite: {
                    correct: trial.correct_audio,
                    incorrect: trial.incorrect_audio,
                    invalid: trial.invalid_audio,
                    timeout: trial.timeout_audio,
                    distractor: trial.distractor_audio
                }
            });
        }

        let trial_fixation = document.createElement("div");

        trial_fixation.innerHTML = trial.fixation;
        trial_fixation.id = 'fixation';

        /**
         * Response object.
         */
        let response = {
            rt: null,
            key: null
        };

        /**
         * Swap stimuli function.
         */
        let swap_stimuli = () => {
            display_element.innerHTML = trial_fixation.outerHTML;
        };

        /**
         * Give timeout feedback if timeout enabled.
         */
        let give_timeout_feedback = () => {
            if (trial.timeout_audio.length > 0) {
                if (typeof keyboard_listener !== 'undefined') {
                    jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
                }

                if (trial.audio_enabled && trial.correct_response !== performance_labels.NA) {
                    display_feedback(display_element, performance_labels.TIMEOUT);
                    
                    sounds.play('timeout');
                }
            }
        };

         /**
         * Get performance label.
         */
        let get_performance_label = () => {
            let last_trial = jsPsych.data.get().filterCustom((trial) => {
                if (trial.stimuli_type === "cue" || trial.stimuli_type === "probe") {
                    return true;
                }
            }).last(1).values()[0];

            /**
            * Cues.
            */
            if (trial.data.stimuli_type === "cue") {

                /**
                 * Conditional logic for labeling the cue.
                 */
                if (response.key === null) {
                    return performance_labels.TIMEOUT;
                } else if (response.key === trial.correct_response) {
                    return performance_labels.CORRECT;
                } else if (trial.valid_choices.indexOf(response.key) !== -1 && response.key !== trial.correct_response) {
                    return performance_labels.INCORRECT;
                } else if (trial.valid_choices.indexOf(response.key) === -1 && trial.possible_choices.indexOf(response.key) !== -1) {
                    return performance_labels.INVALID;
                }

            }


            /**
             * Probes.
             */
            if (trial.data.stimuli_type === "probe") {

                /**
                 * Conditional labeling for the probe. Also accounts for cue 
                 * response. 
                 */
                if (last_trial.performance === performance_labels.NA) {
                    return performance_labels.NA;
                } else if (last_trial.performance === performance_labels.TIMEOUT) {
                    return performance_labels.TIMEOUT;
                } else if (last_trial.performance === performance_labels.CORRECT) {

                    /**
                     * Conditional logic of previous cue was answered correctly.
                     */
                    if (response.key === null) {
                        return performance_labels.TIMEOUT;
                    } else if (response.key === trial.correct_response) {
                        return performance_labels.CORRECT;
                    } else if (trial.valid_choices.indexOf(response.key) !== -1 && response.key !== trial.correct_response) {
                        return performance_labels.INCORRECT;
                    } else if (trial.valid_choices.indexOf(response.key) === -1 && trial.possible_choices.indexOf(response.key) !== -1) {
                        return performance_labels.INVALID;
                    }

                } else if (last_trial.performance === performance_labels.INVALID) {
                    return performance_labels.INVALID;
                } else if (last_trial.performance === performance_labels.INCORRECT) {
                    return performance_labels.INCORRECT;
                }
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
                
                jsPsych.pluginAPI.setTimeout(() => { swap_stimuli(); }, 1000);
            } else if (performance_labels.CORRECT === performance_label) {
                display_element.innerHTML = trial.correct_text;
                
                jsPsych.pluginAPI.setTimeout(() => { swap_stimuli(); }, 1000);
            } else if (performance_labels.INVALID === performance_label) {
                display_element.innerHTML = trial.invalid_text;
                
                jsPsych.pluginAPI.setTimeout(() => { swap_stimuli(); }, 1000);
            } else if (performance_labels.TIMEOUT === performance_label) {
                display_element.innerHTML = trial.timeout_text;

                jsPsych.pluginAPI.setTimeout(() => { swap_stimuli(); }, 1000);
            }
        };

        /**
         * Play response audio depending on performance label.
         * @param {string} performance_label 
         */
        let play_response_audio = (performance_label) => {
            if (performance_label === performance_labels.CORRECT) {
                sounds.play('correct');
            } else if (performance_label === performance_labels.INCORRECT) {
                sounds.play('incorrect');
            } else if (performance_label === performance_labels.INVALID) {
                sounds.play('invalid');
            }
        };

        /**
         * Ends and cleans up file.
         */
        let end_trial = () => {

            /**
             * Kill remaining jsPsych timeout handlers.
             */
            jsPsych.pluginAPI.clearAllTimeouts();

            /**
             * Kill all remaining keyboard listeners.
             */
            if (typeof keyboard_listener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
            }

            let trial_data = {
                "rt": response.rt,
                "stimulus": trial.stimulus,
                "timestamp": new Date().toString(),
                "key_press": response.key,
                "correct_response": trial.correct_response,
                "performance": get_performance_label(),
                "trial_onset": timing_object.plugin_onset,
                "trial_loaded": timing_object.plugin_loaded
            };

            // clear the display
            display_element.innerHTML = '';

            trial_data.trial_finished = performance.now();

            // move on to the next trial
            jsPsych.finishTrial(trial_data);
        };

        /**
         * Handles responses after a keypress.
         */
        let after_response = (info) => {
            if (response.key === null) {
                response.key = info.key;
                response.rt = info.rt;

                if (trial.correct_response !== performance_labels.NA) {
                    jsPsych.pluginAPI.clearAllTimeouts();
                    
                    let performance_label = get_performance_label();

                    display_feedback(display_element, performance_label);
                    play_response_audio(performance_label);
                }
            }
        };

        timing_object.plugin_loaded = performance.now();

        // start the response listener.
        if (trial.possible_choices != jsPsych.NO_KEYS) {
            keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.possible_choices,
                rt_method: 'performance',
                persist: false,
                allow_held_key: false
            });
        }

        /**
         * Make stim visible.
         */
        display_element.innerHTML = new_html;

        /**
         * Set the swapping of stimuli.
         */
        jsPsych.pluginAPI.setTimeout(swap_stimuli, trial.stimulus_duration);

        /**
         * End trial if duration is set.
         */
        if (trial.trial_duration !== null) {
            setTimeout(() => {
                end_trial();
            }, trial.trial_duration)
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