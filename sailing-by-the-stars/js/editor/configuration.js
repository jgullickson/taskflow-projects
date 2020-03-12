const PRELOAD = {
    AUDIO: [
        "./sounds/feedback/all-sounds.mp3"
    ],
    IMAGES: [
        // Background
        "img/background/9beLKl9.png",
        "img/background/46MRYFa (1).png",
        "img/background/46MRYFa.png",
        "img/background/BqkETyl.png",
        "img/background/ilhrli3.png",
        "img/background/x1GB77K.png",
        // distractors
        "img/distractors/bat.png",
        "img/distractors/comet.png",
        "img/distractors/d1.png",
        "img/distractors/d2.png",
        "img/distractors/d3.png",
        "img/distractors/d4.png",
        "img/distractors/d5.png",
        "img/distractors/jupiter.png",
        "img/distractors/mars.png",
        "img/distractors/seagull.png",
        "img/distractors/storm.png",
        // instructions
        "img/instructions/bay.JPG",
        "img/instructions/boat-sailing.JPG",
        "img/instructions/dock.JPG",
        "img/instructions/fisherman.JPG",
        "img/instructions/IMG_8853.JPG",
        "img/instructions/IMG_8857.JPG",
        "img/instructions/IMG_8869.JPG",
        "img/instructions/IMG_8870.JPG",
        "img/instructions/IMG_8871.JPG",
        "img/instructions/IMG_8872.JPG",
        "img/instructions/IMG_8873.JPG",
        "img/instructions/IMG_8875.JPG",
        "img/instructions/IMG_8876.JPG",
        "img/instructions/IMG_8878.JPG",
        "img/instructions/IMG_8879.JPG",
        "img/instructions/IMG_8880.JPG",
        "img/instructions/IMG_8881.JPG",
        "img/instructions/rock-2.JPG",
        "img/instructions/rock.JPG",
        "img/instructions/shack.JPG",
        "img/instructions/thieves.JPG",

        "img/ship-wheel.jpg", 
        "img/cue_one.png", 
        "img/cue_two.png", 
        "img/cue_three.png", 
        "img/cue_four.png", 
        "img/cue_five.png", 
        "img/cue_six.png",
        "img/probe_one.png",
        "img/probe_two.png", 
        "img/probe_three.png", 
        "img/probe_four.png", 
        "img/probe_five.png", 
        "img/probe_six.png",
        "img/AK_LO.svg", 
        "img/AK_RO.svg", 
        "img/AK.svg", 
        "img/wave.svg"
    ]
};


const CONFIGURATION = {
    // For Storm Icon<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    0: {
        INSTRUCTIONS: [
            /**
             * Welcome Screen.
             */
            "<div class='title-header'>"+
                "<p><i>Welcome to</i></p>"+
                "<h1>Sailing<br><span style='font-size: 40pt'>by the</span><br>Stars</h1>"+
                "<h2><br><i>Nautical Navigation Challenge</i></h2>"+
            "</div>",

            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 1: A Long Lost Friend</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane Worthy is a good friend, but you thought she was gone forever. You just received a letter saying to meet her across the bay. Tonight. Generally it's too dangerous to sail at night, but the letter told you the secret of steering by the stars.</p>" +
                                "<p class='block-text'> Press <b>Next</b> to read the sailing instructions: </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/boat-sailing.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",

            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<h2>Constellations are the key...</h2>"+
                            "<p class='block-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                            "<p class='block-text'>Click <b>Next</b> to see a few examples.</p>" +
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",

            "<div class='container'>"+
                "<img class='block-img-sm' src='img/cue_three.png'>"+
                "<div class= 'jclone border'>"+
                        "<p class='block-text subtitle'>Example constellation (1/4)</p>" +
                "</div>"+
            "</div>",

            "<div class='container'>"+
                "<img class='block-img-sm' src='img/probe_four.png'>"+
                "<div class= 'jclone border'>"+
                        "<p class='block-text subtitle'>Example constellation (2/4)</p>" +
                "</div>"+
            "</div>",

            "<div class='container'>"+
                "<img class='block-img-sm' src='img/cue_five.png'>"+
                "<div class= 'jclone border'>"+
                        "<p class='block-text subtitle'>Example constellation (3/4)</p>" +
                "</div>"+
            "</div>",

            "<div class='container'>"+
                "<img class='block-img-sm' src='img/probe_two.png'>"+
                "<div class= 'jclone border'>"+
                        "<p class='block-text subtitle'>Example constellation (4/4)</p>" +
                "</div>"+
            "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                "<h2>Pay attention to the sequence...</h2>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Constellations will appear one at a time in sequences, like this: a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='intro-constellation' src='img/cue_four.png'>"+
                            "<div class='stack'>><div class='plus'>+</div></div>"+
                            "<img class='intro-constellation' src='img/probe_two.png'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",

            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 style='color: #f1bb09; font-weight: 800;'>Target Sequence</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>There's a special sequence that you will need to watch out for. It's called the <b>Target Sequence</b>, and it looks like this.</p>" +
                    "</div>"+
                    "<div class='gridchild-2 border-gold'>"+
                        "<img class='intro-constellation' src='img/cue_one.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_one.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
            "</div>",

                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>To get safely across the bay, tack left (<kbd>left arrow</kbd>) every time to you see a blue constellation.</p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                            "</div>"+
                            "<div class='gridchild-3'>"+
                                
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",

                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<div class='stack'>"+
                            "<img class='intro-constellation' src='img/cue_one.png'>"+
                            "<kbd class='dull'>left</kbd>"+
                            "</div>"+
                            "<div class='stack'>><div class='plus'>+</div></div>"+
                            "<div class='stack'>"+
                            "<img class='intro-constellation border-gold' src='img/probe_one.png'>"+
                            "<kbd>right</kbd>"+
                            "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
                "</div>",

                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                            "<div class='gridchild-1'>"+
                            "<p class='block-text'>Tack left to all other white constellations, <b>including the key white constellation from the Target Sequence if it doesn’t follow the alerting blue constellation</b>.</p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                            "</div>"+
                            "<div class='gridchild-3'>"+
                                
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",

                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 style='color: #f1bb09; font-weight: 800;'>Target Sequence</h1>"+
                        "<div class='gridchild-1'>"+
                        "<p class='block-text'>Throughout most of the night, you will see the Target Sequence.</p>"+
                        "</div>"+
                        "<div class='gridchild-2 border-gold'>"+
                            "<img class='intro-constellation' src='img/cue_one.png'>"+
                            "<div class='stack'>><div class='plus'>+</div></div>"+
                            "<img class='intro-constellation' src='img/probe_one.png'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",

                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Bear a hand, there! If you're going to see your friend Jane again, you have to turn quickly or you will run aground! Remember to respond as fast and correctly as you can. Good luck!</p>" +
                                "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                                "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/rock.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: [
                "img/cue_one.png"
            ],
            B: [
                "img/cue_two.png", 
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_one.png"
            ],
            Y: [
                "img/probe_two.png", 
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 1200,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:0
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 1 Not Passed...Yet!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Night sailing isn\'t easy. The smell of salt water and the sound of crashing waves ring in your ears. You will have to see if your old friend Jane is still there tomorrow night.</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/dock.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 2
                    }
                },
                MESSAGE:
                 "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 1 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"I knew you could do it. I have really exciting news. Remember the pirate treasure my dad used to tell us stories about? Apparently it\'s real! I learned about an old fisherman who knows where we can find it. Let's find that buried treasure!\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/jane.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    1: {
        INSTRUCTIONS: [
        "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 class='level-title'> Level 2: A Promising Lead</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Jane says, \"Thanks for coming tonight. I know it\'s not easy. The fisherman with the treasure map lives in the next cove. But we need to go tonight so we can get to it first.\"</p>" +
                        "<p class='block-text'> Press <b>Next</b> to review the sailing instructions: </p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/bay.JPG'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
            "<div class= 'jclone'>"+
            "<h2>Pay attention to the sequence...</h2>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Just like before, you will see a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='intro-constellation' src='img/cue_four.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_two.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>To get to the fisherman's house, tack left (<kbd>left arrow</kbd>) every time to you see a blue constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/shack.JPG'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                    "<h2 class='red'>Different from Previous Level!</h2>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Tonight, the target sequence looks different than last time.</p>"+
                            "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence. Otherwise tack left for any other constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                        "<div class='stack'>"+
                        "<img class='intro-constellation' src='img/cue_two.png'>"+
                        "<kbd class='dull'>left</kbd>"+
                        "</div>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<div class='stack'>"+
                        "<img class='intro-constellation border-gold' src='img/probe_two.png'>"+
                        "<kbd>right</kbd>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>In between the constellations you will see other objects in the sky. Those are just a distraction. Ignore them. You still have to turn quickly or you will run aground! Remember always to respond as fast and correctly as you can. Good sailing!</p>" +
                            "<p class='block-text'>Some distractions are purple constellations--watch out for these. They look like other constellations but won\'t help us to navigate!</p>" +
                            "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                            "</div>"+
                        "<div class='gridchild-2'>"+
                            "<div margin-bottom: 10%;' class='four-by-four'>"+
                                "<h1>Distractions</h1>"+
                                "<div style='grid-area: one'>"+
                                    "<img src='img/distractors/mars.png'>"+
                                "</div>"+
                                "<div style='grid-area: two'>"+
                                    "<img src='img/distractors/d3.png'>"+
                                "</div>"+
                                "<div style='grid-area: three'>"+
                                    "<img src='img/distractors/seagull.png'>"+
                                "</div>"+
                                "<div style='grid-area: four'>"+
                                    "<img src='img/distractors/bat.png'>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: ["img/cue_two.png"
            ],
            B: [
                "img/cue_one.png", 
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_two.png"
            ],
            Y: [
                "img/probe_one.png", 
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
                "img/distractors/d1.png"
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            1: [/**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 5100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 1100,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:1
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='level-title'> Level 2 Not Passed...Yet!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Night sailing is hard. Wouldn't recommend it, actually. Luckily, the cove is just ahead so we can take a break and try again later..</p>" +
                            "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/rock-2.JPG'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.0001
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.0001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 2
                    }
                },
                MESSAGE:
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 2 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"You're getting good at this. We\'ll leave the boat here and go talk to the fisherman. He used to know my dad, so maybe he\'ll remember me. I can\'t wait to see what he\'s found!\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/shack.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    2: {
        INSTRUCTIONS: [
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 class='level-title'> Level 3: In Pursuit</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>You have gone out of your way to find this fisherman's shack in a secluded cove. But as you approach, you sense something is wrong. The door is ajar and an old man is laying on the floor. Around him, the room is in tatters.</p>" +
                        "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/shack.JPG'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid'>"+
                "<div class='gridchild-1'>"+
                    "<p class='block-text'>You revive the fisherman and he explains that thieves landed in a speed boat, overpowered him and stole the treasure map. As he describes their boat, Jane gets a gleem in her eye.</p>" +
                    "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                "</div>"+
                "<div class='gridchild-2'>"+
                    "<img class='img-intro' src='img/instructions/fisherman.JPG'>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>",
    "<div class='container'>"+
    "<div class= 'jclone'>"+
        "<div class='container-grid'>"+
            "<div class='gridchild-1'>"+
                "<p class='block-text'>\"Hey, I know that boat!\" she exclaims. \"More importantly, I know where it docks. I bet we can get it back tonight if we leave now.\"</p>" +
                "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
            "</div>"+
            "<div class='gridchild-2'>"+
                "<img class='img-intro' src='img/instructions/jane.JPG'>"+
            "</div>"+
        "</div>"+
    "</div>"+
"</div>",
        "<div class='container'>"+
            "<div class= 'jclone'>"+
            "<h2>Pay attention to the sequence...</h2>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Just like before, you will see a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='intro-constellation' src='img/cue_four.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_two.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>To get to the thieves\' dock, tack left (<kbd>left arrow</kbd>) every time to you see a blue constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/IMG_8875.JPG'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-fixed'>"+
                    "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence. Otherwise tack left for any other constellation.</p>" +
                            "<p class='block-text text-warning'>Tonight, there are two different blue constellations that can serve as the first part of the target sequence. Remember to watch out for both of these!</p>" +
                        "</div>"+
                        "<div class='img-row' style='grid-area: top;'>"+
                          
                            "<div id='group-box'>"+
                            "<div class='img-div-2'>"+
                                "<img class='intro-constellation' src='img/cue_two.png'>"+
                            "</div>"+
                            "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> OR </h1></div>"+
                            "<div class='img-div-2'>"+
                                "<img class='intro-constellation' src='img/cue_one.png'>"+
                            "</div>"+
                            "</div>"+
                           
                            "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> + </h1></div>"+
                            "<div class='img-div-2'>"+
                                "<img class='intro-constellation' src='img/probe_two.png'>"+
                            "</div>"+
                        "</div>"+
                     
                        "<div class='gridchild-3'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Clouds are coming in. In between the constellations you will see other objects in the sky. Those are just a distraction. Ignore them. You still have to turn quickly or you will run aground! Remember always to respond as fast and correctly as you can. Good sailing!</p>" +
                            "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                        "</div>"+
                        "<div class='gridchild-2'>"+
                        "<div margin-bottom: 10%;' class='four-by-four'>"+
                        "<h1>Distractions</h1>"+
                        "<div style='grid-area: one'>"+
                            "<img src='img/distractors/storm.png'>"+
                        "</div>"+
                        "<div style='grid-area: two'>"+
                            "<img src='img/distractors/comet.png'>"+
                        "</div>"+
                        "<div style='grid-area: three'>"+
                            "<img src='img/distractors/bat.png'>"+
                        "</div>"+
                        "<div style='grid-area: four'>"+
                            "<img src='img/distractors/storm.png'>"+
                        "</div>"+
                    "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: ["img/cue_one.png",
                "img/cue_two.png"
            ],
            B: [
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_two.png"
            ],
            Y: [
                "img/probe_one.png", 
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
                "img/distractors/d1.png",
                "img/distractors/d2.png",
                "img/distractors/d3.png",
                "img/distractors/d4.png",
                "img/distractors/d5.png",
                "img/distractors/bat.png",
                "img/distractors/comet.png",
                "img/distractors/jupiter.png",
                "img/distractors/mars.png",
                "img/distractors/seagull.png",
                "img/distractors/storm.png"
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            1: [/**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 5100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 1000,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:1
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE:
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 3 Not Passed...Yet!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>The sea is rough tonight. Let's take a break and try again tomorrow. Hopefully we can still catch the thieves at their dock!</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/thieves.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.0001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.0001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 1
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 3 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Well done, sailor! You\'re really getting the hang of this. We've made it back to the harbor and can see the thieves\' dock ahead. Stealth is key--keep quiet so they don\'t hear us coming!</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/IMG_8875.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    3:{
        INSTRUCTIONS: [
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 class='level-title'> Level 4: Into the Storm</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'> Jane says, \"Whew, that was a close. But thanks to this rain, I don't think the thieves saw me when I took the map back.\"</p>" +
                        "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/IMG_8878.JPG'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid'>"+
                "<div class='gridchild-1'>"+
                    "<p class='block-text'>\"Now we have to get away, but this storm is getting pretty bad. Do you think we can make it?\"</p>" +
                    "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                "</div>"+
                "<div class='gridchild-2'>"+
                    "<img class='img-intro' src='img/instructions/IMG_8878.JPG'>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>",
    "<div class='container'>"+
    "<div class= 'jclone'>"+
        "<div class='container-grid'>"+
            "<div class='gridchild-1'>"+
                "<p class='block-text'>Getting into that cover safely is going to take all your skills.</p>" +
                "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
            "</div>"+
            "<div class='gridchild-2'>"+
                "<img class='img-intro' src='img/instructions/IMG_8878.JPG'>"+
            "</div>"+
        "</div>"+
    "</div>"+
"</div>",
        "<div class='container'>"+
            "<div class= 'jclone'>"+
            "<h2>Pay attention to the sequence...</h2>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Just like before, you will see a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='intro-constellation' src='img/cue_four.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_two.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence. Otherwise tack left for any other constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='intro-constellation' src='img/cue_two.png'>"+
                            "<div class='stack'>><div class='plus'>+</div></div>"+
                            "<img class='intro-constellation border-gold' src='img/probe_two.png'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>With this storm, you'll see other things in the sky in between constellations. Again, you'll have to ignore them or we'll surely get wrecked. And for goodness sake, turn quickly or we will run aground! You'll have to respond as fast and correctly as you can if we're going to make it. Good sailing!</p>" +
                            "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                            "</div>"+
                        "<div class='gridchild-2'>"+
                        "<div margin-bottom: 10%;' class='four-by-four'>"+
                        "<h1>Distractions</h1>"+
                        "<div style='grid-area: one'>"+
                            "<img src='img/distractors/storm.png'>"+
                        "</div>"+
                        "<div style='grid-area: two'>"+
                            "<img src='img/distractors/d3.png'>"+
                        "</div>"+
                        "<div style='grid-area: three'>"+
                            "<img src='img/distractors/d1.png'>"+
                        "</div>"+
                        "<div style='grid-area: four'>"+
                            "<img src='img/distractors/comet.png'>"+
                        "</div>"+
                    "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: [
                "img/cue_two.png"
            ],
            B: [
                "img/cue_one.png",
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_two.png"
            ],
            Y: [
                "img/probe_one.png", 
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
                "img/distractors/d1.png",
                "img/distractors/d2.png",
                "img/distractors/d3.png",
                "img/distractors/d4.png",
                "img/distractors/d5.png",
                "img/distractors/bat.png",
                "img/distractors/comet.png",
                "img/distractors/jupiter.png",
                "img/distractors/mars.png",
                "img/distractors/seagull.png",
                "img/distractors/storm.png"
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            1: [/**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 5100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            2:[/**
                * Option One.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Two.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Three.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Four.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Five.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Six.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Seven.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Eight.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Nine.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
               ]
            ],
            3:[/**
                * Option One.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Two.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Three.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Four.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Five.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Six.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Seven.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Eight.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Nine.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 900,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:3
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE:
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 4 Not Passed...Yet!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"You've kept us afloat, despite these big waves and the scream wind. That's important. But, um, where are we?' Then she smiles, 'This map will help us get back on course.\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/IMG_8878.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 1
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 4 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"This storm is enough to swamp anyone. Let's get out of the wind and get our bearings. Then we'll try again later.\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/jane.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    4: {
        INSTRUCTIONS: [
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 class='level-title'> Level 5: Treasure Awaits!</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Jane says, \"Maybe we're closer than I thought despite this storm. That big rock jutting into the sky is marked on the treasure map. If I'm right, the treasure should be just inside that cove!\"</p>" +
                        "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/IMG_8871.JPG'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",

        "<div class='container'>"+
            "<div class= 'jclone'>"+
            "<h2>Pay attention to the sequence...</h2>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Just like before, you will see a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='intro-constellation' src='img/cue_four.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_two.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Sailing into the treasure cove is known to you by now, tack left (<kbd>left arrow</kbd>) every time to you see a blue constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/IMG_8872.JPG'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                        
                        "<div class='container-grid-fixed'>"+
                        "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence. Otherwise tack left for any other constellation.</p>" +
                                "<p class='block-text text-warning'>Tonight, there are two different blue constellations that can serve as the first part of the target sequence. Remember to watch out for both of these!</p>" +
                            "</div>"+
                            "<div class='img-row' style='grid-area: top;'>"+
                              
                                "<div id='group-box'>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/cue_two.png'>"+
                                "</div>"+
                                "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> OR </h1></div>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/cue_one.png'>"+
                                "</div>"+
                                "</div>"+
                               
                                "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> + </h1></div>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/probe_two.png'>"+
                                "</div>"+
                            "</div>"+
                         
                            "<div class='gridchild-3'>"+
                            "</div>"+
                        "</div>"+
                        
                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>With this storm still raging, other things will come up between constellations. As before, you can ignore them. And remember to turn quickly to avoid running aground! You'll have to respond even faster if we're going to see that treasure. Good luck, Captain!</p>" +
                            "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                            "</div>"+
                        "<div class='gridchild-2'>"+
                        "<div margin-bottom: 10%;' class='four-by-four'>"+
                        "<h1>Distractions</h1>"+
                        "<div style='grid-area: one'>"+
                            "<img src='img/distractors/mars.png'>"+
                        "</div>"+
                        "<div style='grid-area: two'>"+
                            "<img src='img/distractors/comet.png'>"+
                        "</div>"+
                        "<div style='grid-area: three'>"+
                            "<img src='img/distractors/seagull.png'>"+
                        "</div>"+
                        "<div style='grid-area: four'>"+
                            "<img src='img/distractors/bat.png'>"+
                        "</div>"+
                    "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: ["img/cue_one.png",
                "img/cue_two.png"
            ],

            B: [
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_two.png"
            ],
            Y: [
                "img/probe_one.png", 
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
                "img/distractors/d1.png",
                "img/distractors/d2.png",
                "img/distractors/d3.png",
                "img/distractors/d4.png",
                "img/distractors/d5.png",
                "img/distractors/bat.png",
                "img/distractors/comet.png",
                "img/distractors/jupiter.png",
                "img/distractors/mars.png",
                "img/distractors/seagull.png",
                "img/distractors/storm.png"
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            1: [/**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 5100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            2:[/**
                * Option One.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Two.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Three.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Four.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Five.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Six.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Seven.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Eight.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Nine.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
               ]
            ],
            3:[/**
                * Option One.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Two.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Three.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Four.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Five.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Six.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Seven.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Eight.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Nine.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 800,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:3
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE:
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 5 Not Passed...Yet!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"You did it! We made it into the cove. Now we're out of the wind for a bit. Let's drop anchor and find that lost treasure!\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/IMG_8872.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 1
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 5 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, \"Whoa, that last rock was close. This night is not fit for sailing at all. I'm drenched and you're shivering. Let's try again later.\"</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/rock.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    5: {
        INSTRUCTIONS: [
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                "<h1 class='level-title'> Level 6: The Chase</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Jane is excited. 'We found it! We found it! This is a real treasure from the olden days. Look at all these gold coins. These pearls are amazing. We sure earned it.'</p>" +
                        "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/IMG_8872.JPG'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid'>"+
                "<div class='gridchild-1'>"+
                    "<p class='block-text'>Jane looks past the back of the boat. \"Oh no, that's the ship of those thieves who took our map! They must have followed us here. We have to get back to a safe port before they catch us.\"</p>" +
                    "<p class='block-text'> Press <b>Next</b> to continue: </p>" +
                "</div>"+
                "<div class='gridchild-2'>"+
                    "<img class='img-intro' src='img/instructions/IMG_8873.JPG'>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>",
        "<div class='container'>"+
            "<div class= 'jclone'>"+
            "<h2>Pay attention to the sequence...</h2>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class='block-text'>Just like before, you will see a blue constellation, followed by a white constellation. For instance you may see something like the sequence shown here.</p>" +
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='intro-constellation' src='img/cue_four.png'>"+
                        "<div class='stack'>><div class='plus'>+</div></div>"+
                        "<img class='intro-constellation' src='img/probe_two.png'>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>Getting away safety is going to rely on your old trick: tack left (<kbd>left arrow</kbd>) every time to you see a blue constellation.</p>" +
                        "</div>"+
                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/IMG_8870.JPG'>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
                "<div class= 'jclone'>"+

                    "<div class='container-grid-fixed'>"+
                        "<h1 style='color: #f1bb09; font-weight: 800;'>Steering by the Target Sequence</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Tack right (<kbd>right arrow</kbd>) only when you see the second part of the target sequence. Otherwise tack left for any other constellation.</p>" +
                                "<p class='block-text text-warning'>Tonight, there are two different blue constellations <b>AND</b> two different white constellations that can make up the the target sequence. That means four possibile scenarioss where you\'ll need to tack right! Stay sharp, sailor!</p>" +
                            "</div>"+
                            "<div class='img-row' style='grid-area: top;'>"+
                              
                                "<div id='group-box'>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/cue_two.png'>"+
                                "</div>"+
                                "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> OR </h1></div>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/cue_one.png'>"+
                                "</div>"+
                                "</div>"+

                                "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> + </h1></div>"+

                                "<div id='group-box'>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/probe_two.png'>"+
                                "</div>"+
                                "<div class='stack'><h1 style = 'color: #f1bb09; font-weight: 500;'> OR </h1></div>"+
                                "<div class='img-div-2'>"+
                                    "<img class='intro-constellation' src='img/probe_one.png'>"+
                                "</div>"+
                                "</div>"+
                            "</div>"+
                         
                            "<div class='gridchild-3'>"+
                            "</div>"+
                        "</div>"+


                "</div>"+
                "</div>",
                //Audio check
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<h1 class='test-hdr'>Audio Check.</h1>"+
                        "<div class='btn-stack'>"+
                            '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                            '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                            '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                            '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                        "</div>"+
                        "<p class='block-text test-text'>As you sail, you will see constellations in the night sky. Constellations are unique patterns of stars that can help you navigate.</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                        "<div class='gridchild-1'>"+
                            "<p class='block-text'>The wind is still blowing hard, so things will show up between constellations. You can ignore them still. And remember to steer fast to get away! We're all counting on you, Captain!</p>" +
                            "<p class='block-text text-warning'>Press <b>Next</b> to start sailing!</p>"+
                            "</div>"+
                        "<div class='gridchild-2'>"+
                        "<div margin-bottom: 10%;' class='four-by-four'>"+
                        "<h1>Distractions</h1>"+
                        "<div style='grid-area: one'>"+
                            "<img src='img/distractors/mars.png'>"+
                        "</div>"+
                        "<div style='grid-area: two'>"+
                            "<img src='img/distractors/comet.png'>"+
                        "</div>"+
                        "<div style='grid-area: three'>"+
                            "<img src='img/distractors/seagull.png'>"+
                        "</div>"+
                        "<div style='grid-area: four'>"+
                            "<img src='img/distractors/bat.png'>"+
                        "</div>"+
                    "</div>"+
                        "</div>"+
                        "<div class='gridchild-3'>"+
                            
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/feedback/all-sounds.mp3',
            CORRECT: [0, 1900],
            INCORRECT: [7000, 1000],
            TIMEOUT: [4000, 2500],
            INVALID: [2000, 1800],
            DISTRACTOR: [0,0],
        },
        STIMS: {
            A: ["img/cue_one.png",
                "img/cue_two.png"
            ], 
            B: [
                "img/cue_three.png", 
                "img/cue_four.png", 
                "img/cue_five.png", 
                "img/cue_six.png"
            ],
            X: ["img/probe_one.png",
                "img/probe_two.png"
            ],
            Y: [
                "img/probe_three.png", 
                "img/probe_four.png", 
                "img/probe_five.png", 
                "img/probe_six.png"
            ],
            DISTRACTORS: [
                "img/distractors/d1.png",
                "img/distractors/d2.png",
                "img/distractors/d3.png",
                "img/distractors/d4.png",
                "img/distractors/d5.png",
                "img/distractors/bat.png",
                "img/distractors/comet.png",
                "img/distractors/jupiter.png",
                "img/distractors/mars.png",
                "img/distractors/seagull.png",
                "img/distractors/storm.png"
            ]
        },
        TIMING_OPTIONS: {
            0: [
                /**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 5500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 3000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 6500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 2500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 4500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 3500 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 5000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 4000 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 6000 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            1: [/**
                 * Option One.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Two.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 5100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Three.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Four.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Five.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Six.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Seven.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Eight.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                 * Option Nine.
                 */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ],
            2:[/**
                * Option One.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Two.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Three.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Four.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Five.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 4600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Six.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Seven.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Eight.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
               ],
               /**
                * Option Nine.
                */
               [
                   { STIM: 500, FIXATION: 1000 },
                   { STIM: 400, FIXATION: 100 },
                   { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
               ]
            ],
            3:[/**
                * Option One.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Two.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Three.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Four.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Five.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 4100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Six.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 3600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Seven.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 2600 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Eight.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 1100 },
                    { STIM: 500, FIXATION: 1500 }
                ],
                /**
                * Option Nine.
                */
                [
                    { STIM: 500, FIXATION: 1000 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 400, FIXATION: 100 },
                    { STIM: 500, FIXATION: 1500 }
                ]
            ]
        },
        MESSAGES: {
            CORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-correct"><h1>Good Sailing!</h1></div>',
            INCORRECT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-incorrect"><h1>Wrong Direction!</h1></div>',
            TIMEOUT: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-timeout"><h1>Respond Faster!</h1></div>',
            INVALID: '<div id="jspsych-html-keyboard-response-stimulus" class="fb fb-invalid"><h1>Wrong Key!</h1></div>'
        },
        PARAMETERS: {
            STIMULI_DURATION: 500,
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            POSSIBLE_CHOICES: [37,38,39,40],
            VALID_CHOICES: [37,39],
            RESPONSE_TIMEOUT: 700,
            AX_TRIALS:45,
            AY_TRIALS:6,
            BX_TRIALS:6,
            BY_TRIALS:3,
            DISTRACTOR_TRIAL_COUNT: 60,
            DISTRACTOR_NUMBER:3
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 0,
                            MAX: 92
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 3
                    }
                },
                MESSAGE:
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 6 Not Passed...Yet!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane says, 'Whoa, that last rock was close. This night is not fit for sailing at all. I'm drenched and you're shivering. Let's try again later.'</p>" +
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/rock-2.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD:{
                    AY: {
                        ACCURACY:{
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null

                    },
                    BX: {
                        ACCURACY:{ 
                            MIN: 92,
                            MAX: 100.00001
                        },
                        ALLOWED_ERRORS: null
                    },
                    BY: {
                        ACCURACY: null,
                        ALLOWED_ERRORS: 1
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='level-title'> Level 6 Passed!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class='block-text'>Jane is very happy. \"There's our port. The sun is rising and we're as good as home! It's been crazy, but that was definitely the best night of my life. You got really good at night sailing. I hope you enjoyed it, too.\"</p>" +
                                "<p class='block-text'>Congratulations for completing Night Sailing. What you were doing when 'sailing' was using recent experiences to help you overcome strong habits. There are many other times in life when you need to hold information in mind to guide your choices and behaviors and do it quickly. Hopefully this skill will help in those other cases, too.</p>" +
                                "<p class='block-text'>Press <b>any key</b> to end the task.</p>"+
                                "</div>"+
                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/IMG_8853.JPG'>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    }
};