const background = new Howl({
    src: ['./sounds/background.mp3'],
    html5: true,
    loop: true,
    volume: 0.5,
    onunlock: () => {
        background.play();
    }
});

background.play();

const test_sounds = new Howl({
    src: 'sounds/all-sounds.mp3',
    sprite: {
        correct: [5000, 1332],
        incorrect: [9000, 1079],
        invalid: [11000, 1897],
        timeout: [16000, 2088],
    }
});

let main = async () => {
    let timeline = [];

    /**
     * Push fullscreen mode.
     */
    timeline.push({
        type: 'fullscreen',
        fullscreen_mode: true
    });

    if (window.location !== window.parent.location) {
        let level = await get_level();

        if (level !== null) {
            load_level(level, CONFIGURATION, false, timeline);
        } else {
            load_level(0, CONFIGURATION, false, timeline);
        }
    } else {
        let level = GLOBAL_CONFIGURATION["LOCAL"]["LEVEL"];

        if (level !== undefined) {
            load_level(level, CONFIGURATION, false, timeline);
        } else {
            load_level(0, CONFIGURATION, false, timeline);
        }
    }

    let measure = TaskFlow.Client.Measure.get();

    /**
     * Running on the server in an iFrame.
     */
    if (window.location !== window.parent.location) {
        let cutoff_time = new Date().addMinutes(GLOBAL_CONFIGURATION["SERVER"]["LENGTH"]);
        
        jsPsych.init({
            timeline: timeline,
            preload_audio: PRELOAD.AUDIO,
            preload_images: PRELOAD.IMAGES,
            on_trial_finish: async (data) => {
                if (data.trial_type === "html-keyboard-response" && data.trial_id !== undefined) {
                    if (data.trial_id === "end") {
                        if (new Date() >= cutoff_time) {
                            jsPsych.pauseExperiment();

                            /**
                             * Local save.
                             */
                            jsPsych.data.get().localSave('csv','restaurant-n-back-results.csv');
                            jsPsych.data.get().localSave('json','restaurant-n-back-results.json');

                            let task_data = JSON.stringify(jsPsych.data.get().values());
    
                            let level = localStorage.getItem("Level");

                            measure.json = task_data;

                            await TaskFlow.Client.Configuration.set(GLOBAL_CONFIGURATION.GUID, "Level", level);
                            await TaskFlow.Client.Measure.set(measure);
                            
                            TaskFlow.Client.Measure.end();

                            // TaskFlow.Client.setConfigurationValue(GLOBAL_CONFIGURATION.GUID, "Level", level)
                            //     .then(r => {
                            //         TaskFlow.Client.sendTaskData(task_data);
                            //         TaskFlow.Client.endTask();
                            //         // TaskFlow.Client.sendTaskData(task_data)
                            //         //     .then(r => {
                            //         //         TaskFlow.Client.endTask();
                            //         //     }).catch(e => {
                            //         //         alert("Problem sending task data: " + e)
                            //         //     })
                            //     }).catch(e => {
                            //         alert("Problem setting configuration values: " + e);
                            //     });
                        }
                    }  
                }
            }
        });
    /**
     * Running locally.
     */
    } else {
        let cutoff_time = new Date().addMinutes(GLOBAL_CONFIGURATION["LOCAL"]["LENGTH"]);
        
        jsPsych.init({
            timeline: timeline,
            on_trial_finish: (data) => {
                if (data.trial_type === "html-keyboard-response" && data.trial_id !== undefined) {
                    if (data.trial_id === "end") {
                        if (new Date() >= cutoff_time) {
                            jsPsych.data.get().localSave('csv','restaurant-n-back-results.csv');
                            jsPsych.endExperiment();
                        }
                    }
                }
            }
        });
    }
    //version data
    jsPsych.data.get().push(GLOBAL_CONFIGURATION["VERSION_DATA"])
};

document.addEventListener("DOMContentLoaded", () => {
    main();
});