const PRELOAD = {
    AUDIO: [
        "sounds/background/cavern.mp3",
        "sounds/background/farm.mp3",
        "sounds/background/sneak.mp3",
        "sounds/background/stranger-things-fade.mp3",
        "sounds/fx/fxLvl0.mp3",
        "sounds/fx/fxLvl1.mp3",
        "sounds/fx/fxLvl10.mp3",
        "sounds/fx/fxLvl2.mp3",
        "sounds/fx/fxLvl4.mp3",
        "sounds/fx/fxLvl7.mp3",
    ],
    IMAGES: [
        "img/arrows/arrow-l-yellow.svg",
        "img/arrows/arrow-r-white.svg",
        "img/goons/dragon.svg",
        "img/goons/fire.svg",
        "img/goons/ghost-blue.png",
        "img/goons/ghost-green.png",
        "img/goons/ghost.png",
        "img/goons/goblin-large.png",
        "img/goons/goblin-small.png",
        "img/goons/minion-1.png",
        "img/goons/minrope.png",
        "img/goons/mummy.png",
        "img/goons/scarecrow.png",
        "img/goons/spider-hang.png",
        "img/goons/spider-noweb.png",
        "img/goons/spider-web.svg",
        "img/goons/spider.png",
        "img/goons/spiderhanger.svg",
        "img/objects/bones_sword.svg",
        "img/svg/corn.svg",
        "img/svg/dungeoncrawler_bg.svg",
        "img/svg/ice-cavern.svg",
        "img/svg/lobby.svg",
        "img/svg/treasure-cave.svg",
        "img/weapons/gold-sword.svg",
        "img/weapons/pitchfork.svg",
        "img/weapons/sword.png"
    ]
};

const CONFIGURATION = {
    /* ////////////////////////////////
    // -------PRACTICE SECTION (SCARECROW)---------
    --------- LEVEL 0 --------- 
    ////////////////////////////// */
    0: {
        INSTRUCTIONS: [
            '<div id="title">'+
                '<h2 class="animated slideInDown">Welcome To</h2>'+
                '<h1 class="animated fadeInUp">DUNGEON CRAWLER</h1>'+
            '</div>',
            "<div class='instructions-box'>"+
                "<h1 class='level-title'>Practice Level,</h1><h2>The Journey Begins</h2>"+
                // "<img class='instructions-image' src=''>"
                "<p class='instructions-paragraph'>You are a lowly peasant in the realm of Otteathan. In your village, there's a legend that elders tell around the campfire of a hidden treasure--one burried deep within the caverns of Xorriarath. Anyone that found this treasure would gain unspeakable power - the kind of power that could overthrow the oppresive regime of Lord Galgadoth's Xarean Empire and restore peace to the lands!</p>"+
            "</div>",
            "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                "<p class='instructions-paragraph'>There's one problem -- the treasure is heavily guarded. There's talk of goblins, ferocious beasts, and even a dragon. Anyone that dare pursue this treasure must also possess the sharpest of combat skills.</p>"+
            "</div>",
            "<div class='instructions-box'>"+
            // "<img class='instructions-image' src=''>"
            "<p class='instructions-paragraph'>Today, you've decided to play hookie from your duties as a farm hand and to embark on the quest of a lifetime to find this treasure! But first, you need to practice your swordsmanship (pitch-forkmanship?). That scarecrow will do as a practice target. Not too loud, though, or your boss will hear and put you back to work!</p>"+
            "</div>",
            "<div class='instructions-box'>"+
                "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                // "<img class='instructions-image' src=''>"
                "<div class='flex-row'>"+
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
                "<div align='center' class ='tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "</div>"+
                "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
            "</div>",
            "<div class='instructions-box'>"+
            "<h1 class='level-title'>RULES OF COMBAT</h1>"+
            // "<img class='instructions-image' src=''>"
            "<div class='flex-row'>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+    
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
            "</div>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "<div align='center' class ='tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "</div>"+
            "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
        "</div>",
        //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
        ],
        ROOM: 'img/svg/corn.svg',
        WEAPON_LAYER: 
        "<div id='scene-weapon'>"+
        "<div class='weapon-container' id='fork-container'><img id='fork' class='fork-steady' src='img/weapons/pitchfork.svg'></div>"+
        "</div>",
        DISTRACTOR_LAYER: 
        "<div id='scene-distractor'>"+
            "<div id='boss-container' class='boss-container scarecrow-boss-container'>"+
                    "<img id='boss' class='boss scarecrow' src='img/goons/scarecrow.png'>"+
            "</div>"+
        "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
        PARAMETERS: {
            LENGTH: 20, //20
            TIMING_FEEDBACK_DURATION: 500,
            STIMULI_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 500,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TRIAL_DURATION: 2000
        },
        AUDIO: {
            ENABLED: true,
            SOURCE: "sounds/fx/fxLvl0.mp3",
            BACKGROUND: './sounds/background/farm.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
            CORRECT: [0, 576],
            INCORRECT: [2000, 1415],
            TIMEOUT: [9000, 1432],
            INVALID: [4000, 1902],
            DISTRACTOR: [0, 0],
            // DISTRACTOR: [9000, 2064], //asteroid
            // DISTRACTOR: [7000, 1593] //blaster fire
            BOSS_DAMAGE: [0,0],
            BOSS_ATTACK: [6000, 1144]
        },
        DISTRACTORS: {
            //must include values here for task to run. For no distractor, DELAY: 0, DURATION: 0, MESSAGE: ""
            //timing in ms
            ONSET_MESSAGE: {
                DELAY: 0,
                DURATION: 0,
                MESSAGE: ''
                //  "<div class='boss-container goblin-boss-container'>"+
                //     "<img class='minion' src='img/goons/goblin-small.png'>"+
                // "</div>"
            }
        },
        BLOCK_FEEDBACK: [
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
                MESSAGE: 
                "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                    "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                    "<p class='instructions-paragraph'>Who knew a scarecrow could be such a worthy opponent? You'll have to keep practicing before you're ready for what awaits in the caverns of Xorriarath!</p>"+
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
                MESSAGE:
                    "<div class='instructions-box'>"+
                    // "<img class='instructions-image' src=''>"
                    "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                    "<p class='instructions-paragraph'>Excellent work! You've brushed up your combat skills, and while you might not feel ready to take on a dragon, it's getting late, and if you are going to go on this adventure, it's now or never!</p>"+
                    "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ],
    },
    /* ////////////////////////////////
    -----------SECTION A---------------
    --------- LEVEL 1: EASY (SPIDER)--------- 
    ////////////////////////////// */ 
    1: {
        INSTRUCTIONS: [
            "<div class='instructions-box'>"+
                "<h1 class='level-title'>Level I,</h1><h2> Enter the Caverns!</h2>"+
                // "<img class='instructions-image' src=''>"
                "<p class='instructions-paragraph'>You've made it the the entrace of the caverns of Xorriarath! This is where the real challenge begins. As you walk ahead through the gates, you're met with your first foe--a hiddeous spider! It's fangs may be sharp, but so is your trusty pitchfork!</p>"+
            "</div>",
            "<div class='instructions-box'>"+
                "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                // "<img class='instructions-image' src=''>"
                "<div class='flex-row'>"+
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
                "<div align='center' class ='tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "</div>"+
                "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
            "</div>",
            "<div class='instructions-box'>"+
            "<h1 class='level-title'>RULES OF COMBAT</h1>"+
            // "<img class='instructions-image' src=''>"
            "<div class='flex-row'>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+    
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
            "</div>"+
            "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "<div align='center' class ='tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "</div>"+
            "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
        "</div>",
         //Audio check
         '<div class="instructions-box">'+
         '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
             "<div class='flex-row'>"+
                 '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
             "</div>"+
         '</div>',
         //Begin
         '<div class="instructions-box">'+
             "<h1 class='level-title'>Begin Level</h1>"+
                 '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
         '</div>',
        
        ],
        ROOM: 'img/svg/dungeoncrawler_bg.svg',
        WEAPON_LAYER: 
        "<div id='scene-weapon'>"+
        "<div class='weapon-container' id='fork-container'><img id='fork' class='fork-steady' src='img/weapons/pitchfork.svg'></div>"+
        "</div>",
        DISTRACTOR_LAYER: 
        "<div id='scene-distractor'>"+
            "<div id='boss-container' class='boss-container spider-boss-container'>"+
                    "<img id='boss' class='boss spider' src='img/goons/spider.png'>"+
            "</div>"+
        "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /* Congruent Right */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
                MESSAGE: ""
            }
        },
        AUDIO: {
            ENABLED: true,
            SOURCE: "sounds/fx/fxLvl1.mp3",
            BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
            CORRECT: [0, 400],
            INCORRECT: [2000, 1415],
            TIMEOUT: [18000, 2025],
            INVALID: [4000, 1903],
            DISTRACTOR: [0, 0],
            // DISTRACTOR: [9000, 2064], //asteroid
            // DISTRACTOR: [7000, 1593] //blaster fire
            BOSS_DAMAGE: ()=>{
                let sprite_list = [
                    [9000, 1291],
                    [12000, 1778],
                    [15000, 1291],
                ];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            BOSS_ATTACK: [6000, 1144]
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
                "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                    "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                    "<p class='instructions-paragraph'>This is more than you bargained for. Time to get out of here so you can catch your breath and try again.</p>"+
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
                MESSAGE: 
                "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                "<p class='instructions-paragraph'>Excellent work! You've managed to land a few blows on this spider, but it's far from over. It looks like you've made it angry.</p>"+
                "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    // /* ////////////////////////////////
    //-------SECTION A-----------------
    // --------- LEVEL 2: EASY-TURBO (SPIDER) --------- 
    // ////////////////////////////// */ 
    2: {
        INSTRUCTIONS: [
            "<div class='instructions-box'>"+
            "<h1 class='level-title'>Level II,</h1><h2> You've Made It Angry...</h2>"+
            // "<img class='instructions-image' src=''>"
            "<p class='instructions-paragraph'>Nice work holding your own against this thing. But just like your grandpappy told you--don't get between a hungry spider and its prey (which in this case, is you!). This thing is wounded but not giving up. You're gonna have to fight even faster to avoid its thrashing attacks and to keep dealing out damage.</p>"+
        "</div>",
        "<div class='instructions-box'>"+
            "<h1 class='level-title'>RULES OF COMBAT</h1>"+
            // "<img class='instructions-image' src=''>"
            "<div class='flex-row'>"+
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
            "<div align='center' class ='tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
            "</div>"+
            "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
        "</div>",
        "<div class='instructions-box'>"+
        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
        // "<img class='instructions-image' src=''>"
        "<div class='flex-row'>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
        "</div>"+    
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
        "</div>"+
        "<div align='center' class ='tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
        "</div>"+
        "</div>"+
        "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
    "</div>", //Audio check
    '<div class="instructions-box">'+
    '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
        "<div class='flex-row'>"+
            '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
        "</div>"+
    '</div>',
    //Begin
    '<div class="instructions-box">'+
        "<h1 class='level-title'>Begin Level</h1>"+
            '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
    '</div>',
],
        ROOM: 'img/svg/dungeoncrawler_bg.svg',
        WEAPON_LAYER: 
        "<div id='scene-weapon'>"+
        "<div class='weapon-container' id='fork-container'><img id='fork' class='fork-steady' src='img/weapons/pitchfork.svg'></div>"+
        "</div>",
        DISTRACTOR_LAYER: 
        "<div id='scene-distractor'>"+
        "<div id='boss-container' class='boss-container spider-boss-container'>"+
                "<img id='boss' class='boss spider' src='img/goons/spider.png'>"+
        "</div>"+
        "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /*  Incongruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.LEFT,
                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 37,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
                }
            ]
        }, {
            /* Congruent Right */
            TARGET: {
                COLOR: "yellow",
                ONSET: 0,
                DIRECTION: DIRECTION.RIGHT,
                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                OPACITY: 0.8,
                ANIMATION: ANIMATIONS.NONE,
                INDEX: 2,

            },
            DATA: {
                CORRECT_RESPONSE: 39,
                CONDITION: "congruent",
                TRIAL_ID: "stim"
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
            SOURCE: "sounds/fx/fxLvl2.mp3",
            BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
            CORRECT: [0, 400],
            INCORRECT: [2000, 1415],
            TIMEOUT: [18000, 2025],
            INVALID: [4000, 1903],
            DISTRACTOR: [0, 0], //string pulse
            BOSS_DAMAGE: ()=>{
                let sprite_list = [
                    [9000, 1291],
                    [12000, 1778],
                    [15000, 1291],
                ];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            BOSS_ATTACK: [6000, 1144]
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
                "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                    "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                    "<p class='instructions-paragraph'>Maybe this treasure can wait. Retreat for now and come back tomorrow!</p>"+
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
                MESSAGE: 
                "<div class='instructions-box'>"+
                // "<img class='instructions-image' src=''>"
                    "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                    "<p class='instructions-paragraph'>SUCCESS: Sweet forkmanship! This thing should have thought twice before messing with you! If you can hang in there, you might just defeat it! </p>"+
                    "</div>",
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    /* ////////////////////////////////
    --------- SECTION B --------- 
    ----------LEVEL 3: TINY SPIDERS--------
    ////////////////////////////// */
    3: {
        INSTRUCTIONS: [
            "<div class='instructions-box'>"+
            "<h1 class='level-title'>Level III,</h1><h2> Tiny Spiders!</h2>"+
            // "<img class='instructions-image' src=''>"
            "<p class='instructions-paragraph'>You're finally wearing this thing down, but what's that noise? Could it be more spiders? Gross, these things are everywhere! Watch out!</p>"+
        "</div>",
        "<div class='instructions-box'>"+
            "<h1 class='level-title'>RULES OF COMBAT</h1>"+
            // "<img class='instructions-image' src=''>"
            "<div class='flex-row'>"+
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
            "<div align='center' class ='tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
            "</div>"+
            "</div>"+
            "<p class='instructions-paragraph'><span class='animated tada' style='display: inline-block; color: yellow; font-weight: 900'>HEADS UP!</span> The distractor arrows look just like the center arrow now. This is because as the battle grows in complexity, it's more difficulty to tell where to aim your strike. </p>"+
            "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
            "</div>",
        "<div class='instructions-box'>"+
        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
        // "<img class='instructions-image' src=''>"
        "<div class='flex-row'>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+    
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "<div align='center' class ='tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "</div>"+
        "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
    "</div>",
     //Audio check
     '<div class="instructions-box">'+
     '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
         "<div class='flex-row'>"+
             '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
         "</div>"+
         
     '</div>',
     //Begin
     '<div class="instructions-box">'+
         "<h1 class='level-title'>Begin Level</h1>"+
             '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
     '</div>',
        ],
        ROOM: 'img/svg/dungeoncrawler_bg.svg',
        WEAPON_LAYER: 
        "<div id='scene-weapon'>"+
        "<div class='weapon-container' id='fork-container'><img id='fork' class='fork-steady' src='img/weapons/pitchfork.svg'></div>"+
        "</div>",
        DISTRACTOR_LAYER: 
        "<div id='scene-distractor'>"+
        //spider boss
        "<div id='boss-container' class='boss-container spider-boss-container'>"+
                "<img id='boss' class='boss spider' src='img/goons/spider.png'>"+
        "</div>"+
        "</div>"+
         //spider hangers
        "<div class='spider-hanger' id='spider-hanger-1'>"+
            "<img src='img/goons/spiderhanger.svg'>"+
        "</div>"+
        "<div class='spider-hanger' id='spider-hanger-2'>"+
            "<img src='img/goons/spiderhanger.svg'>"+
        "</div>"+
        "<div class='spider-hanger' id='spider-hanger-3'>"+
            "<img src='img/goons/spiderhanger.svg'>"+
        "</div>"+
        "<div class='spider-hanger' id='spider-hanger-4'>"+
            "<img src='img/goons/spiderhanger.svg'>"+
        "</div>"
        ,
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
        STIMS: [{
            /* Incongruent Right */
            TARGET: {
                COLOR: "yellow",
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
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
            },
            FLANKERS: [
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
            /*  Incongruent Left */
            TARGET: {
                COLOR: "yellow",
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
                CONDITION: "incongruent",
                TRIAL_ID: "stim"
            },
            FLANKERS: [
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
        }, {
            /* Congruent Left */
            TARGET: {
                COLOR: "yellow",
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
                CONDITION: "congruent",
                TRIAL_ID: "stim"
            },
            FLANKERS: [
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
                COLOR: "yellow",
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
                CONDITION: "congruent",
                TRIAL_ID: "stim"
            },
            FLANKERS: [
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
            LENGTH: 200, //200
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
                DURATION: 2000,
                MESSAGE: "<div class='distractor-container'>"+

                //hanging spiders
                // "<div class='mini-spider' id='mini-spider-hang-1'>"+
                //     "<img src='img/goons/spider-hang.png'>"+
                // "</div>"+

                // "<div class='mini-spider' id='mini-spider-hang-2'>"+
                //     "<img src='img/goons/spider-hang.png'>"+
                // "</div>"+
                
                //crawling spiders
                "<div class='mini-spider' id='mini-spider-1'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-2'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-3'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-4'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-5'>"+
                "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-6'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-7'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "<div class='mini-spider' id='mini-spider-8'>"+
                    "<img src='img/goons/spider-noweb.png'>"+
                "</div>"+

                "</div>"
            }
        },
            AUDIO: {
                ENABLED: true,
                SOURCE: "sounds/fx/fxLvl2.mp3",
                BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                CORRECT: [0, 400],
                INCORRECT: [2000, 1415],
                TIMEOUT: [18000, 2025],
                INVALID: [4000, 1903],
                DISTRACTOR: [29000, 1991], //string pulse
                BOSS_DAMAGE: ()=>{
                    let sprite_list = [
                        [9000, 1291],
                        [12000, 1778],
                        [15000, 1291],
                    ];
                    let max = sprite_list.length -1;
                    let min = 0;
                    let index = Math.floor(Math.random() * (max - min + 1)) + min;
                    return sprite_list[index];
                },
                BOSS_ATTACK: [6000, 1144]
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
                    MESSAGE: 
                    "<div class='instructions-box'>"+
                    // "<img class='instructions-image' src=''>"
                        "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                        "<p class='instructions-paragraph'>You're covered in cobwebs and in serious need of a shower. Come back fresh to finish these things off later.</p>"+
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
                    MESSAGE: 
                    "<div class='instructions-box'>"+
                    // "<img class='instructions-image' src=''>"
                        "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                        "<p class='instructions-paragraph'>Brilliant! The evil arachnids retreat into the nooks and crannies from whence they came.</p>"+
                        "<div class='weapon-message'>"+
                                "<div class='weapon-message-text'>"+
                                "<h2 class='level-title gold'>NEW WEAPON<span class='weapon-title'><span class='elipses'>:</span>SWORD</span></h2>"+
                                "<p class='instructions-paragraph'>What's this? Looks like the remains of the spiders' last victim. Poor chap. You'd better take that sword--a pitchfork is hardly a proper weapon for a dungeon slayer like yourself!</p>"+
                                "</div>"+
                                "<img class='weapon-image' src='img/objects/bones_sword.svg'>"+
                        "</div>"+
                        "</div>",
                    ADVANCE: ADVANCE.FORWARD
                }
            ]
        },
        /* ////////////////////////////////
    --------- SECTION B --------- 
    ----------LEVEL 4: TROLL--------
    ////////////////////////////// */
        4: {
            INSTRUCTIONS: [
                "<div class='instructions-box'>"+
            "<h1 class='level-title'>Level IV,</h1><h2> Troll in the Lobby</h2>"+
            // "<img class='instructions-image' src=''>"
            "<p class='instructions-paragraph'>You venture further down the corridors until they open up into a larger room. Theres a large wooden door on one end, and a chest on the other. Last but not least, a giant troll bars the way! This thing does not look friendly. Rather than waste time asking nicely, it's time to use your budding combat skills to defeat this beast and get through that door (and maybe get to whatever is hidden in that chest).</p>"+
        "</div>",
        "<div class='instructions-box'>"+
            "<h1 class='level-title'>RULES OF COMBAT</h1>"+
            // "<img class='instructions-image' src=''>"
            "<div class='flex-row'>"+
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
            "<div align='center' class ='tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
            "</div>"+
            "</div>"+
            "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
        "</div>",
        "<div class='instructions-box'>"+
        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
        // "<img class='instructions-image' src=''>"
        "<div class='flex-row'>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+    
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
        "</div>"+
        "<div align='center' class =' tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "<div align='center' class ='tight'>"+
            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
        "</div>"+
        "</div>"+
        "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
    "</div>",
    //Audio check
    '<div class="instructions-box">'+
    '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
        "<div class='flex-row'>"+
            '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
        "</div>"+
    '</div>',
    //Begin
    '<div class="instructions-box">'+
        "<h1 class='level-title'>Begin Level</h1>"+
            '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
    '</div>',
            ],
            ROOM: 'img/svg/lobby.svg',
        WEAPON_LAYER: 
        "<div id='scene-weapon'>"+
        "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/sword.png'></div>"+
        "</div>",
        DISTRACTOR_LAYER: 
        "<div id='scene-distractor'>"+
            "<div id='boss-container' class='boss-container goblin-boss-container'>"+
                    "<img id='boss' class='boss goblin' src='img/goons/goblin-large.png'>"+
            "</div>"+
        "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
            STIMS: [{
                /* Incongruent Right */
                TARGET: {
                    COLOR: "yellow",
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
                    CONDITION: "incongruent",
                    TRIAL_ID: "stim"
                },
                FLANKERS: [
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
                /*  Incongruent Left */
                TARGET: {
                    COLOR: "yellow",
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
                    CONDITION: "incongruent",
                    TRIAL_ID: "stim"
                },
                FLANKERS: [
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
            }, {
                /* Congruent Left */
                TARGET: {
                    COLOR: "yellow",
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
                    CONDITION: "congruent",
                    TRIAL_ID: "stim"
                },
                FLANKERS: [
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
                    COLOR: "yellow",
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
                    CONDITION: "congruent",
                    TRIAL_ID: "stim"
                },
                FLANKERS: [
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
                    DURATION: 1200,
                    MESSAGE: 
                    "<div class='distractor-container'>"+
            
            //troll minions
            "<div class='mini-troll' id='mini-troll-1'>"+
                "<img src='img/goons/goblin-small.png'>"+
            "</div>"+

            "<div class='mini-troll' id='mini-troll-2'>"+
                "<img src='img/goons/minion-1.png'>"+
            "</div>"+

            "<div class='mini-troll' id='mini-troll-3'>"+
                "<img src='img/goons/minrope.png'>"+
            "</div>"+

            "</div>"
                }
            },
            AUDIO: {
                ENABLED: true,
                SOURCE: "sounds/fx/fxLvl4.mp3",
                BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                CORRECT: [0, 986],
                INCORRECT: [29000, 1415],
                TIMEOUT: [46000, 2025],
                INVALID: [31000, 1903],
                DISTRACTOR: [39000, 2606], //minion laugh
                BOSS_DAMAGE: ()=>{
                    let sprite_list = [
                        [26000, 1724],
                        [10000, 2210],
                        [14000, 1554],
                    ];
                    let max = sprite_list.length -1;
                    let min = 0;
                    let index = Math.floor(Math.random() * (max - min + 1)) + min;
                    return sprite_list[index];
                },
                BOSS_ATTACK: [6000, 2396]
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
                                MAX: 99999
                            },
                            DIFFERENCE: {
                                MIN: 51,
                                MAX: 99999
                            }
                        },
                        MESSAGE: 
                        "<div class='instructions-box'>"+
                        // "<img class='instructions-image' src=''>"
                            "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                            "<p class='instructions-paragraph'>This is exhausing, and this troll smells awful. Time to get out of here so you can catch your breath and try again.</p>"+
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
                        MESSAGE: 
                        "<div class='instructions-box'>"+
                        // "<img class='instructions-image' src=''>"
                            "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                            "<p class='instructions-paragraph'>Excellent work! You're really wearing this troll down, but the fight isn't over yet!</p>"+
                            "</div>",
                        ADVANCE: ADVANCE.FORWARD
                    }
                ]
            },
/* ////////////////////////////////
--------------------------------
--------- LEVEL 5: TROLL + MINIONS --------- 
////////////////////////////// */ 
            5: {
                INSTRUCTIONS: [
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>Level V,</h1><h2> You've Got Company!</h2>"+
                    // "<img class='instructions-image' src=''>"
                    "<p class='instructions-paragraph'>You've fought valiantly, but this beast is far from giving up. Who said defeating a troll was easy? The sound of footsteps fill the echoing chambers. Trolls like these are known to travel in packs. Careful, you've got company!</p>"+
                "</div>",
                "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
                "</div>",
                "<div class='instructions-box'>"+
                "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                // "<img class='instructions-image' src=''>"
                "<div class='flex-row'>"+
                "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                "</div>"+    
                "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                "</div>"+
                "<div align='center' class ='tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                "</div>"+
                "</div>"+
                "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
            "</div>",
            //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                ],
                ROOM: 'img/svg/lobby.svg',
                WEAPON_LAYER: 
                "<div id='scene-weapon'>"+
                "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/sword.png'></div>"+
                "</div>",
                DISTRACTOR_LAYER: 

                "<div class='mini-troll' id='mini-troll-4'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-5'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-6'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-7'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-8'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+

                "<div id='scene-distractor'>"+
                "<div id='boss-container' class='boss-container goblin-boss-container'>"+
                        "<img id='boss' class='boss goblin' src='img/goons/goblin-large.png'>"+
                "</div>"+
                "</div>"

            // "<div class='mini-troll' id='mini-troll-2'>"+
            //     "<img src='img/goons/minion-1.png'>"+
            // "</div>"+

            // "<div class='mini-troll' id='mini-troll-3'>"+
            //     "<img src='img/goons/minrope.png'>"+
            // "</div>"
            
            ,
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                STIMS: [{
                    /* Incongruent Right */
                    TARGET: {
                        COLOR: "yellow",
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
                        CONDITION: "incongruent",
                        TRIAL_ID: "stim"
                    },
                    FLANKERS: [
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
                    /*  Incongruent Left */
                    TARGET: {
                        COLOR: "yellow",
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
                        CONDITION: "incongruent",
                        TRIAL_ID: "stim"
                    },
                    FLANKERS: [
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
                }, {
                    /* Congruent Left */
                    TARGET: {
                        COLOR: "yellow",
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
                        CONDITION: "congruent",
                        TRIAL_ID: "stim"
                    },
                    FLANKERS: [
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
                        COLOR: "yellow",
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
                        CONDITION: "congruent",
                        TRIAL_ID: "stim"
                    },
                    FLANKERS: [
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
                        "<div class='distractor-container'>"+
                
                //troll minions
                "<div class='mini-troll' id='mini-troll-1'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+

                "<div class='mini-troll' id='mini-troll-2'>"+
                    "<img src='img/goons/minion-1.png'>"+
                "</div>"+

                "<div class='mini-troll' id='mini-troll-3'>"+
                    "<img src='img/goons/minrope.png'>"+
                "</div>"+

                "</div>"
                    },
                },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl4.mp3",
                        BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [0, 986],
                        INCORRECT: [29000, 1415],
                        TIMEOUT: [46000, 2025],
                        INVALID: [31000, 1903],
                        DISTRACTOR: [39000, 2606], //minion laugh
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [26000, 1724],
                                [10000, 2210],
                                [14000, 1554],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [6000, 2396]
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                                "<p class='instructions-paragraph'>One troll was bad enough. The troll stench has gotten unbearable with these minions. Time to get out of here so you can catch your breath and try again.</p>"+
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>Well done! These trolls are starting to get discouraged. They've never seen a warrior the likes of you!</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
            },
    /* ////////////////////////////////
--------------------------------
--------- LEVEL 6: TROLL + MINIONS + SPIDERS (TURBO) --------- 
////////////////////////////// */ 
                6: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level VI,</h1><h2>The More The Merrier</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>You've proven to be a real challange to these trolls, but your arachnid friends are back! This is going to take everything you've got. Good luck!</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating possible strike points at a given moment.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+    
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-yellow.svg'>"+
                    "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>For now, pay attention to the center arrow--if it's pointing to the right, swing your weapon to the right. If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you!</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/lobby.svg',
                WEAPON_LAYER: 
                "<div id='scene-weapon'>"+
                "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/sword.png'></div>"+
                "</div>",
                DISTRACTOR_LAYER: 

                //mini trolls
                "<div class='mini-troll' id='mini-troll-4'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-5'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-6'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-7'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                "<div class='mini-troll' id='mini-troll-8'>"+
                    "<img src='img/goons/goblin-small.png'>"+
                "</div>"+
                
                //boss
                "<div id='scene-distractor'>"+
                "<div id='boss-container' class='boss-container goblin-boss-container'>"+
                        "<img id='boss' class='boss goblin' src='img/goons/goblin-large.png'>"+
                "</div>"+
                "</div>"+
                
                //spider hangers
                   "<div class='spider-hanger' id='spider-hanger-1'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-2'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-3'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-4'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"
                ,
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
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
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
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
                    }, {
                        /* Congruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
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
                            DELAY: 550,
                            DURATION: 1200,
                            MESSAGE: 
                            "<div class='distractor-container'>"+

                                    //spider web
                                    "<div class='spiderweb' id='spiderweb'>"+
                                        "<img src='img/goons/spider-web.svg'>"+
                                    "</div>"+
                    
                                    //troll minions
                                    "<div class='mini-troll' id='mini-troll-1'>"+
                                        "<img src='img/goons/goblin-small.png'>"+
                                    "</div>"+
                    
                                    "<div class='mini-troll' id='mini-troll-2'>"+
                                        "<img src='img/goons/minion-1.png'>"+
                                    "</div>"+
                    
                                    "<div class='mini-troll' id='mini-troll-3'>"+
                                        "<img src='img/goons/minrope.png'>"+
                                    "</div>"+
            
                            "</div>"
                        },
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl4.mp3",
                        BACKGROUND: './sounds/background/cavern.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [0, 986],
                        INCORRECT: [29000, 1415],
                        TIMEOUT: [46000, 2025],
                        INVALID: [31000, 1903],
                        DISTRACTOR: [39000, 2606], //minion laugh
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [26000, 1724],
                                [10000, 2210],
                                [14000, 1554],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [6000, 2396]
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
                            
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                                "<p class='instructions-paragraph'>This is madness. You're starting to realize why no one has found this treasure yet. But you know that with a little more pratice, you'll defeat these goons! Retreat for now, try again later.</p>"+
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>Excellent work! You've defeated the troll's leader, and the troll minions screech as they flee back into the darkness of the caverns.</p>"+
                                "<div class='weapon-message'>"+
                                "<div class='weapon-message-text'>"+
                                    "<h2 class='level-title gold'>NEW WEAPON<span class='weapon-title'><span class='elipses'>:</span>BOW <span class='elipses'>&</span> ARROW</span></h2>"+
                                    "<p class='instructions-paragraph'>The troll boss had some keys on its belt. You use the key to open the chest and find a bow and set of arrows! These could come in handy later for far away targets. Better take it with you.</p>"+
                                "</div>"+
                                    "<img class='weapon-image' src='img/objects/bow-arrow-chest.svg'>"+
                                "</div>"+
                                "</div>",
                        ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                7: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level VII,</h1><h2>A Chilling Discovery</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>Another of the troll's keys opened the door. With your newfound confidence and the stench of troll still stuck in your nostrils, you forge ahead into the darkness. As you sneak through the tunnels, the air begins to feel colder. You can see your breath by the time the tunnels open up into a massive ice cavern. At the end of the cavern, a sinister set of eyes is glaring at you--a mummy! Just as the legends foretold. He does not look happy to see you...Use that bow and arrow to keep some distance between you and the mummy.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land an arrow to your enemy, you must aim your shot carefully. In this game, you will see a set of arrows on the screen, indicating where you should shoot at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, shoot to the right.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, shoot left. There are more distractor arrows this time--shooting a bow is more difficult than swinging a sword! Just like before, though. the other arrows are distractors. Ignore them, or your arrow will fly astray and your opponent might get a shot at you!</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/ice-cavern.svg',
                WEAPON_LAYER: 
                "<div id='scene-weapon'>"+
                    "<div class='weapon-container' id='bow-container'><div id='bow' class='bow-steady'</div></div>"+
                    "</div>",
                DISTRACTOR_LAYER: 
                "<div id='scene-distractor'>"+
                    "<div id='boss-container' class='boss-container mummy-boss-container'>"+
                            "<img id='boss' class='boss mummy' src='img/goons/mummy.png'>"+
                    "</div>"+
                "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            MESSAGE: "",
                        }
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl7.mp3",
                        BACKGROUND: './sounds/background/sneak.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 515],
                        INCORRECT: [32000, 697],
                        TIMEOUT: [25000, 2025],
                        INVALID: [14000, 1903],
                        DISTRACTOR: [0, 0],
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [29000, 1694],
                                [19000, 4388],
                                [10000, 2008],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [1000, 6504]
                    },
                    BLOCK_FEEDBACK: [
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                                "<p class='instructions-paragraph'> The icy cold air stings your skin, and the mummy laughs as your arrows fly by him. Retreat back into the tunnels and warm up before you try again.</p>"+
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'> Sharp shooting! This bow is coming in handy, but this mummy is sure to have more tricks up his sleeve--stay alert!</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                8: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level VIII,</h1><h2>Ice Ghosts!</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>The mummy lets out an ominous groan -- it's calling to something. From the cracks in the ice, ghosts seep out like mist into the room. Don't let the ghosts distract you! Keep aiming at that mummy.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land an arrow to your enemy, you must aim your shot carefully. In this game, you will see a set of arrows on the screen, indicating where you should shoot at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, shoot to the right.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, shoot left. There are more distractor arrows this time--shooting a bow is more difficult than swinging a sword! Just like before, though. the other arrows are distractors. Ignore them, or your arrow will fly astray and your opponent might get a shot at you!</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/ice-cavern.svg',
                    WEAPON_LAYER: 
                    "<div id='scene-weapon'>"+
                        "<div class='weapon-container' id='bow-container'><div id='bow' class='bow-steady'</div></div>"+
                        "</div>",
                    DISTRACTOR_LAYER:
                    //mummy boss
                    "<div id='scene-distractor'>"+
                        "<div id='boss-container' class='boss-container mummy-boss-container'>"+
                                "<img id='boss' class='boss mummy' src='img/goons/mummy.png'>"+
                        "</div>"+
                    "</div>"+
                       //ghosts
                       "<div id=ghost-scene>"+
                       "<div class='ghost' id='ghost-1'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-2'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-3'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-4'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-5'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-5'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-6'>"+
                            "<img src='img/goons/ghost-green.png'>"+
                        "</div>"+
                        "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.RIGHT,
                            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8, 0),
                            VISIBILITY_DELAY: 0

                        },
                        DATA: {
                            CORRECT_RESPONSE: 39,
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            MESSAGE: "",
                        }
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl7.mp3",
                        BACKGROUND: './sounds/background/sneak.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 515],
                        INCORRECT: [32000, 697],
                        TIMEOUT: [25000, 2025],
                        INVALID: [14000, 1903],
                        DISTRACTOR: [0,0], //[34000, 1765], //ghost laugh
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [29000, 1694],
                                [19000, 4388],
                                [10000, 2008],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [1000, 6504]
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                                "<p class='instructions-paragraph'>These ghosts are making things very tricky, and you're getting cold again. Retreat for now and come back later.</p>"+
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>Outstanding bowmanship. If your friends from the farm could see you now. Keep fighting and you'll force these gloomy souls to retreat in no time!</p>"+
                                "</div>",
                        ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                9: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level IX,</h1><h2>world wide web</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>The spiders are back. It seems like everything in this cavern is teaming up against you. Oh well, you've dealt with these things before. They must need a reminder that you're not to be messed with!</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>While engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land an arrow to your enemy, you must aim your shot carefully. In this game, you will see a set of arrows on the screen, indicating where you should shoot at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, shoot to the right.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, shoot left. There are more distractor arrows this time--shooting a bow is more difficult than swinging a sword! Just like before, though. the other arrows are distractors. Ignore them, or your arrow will fly astray and your opponent might get a shot at you!</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/ice-cavern.svg',
                    WEAPON_LAYER: 
                    "<div id='scene-weapon'>"+
                        "<div class='weapon-container' id='bow-container'><div id='bow' class='bow-steady'</div></div>"+
                        "</div>",
                    DISTRACTOR_LAYER:
                    //mummy boss
                    "<div id='scene-distractor'>"+
                        "<div id='boss-container' class='boss-container mummy-boss-container'>"+
                                "<img id='boss' class='boss mummy' src='img/goons/mummy.png'>"+
                        "</div>"+
                    "</div>"+
                       //ghosts
                       "<div id=ghost-scene>"+
                       "<div class='ghost' id='ghost-1'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-2'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-3'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-4'>"+
                            "<img src='img/goons/ghost.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-5'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-5'>"+
                            "<img src='img/goons/ghost-blue.png'>"+
                        "</div>"+
                        "<div class='ghost' id='ghost-6'>"+
                            "<img src='img/goons/ghost-green.png'>"+
                        "</div>"+
                        "</div>"+
                                        //spider hangers
                   "<div class='spider-hanger' id='spider-hanger-1'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-2'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-3'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>"+
               "<div class='spider-hanger' id='spider-hanger-4'>"+
                   "<img src='img/goons/spiderhanger.svg'>"+
               "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
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
                            DELAY: 900,
                            DURATION: 2000,
                            MESSAGE: "<div class='distractor-container'>"+
            
                            //hanging spiders
                            // "<div class='mini-spider' id='mini-spider-hang-1'>"+
                            //     "<img src='img/goons/spider-hang.png'>"+
                            // "</div>"+
            
                            // "<div class='mini-spider' id='mini-spider-hang-2'>"+
                            //     "<img src='img/goons/spider-hang.png'>"+
                            // "</div>"+
                            
                            //timely warning ghosts
                            "<div class='ghost' id='ghosteroid-1'>"+
                            "<img src='img/goons/ghost.png'>"+
                            "</div>"+
                            "<div class='ghost' id='ghosteroid-2'>"+
                                "<img src='img/goons/ghost-blue.png'>"+
                            "</div>"+
                            "</div>"
                        }
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl7.mp3",
                        BACKGROUND: './sounds/background/sneak.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 515],
                        INCORRECT: [32000, 697],
                        TIMEOUT: [25000, 2025],
                        INVALID: [14000, 1903],
                        DISTRACTOR: [34000, 1765], //ghost laugh
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [29000, 1694],
                                [19000, 4388],
                                [10000, 2008],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [1000, 6504]
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!:</h1>"+
                                "<p class='instructions-paragraph'>This is overwhelming...leave these goons for now. Besides, you packed some corn cakes in your sack and it's about time for dinner. Take a rest and come back later.</p>"+
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
                            MESSAGE: 
                            "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>Incredible work. You've defeated the mummy, and the ghosts and spiders retreat into the icy darkness!</p>"+
                                "<div class='weapon-message'>"+
                                "<div class='weapon-message-text'>"+
                                    "<h2 class='level-title gold'>NEW WEAPON<span class='weapon-title'><span class='elipses'>:</span>GOLD SWORD</span></h2>"+
                                    "<p class='instructions-paragraph'>You make your way carefully across the icy floor and find another door to get out. But just before leaving you notice, encrusted in ice, a magnificent gold-plated sword! The bow and arrow have been fun, but this thing is too good to pass up. Take it for the challenge ahead!</p>"+
                                "</div>"+
                                    "<img class='weapon-image' src='img/objects/gold-sword-ice.svg'>"+
                                "</div>"+
                                "</div>",
                        ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                10: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level X,</h1><h2>Treasure Room</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>The tunnels beyond the ice cave seem to go on for miles...but finally the tunnels open up again into a vast chamber, with beams of light from the ceiling illuminating...<span style='color:gold; font-weight: 900'>GOLD!</span> An endless sea of it. It's everywhere! Not to mention rubies, pearls, and other precious stone's you've never learned the names of. This is it - the treasure room! You begin stuffing your sack with coins, but wait...you're not alone. You seem to have awoken the fiercest monster of all -- the <span style='color: red; font-weight: 900'>DRAGON!</span></p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>RULES OF COMBAT: You remember how to use a sword, of course. This one's a little heavier, and while it's more powerful it's a little harder to use. Like before, while engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating where you should strike at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, swing your sword to the right. </p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you! </p>"+
                "</div>",
                "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+    
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>Dragons are tricky--they use magic to confuse their opponents. Don't be fooled--Just stay focused on the yellow arrow like before.</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/treasure-cave.svg',
                WEAPON_LAYER: 
                "<div id='scene-weapon'>"+
                "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/gold-sword.svg'></div>"+
                "</div>",
                DISTRACTOR_LAYER: 
                "<div id='scene-distractor'>"+
                    "<div id='boss-container' class='boss-container dragon-boss-container'>"+
                            "<img id='boss' class='boss dragon' src='img/goons/dragon.svg'>"+
                    "</div>"+
                "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "white",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
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
                            MESSAGE: ""
                        }
                        //format for MESSAGE: ""
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl10.mp3",
                        BACKGROUND: './sounds/background/stranger-things-fade.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 986],
                        INCORRECT: [58000, 687],
                        TIMEOUT: [49000, 2025],
                        INVALID: [24000, 1903],
                        DISTRACTOR:  [0,0],//ghost laugh
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [41000, 3405],
                                [17000, 3767],
                                [0, 1494],
                                [3000, 1436],
                                [6000, 1895],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [29000, 3481]
                    },
                    BLOCK_FEEDBACK: [
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!</h1>"+
                                "<p class='instructions-paragraph'>Dragons are notoriously greedy. It's not going to give up this treasure so easily. Take cover in the shadows and regain your strength before you try again.</p>"+
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>This dragon has gotten a little too comfortable after years underground. Keep up the fight!</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                11: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level XI,</h1><h2>Flaming Mad</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>Congratulations--you've not only awoken a dragon, but now you've annoyed it. This fight is far from over...</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>RULES OF COMBAT: You remember how to use a sword, of course. This one's a little heavier, and while it's more powerful it's a little harder to use. Like before, while engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating where you should strike at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, swing your sword to the right. </p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you! </p>"+
                "</div>",
                "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+    
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>Dragons are tricky--they use magic to confuse their opponents. Don't be fooled--Just stay focused on the yellow arrow like before.</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/treasure-cave.svg',
                WEAPON_LAYER: 
                "<div id='scene-weapon'>"+
                "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/gold-sword.svg'></div>"+
                "</div>",
                DISTRACTOR_LAYER: 
                "<div id='scene-distractor'>"+
                    "<div id='boss-container' class='boss-container dragon-boss-container'>"+
                            "<img id='boss' class='boss dragon' src='img/goons/dragon.svg'>"+
                    "</div>"+
                "</div>",
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.RIGHT,
                            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8, 0),
                            VISIBILITY_DELAY: 0.15

                        },
                        DATA: {
                            CORRECT_RESPONSE: 39,
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.LEFT,
                            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.15

                        },
                        DATA: {
                            CORRECT_RESPONSE: 37,
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Left */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.LEFT,
                            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.15

                        },
                        DATA: {
                            CORRECT_RESPONSE: 37,
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Right */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.RIGHT,
                            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.15

                        },
                        DATA: {
                            CORRECT_RESPONSE: 39,
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
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
                            "<div id='distractor-container'>"+
                                "<div class='fireball-container' id='fireball-container-3'>"+
                                    "<img class='fireball' id='fireball-3' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-4'>"+
                                    "<img class='fireball' id='fireball-4' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-1'>"+
                                    "<img class='fireball' id='fireball-1' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-2'>"+
                                    "<img class='fireball' id='fireball-2' src='img/goons/fire.svg'>"+
                                "</div>"+
                            "</div>"
                        }
                        //format for MESSAGE: ""
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl10.mp3",
                        BACKGROUND: './sounds/background/stranger-things-fade.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 986],
                        INCORRECT: [58000, 687],
                        TIMEOUT: [49000, 2025],
                        INVALID: [24000, 1903],
                        DISTRACTOR:  [11000,4180],//
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [41000, 3405],
                                [17000, 3767],
                                [0, 1494],
                                [3000, 1436],
                                [6000, 1895],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [29000, 3481]
                    },
                    BLOCK_FEEDBACK: [
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!</h1>"+
                                "<p class='instructions-paragraph'>Your clothes are singed from the dragon's fire, and you're exhausted from wielding this big sword. Fall back and try again later.</p>"+
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>You're showing this dragon who's boss! Keep going!</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                12: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level XII,</h1><h2>All Hands On Deck</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>You're causing a quite a ruckus, and the noise must have attracted the goons you met earlier. They've come to help the dragon guard its treasure!</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>RULES OF COMBAT: You remember how to use a sword, of course. This one's a little heavier, and while it's more powerful it's a little harder to use. Like before, while engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating where you should strike at a given moment. For now, pay attention to the center arrow--if it's pointing to the right, swing your sword to the right. </p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>If it's pointing to the left, swing left. The other arrows are distractors. Ignore them, or your opponent might get a shot at you! </p>"+
                "</div>",
                "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+    
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>Dragons are tricky--they use magic to confuse their opponents. Don't be fooled--Just stay focused on the yellow arrow like before.</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/treasure-cave.svg',
                    WEAPON_LAYER: 
                    "<div id='scene-weapon'>"+
                    "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/gold-sword.svg'></div>"+
                    "</div>",
                    DISTRACTOR_LAYER:

                      //mini trolls
                    "<div class='mini-troll' id='mini-troll-4'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-5'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-6'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-7'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-8'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+

                    //dragon boss
                    "<div id='scene-distractor'>"+
                        "<div id='boss-container' class='boss-container dragon-boss-container'>"+
                                "<img id='boss' class='boss dragon' src='img/goons/dragon.svg'>"+
                        "</div>"+
                    "</div>"+

                     //spider hangers
                    "<div class='spider-hanger' id='spider-hanger-1'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-2'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-3'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-4'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+

                    //ghosts
                    "<div id=ghost-scene>"+
                    "<div class='ghost' id='ghost-1'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-2'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-3'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-4'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-5'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-5'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-6'>"+
                         "<img src='img/goons/ghost-green.png'>"+
                     "</div>"+
                     "</div>"
                    
                    ,
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Left */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Right */
                        TARGET: {
                            COLOR: "yellow",
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
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
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
                            "<div id='distractor-container'>"+
                                "<div class='fireball-container' id='fireball-container-3'>"+
                                    "<img class='fireball' id='fireball-3' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-4'>"+
                                    "<img class='fireball' id='fireball-4' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-1'>"+
                                    "<img class='fireball' id='fireball-1' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-2'>"+
                                    "<img class='fireball' id='fireball-2' src='img/goons/fire.svg'>"+
                                "</div>"+
                            "</div>"
                        }
                        //format for MESSAGE: ""
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl10.mp3",
                        BACKGROUND: './sounds/background/stranger-things-fade.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 986],
                        INCORRECT: [58000, 687],
                        TIMEOUT: [49000, 2025],
                        INVALID: [24000, 1903],
                        DISTRACTOR:  [11000,4180],//
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [41000, 3405],
                                [17000, 3767],
                                [0, 1494],
                                [3000, 1436],
                                [6000, 1895],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [29000, 3481]
                    },
                    BLOCK_FEEDBACK: [
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!</h1>"+
                                "<p class='instructions-paragraph'>This is nuts! Get outta here and try again later.</p>"+
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>Amazing! You're unstoppable. You might defeat this thing after all!</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
                13: {
                    INSTRUCTIONS: [
                        "<div class='instructions-box'>"+
                        "<h1 class='level-title'>Level XIII,</h1><h2>Dragon Mischief</h2>"+
                        // "<img class='instructions-image' src=''>"
                        "<p class='instructions-paragraph'>Suddenly, you start to feel strange. The room seems backwards, your vision blurry. The dragon must be working more of its magic!</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                        "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                        // "<img class='instructions-image' src=''>"
                        "<div class='flex-row'>"+
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
                        "<div align='center' class ='tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "<div align='center' class =' tight'>"+
                            "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                        "</div>"+
                        "</div>"+
                        "<p class='instructions-paragraph'>RULES OF COMBAT: You remember how to use a sword, of course. This one's a little heavier, and while it's more powerful it's a little harder to use. Like before, while engaged in combat with a foe, speed and accuracy are of the esssence. In order to successfully land a blow to your enemy, you must look for an opening and strike where they are vulnerable. In this game, you will see a set of arrows on the screen, indicating where you should strike at a given moment. For now, pay attention to the center arrow.</p>"+
                    "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+    
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro animated shake' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>Dragons are tricky--they use magic to confuse their opponents. Don't be fooled--Just stay focused on the yellow arrow like before.</p>"+
                "</div>",
                    "<div class='instructions-box'>"+
                    "<h1 class='level-title'>RULES OF COMBAT</h1>"+
                    // "<img class='instructions-image' src=''>"
                    "<div class='flex-row'>"+
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
                        "<img class='arrow-intro animated tada' src='img/arrows/arrow-l-yellow.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class ='tight'>"+
                        "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                    "</div>"+
                    "<div align='center' class =' tight'>"+
                    "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
                "</div>"+
                "<div align='center' class =' tight'>"+
                "<img class='arrow-intro' src='img/arrows/arrow-r-white.svg'>"+
            "</div>"+
                    "</div>"+
                    "<p class='instructions-paragraph'>HEADS UP!: The dragon is using more of its magic to try to confuse you. This time, if the arrow is pointing left, SWING RIGHT! If it's pointing right, SWING LEFT! In other words, swing the opposite way of how the arrow is pointing. This is your biggest challenge yet.</p>"+
                "</div>",
                //Audio check
        '<div class="instructions-box">'+
        '<p class="instructions-paragraph">If you haven\'t already, click the button below to check your audio levels and adjust them to a comfortable level.</p>'+
            "<div class='flex-row'>"+
                '<button onclick="test_sounds.play(\'test\')" class="test-btn">Test Audio</button>'+
            "</div>"+
        '</div>',
        //Begin
        '<div class="instructions-box">'+
            "<h1 class='level-title'>Begin Level</h1>"+
                '<p class="instructions-paragraph">Ready? Press <kbd>Next</kbd> to begin the level!</p>'+
        '</div>',
                    ],
                    ROOM: 'img/svg/treasure-cave.svg',
                    WEAPON_LAYER: 
                    "<div id='scene-weapon'>"+
                    "<div class='weapon-container' id='sword-container'><img id='sword' class='steady' src='img/weapons/gold-sword.svg'></div>"+
                    "</div>",
                    DISTRACTOR_LAYER:

                      //mini trolls
                    "<div class='mini-troll' id='mini-troll-4'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-5'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-6'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-7'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+
                    "<div class='mini-troll' id='mini-troll-8'>"+
                        "<img src='img/goons/goblin-small.png'>"+
                    "</div>"+

                    //dragon boss
                    "<div id='scene-distractor'>"+
                        "<div id='boss-container' class='boss-container dragon-boss-container'>"+
                                "<img id='boss' class='boss dragon' src='img/goons/dragon.svg'>"+
                        "</div>"+
                    "</div>"+

                     //spider hangers
                    "<div class='spider-hanger' id='spider-hanger-1'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-2'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-3'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+
                    "<div class='spider-hanger' id='spider-hanger-4'>"+
                        "<img src='img/goons/spiderhanger.svg'>"+
                    "</div>"+

                    //ghosts
                    "<div id=ghost-scene>"+
                    "<div class='ghost' id='ghost-1'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-2'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-3'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-4'>"+
                         "<img src='img/goons/ghost.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-5'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-5'>"+
                         "<img src='img/goons/ghost-blue.png'>"+
                     "</div>"+
                     "<div class='ghost' id='ghost-6'>"+
                         "<img src='img/goons/ghost-green.png'>"+
                     "</div>"+
                     "</div>"
                    
                    ,
        MESSAGES: {
            CORRECT: '<div class="centerbox feedback-message"><div style="COLOR:lime;font-weight:bold;OPACITY:0.8;" class = center-text>Well Done!</div></div>',
            INCORRECT: '<div class="centerbox feedback-message"><div style="COLOR:darkred;font-weight:bold;OPACITY:0.8;" class = center-text>Wrong Way!</div></div>',
            TIMEOUT: '<div class="centerbox feedback-message"><div style="COLOR:orange;font-weight:bold;OPACITY:0.8;" class = center-text>Respond Faster!</div></div>',
            INVALID: '<div class="centerbox feedback-message"><div style="COLOR:silver;font-weight:bold;OPACITY:0.8;" class = center-text>Invalid Keypress!</div></div>',
        },
                    STIMS: [{
                        /* Incongruent Right */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.RIGHT,
                            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.05

                        },
                        DATA: {
                            CORRECT_RESPONSE: 37,
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /*  Incongruent Left */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.LEFT,
                            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.05

                        },
                        DATA: {
                            CORRECT_RESPONSE: 39,
                            CONDITION: "incongruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Left */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.LEFT,
                            PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.05

                        },
                        DATA: {
                            CORRECT_RESPONSE: 39,
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.LEFT,
                                PATH: 'M14.127,3.8l-3-2.98L0,12,11.132,23.186l3-2.981L5.96,12,14.127,3.8',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            }
                        ]
                    }, {
                        /* Congruent Right */
                        TARGET: {
                            COLOR: "yellow",
                            ONSET: 0,
                            DIRECTION: DIRECTION.RIGHT,
                            PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                            OPACITY: 0.8,
                            ANIMATION: ANIMATIONS.NONE,
                            INDEX: random_index(8,1),
                            VISIBILITY_DELAY: 0.05

                        },
                        DATA: {
                            CORRECT_RESPONSE: 37,
                            CONDITION: "congruent",
                            TRIAL_ID: "stim"
                        },
                        FLANKERS: [
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
                            },
                            {
                                ONSET: 0,
                                COLOR: "yellow",
                                DIRECTION: DIRECTION.RIGHT,
                                PATH: 'M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205',
                                OPACITY: 0.8,
                                ANIMATION: ANIMATIONS.SHAKE
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
                            "<div id='distractor-container'>"+
                                "<div class='fireball-container' id='fireball-container-3'>"+
                                    "<img class='fireball' id='fireball-3' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-4'>"+
                                    "<img class='fireball' id='fireball-4' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-1'>"+
                                    "<img class='fireball' id='fireball-1' src='img/goons/fire.svg'>"+
                                "</div>"+
                                "<div class='fireball-container' id='fireball-container-2'>"+
                                    "<img class='fireball' id='fireball-2' src='img/goons/fire.svg'>"+
                                "</div>"+
                            "</div>"
                        }
                        //format for MESSAGE: ""
                    },
                    AUDIO: {
                        ENABLED: true,
                        SOURCE: "sounds/fx/fxLvl10.mp3",
                        BACKGROUND: './sounds/background/stranger-things-fade.mp3', //['path/to/backgroundMusicFile.mp3] NOTE: not an audiosprite
                        CORRECT: [8000, 986],
                        INCORRECT: [58000, 687],
                        TIMEOUT: [49000, 2025],
                        INVALID: [24000, 1903],
                        DISTRACTOR:  [11000,4180],//
                        BOSS_DAMAGE: ()=>{
                            let sprite_list = [
                                [41000, 3405],
                                [17000, 3767],
                                [0, 1494],
                                [3000, 1436],
                                [6000, 1895],
                            ];
                            let max = sprite_list.length -1;
                            let min = 0;
                            let index = Math.floor(Math.random() * (max - min + 1)) + min;
                            return sprite_list[index];
                        },
                        BOSS_ATTACK: [29000, 3481]
                    },
                    BLOCK_FEEDBACK: [
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL NOT PASSED<span class='elipses'>...</span>YET!</h1>"+
                                "<p class='instructions-paragraph'>Your head is spinning and it's time for a break. Recoup and come back later.</p>"+
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
                            MESSAGE: "<div class='instructions-box'>"+
                            // "<img class='instructions-image' src=''>"
                                "<h1 class='level-title'>LEVEL COMPLETE!</h1>"+
                                "<p class='instructions-paragraph'>SUCCESS! You've slain the dragon, and the other monsters flee in fear! You're a force to be reckoned with.</p>"+
                                "<p class='instructions-paragraph'>TREASURE: Congratulations! The treasure is all yours. You've earned it.</p>"+
                                "<p>In this game, you were practicing focusing your attention and ignoring distractions in your environment. There are other times in your life where this skill is useful. Hopefully the practice you've had here can help you to focus and ignore distractions in those real-life situations also.</p>"+
                                "</div>",
                            ADVANCE: ADVANCE.FORWARD
                        }
                    ]
                },
            }
        
    
