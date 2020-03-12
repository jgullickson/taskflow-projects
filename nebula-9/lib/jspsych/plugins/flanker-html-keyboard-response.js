/**
 * Custom HTML Keyboard Response plugin for Flanker.
 */
jsPsych.plugins["flanker-html-keyboard-response"] = (() => {
    let plugin = {};

    plugin.info = {
        name: 'flanker-html-keyboard-response',
        description: '',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus',
                default: undefined,
                description: 'The HTML string to be displayed.'
            },
            stimulus_delay: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus Delay',
                default: 0,
                description: 'Delay for the stimulus to present itself.'
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
            timely_warning_message: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Timely Warning Message',
                default: undefined,
                description: 'Message text to display after certain time.'
            }, 
            timely_warning_message_onset: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Timely Warning Message Onset',
                default: undefined,
                description: 'Length of time from stimulus display until the message shows up.'
            },
            stimulus_duration: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Stimulus duration',
                default: null,
                description: 'How long to hide the stimulus.'
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
            response_timeout: {
                type: jsPsych.plugins.parameterType.INT,
                pretty_name: 'Response Timeout',
                default: undefined,
                description: 'Time people have to respond to a stimulus.'
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
            },
            // background_audio: { //may need to be moved, not sure that this should be defined for individual trials
            //     type: jsPsych.plugins.parameterType.ARRAY,
            //     pretty_name: 'Background audio.',
            //     default: undefined,
            //     description: 'Background ambient sounds (sprite).'
            // }
        }
    }

    plugin.trial = (display_element, trial) => {
        let audio;
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

        let new_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + '</div>';

        if (trial.audio_enabled) {
            var sounds = new Howl({
                src: [trial.all_audio],
                sprite: {
                    correct: trial.correct_audio,
                    incorrect: trial.incorrect_audio,
                    invalid: trial.invalid_audio,
                    timeout: trial.timeout_audio,
                    distractor: trial.distractor_audio,
                    // background: trial.background_audio
                }
            })
        };
            // ***old code:***
            //audio = {
            //     CORRECT: new Howl({
            //         src: [trial.correct_audio]
            //     }),
            //     INCORRECT: new Howl({
            //         src: [trial.incorrect_audio]
            //     }),
            //     TIMEOUT: new Howl({
            //         src: [trial.timeout_audio]
            //     }),
            //     INVALID: new Howl({
            //         src: [trial.invalid_audio]
            //     })
            // };
       

        //play background ambient sounds
        // if (trial.background_audio !== undefined){
        //     sounds.play('background');
        // }

        /**
         * Give timeout feedback if timeout enabled.
         */
        let give_timeout_feedback = () => {
            if (trial.timeout_audio.length > 0) {
                if (typeof keyboard_listener !== 'undefined') {
                    jsPsych.pluginAPI.cancelKeyboardResponse(keyboard_listener);
                }

                if (trial.audio_enabled && trial.correct_response !== performance_labels.NA) {
                    sounds.play('timeout');

                    // setTimeout(() => {
                    //     AUDIO.TIMEOUT.stop();
                    // }, 200);
                }
            }
        };

         /**
         * Get performance label.
         */
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
         * Displays text feedback depending on performance
         * label.
         * @param {HTMLNode} display_element
         * @param {String} performance_label 
         */
        let display_feedback = (display_element, performance_label) => {
            if (performance_labels.INCORRECT === performance_label) {
                //display_element.innerHTML = trial.incorrect_text;
                document.getElementById('jspsych-html-keyboard-response-stimulus').style.opacity = 0;
                display_element.insertAdjacentHTML("afterbegin", trial.incorrect_text);
            } else if (performance_labels.CORRECT === performance_label) {
                //display_element.innerHTML = trial.correct_text;
                document.getElementById('jspsych-html-keyboard-response-stimulus').style.opacity = 0;
                display_element.insertAdjacentHTML("afterbegin", trial.correct_text);
            } else if (performance_labels.INVALID === performance_label) {
               // display_element.innerHTML = trial.invalid_text;
               document.getElementById('jspsych-html-keyboard-response-stimulus').style.opacity = 0;
                display_element.insertAdjacentHTML("afterbegin", trial.invalid_text);
            } else if (performance_labels.TIMEOUT === performance_label) {
                //display_element.innerHTML = trial.timeout_text;
                document.getElementById('jspsych-html-keyboard-response-stimulus').style.opacity = 0;
                display_element.insertAdjacentHTML("afterbegin", trial.timeout_text);
            }
        };

        let play_response_audio = (performance_label) => {
            if (performance_label === performance_labels.CORRECT) {
                sounds.play('correct');

                // setTimeout(() => {
                //     AUDIO.CORRECT.stop();
                // }, 200);
            } else if (performance_label === performance_labels.INCORRECT) {
                sounds.play('incorrect');

                // setTimeout(() => {
                //     AUDIO.INCORRECT.stop();
                // }, 200);
            } else if (performance_label === performance_labels.INVALID) {
                sounds.play('invalid');

                // setTimeout(() => {
                //     AUDIO.INVALID.stop();
                // }, 200);
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

            let normalized_delay = trial.stimulus_delay * 1000;

            let trial_data = {
                "rt": response.rt - normalized_delay,
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
            jsPsych.pluginAPI.clearAllTimeouts();

            // only record the first response
            if (response.key == null) {
                response = info;
            }

            if (trial.correct_response !== performance_labels.NA && trial.audio_enabled) {
                let performance_label = get_performance_label();

                play_response_audio(performance_label);

                display_feedback(display_element, get_performance_label());

            if (trial.response_ends_trial) {
                end_trial();
            }
        };
    };

        timing_object.plugin_loaded = performance.now();

        // start the response listener.
        if (trial.choices != jsPsych.NO_KEYS) {
            keyboard_listener = jsPsych.pluginAPI.getKeyboardResponse({
                callback_function: after_response,
                valid_responses: trial.choices,
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
         * Set timely warning message timeout.
         */
        if (trial.timely_warning_message !== undefined && trial.timely_warning_message_onset !== undefined) {
            jsPsych.pluginAPI.setTimeout(() => {
                display_element.innerHTML = display_element.innerHTML + '<div id="timely-warning">' + trial.timely_warning_message + '</div>';
                
                if (trial.distractor_audio !==undefined){
                    sounds.play('distractor');
                }

                jsPsych.pluginAPI.setTimeout(() => {
                    document.getElementById("timely-warning").style.visibility = 'hidden';
                    // display_element.innerHTML = new_html;
                }, trial.timely_warning_message_duration);
            }, trial.timely_warning_message_onset);
        }

        /**
         * Response object.
         */
        let response = {
            rt: null,
            key: null
        };

        // hide stimulus if stimulus_duration is set
        if (trial.stimulus_duration !== null) {
            jsPsych.pluginAPI.setTimeout(() => {
                //document.getElementById("jspsych-html-keyboard-response-stimulus").style.visibility = 'hidden';
                document.getElementById("jspsych-html-keyboard-response-stimulus").style.opacity = 0;
                //display_element.innerHTML = '<div id="timely-warning">' + trial.timely_warning_message + '</div>';
            }, trial.stimulus_duration);
        }

        // end trial if trial_duration is set
        if (trial.trial_duration !== null) {
            setTimeout(() => {
                end_trial();
            }, trial.trial_duration);
        }

        if (trial.response_timeout !== undefined) {
            jsPsych.pluginAPI.setTimeout(() => {

                /**
                 * Kill remaining jsPsych timeout handlers.
                 */
                jsPsych.pluginAPI.clearAllTimeouts();
                give_timeout_feedback();
                display_feedback(display_element, performance_labels.TIMEOUT);
            
            }, trial.response_timeout);
        }
    };

    return plugin;
})();