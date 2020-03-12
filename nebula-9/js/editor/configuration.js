const PRELOAD = {
    AUDIO: [
        "sounds/all-sounds.mp3"
    ],
    IMAGES: [ 
        // background
            "img/background/clouds3.png",
            "img/background/stars.png",
            "img/background/twinkling.png",

        // instructions
            "img/instructions/asteroids-2.jpg",
            "img/instructions/asteroids.jpg",
            "img/instructions/astronaut-1.jpg",
            "img/instructions/blue-planet-ship-approach.jpg",
            "img/instructions/blue-planets.jpg",
            "img/instructions/chase.jpg",
            "img/instructions/cockpit.jpg",
            "img/instructions/d4n0t7m-27187665-615e-43b3-86cc-87d96d4d0917.jpg",
            "img/instructions/dogfight-2.jpg",
            "img/instructions/emmanuel-shiu-hangar-007.jpg",
            "img/instructions/flyout-hangar-2.jpg",
            "img/instructions/flyout-hangar.jpg",
            "img/instructions/glittercloud.jpg",
            "img/instructions/hangar.jpg",
            "img/instructions/hud.jpg",
            "img/instructions/missle.jpg",
            "img/instructions/moon_base.jpg",
            "img/instructions/pirate-hideout.jpg",
            "img/instructions/ship-by-planet.jpg",
            "img/instructions/ship-dock-1.jpg",
            "img/instructions/ship-maintenance.jpg",
            "img/instructions/ship.jpg",
            "img/instructions/turbo.jpg",
            "img/instructions/planet_attack.png",


            "img/alien.png",
            "img/asteroid.png",
            "img/planet.png",
            "img/planet2.png",
            "img/rocketship.png"
    ]
};

const CONFIGURATION = {
/* ////////////////////////////////
// -------PRACTICE SECTION---------
--------- LEVEL 0 --------- 
////////////////////////////// */
0: {
    INSTRUCTIONS: [
            //title
            "<div class = 'title-header'>"+
                "<h3>welcome to</h3>"+
                "<h1 style='font-size: 100pt'>NEBULA 9</h1>"+
                "<h2>Deep Space Navigation Challenge</h2>"+
            "</div>",
             //1
            "<div class='container'>"+
                    "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Introduction: Captured!</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text>You and your crew were exploring an uncharted sector, Nebula 9, and have been captured by space pirates! They have brought you back to their asteroid hideout.</p>"+
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro' src='img/instructions/pirate-hideout.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
            //2
            "<div class='container'>"+
                    "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text><p class='block-text'> The pirates are bringing you and your crew to a holding cell on a nearby asteroid. The situation seems hopeless, but your crewmates seem to have a plan up their sleeve.</p>"+
                    "</div>"+
                        "<div class='gridchild-2'>"+
                        "<img class='img-intro ' src='img/instructions/moon_base.jpg'>"+
                        "</div>"+
                "</div>"+
            "</div>",
            //3
            "<div class='container'>"+
                    "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text><p class='block-text'>As you are being escorted past the hangar to your cell, your crewmate elbows you and motions towards a pirate spaceship with the hatch open and engines running--this could be your only opportunity! </p>"+
                    "</div>"+
                        "<div class='gridchild-2'>"+
                        "<img class='img-intro ' src='img/instructions/hangar.jpg'>"+
                        "</div>"+
                "</div>"+
            "</div>",
            //4
            "<div class='container'>"+
                    "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text><p class='block-text'>You and your crewmates make a mad dash for the ship. The pirates are right behind you but you manage to make it onboard and seal the hatch. The hangar alarm starts blaring as you rev up the engines!</p>"+
                    "</div>"+
                        "<div class='gridchild-2'>"+
                        "<img class='img-intro ' src='img/instructions/cockpit.jpg'>"+
                        "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
                    "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text><p class='block-text'><b>BUT WAIT!</b><br>How do you fly this thing? Lucky for you, one of your crewmates is a whiz when it comes to spaceships, and they explain to you how to fly the ship...</p>"+
                    "</div>"+
                    "<div class='gridchild-2'>"+
                        "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>It's easy. The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Drat! Those pirates hacked our navigation display!<br>No matter. Just ignore those white arrows. Steer according to the center arrow and we\'ll get out of here safely.</p>"+
                            "<p class='block-text'>Be sure to react as quickly and accurately as possible so we don\'t crash!</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////
    ],
    DISTRACTOR_LAYER: '',
    DISTRACTOR_DENSITY: 'none',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
        ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
        ]
    }],
    PARAMETERS : {
        LENGTH: 20, //20
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 500,
        RESPONSE_DURATION: 1500,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40],
        TRIAL_DURATION: 2000,

    },
    AUDIO: {
        ENABLED: true,
        SOURCE: './sounds/all-sounds.mp3',
        BACKGROUND: [13000, 123148, true],
        CORRECT: [0, 1097],
        INCORRECT: [2000, 862],
        TIMEOUT: [6000, 313],
        INVALID: [4000, 705],
        DISTRACTOR: [0,0],
        // DISTRACTOR: [9000, 2064], //asteroid
       // DISTRACTOR: [7000, 1593] //blaster fire
    },
    DISTRACTORS: {
        //must include values here for task to run. For no distractor, DELAY: 0, DURATION: 0, MESSAGE: ''
        //timing in ms
        ONSET_MESSAGE: {
            DELAY: 0,
            DURATION: 0,
            MESSAGE: '',
            }
    },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 1001,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 71,
                    MAX: 99999
                }
            },
            MESSAGE: "<div class='container'>"+
                        "<div class= 'jclone'>"+
                            "<div class='container-grid-s'>"+
                            "<div class='gridchild-1-s'>"+
                                "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                                "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                                "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                            "</div>"+
                            "<div class='gridchild-2-s'>"+
                                // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                            "</div>"+
                        "</div>"+
                    "</div>",
            ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 1000
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 70
            }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
            ADVANCE: ADVANCE.FORWARD
        }
    ]
},
// /* ////////////////////////////////
//-----------SECTION A---------------
// --------- LEVEL 1: EASY --------- 
// ////////////////////////////// */ 
    1: {
        INSTRUCTIONS: [
                //Greeting
                "<div class='container'>"+

                    "<div class= 'jclone'>"+

                        "<div class='container-grid'>"+
                        "<h1 class='thresh-message'>Level 1: Hot Pursuit!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class = block-text>Congratulations! You made it out of the hangar and into open space. This is where the <i>real</i> flying begins! Hope you\'re ready.</p>"+
                                "<p class = block-text>You\'re not in the clear yet, though! The pirates are in hot pursuit.<br>Just keep flying and hopefully we\'ll lose these jerks!</p>"+
                            "</div>"+

                            "<div class='gridchild-2'>"+
                                "<img class='img-intro' src='img/instructions/ship.jpg'>"+
                            "</div>"+

                        "</div>"+

                    "</div>"+

                "</div>",
                /* ////////////////////////////////
                 ---------STIMULI EXAMPLES--------- 
                 ////////////////////////////// */ 
                // RIGHT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='container-grid-s'>"+
                                "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                                "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                                "</div>"+
                                "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                            "</div>"+
                    "</div>"+
                "</div>",
                // LEFT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                            "</div>"+
                            "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                // FULL
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='gridchild-2-s'>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                                "</div>"+    
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                                "</div>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'><br>Ignore those white arrows--they are a distraction from the pirate hackers.</p>"+
                            "<p class='block-text'>Be sure to react as quickly and accurately as possible so we don\'t crash!</p>"+
                            "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
            /* //////////////////////////////
            -----END OF STIMULI EXAMPLES----
            */ /////////////////////////////   
        ],
        DISTRACTOR_LAYER: '',
        DISTRACTOR_DENSITY: 'none',
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
            INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
            TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
            INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'    
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS: [
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'white',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.LEFT,
                    PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "white",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
            ]
        }],
        PARAMETERS: {
            LENGTH: 200,
            TIMING_FEEDBACK_DURATION: 500,
            STIMULI_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 500,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40], 
            TRIAL_DURATION: 2000
        },
        DISTRACTORS: {
            ONSET_MESSAGE: {
                DELAY: 0,
                DURATION: 0, 
                MESSAGE: ''
                }
        },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    DISTRACTOR: [0,0],
                //    DISTRACTOR: [9000, 2064], //asteroid
                //    DISTRACTOR: [7000, 1593] //blaster fire
                },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 95
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 981,
                        MAX: 99999
                    },
                    DIFFERENCE: {
                        MIN: 66,
                        MAX: 99999
                    }
                },
                MESSAGE: 
                "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                        "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.001
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 0,
                        MAX: 980
                    },
                    DIFFERENCE: {
                        MIN: -99999,
                        MAX: 65
                    }
                },
                MESSAGE: "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                        "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    // /* ////////////////////////////////
    //-------SECTION A-----------------
// --------- LEVEL 2: EASY-TURBO --------- 
// ////////////////////////////// */ 
2: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+

                "<div class= 'jclone'>"+

                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 2: Turbo Boost!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>You\'re doing great. Ready for a challenge? Let\s engage the ship's turbo and really give these pirates a run for their money.</p>"+
                            "<p class = block-text>Things are about to get FAST.</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro' src='img/instructions/turbo.jpg'>"+
                        "</div>"+

                    "</div>"+

                "</div>"+

            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+
                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                        "<p class='block-text'><br>Ignore those white arrows--they are a distraction from the pirate hackers.</p>"+
                        "<p class='block-text'>Be sure to react as quickly and accurately as possible so we don\'t crash!</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////   
    ],
    DISTRACTOR_LAYER: '',
    DISTRACTOR_DENSITY: 'none',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'    
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 240,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 250,
        RESPONSE_DURATION: 1000,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 1500
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 0,
            DURATION: 0, 
            MESSAGE: ''
            }
    },
    AUDIO: {
                ENABLED: true,
                SOURCE: './sounds/all-sounds.mp3',
                BACKGROUND: [13000, 123148, true],
                CORRECT: [0, 1097],
                INCORRECT: [2000, 862],
                TIMEOUT: [6000, 313],
                INVALID: [4000, 705],
                DISTRACTOR: [0,0],
            //    DISTRACTOR: [9000, 2064], //asteroid
            //    DISTRACTOR: [7000, 1593] //blaster fire
            },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 961,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 61,
                    MAX: 99999
                }
            },
            MESSAGE: 
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
            ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 960
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 60
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
            ADVANCE: ADVANCE.FORWARD
        }
    ]
},
/* ////////////////////////////////
--------- SECTION B --------- 
----------LEVEL 3: BLASTERS--------
////////////////////////////// */ 
    3: {
        INSTRUCTIONS: [
                //Greeting
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                         "<div class='container-grid'>"+
                         "<h1 class='thresh-message'>Level 3: In their sights!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>Great job last time. Those space pirates couldn't touch us. I knew you had the makings of a pilot.</p>"+
                            "<p class = block-text>Drat. It looks like they're within firing range. You\'ll need to make some extra quick manuevers to avoid their attacks!</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                             "<img class='img-intro ' src='img/instructions/missle.jpg'>"+
                        "</div>"+

                         "</div>"+
                    "</div>"+
                "</div>",
                 /* ////////////////////////////////
                 ---------STIMULI EXAMPLES--------- 
                 ////////////////////////////// */ 
                // RIGHT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='container-grid-s'>"+
                                "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                                "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                                "</div>"+
                                "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                            "</div>"+
                    "</div>"+
                "</div>",
                // LEFT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                            "</div>"+
                            "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                // FULL
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='gridchild-2-s'>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+    
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'><br>Those pirate hackers are getting more sophisticated! Their distractor arrows look just like our own.</p>"+
                            "<p class='block-text'>Focus on the central arrow. The two arrows on the left and the right are disctractors. </p>"+
                            "<p class='block-text'>Be sure to react as quickly and accurately as possible so those pirates can\'t get a good shot at us!</p>"+
                            "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
            /* //////////////////////////////
            -----END OF STIMULI EXAMPLES----
            */ /////////////////////////////     
        ],
        DISTRACTOR_LAYER: '',
        DISTRACTOR_DENSITY: 'none',
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
            INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
            TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
            INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
            
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS: [
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
            ]
        }],
        PARAMETERS: {
            LENGTH: 200,
            TIMING_FEEDBACK_DURATION: 500,
            STIMULI_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 500,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40], 
            TRIAL_DURATION: 2000
        },
        DISTRACTORS: {
            ONSET_MESSAGE: {
                DELAY: 900,
                DURATION: 1100, 
                MESSAGE: 
                /*
                BLASTER FIRE
                */
                        '<div class="centerbox feedback-message animated flash">'+
                            '<div style="color: rgb(252, 255, 82)";font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                                '<svg class="yellow animated flash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>'+
                                        'INCOMING'+
                                '<svg class="yellow animated flash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>'+
                                '<br>BLASTER FIRE!'+
                            '</div>'+
                        '</div>'
                }
            //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
        },
      AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            BACKGROUND: [13000, 123148, true],
            CORRECT: [0, 1097],
            INCORRECT: [2000, 862],
            TIMEOUT: [6000, 313],
            INVALID: [4000, 705],
           // DISTRACTOR: [9000, 2064], //asteroid
            DISTRACTOR: [7000, 1593] //blaster fire
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 95
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 941,
                        MAX: 99999
                    },
                    DIFFERENCE: {
                        MIN: 56,
                        MAX: 99999
                    }
                },
                MESSAGE: "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                        "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.001
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 0,
                        MAX: 940
                    },
                    DIFFERENCE: {
                        MIN: -99999,
                        MAX: 55
                    }
                },
                MESSAGE: "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                        "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    /* ////////////////////////////////
--------- SECTION B --------- 
----------LEVEL 4: BLASTERS-TURBO--------
////////////////////////////// */ 
4: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                     "<div class='container-grid'>"+
                     "<h1 class='thresh-message'>Level 4: Leave \'em in the dust!</h1>"+
                    "<div class='gridchild-1'>"+
                        "<p class = block-text>Great flying, friend. We\'ve managed to stay in one piece so far, but those pirates are not letting up!</p>"+
                        "<p class = block-text>Our turbo module is charged up again. Ready for some more speed? Let\'s fly even faster and so we can get out of firing range.</p>"+
                    "</div>"+

                    "<div class='gridchild-2'>"+
                         "<img class='img-intro ' src='img/instructions/turbo.jpg'>"+
                    "</div>"+

                     "</div>"+
                "</div>"+
            "</div>",
             /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+    
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                        "<p class='block-text'>Focus on the central arrow. The two arrows on the left and the right are disctractors. </p>"+
                        "<p class='block-text'>Be sure to react as quickly and accurately as possible so those pirates can\'t get a good shot at us!</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////     
    ],
    DISTRACTOR_LAYER: '',
    DISTRACTOR_DENSITY: 'none',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.05
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 240,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 250,
        RESPONSE_DURATION: 1000,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 1500
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 600,
            DURATION: 900, 
            MESSAGE: 
            /*
            BLASTER FIRE
            */
                    '<div class="centerbox feedback-message animated flash">'+
                        '<div style="color: rgb(252, 255, 82)";font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                            '<svg class="yellow animated flash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>'+
                                    'INCOMING'+
                            '<svg class="yellow animated flash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>'+
                            '<br>BLASTER FIRE!'+
                        '</div>'+
                    '</div>'
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
  AUDIO: {
        ENABLED: true,
        SOURCE: './sounds/all-sounds.mp3',
        BACKGROUND: [13000, 123148, true],
        CORRECT: [0, 1097],
        INCORRECT: [2000, 862],
        TIMEOUT: [6000, 313],
        INVALID: [4000, 705],
       // DISTRACTOR: [9000, 2064], //asteroid
        DISTRACTOR: [7000, 1593] //blaster fire
    },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 921,
                    MAX: 999990
                },
                DIFFERENCE: {
                    MIN: 51,
                    MAX: 99999
                }
            },
            
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
            ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 920
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 50
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
            ADVANCE: ADVANCE.FORWARD
        }
    ]
},
/* ////////////////////////////////
----------SECTION C----------------------
--------- LEVEL 5: ASTEROIDS --------- 
////////////////////////////// */ 
    5: {
        INSTRUCTIONS: [
                //Greeting
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid'>"+
                        "<h1 class='thresh-message'>Level 5: Asteroids!</h1>"+
                            "<div class='gridchild-1'>"+
                                "<p class = block-text>Great job. I knew you had the makings of a pilot. But don't get lazy yet. We\'re entering an asteroid field now. Watch-out!</p>"+
                            "</div>"+

                            "<div class='gridchild-2'>"+
                                "<img class='img-intro ' src='img/instructions/asteroids.jpg'>"+
                            "</div>"+

                        "</div>"+
                    "</div>"+
                "</div>",
                /* ////////////////////////////////
                 ---------STIMULI EXAMPLES--------- 
                 ////////////////////////////// */ 
                // RIGHT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='container-grid-s'>"+
                                "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                                "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                                "</div>"+
                                "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                            "</div>"+
                    "</div>"+
                "</div>",
                // LEFT
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                                "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                            "</div>"+
                            "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>",
                // FULL
                "<div class='container'>"+
                    "<div class= 'jclone'>"+
                        "<div class='container-grid-s'>"+
                            "<div class='gridchild-2-s'>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+    
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                                "<div align='center' class =' tight'>"+
                                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                                "</div>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Just pay attention to the central arrow. Ignore the other yellow arrows on the sides--those are distractors from the pirates trying to get us to crash into an asteroid!</p>"+
                            "<p class='block-text'>Be sure to react as quickly and accurately as possible to avoid a collision!</p>"+
                            "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
            /* //////////////////////////////
            -----END OF STIMULI EXAMPLES----
            */ /////////////////////////////                  
        ],

        DISTRACTOR_LAYER: 
        '<div class="distractor-asteroid-container" id="ast1-cont">'+
        '<img class="distractor-asteroid" id="ast1" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast2-cont">'+
        '<img class="distractor-asteroid" id="ast2" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast3-cont">'+
        '<img class="distractor-asteroid" id="ast3" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast4-cont">'+
        '<img class="distractor-asteroid" id="ast4" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast5-cont">'+
        '<img class="distractor-asteroid" id="ast5" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast6-cont">'+
        '<img class="distractor-asteroid" id="ast6" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast7-cont">'+
        '<img class="distractor-asteroid" id="ast7" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast8-cont">'+
        '<img class="distractor-asteroid" id="ast8" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast9-cont">'+
        '<img class="distractor-asteroid" id="ast9" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast10-cont">'+
        '<img class="distractor-asteroid" id="ast10" src="img/asteroid.png" alt="asteroid">'+
    '</div>',
    DISTRACTOR_DENSITY: 'medium',

        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
            INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
            TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
            INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
            
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'incongruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS: [
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: 'yellow',
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
        ]
        }, {
            /* Congruent Right */
            TARGET: {
                COLOR: 'yellow',
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,
                VISIBILITY_DELAY: 0.025
                
            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: 'congruent',
                TRIAL_ID: 'stim'
            },
            FLANKERS:[ 
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                },
                {
                    ONSET: 0,
                    COLOR: "yellow",
                    DIRECTION: DIRECTION.RIGHT,
                    PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                    OPACITY: 0.8,
                    ANIMATION: ANIMATIONS.NONE
                }
            ]
        }],
        PARAMETERS: {
            LENGTH: 200,
            TIMING_FEEDBACK_DURATION: 500,
            STIMULI_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 500,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40], 
            TRIAL_DURATION: 2000
        },
        DISTRACTORS: {
            ONSET_MESSAGE: {
                DELAY: 800,
                DURATION: 1200, 
                MESSAGE: 
                /*
                ASTEROIDS
                */
                        '<div class="centerbox feedback-message animated flash">'+
                            '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                                '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                                    'DANGER:'+
                                '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                                '<br>ASTEROID IMPACT!'+
                            '</div>'+
                        '</div>'+
                        '<div id="asteroid-parent">'+
                            '<div id="asteroid-container-1">'+
                                '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                            '</div>'+
                            '<div id="asteroid-container-2">'+
                                '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                            '</div>'+
                            '<div id="asteroid-container-3">'+
                                '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                            '</div>'+
                            '<div id="asteroid-container-4">'+
                                '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                            '</div>'+
                        '</div>'
                }
            //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
        },
            AUDIO: {
                        ENABLED: true,
                        SOURCE: './sounds/all-sounds.mp3',
                        BACKGROUND: [13000, 123148, true],
                        CORRECT: [0, 1097],
                        INCORRECT: [2000, 862],
                        TIMEOUT: [6000, 313],
                        INVALID: [4000, 705],
                        DISTRACTOR: [9000, 2064], //asteroid
                       // DISTRACTOR: [7000, 1593] //blaster fire
                    },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 95
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 911,
                        MAX: 99999
                    },
                    DIFFERENCE: {
                        MIN: 46,
                        MAX: 99999
                    }
                },
                MESSAGE: "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                        "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
            ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.001
                },
                RT_THRESHOLDS: {
                    MEDIAN: {
                        MIN: 0,
                        MAX: 910
                    },
                    DIFFERENCE: {
                        MIN: -99999,
                        MAX: 45
                    }
                },
                MESSAGE: "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                    "<div class='gridchild-1-s'>"+
                        "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                        "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                        "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                    "</div>"+
                    "<div class='gridchild-2-s'>"+
                        // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                    "</div>"+
                "</div>"+
            "</div>",
            ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    /* ////////////////////////////////
----------SECTION C----------------------
--------- LEVEL 6: ASTEROIDS-TUBRO --------- 
////////////////////////////// */ 
6: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 6: ...still Asteroids!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>Amazing! We had some close calls back there, but we\'re still in once piece.</p>"+
                            "<p class = block-text>This asteroid field is getting thicker! We\'re gonna have to react even faster to dodge these space rocks. Sounds like it\'s time for some more turbo!</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro ' src='img/instructions/turbo.jpg'>"+
                        "</div>"+

                    "</div>"+
                "</div>"+
            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+  

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                            "</div>"+
                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                        "<p class='block-text'>Just pay attention to the central arrow. Ignore the other yellow arrows on the sides--those are distractors from the pirates trying to get us to crash into an asteroid!</p>"+
                        "<p class='block-text'>Be sure to react as quickly and accurately as possible to avoid a collision!</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////                  
    ],

    DISTRACTOR_LAYER: 
    '<div class="distractor-asteroid-container" id="ast1-cont">'+
    '<img class="distractor-asteroid" id="ast1" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast2-cont">'+
    '<img class="distractor-asteroid" id="ast2" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast3-cont">'+
    '<img class="distractor-asteroid" id="ast3" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast4-cont">'+
    '<img class="distractor-asteroid" id="ast4" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast5-cont">'+
    '<img class="distractor-asteroid" id="ast5" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast6-cont">'+
    '<img class="distractor-asteroid" id="ast6" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast7-cont">'+
    '<img class="distractor-asteroid" id="ast7" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast8-cont">'+
    '<img class="distractor-asteroid" id="ast8" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast9-cont">'+
    '<img class="distractor-asteroid" id="ast9" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast10-cont">'+
    '<img class="distractor-asteroid" id="ast10" src="img/asteroid.png" alt="asteroid">'+
'</div>' +
'<div class="distractor-asteroid-container" id="ast11-cont">'+
    '<img class="distractor-asteroid" id="ast11" src="img/asteroid.png" alt="asteroid">'+
'</div>' +
'<div class="distractor-asteroid-container" id="ast12-cont">'+
    '<img class="distractor-asteroid" id="ast12" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast13-cont">'+
    '<img class="distractor-asteroid" id="ast13" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast14-cont">'+
    '<img class="distractor-asteroid" id="ast14" src="img/asteroid.png" alt="asteroid">'+
'</div>'+
'<div class="distractor-asteroid-container" id="ast15-cont">'+
    '<img class="distractor-asteroid" id="ast15" src="img/asteroid.png" alt="asteroid">'+
'</div>',
DISTRACTOR_DENSITY: 'high',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.075
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.075
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'yellow',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.075
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 2,
            VISIBILITY_DELAY: 0.075
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "yellow",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 240,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 250,
        RESPONSE_DURATION: 1000,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 1500
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 400,
            DURATION: 1100, 
            MESSAGE: 
            /*
            ASTEROIDS
            */
                    '<div class="centerbox feedback-message animated flash">'+
                        '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                            '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                                'DANGER:'+
                            '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                            '<br>ASTEROID IMPACT!'+
                        '</div>'+
                    '</div>'+
                    '<div id="asteroid-parent">'+
                        '<div id="asteroid-container-1">'+
                            '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-2">'+
                            '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-3">'+
                            '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-4">'+
                            '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                    '</div>'
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    DISTRACTOR: [9000, 2064], //asteroid
                   // DISTRACTOR: [7000, 1593] //blaster fire
                },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 891,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 41,
                    MAX: 99999
                }
            },
            
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 890
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 40
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.FORWARD
        }
    ]
},
   /* ////////////////////////////////
----------SECTION D----------------------
--------- LEVEL 7: FlankerAdd --------- 
////////////////////////////// */ 
7: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 7: Out of the woods...?</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>Congratulations! You finally made it out of the asteroid field, and you seem to have lost the pirates.</p>"+
                            "<p class = block-text>Hopefully that\'s the last of your troubles...</p>"+
                            "<p class = block-text>You and your crew dock at a nearby friendly planet to refuel and make some repairs.</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro ' src='img/instructions/flyout-hangar-2.jpg'>"+
                        "</div>"+

                    "</div>"+
                "</div>"+
            "</div>",
            "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+

                    "<div class='gridchild-1-s'>"+
                        "<p class = block-text>As it turns out, the base has its own mechanics, and they insist on helping with the repairs.</p>"+
                        "<p class = block-text>Glad for the opportunity to relax, you let them get to work as you go to find a restroom and a coffee.</p>"+
                    "</div>"+

                    "<div class='gridchild-2-s'>"+
                        "<img class='img-intro ' src='img/instructions/ship-maintenance.jpg'>"+
                    "</div>"+

                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid-s'>"+

                "<div class='gridchild-1-s'>"+
                    "<p class = block-text>That was fast! These grease-monkeys are already finished with the repairs, so you\'re ready to rev up the engines and get back to exploring!</p>"+
                "</div>"+

                "<div class='gridchild-2-s'>"+
                    "<img class='img-intro ' src='img/instructions/ship-maintenance.jpg'>"+
                "</div>"+

            "</div>"+
        "</div>"+
    "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'><b>WHAT IS THIS?</b></p>"+
                            "<p class='block-text'>Those incompetent bafoons! They must have made an error when recalibrating your nav system. Unfortunately there\'s no time to fix this--you\'ll just have to make do.</p>"+
                            "<p class='block-text'>Just pay attention to the central yellow arrow. Ignore the other white arrows on the sides, just like you did with the pirates\'s distractor arrows.</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////                  
    ],

    DISTRACTOR_LAYER: '',
    DISTRACTOR_DENSITY: 'none',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 4,
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 4,
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 4,
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: 4,
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 200,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 500,
        RESPONSE_DURATION: 1500,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 2000
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 0,
            DURATION: 0, 
            MESSAGE: '',
            /*
            ASTEROIDS
            */
                    // '<div class="centerbox feedback-message animated flash">'+
                    //     '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //             'DANGER:'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //         '<br>ASTEROID IMPACT!'+
                    //     '</div>'+
                    // '</div>'+
                    // '<div id="asteroid-parent">'+
                    //     '<div id="asteroid-container-1">'+
                    //         '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-2">'+
                    //         '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-3">'+
                    //         '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-4">'+
                    //         '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    // '</div>'
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    DISTRACTOR: [0, 0],
                    //DISTRACTOR: [9000, 2064], //asteroid
                   // DISTRACTOR: [7000, 1593] //blaster fire
                },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 871,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 36,
                    MAX: 99999
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 870
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 35
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.FORWARD
        }
    ]
},
   /* ////////////////////////////////
----------SECTION D----------------------
--------- LEVEL 8: FlankerAdd + IndexSwap--------- 
////////////////////////////// */ 
8: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 8: land ho!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>Impressive. You\'ve managed to fly this janky rig all the way to a new planet in the Nebula 9 sector! You set the coordinates in your nav computer and begin your approach.</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro ' src='img/instructions/ship-by-planet.jpg'>"+
                        "</div>"+

                    "</div>"+
                "</div>"+
            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'><b>DRAT!</b></p>"+
                            "<p class='block-text'>Another glitch in the nav system. I bet you\'re starting to miss your old ship. Pirate manufacturing is just not up to snuff.</p>"+
                            "<p class='block-text'>Now the <span style='color: yellow'>yellow</span> arrow is changing its position. It could show up in anywhere in that line of arrows.</p>"+
                            "<p class='block-text'>Click <b>Next</b> to see some more examples...</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
         // FULL
         "<div class='container'>"+
         "<div class= 'jclone'>"+
             "<div class='container-grid-s'>"+
                 "<div class='gridchild-2-s'>"+

                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+    

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                     "<div align='center' class =' tight'>"+
                         "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                     "</div>"+

                 "</div>"+
                 "<div align='center' class ='gridchild-1-s'>"+
                     "<p class='block-text'>There is goes again...now the <span style='color: yellow'>yellow</span> arrow is on the far left.</p>"+
                     "<p class='block-text'>Click <b>Next</b> to see some another example...</p>"+
                 "</div>"+
         "</div>"+
     "</div>"+
 "</div>",
  // FULL
  "<div class='container'>"+
  "<div class= 'jclone'>"+
      "<div class='container-grid-s'>"+
          "<div class='gridchild-2-s'>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+    

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

              "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                "</div>"+

              "<div align='center' class =' tight'>"+
                  "<img class='arrow-intro' src='img/arrows/arrow-l-white.svg'>"+
              "</div>"+

          "</div>"+
          "<div align='center' class ='gridchild-1-s'>"+
              "<p class='block-text'>Remember to stay focused on that yellow arrow! It\'s the only one telling you the correct way to steer, even though it\'s not always in the center anymore. The white arrows are distractors.</p>"+
              "<p class='block-text'>Good luck!</p>"+
          "</div>"+
  "</div>"+
"</div>"+
"</div>"
    ,//Audio check
            '<div class="container">'+
            '<div class="jclone">'+
                "<h1 class='thresh-message'>Check Audio</h1>"+
                "<div class='stack'>"+
                    '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                    '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                    '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                    '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                "</div>"+
                    '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                '</div>'+
            '</div>'+
        '</div>',
        /* //////////////////////////////
        -----END OF STIMULI EXAMPLES----
        */ /////////////////////////////                  
    ],

    DISTRACTOR_LAYER: '',
    DISTRACTOR_DENSITY: 'none',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 200,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 500,
        RESPONSE_DURATION: 1500,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 2000
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 0,
            DURATION: 0, 
            MESSAGE: '',
            /*
            ASTEROIDS
            */
                    // '<div class="centerbox feedback-message animated flash">'+
                    //     '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //             'DANGER:'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //         '<br>ASTEROID IMPACT!'+
                    //     '</div>'+
                    // '</div>'+
                    // '<div id="asteroid-parent">'+
                    //     '<div id="asteroid-container-1">'+
                    //         '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-2">'+
                    //         '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-3">'+
                    //         '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-4">'+
                    //         '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    // '</div>'
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    DISTRACTOR: [0, 0],
                    //DISTRACTOR: [9000, 2064], //asteroid
                   // DISTRACTOR: [7000, 1593] //blaster fire
                },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 851,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 31,
                    MAX: 99999
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 850
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 30
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.FORWARD
        }
    ]
},
   /* ////////////////////////////////
----------SECTION D----------------------
--------- LEVEL 9: FlankerAdd + IndexSwap + Turbo--------- 
////////////////////////////// */ 
9: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 9: The approach!</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>Nicely done. You\'re getting closer to this strange new planet. Who knows what mysteries it holds!</p>"+
                            "<p class = block-text>Keep up the pace and you\'ll be there in no time.</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro ' src='img/instructions/blue-planet-ship-approach.jpg'>"+
                        "</div>"+

                    "</div>"+
                "</div>"+
            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember to focus on the <span style='color: yellow'>yellow</span> and respond based on which direction it is pointing. It might appear anywhere in the line of arrows.</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid-s'>"+
                "<div align='center' class ='gridchild-1-s'>"+
                    "<p class='block-text'>Keep your eyes peeled. There could be strange life forms on this planet. Anything is possible.</p>"+
                "</div>"+
                "<div class='container-grid-s'>"+
                "<div align='center' class ='gridchild-2-s'>"+
                    // "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                "</div>"+
            "</div>"+
            "</div>"+
        "</div>"+
    "</div>",
        //Audio check
        '<div class="container">'+
        '<div class="jclone">'+
            "<h1 class='thresh-message'>Check Audio</h1>"+
            "<div class='stack'>"+
                '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
            "</div>"+
                '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
            '</div>'+
        '</div>'+
    '</div>',
    ],

    DISTRACTOR_LAYER: 
        //planet
        '<div class="planet" id="planet-cont">'+
            '<img id="planet" src="img/planet.png" alt="planet">'+
         '</div>'+
        //aliens
        '<div class="distractor-alien-container" id="alien5-cont">'+
            '<img class="distractor-alien" id="alien5" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien4-cont">'+
            '<img class="distractor-alien" id="alien4" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien3-cont">'+
            '<img class="distractor-alien" id="alien3" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien2-cont">'+
        '   <img class="distractor-alien" id="alien2" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien1-cont">'+
            '<img class="distractor-alien" id="alien1" src="img/alien.png" alt="alien">'+
        '</div>'
    ,
    DISTRACTOR_DENSITY: 'low',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 240,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 250,
        RESPONSE_DURATION: 1000,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 1500
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 0,
            DURATION: 0, 
            MESSAGE: '',
            /*
            ASTEROIDS
            */
                    // '<div class="centerbox feedback-message animated flash">'+
                    //     '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //             'DANGER:'+
                    //         '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                    //         '<br>ASTEROID IMPACT!'+
                    //     '</div>'+
                    // '</div>'+
                    // '<div id="asteroid-parent">'+
                    //     '<div id="asteroid-container-1">'+
                    //         '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-2">'+
                    //         '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-3">'+
                    //         '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    //     '<div id="asteroid-container-4">'+
                    //         '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                    //     '</div>'+
                    // '</div>'
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    DISTRACTOR: [0, 0],
                    //DISTRACTOR: [9000, 2064], //asteroid
                   // DISTRACTOR: [7000, 1593] //blaster fire
                },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 831,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 26,
                    MAX: 99999
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 830
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 25
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'re flying this thing like you stole it...(oh wait, you did!). Don\'t get too cocky, though! Space has a way of throwing curve balls when you least expect it. Stay sharp and keep going!</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.FORWARD
        }
    ]
},
  /* ////////////////////////////////
----------SECTION D----------------------
--------- LEVEL 10: FlankerAdd + IndexSwap + Turbo + Asteroids--------- 
////////////////////////////// */ 
10: {
    INSTRUCTIONS: [
            //Greeting
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid'>"+
                    "<h1 class='thresh-message'>Level 10: More asteroids? #facepalm</h1>"+
                        "<div class='gridchild-1'>"+
                            "<p class = block-text>You\'ve almost reached the planet. This planet has a ring around it, which means...MORE ASTEROIDS! Good thing you\'ve had practice.</p>"+
                        "</div>"+

                        "<div class='gridchild-2'>"+
                            "<img class='img-intro ' src='img/instructions/blue-planet-ship-approach.jpg'>"+
                        "</div>"+

                    "</div>"+
                "</div>"+
            "</div>",
            /* ////////////////////////////////
             ---------STIMULI EXAMPLES--------- 
             ////////////////////////////// */ 
            // RIGHT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='container-grid-s'>"+
                            "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember: The ship's auto-navigation system will display an arrow on the screen in front of you, telling you which way to turn.</p>"+
                            "<p class='block-text'>For example, if the arrow is pointing right, like it is here, you would press the <kbd>right arrow key</kbd> to steer the ship to the right.</p>"+
                            "</div>"+
                            "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                "</div>"+
            "</div>",
            // LEFT
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>If the arrow is pointing left, press the <kbd>left arrow key</kbd>.</p>"+
                        "</div>"+
                        "<div class='container-grid-s'>"+
                        "<div align='center' class ='gridchild-2-s'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>"+
            "</div>",
            // FULL
            "<div class='container'>"+
                "<div class= 'jclone'>"+
                    "<div class='container-grid-s'>"+
                        "<div class='gridchild-2-s'>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+    

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                            "<div align='center' class =' tight'>"+
                                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                            "</div>"+

                        "</div>"+
                        "<div align='center' class ='gridchild-1-s'>"+
                            "<p class='block-text'>Remember to focus on the <span style='color: yellow'>yellow arrow</span> and respond based on which direction it is pointing. It might appear anywhere in the line of arrows.</p>"+
                        "</div>"+
                "</div>"+
            "</div>"+
        "</div>",
        "<div class='container'>"+
        "<div class= 'jclone'>"+
            "<div class='container-grid-s'>"+
                "<div align='center' class ='gridchild-1-s'>"+
                    "<p class='block-text'>The aliens seem friendly...so far, but these asteroids sure aren\'t. Watch yourself!</p>"+
                "</div>"+
                "<div class='container-grid-s'>"+
                "<div align='center' class ='gridchild-2-s'>"+
                    // "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                "</div>"+
            "</div>"+
            "</div>"+
        "</div>"+
    "</div>",
        //Audio check
        '<div class="container">'+
        '<div class="jclone">'+
            "<h1 class='thresh-message'>Check Audio</h1>"+
            "<div class='stack'>"+
                '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
            "</div>"+
                '<p class="block-text test-text">If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
            '</div>'+
        '</div>'+
    '</div>',
    ],

    DISTRACTOR_LAYER: 
        //planet
        '<div class="planet" id="planet2-cont">'+
            '<img id="planet2" src="img/planet2.png" alt="planet">'+
         '</div>'+
         //asteroids
         '<div class="distractor-asteroid-container" id="ast1-cont">'+
         '<img class="distractor-asteroid" id="ast1" src="img/asteroid.png" alt="asteroid">'+
     '</div>'+
     '<div class="distractor-asteroid-container" id="ast2-cont">'+
         '<img class="distractor-asteroid" id="ast2" src="img/asteroid.png" alt="asteroid">'+
     '</div>'+
     '<div class="distractor-asteroid-container" id="ast3-cont">'+
         '<img class="distractor-asteroid" id="ast3" src="img/asteroid.png" alt="asteroid">'+
     '</div>'+
     '<div class="distractor-asteroid-container" id="ast4-cont">'+
         '<img class="distractor-asteroid" id="ast4" src="img/asteroid.png" alt="asteroid">'+
     '</div>'+
     '<div class="distractor-asteroid-container" id="ast5-cont">'+
         '<img class="distractor-asteroid" id="ast5" src="img/asteroid.png" alt="asteroid">'+
     '</div>'+
        //aliens
        '<div class="distractor-alien-container" id="alien5-cont">'+
            '<img class="distractor-alien" id="alien5" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien4-cont">'+
            '<img class="distractor-alien" id="alien4" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien3-cont">'+
            '<img class="distractor-alien" id="alien3" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien2-cont">'+
        '   <img class="distractor-alien" id="alien2" src="img/alien.png" alt="alien">'+
        '</div>'+
        '<div class="distractor-alien-container" id="alien1-cont">'+
            '<img class="distractor-alien" id="alien1" src="img/alien.png" alt="alien">'+
        '</div>'+
        //more asteroids
        '<div class="distractor-asteroid-container" id="ast6-cont">'+
        '<img class="distractor-asteroid" id="ast6" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast7-cont">'+
        '<img class="distractor-asteroid" id="ast7" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast8-cont">'+
        '<img class="distractor-asteroid" id="ast8" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast9-cont">'+
        '<img class="distractor-asteroid" id="ast9" src="img/asteroid.png" alt="asteroid">'+
    '</div>'+
    '<div class="distractor-asteroid-container" id="ast10-cont">'+
        '<img class="distractor-asteroid" id="ast10" src="img/asteroid.png" alt="asteroid">'+
    '</div>'
    ,
    DISTRACTOR_DENSITY: 'high',
    MESSAGES: {
        CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Nice flying!</div></div>',
        INCORRECT: '<div class ="centerbox feedback-message"><div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong way!</div></div>',
        TIMEOUT: '<div class ="centerbox feedback-message"><div class = center-text>Respond faster</div></div>',
        INVALID: '<div class ="centerbox feedback-message"><div class = center-text>Invalid Response</div></div>'
        
    },
    STIMS: [{
        /* Incongruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /*  Incongruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'incongruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS: [
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Left */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 37,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: 'white',
                DIRECTION: DIRECTION.LEFT,
            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
    ]
    }, {
        /* Congruent Right */
        TARGET: {
            COLOR: 'yellow',
            ONSET: 0,
            DIRECTION: DIRECTION.RIGHT,
            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
            OPACITY: 0.8,
            ANIMATION: ANIMATIONS.NONE,
            INDEX: random_index(8,1),
            VISIBILITY_DELAY: 0.05
            
        },
        DATA: {
            CORRECT_RESPONSE: 39,
            CONDITION: 'congruent',
            TRIAL_ID: 'stim'
        },
        FLANKERS:[ 
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            },
            {
                ONSET: 0,
                COLOR: "white",
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE
            }
        ]
    }],
    PARAMETERS: {
        LENGTH: 240,
        TIMING_FEEDBACK_DURATION: 500,
        STIMULI_DURATION: 250,
        RESPONSE_DURATION: 1000,
        POST_TRIAL_DURATION: 500,
        VALID_CHOICES: [37, 39],
        POSSIBLE_CHOICES: [37, 38, 39, 40], 
        TRIAL_DURATION: 1500
    },
    DISTRACTORS: {
        ONSET_MESSAGE: {
            DELAY: 500,
            DURATION: 1000, 
            MESSAGE:
            /*
            ASTEROIDS
            */
                    '<div class="centerbox feedback-message animated flash">'+
                        '<div style="COLOR:red;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">'+
                            '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                                'DANGER:'+
                            '<svg class="red animated shake" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>'+
                            '<br>ASTEROID IMPACT!'+
                        '</div>'+
                    '</div>'+
                    '<div id="asteroid-parent">'+
                        '<div id="asteroid-container-1">'+
                            '<img id="asteroid-1" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-2">'+
                            '<img id="asteroid-2" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-3">'+
                            '<img id="asteroid-3" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                        '<div id="asteroid-container-4">'+
                            '<img id="asteroid-4" src="img/asteroid.png" alt="asteroid">'+
                        '</div>'+
                    '</div>',
            }
        //format for MESSAGE: '<div class="centerbox feedback-message animated flash"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = "center-text distractor-message">Incoming Blaster Fire!</div></div>'
    },
        AUDIO: {
                    ENABLED: true,
                    SOURCE: './sounds/all-sounds.mp3',
                    BACKGROUND: [13000, 123148, true],
                    CORRECT: [0, 1097],
                    INCORRECT: [2000, 862],
                    TIMEOUT: [6000, 313],
                    INVALID: [4000, 705],
                    //DISTRACTOR: [0, 0],
                    DISTRACTOR: [9000, 2064], //asteroid
                   // DISTRACTOR: [7000, 1593] //blaster fire
                },
    BLOCK_FEEDBACK : [
        {
            THRESHOLD: {
                MIN: 0,
                MAX: 95
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 821,
                    MAX: 99999
                },
                DIFFERENCE: {
                    MIN: 21,
                    MAX: 99999
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level not passed...yet!</span></h1>"+
                    "<p class = block-text>Space is cold and unforgiving. With a little more pratice, though, you\'re sure to get the hang of this.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.NEUTRAL
        },
        {
            THRESHOLD: {
                MIN: 95,
                MAX: 100.001
            },
            RT_THRESHOLDS: {
                MEDIAN: {
                    MIN: 0,
                    MAX: 820
                },
                DIFFERENCE: {
                    MIN: -99999,
                    MAX: 20
                }
            },
            MESSAGE: "<div class='container'>"+
            "<div class= 'jclone'>"+
                "<div class='container-grid-s'>"+
                "<div class='gridchild-1-s'>"+
                    "<h1><span class='thresh-message'>Level Complete!</span></h1>"+
                    "<p class = block-text>Success! You\'ve made it through the asteroids and to the new planet. That\'s all the flying you\'ll have to do for a while. You and your team are about to make some discoveries of galatic proportions!</p>"+
                    "<h2><span class='thresh-message-green'>GAME OVER</span></h2>"+
                    "<p class = block-text>Thanks for playing. This task was designed to help you to practice focusing your attention and controlling the urge to respond to unhelpful distractions in your surroundings. There are many other times in life where you need to keep your attention focused and ignore distractions. Hopefully this skill will help you in those situations, also.</p>"+
                    "<p class='block-text'> Press <b>any key</b> to continue. </p>" +
                "</div>"+
                "<div class='gridchild-2-s'>"+
                    // "<img class='img-intro ' src='img/instructions/hud.jpg'>"+
                "</div>"+
            "</div>"+
        "</div>",
        ADVANCE: ADVANCE.GAMEOVER
        }
    ]
},
}