const background = new Howl({
    src: ['./sounds/background.mp3'],
    html5: true,
    loop: true,
    volume: 0.5,
    onunlock() {
        background.play();
    }
});

background.play();

const test_sounds = new Howl({
    src: 'sounds/all-sounds.mp3',
    sprite: {
        correct: [0, 1097],
        incorrect: [2000, 862],
        invalid: [4000, 705],
        timeout: [6000, 313],
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

    let measure;

    if (window.location !== window.parent.location) {
        measure = await TaskFlow.Client.Measure.get();
    }

    /**
     * Running on the server in an iFrame.
     */
    if (window.location !== window.parent.location) {
        let cutoff_time = new Date().addMinutes(GLOBAL_CONFIGURATION["SERVER"]["LENGTH"]);
       
        jsPsych.init({
            timeline: timeline,
            display_element: "task-display-stage",
            preload_audio: PRELOAD.AUDIO,
            preload_images: PRELOAD.IMAGES,
            on_trial_finish: async (data) => {
                if (data.trial_type === "html-keyboard-response" && data.trial_id !== undefined) {
                    if (data.trial_id === "end") {
                        if (new Date() >= cutoff_time) {
                            jsPsych.pauseExperiment();

                            jsPsych.data.get().localSave('csv','space-flanker-results.csv');
                            jsPsych.data.get().localSave('json','space-flanker-results.json');

                            let task_data = JSON.stringify(jsPsych.data.get().values());
                            
                            let level = localStorage.getItem("Level");

                            measure.json = task_data;

                            await TaskFlow.Client.Configuration.set(GLOBAL_CONFIGURATION.GUID, "Level", level);
                            await TaskFlow.Client.Measure.set(measure);
                            
                            TaskFlow.Client.Measure.end();
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
            display_element: "task-display-stage",
            on_trial_finish: (data) => {
                if (data.trial_type === "html-keyboard-response" && data.trial_id !== undefined) {
                    if (data.trial_id === "end") {
                        if (new Date() >= cutoff_time) {
                            jsPsych.data.get().localSave('csv','space-flanker-results.csv');
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
