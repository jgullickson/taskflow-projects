/**
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


jsPsych.plugins["html-keyboard-response"] = (function() {

    var plugin = {};

    plugin.info = {
        name: 'html-keyboard-response',
        description: '',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.HTML_STRING,
                pretty_name: 'Stimulus',
                default: undefined,
                description: 'The HTML string to be displayed'
            },
            choices: {
                type: jsPsych.plugins.parameterType.KEYCODE,
                array: true,
                pretty_name: 'Choices',
                default: jsPsych.ALL_KEYS,
                description: 'The keys the subject is allowed to press to respond to the stimulus.'
            },
            prompt: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'Prompt',
                default: null,
                description: 'Any content here will be displayed below the stimulus.'
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
            }
        }
    }

    plugin.trial = (display_element, trial) => {
        let timing_object = {
            plugin_onset: performance.now(),
            plugin_loaded: null,
            trial_finished: null
        };

        const performance_labels = {
            CORRECT: "correct",
            INCORRECT: "incorrect",
            INVALID: "invalid",
            NA: "NA",
            TIMEOUT: "timeout"
        };

        let new_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + '</div>';

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
         * Ends and cleans up file.
         */
        let end_trial = () => {

            // kill any remaining setTimeout handlers
            jsPsych.pluginAPI.clearAllTimeouts();

            // kill keyboard listeners
            if (typeof keyboardListener !== 'undefined') {
                jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            }

            // gather the data to store for the trial
            let trial_data = {
                "rt": response.rt,
                "stimulus": trial.stimulus,
                "timestamp": new Date().toString(),
                "key_press": response.key,
                "timestamp": performance.now(),
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

            // after a valid response, the stimulus will have the CSS class 'responded'
            // which can be used to provide visual feedback that a response was recorded
            display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

            // only record the first response
            if (response.key == null) {
                response = info;
            }

            if (trial.response_ends_trial) {
                end_trial();
            }
        };

        timing_object.plugin_loaded = performance.now();

        // start the response listener
        if (trial.choices != jsPsych.NO_KEYS) {
            var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
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
         * Response object.
         */
        let response = {
            rt: null,
            key: null
        };

        // hide stimulus if stimulus_duration is set
        if (trial.stimulus_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
                display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
            }, trial.stimulus_duration);
        }

        // end trial if trial_duration is set
        if (trial.trial_duration !== null) {
            jsPsych.pluginAPI.setTimeout(function() {
                end_trial();
            }, trial.trial_duration);
        }

    };

    return plugin;
})();