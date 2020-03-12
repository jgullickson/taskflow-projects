const PRELOAD = {
    AUDIO: [
        "sounds/all-sounds.mp3",
        "sounds/background.mp3"
    ],
    IMAGES: [ 
    // distractors
        "img/distractors/juice.png",
        "img/distractors/milk.png",
        "img/distractors/orange-juice.png",
        "img/distractors/orange-tea.png",
        "img/distractors/smoothie.png",
        "img/distractors/tea.png",
    // instructions
        "img/instructions/cook/cook-crossarm.jpg",
        "img/instructions/cook/cook-handships.jpg",
        "img/instructions/cook/cook-ok.jpg",
        "img/instructions/cook/cook-poses.jpg",
        "img/instructions/cook/cook-thumbsup.jpg",

        "img/instructions/mariella/mariella-amazing.jpg",
        "img/instructions/mariella/mariella-crossarm.jpg",
        "img/instructions/mariella/mariella-green-point.jpg",
        "img/instructions/mariella/mariella-menu.jpg",
        "img/instructions/mariella/mariella-mug.jpg",
        "img/instructions/mariella/mariella-point.jpg",
        "img/instructions/mariella/mariella-present.jpg",
        "img/instructions/mariella/mariella-sad.jpg",
        "img/instructions/mariella/mariella-think.jpg",
        "img/instructions/mariella/mariella-turkey.jpg",

        "img/instructions/dining.jpg",
        "img/instructions/dining2.jpg",
        "img/instructions/kitchen.jpg",
        "img/instructions/restaurant.jpg",
        "img/instructions/dining.png",
        "img/instructions/logo.png",
        "img/instructions/mariella-ok.png",
        "img/instructions/mariella-pan.png",
        "img/instructions/server.png",
    // stims
        "img/stims/orangejuice.jpeg",
        "img/stims/cake-slice.png",
        "img/stims/cheese.png",
        "img/stims/cocktail.png",
        "img/stims/coffee.png",
        "img/stims/corn.png",
        "img/stims/donut.png",
        "img/stims/grapefruit-soda.png",
        "img/stims/ice-cream.png",
        "img/stims/noodles.png",
        "img/stims/pizza.png",
        "img/stims/sandwich.png",
        "img/stims/taco.png",
        "img/stims/turkey.png",
        "img/stims/watermelon.png",
        "img/stims/egg.png",
        "img/stims/carrot.png",

        "img/AK_LO.svg",
        "img/AK_RO.svg",
        "img/AK.svg"
    ]
};

const CONFIGURATION = {
    0: {
        INSTRUCTIONS: [
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron" style="background-color: white">'+
                        '<img id="logo" src="img/instructions/logo.png">'+
                    '</div>'+
                '</div>'+
            '</div>',
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<h1 class="level-title">Introduction</h1>'+
                    '<div class="row">'+
                        '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella-pan.png">'+'</div>'+
                        '<div class="col-sm">'+
                            '<div class="jumbotron">'+
                                '<p><b>"It’s crazy around here!"</b> <br><br>In Restaurant Rush you are a server in Mariella\'s Restaurant.</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>',
            '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/kitchen.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Your job is to bring customers their orders when they’re ready. It can get pretty busy, though. To get the best tips -- and make Mariella happy -- be sure to get the right orders as quickly as possible. <br>Press <strong>Next</strong> to continue.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
            '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/dining.png">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Keep the customers satisfied by getting them the right food. This is hard because other servers are doing the same thing at the same time. Don’t take other servers’ orders, but don’t leave your customers hanging, either. </p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron">'+
                        '<h1 align="left">Here\'s how to play:</h1>'+
                        '<p align="left">On your shift, you will see a series of orders (food items) presented one the screen one at a time. <br><br>Click <b>Next</b> to see some examples</p>'+
                    '</div>'+
                '</div>'+
            '</div>',
            //example stims
            '<div class="container">'+
                '<div class="row justify-content-center">'+
                    '<div class="stimulus-image-plate"><img class="intro-img" style="width: 512px; height: 512px; margin-bottom: 20px" src="img/stims/donut.png"></div>'+
                '</div>'+
            '</div>',
            '<div class="container">'+
                '<div class="row justify-content-center">'+
                    '<div class="stimulus-image-plate"><img class="intro-img" style="width: 512px; height: 512px; margin-bottom: 20px" src="img/stims/noodles.png"></div>'+
                '</div>'+
            '</div>',
            '<div class="container">'+
                '<div class="row justify-content-center">'+
                    '<div class="stimulus-image-plate"><img class="intro-img" style="width: 512px; height: 512px; margin-bottom: 20px" src="img/stims/taco.png"></div>'+
                '</div>'+
            '</div>'+
        '</div>',
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron slim">'+
                    '<p>Each time an order is presented on the screen, you should press one of two buttons...</p>'+
                    '<img class="intro-img" src="img/AK.svg" max-height="400px" max-width="400px" />'+
                '</div>'+
            '</div>'+
        '</div>',
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron slim">'+
                    '<p>Each time an order is presented on the screen, you should press one of two buttons...</p>'+
                    '<img class="intro-img" src="img/AK_LO.svg" max-height="400px" max-width="400px" />'+
                    '<p>Press the <kbd>left arrow</kbd> to <span style="color: red"><b>leave it</b></span> for another server.</p>'+
                '</div>'+
            '</div>'+
    '   </div>',
        '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron slim">'+
                        '<p>Each time an order is presented on the screen, you should press one of two buttons...</p>'+
                        '<img class="intro-img" src="img/AK_RO.svg" max-height="400px" max-width="400px" />'+
                        '<p>Press the <kbd>right arrow</kbd> to <span style="color: red"><b>pick it up!</b></span>.</p>'+
                    '</div>'+
                '</div>'+
        '   </div>',
    '<div class="container">'+
        '<div class="jumbotron jumbotron-dark">'+
        '<div class="row">'+
            '<div>'+
                '<div class="grid">'+
                    //<div class="qst">?</div><img class="img-sm" src="img/stims/taco.png">
                    '<div><img class="img-sm" src="img/stims/taco.png"></div>'+
                    '<div><img class="img-sm" src="img/stims/cake-slice.png"></div>'+
                    '<div><img class="img-sm" src="img/stims/pizza.png"></div>'+
                    '<div><img class="img-sm" src="img/stims/watermelon.png"></div>'+
                '</div>'+
            '</div>'+
            '<div class="jumbotron">'+
                '<p><b>Which orders should you pick up?</b><p>'+
                '<p>You will need to pick up the food orders that match other orders a certain number of orders back. This number is determined by the number of servers on the floor, which will change as you progress through the game.</p>'+
                '<p> For example, when only you and one other server are working (<b>2 servers total</b>), pick-up orders that match the order shown <b>2 orders beforehand</b>.'+
                '<p><br>Click Next for a detailed example..</p>'+
            '</div>'+
        '</div>'+
    '</div>',
            //
            '<div class="container">'+
                '<div class="jumbotron-dark">'+
                    '<div id="example-grid">'+
                        '<div id="row1">'+
                            '<div id="A"><p>Order:</p></div>'+
                            '<div id="B"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                            '<div id="C" class="hidden"><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                            '<div id="D" class="hidden"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                            '<div id="E" class="hidden"><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                            '<div id="F" class="hidden"><img class="intro-img-flex" src="img/stims/corn.png"></div>'+
                        '</div>'+
                        '<div id="row2">'+
                            '<div id="A1" class="intro-label-sm" style="background color: grey; border: none"><p>Correct Response:</p></div>'+
                            '<div id="B1"class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                            '<div id="C1" class="intro-label-sm hidden"><kbd>left arrow</kbd></div>'+
                            '<div id="D1" class="intro-label-sm hidden"><kbd class="bg-success">right arrow</kbd></div>'+
                            '<div id="E1" class="intro-label-sm hidden"><kbd class="bg-success">right arrow</kbd></div>'+
                            '<div id="F1" class="intro-label-sm hidden"><kbd>left arrow</kbd></div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+
                '<div class="jumbotron slim">'+
                '<table align="right" >'+
                '<tr class="tr-icon">'+
                    '<td><img src="img/instructions/server.png"  style="float: right; height: 100px; width; 100px"></td>'+
                    '<td>x2</td>'+
                '</tr>'+
            '</table>'+
            '<p align="left">Example: there are <b>two servers</b> on the floor. You see the sequence above.</p>'+
                '<p align="left">...you would press the:</p>'+
                    '<ul align="left">'+
                        '<li><kbd>left arrow</kbd> for the first pizza, since it is the first order and has no orders before it</li>'+
                        '<li class="hidden"><kbd>left arrow</kbd> for the first cake, since it does not have a match 2 orders back</li>'+
                        '<li class="hidden"><kbd class="bg-success">right arrrow</kbd> for the second pizza, since it matches the first pizza which is 2 orders back</li>'+
                        '<li class="hidden"><kbd class="bg-success">right arrrow</kbd> for the second cake, since it matches the first cake which is 2 orders back</li>'+
                        '<li class="hidden"><kbd>left arrow</kbd> for the corn, since it does not match the order 2-back (pizza)</li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '</div>',
            //
            '<div class="container">'+
                '<div class="jumbotron-dark">'+
                    '<div id="example-grid">'+
                        '<div id="row1">'+
                            '<div id="A"><p>Order:</p></div>'+
                            '<div id="B"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                            '<div id="C" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                            '<div id="D" class="hidden"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                            '<div id="E" class="hidden"><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                            '<div id="F" class="hidden"><img class="intro-img-flex" src="img/stims/corn.png"></div>'+
                        '</div>'+
                        '<div id="row2">'+
                            '<div id="A1" class="intro-label-sm" style="background color: grey; border: none"><p>Correct Response:</p></div>'+
                            '<div id="B1"class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                            '<div id="C1" class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                            '<div id="D1" class="intro-label-sm hidden"><kbd class="bg-success">right arrow</kbd></div>'+
                            '<div id="E1" class="intro-label-sm hidden"><kbd class="bg-success">right arrow</kbd></div>'+
                            '<div id="F1" class="intro-label-sm hidden"><kbd>left arrow</kbd></div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+
                '<div class="jumbotron slim">'+
                '<table align="right" >'+
                '<tr class="tr-icon">'+
                    '<td><img src="img/instructions/server.png"  style="float: right; height: 100px; width; 100px"></td>'+
                    '<td>x2</td>'+
                '</tr>'+
            '</table>'+
            '<p align="left">Example: there are <b>two servers</b> on the floor. You see the sequence above.</p>'+
                '<p align="left">...you would press the:</p>'+
                    '<ul align="left">'+
                        '<li><kbd>left arrow</kbd> for the first pizza, since it is the first order and has no orders before it</li>'+
                        '<li class=""><kbd>left arrow</kbd> for the first cake, since it does not have a match 2 orders back</li>'+
                        '<li class="hidden"><kbd class="bg-success">right arrrow</kbd> for the second pizza, since it matches the first pizza which is 2 orders back</li>'+
                        '<li class="hidden"><kbd class="bg-success">right arrrow</kbd> for the second cake, since it matches the first cake which is 2 orders back</li>'+
                        '<li class="hidden"><kbd>left arrow</kbd> for the corn, since it does not match the order 2-back (pizza)</li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
            '</div>',
              //
              '<div class="container">'+
              '<div class="jumbotron-dark">'+
                  '<div id="example-grid">'+
                      '<div id="row1">'+
                          '<div id="A"><p>Order:</p></div>'+
                          '<div id="B"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                          '<div id="C" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                          '<div id="D" class=""><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                          '<div id="E" class="hidden"><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                          '<div id="F" class="hidden"><img class="intro-img-flex" src="img/stims/corn.png"></div>'+
                      '</div>'+
                      '<div id="row2">'+
                          '<div id="A1" class="intro-label-sm" style="background color: grey; border: none"><p>Correct Response:</p></div>'+
                          '<div id="B1"class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                          '<div id="C1" class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                          '<div id="D1" class="intro-label-sm"><kbd class="bg-success">right arrow</kbd></div>'+
                          '<div id="E1" class="intro-label-sm hidden"><kbd class="bg-success">right arrow</kbd></div>'+
                          '<div id="F1" class="intro-label-sm hidden"><kbd>left arrow</kbd></div>'+
                      '</div>'+
                  '</div>'+
                  '</div>'+
              '<div class="jumbotron slim">'+
              '<table align="right" >'+
              '<tr class="tr-icon">'+
                  '<td><img src="img/instructions/server.png"  style="float: right; height: 100px; width; 100px"></td>'+
                  '<td>x2</td>'+
              '</tr>'+
          '</table>'+
          '<p align="left">Example: there are <b>two servers</b> on the floor. You see the sequence above.</p>'+
              '<p align="left">...you would press the:</p>'+
                  '<ul align="left">'+
                      '<li><kbd>left arrow</kbd> for the first pizza, since it is the first order and has no orders before it</li>'+
                      '<li class=""><kbd>left arrow</kbd> for the first cake, since it does not have a match 2 orders back</li>'+
                      '<li class=""><kbd class="bg-success">right arrrow</kbd> for the second pizza, since it matches the first pizza which is 2 orders back</li>'+
                      '<li class="hidden"><kbd class="bg-success">right arrrow</kbd> for the second cake, since it matches the first cake which is 2 orders back</li>'+
                      '<li class="hidden"><kbd>left arrow</kbd> for the corn, since it does not match the order 2-back (pizza)</li>'+
                  '</ul>'+
              '</div>'+
          '</div>'+
          '</div>',
                  //
                  '<div class="container">'+
                  '<div class="jumbotron-dark">'+
                      '<div id="example-grid">'+
                          '<div id="row1">'+
                              '<div id="A"><p>Order:</p></div>'+
                              '<div id="B"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                              '<div id="C" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                              '<div id="D" class=""><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                              '<div id="E" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                              '<div id="F" class="hidden"><img class="intro-img-flex" src="img/stims/corn.png"></div>'+
                          '</div>'+
                          '<div id="row2">'+
                              '<div id="A1" class="intro-label-sm" style="background color: grey; border: none"><p>Correct Response:</p></div>'+
                              '<div id="B1"class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                              '<div id="C1" class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                              '<div id="D1" class="intro-label-sm"><kbd class="bg-success">right arrow</kbd></div>'+
                              '<div id="E1" class="intro-label-sm"><kbd class="bg-success">right arrow</kbd></div>'+
                              '<div id="F1" class="intro-label-sm hidden"><kbd>left arrow</kbd></div>'+
                          '</div>'+
                      '</div>'+
                      '</div>'+
                  '<div class="jumbotron slim">'+
                  '<table align="right" >'+
                  '<tr class="tr-icon">'+
                      '<td><img src="img/instructions/server.png"  style="float: right; height: 100px; width; 100px"></td>'+
                      '<td>x2</td>'+
                  '</tr>'+
              '</table>'+
              '<p align="left">Example: there are <b>two servers</b> on the floor. You see the sequence above.</p>'+
                  '<p align="left">...you would press the:</p>'+
                      '<ul align="left">'+
                          '<li><kbd>left arrow</kbd> for the first pizza, since it is the first order and has no orders before it</li>'+
                          '<li class=""><kbd>left arrow</kbd> for the first cake, since it does not have a match 2 orders back</li>'+
                          '<li class=""><kbd class="bg-success">right arrrow</kbd> for the second pizza, since it matches the first pizza which is 2 orders back</li>'+
                          '<li class=""><kbd class="bg-success">right arrrow</kbd> for the second cake, since it matches the first cake which is 2 orders back</li>'+
                          '<li class="hidden"><kbd>left arrow</kbd> for the corn, since it does not match the order 2-back (pizza)</li>'+
                      '</ul>'+
                  '</div>'+
              '</div>'+
              '</div>',
              //
              '<div class="container">'+
              '<div class="jumbotron-dark">'+
                  '<div id="example-grid">'+
                      '<div id="row1">'+
                          '<div id="A"><p>Order:</p></div>'+
                          '<div id="B"><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                          '<div id="C" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                          '<div id="D" class=""><img class="intro-img-flex" src="img/stims/pizza.png"></div>'+
                          '<div id="E" class=""><img class="intro-img-flex" src="img/stims/cake-slice.png"></div>'+
                          '<div id="F" class=""><img class="intro-img-flex" src="img/stims/corn.png"></div>'+
                      '</div>'+
                      '<div id="row2">'+
                          '<div id="A1" class="intro-label-sm" style="background color: grey; border: none"><p>Correct Response:</p></div>'+
                          '<div id="B1"class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                          '<div id="C1" class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                          '<div id="D1" class="intro-label-sm"><kbd class="bg-success">right arrow</kbd></div>'+
                          '<div id="E1" class="intro-label-sm"><kbd class="bg-success">right arrow</kbd></div>'+
                          '<div id="F1" class="intro-label-sm"><kbd>left arrow</kbd></div>'+
                      '</div>'+
                  '</div>'+
                  '</div>'+
              '<div class="jumbotron slim">'+
              '<table align="right" >'+
              '<tr class="tr-icon">'+
                  '<td><img src="img/instructions/server.png"  style="float: right; height: 100px; width; 100px"></td>'+
                  '<td>x2</td>'+
              '</tr>'+
          '</table>'+
          '<p align="left">Example: there are <b>two servers</b> on the floor. You see the sequence above.</p>'+
              '<p align="left">...you would press the:</p>'+
                  '<ul align="left">'+
                      '<li><kbd>left arrow</kbd> for the first pizza, since it is the first order and has no orders before it</li>'+
                      '<li class=""><kbd>left arrow</kbd> for the first cake, since it does not have a match 2 orders back</li>'+
                      '<li class=""><kbd class="bg-success">right arrrow</kbd> for the second pizza, since it matches the first pizza which is 2 orders back</li>'+
                      '<li class=""><kbd class="bg-success">right arrrow</kbd> for the second cake, since it matches the first cake which is 2 orders back</li>'+
                      '<li class=""><kbd>left arrow</kbd> for the corn, since it does not match the order 2-back (pizza)</li>'+
                  '</ul>'+
              '</div>'+
          '</div>'+
          '</div>',
        //Quetions pause
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron">'+
                        '<h1 class="text-warning bg-dark">-PAUSE-</h1>'+
                        '<p>Any questions before we move on?</p>'+
                    '</div>'+
                '</div>'+
            '</div>',
        //Audio check
        '<div class="container">'+
           '<div class="jumbotron jumbotron-dark">'+
               '<div class="jumbotron">'+
               "<h1>Check Audio</h1>"+
               "<div class='stack'>"+
                   '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                   '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                   '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                   '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
               "</div>"+
                   '<p>Before we start, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
               '</div>'+
           '</div>'+
       '</div>',
        //Practice intro
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron">'+
                    '<h1 align="left">Starting practice.</h1>'+
                        '<div class="row">'+
                            '<div class="col-sm-8">'+
                                '<p align="left">For this practice session, just you and one other server are working (there are <b>2 servers total</b>), so...<ul><li>you should press <kbd>right arrow</kbd> when the current order matches the order that appeared <b>two previously</b>.</li><li> If not, press <kbd>left arrow</kbd></li></ul></p><br>'+
                                '<p align="left"><br>Click Next to start practice</p>'+
                            '</div>'+
                                '<div>'+
                                    '<table>'+
                                        '<tr class="tr-icon">'+
                                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                                            '<td>x2</td>'+
                                        '</tr>'+
                                    '</table>'+
                                '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        ],
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            // CORRECT: [5000, 1332],
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            //INCORRECT: [9000, 1079],
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        },
        STIMS: [
            {
                id: "a",
                path: "img/stims/cake-slice.png"
            },
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 2,
            LENGTH: 8,
            TARGET_NUM: 2,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 80
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                     '<p class="centerbox">That was fast. Let\'s review the instructions one more time to get you ready for the first shift!</p>'+
                                     '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 80,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Great job!</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    1: {
        INSTRUCTIONS: [
            //Congrats!
            '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 1</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella-ok.png">'+'</div>'+
                    '<div class="col-sm">'+
                        '<div class="jumbotron col-sm">'+
                            '<p>Congratulations on advancing through practice. Mariella says, \"You are ready for your first shift!\"</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
        '<div class="jumbotron jumbotron-dark">'+
            '<div class="jumbotron">'+
                '<p>For this first shift, just you and one other server are working (there are <b>2 servers total</b>), so you should press <kbd>right arrow</kbd> when the current order matches the order that appeared <b>two previously</b>. If not, press <kbd>left arrow</kbd></p><br>'+
                '<table align="center">'+
                    '<tr class="tr-icon">'+
                        '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                        '<td>x2</td>'+
                    '</tr>'+
                '</table>'+
                '<p><br>Click Next to start your shift!</p>'+
            '</div>'+
        '</div>'+
    '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        },
        AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "a",
                path: "img/stims/cake-slice.png"
            },
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 2,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    2: {
        INSTRUCTIONS: [
        //Greeting
            '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 2</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-green-point.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Congratulations on doing so well last time. Mariella says today will be a little harder than last time so be on your toes.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Today, just you and one other server are working (there are <b>2 servers total</b>), so you should press <kbd>right arrow</kbd> when the current order matches the order that appeared <b>two previously</b>. If not, press <kbd>left arrow</kbd></p><br>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x2</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "a",
                path: "img/stims/cake-slice.png"
            },
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/egg.png"
            },
            {
                id: "f",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 2,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    3: {
        INSTRUCTIONS: [
            //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 3</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/cook/cook-handships.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                         '<p>Congratulations on doing so well last time. Today will be a little harder than last time because the cook, Lorenzo, is getting faster.</p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
         //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
         '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
                 '<div class="jumbotron">'+
                     '<p>Today, just you and one other server are working (there are <b>2 servers total</b>), so you should press <kbd>right arrow</kbd> when the current order matches the order that appeared <b>two previously</b>. If not, press <kbd>left arrow</kbd></p><br>'+
                     '<table align="center" >'+
                         '<tr class="tr-icon">'+
                             '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                             '<td>x2</td>'+
                         '</tr>'+
                     '</table>'+
                     '<p><br>Click Next to start your shift!</p>'+
                 '</div>'+
             '</div>'+
         '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "a",
                path: "img/stims/cake-slice.png"
            },
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 2,
            LENGTH: 143,
            TARGET_NUM: 47,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 400,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 600,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2100
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    4: {
        INSTRUCTIONS: [
    //Greeting
    '<div class="container">'+
    '<div class="jumbotron jumbotron-dark">'+
    '<h1 class="level-title">Level 4</h1>'+
        '<div class="row">'+
            '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-mug.jpg">'+'</div>'+
            '<div class="jumbotron col-sm">'+
            '<p>Congratulations on doing so well last time. Mariella says to you, \"Just take out the food. I\'ll take care of the drinks.\"  <br> Remember: just respond to the food items. If a drink appears, ignore it. Drinks don\'t count to toward the sequence of food items.<p>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>',
//Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
'<div class="container">'+
    '<div class="jumbotron jumbotron-dark">'+
        '<div class="jumbotron">'+
            '<p>Today, just you and one other server are working (there are <b>2 servers total</b>), so you should press <kbd>right arrow</kbd> when the current order matches the order that appeared <b>two previously</b>, (not counting any drinks in between). Otherwise, press <kbd>left arrow</kbd></p><br>'+
            '<table align="center" >'+
                '<tr class="tr-icon">'+
                    '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                    '<td>x2</td>'+
                '</tr>'+
            '</table>'+
            '<p><br>Click Next to start your shift!</p>'+
        '</div>'+
    '</div>'+
'</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [
            {
                id: "x",
                path: "img/distractors/juice.png"
            },
            {
                id: "y",
                path: "img/distractors/milk.png"
            }
        ],
        PARAMETERS: {
            N: 2,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 5,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    5: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 5</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-crossarm.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                    '<p>Congratulations on doing so well last time. Mariella has given you a new shift -- Thursday dinner! Wow, she must think you\'re ready.</p>'+
                    '<p>On Thursdays you are working with two other servers (<b>three servers total</b>), so only pick up items that are the same as the one <b>three before</b>.'
                    + '<br>Mariella says, \"I think you can do this.\"<p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and two other servers (<b>three servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>three beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x3</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 3,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 70
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 70,
                    MAX: 80
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 80,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    6: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 6</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-green-point.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Congratulations on doing so well last time. Mariella says today will be a little harder than last time so be on your toes.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and two other servers (<b>three servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>three beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x3</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 3,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    7: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 7</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/cook/cook-handships.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                         '<p>Congratulations on doing so well last time. Today will be a little harder than last time because the cook, Lorenzo, is getting faster.</p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron">'+
                        '<p>Remember: today it\'s you and two other servers (<b>three servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>three beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                        '<table align="center" >'+
                            '<tr class="tr-icon">'+
                                '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                                '<td>x3</td>'+
                            '</tr>'+
                        '</table>'+
                        '<p><br>Click Next to start your shift!</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 3,
            LENGTH: 143,
            TARGET_NUM: 47,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 400,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 600,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2100
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    8: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 8</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-mug.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                     '<p>Congratulations on doing so well last time. Mariella says to you, \"Just take out the food. I\'ll take care of the drinks.\"  <br> Remember: just respond to the food items. If a drink appears, ignore it. Drinks don\'t count to toward the sequence of food items.<p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
            '<div class="container">'+
                '<div class="jumbotron jumbotron-dark">'+
                    '<div class="jumbotron">'+
                        '<p>Remember: today it\'s you and two other servers (<b>three servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>three beforehand</b>(not counting any drinks in between). Otherwise, press <kbd>left arrow</kbd></p>'+
                        '<table align="center" >'+
                            '<tr class="tr-icon">'+
                                '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                                '<td>x3</td>'+
                            '</tr>'+
                        '</table>'+
                        '<p><br>Click Next to start your shift!</p>'+
                    '</div>'+
                '</div>'+
            '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [
            {
                id: "x",
                path: "img/distractors/orange-juice.png"
            },
            {
                id: "y",
                path: "img/distractors/orange-tea.png"
            }
        ],
        PARAMETERS: {
            N: 3,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 5,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were reallygood!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    9: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 9</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-turkey.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                    '<p>Congratulations on doing so well on Thursdays. Mariella has given you a new shift -- Friday dinner! That\'s really impressive.</p>'+
                    '<p>On Fridays you are working with three other servers (<b>four servers total</b>), so only pick up items that are the same as the one <b>four before</b>.'
                    + '<br>Mariella says, \"I\'m pretty sure you can do this.\"<p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and three other servers (<b>four servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>four beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x4</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 4,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 70
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 70,
                    MAX: 80
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 80,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    10: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 10</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-menu.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Congratulations on doing so well last time. Mariella says today will be a little harder than last time so be on your toes.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and three other servers (<b>four servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>four beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x4</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 4,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    11: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 11</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/cook/cook-thumbsup.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                         '<p>Congratulations on doing so well last time. Today will be a little harder than last time because the cook, Lorenzo, is getting even faster.</p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
           '<div class="container">'+
           '<div class="jumbotron jumbotron-dark">'+
               '<div class="jumbotron">'+
                   '<p>Remember: today it\'s you and three other servers (<b>four servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>four beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                   '<table align="center" >'+
                       '<tr class="tr-icon">'+
                           '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                           '<td>x4</td>'+
                       '</tr>'+
                   '</table>'+
                   '<p><br>Click Next to start your shift!</p>'+
               '</div>'+
           '</div>'+
       '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 4,
            LENGTH: 143,
            TARGET_NUM: 46,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 400,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 600,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2100
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    12: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 12</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-mug.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                     '<p>Congratulations on doing so well last time. Mariella says to you, \"Just take out the food. I\'ll take care of the drinks.\"  <br> Remember: just respond to the food items. If a drink appears, ignore it. Drinks don\'t count to toward the sequence of food items.<p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
           '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and three other servers (<b>four servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>four beforehand (not counting any drinks in between).</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x4</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [
            {
                id: "x",
                path: "img/distractors/smoothie.png"
            },
            {
                id: "y",
                path: "img/distractors/tea.png"
            }
        ],
        PARAMETERS: {
            N: 4,
            LENGTH: 120,
            TARGET_NUM: 39,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 5,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
            {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    13: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 13</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-think.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                    '<p>Congratulations on doing so well on Fridays. Mariella asks you to work a new shift -- Saturday lunch! That\'s a great promotion.</p>'+
                    '<p>On Saturdays you are working with four other servers (<b>five servers total</b>), so only pick up items that are the same as the one <b>five before</b>.'
                    + '<br>Mariella says, \"Saturdays can be confusing, but you\'re one of the best here.\"<p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
                '<div class="jumbotron">'+
                    '<p>Remember: today it\'s you and four other servers (<b>five servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>five beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                    '<table align="center" >'+
                        '<tr class="tr-icon">'+
                            '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                            '<td>x5</td>'+
                        '</tr>'+
                    '</table>'+
                    '<p><br>Click Next to start your shift!</p>'+
                '</div>'+
            '</div>'+
        '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/watermelon.png"
            },
            {
                id: "l",
                path: "img/stims/egg.png"
            },
            {
                id: "m",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 5,
            LENGTH: 120,
            TARGET_NUM: 38,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
                {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 70
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 70,
                    MAX: 80
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 80,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    14: {
        INSTRUCTIONS: [
        //Greeting
        '<div class="container">'+
            '<div class="jumbotron jumbotron-dark">'+
            '<h1 class="level-title">Level 14</h1>'+
                '<div class="row">'+
                    '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-green-point.jpg">'+'</div>'+
                    '<div class="jumbotron col-sm">'+
                        '<p>Congratulations on doing so well last time. Mariella says today will be a little harder than last time so be on your toes.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
        //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
        '<div class="container">'+
        '<div class="jumbotron jumbotron-dark">'+
            '<div class="jumbotron">'+
                '<p>Remember: today it\'s you and four other servers (<b>five servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>five beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                '<table align="center" >'+
                    '<tr class="tr-icon">'+
                        '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                        '<td>x5</td>'+
                    '</tr>'+
                '</table>'+
                '<p><br>Click Next to start your shift!</p>'+
            '</div>'+
        '</div>'+
    '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/egg.png"
            },
            {
                id: "l",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 5,
            LENGTH: 120,
            TARGET_NUM: 38,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
                {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    15: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 15</h1>'+
                 '<div class="row">'+
                     '<div class="img-cont col-sm">'+'<img class="intro-img" style="max-height: 500px" src="img/instructions/cook/cook-handships.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                         '<p>Congratulations on doing so well last time. Today will be a little harder than last time because the cook, Lorenzo, is getting faster.</p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
           '<div class="container">'+
           '<div class="jumbotron jumbotron-dark">'+
               '<div class="jumbotron">'+
                   '<p>Remember: today it\'s you and four other servers (<b>five servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>five beforehand.</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                   '<table align="center" >'+
                       '<tr class="tr-icon">'+
                           '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                           '<td>x5</td>'+
                       '</tr>'+
                   '</table>'+
                   '<p><br>Click Next to start your shift!</p>'+
               '</div>'+
           '</div>'+
       '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "b",
                path: "img/stims/cheese.png"
            },
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/turkey.png"
            },
            {
                id: "j",
                path: "img/stims/taco.png"
            },
            {
                id: "k",
                path: "img/stims/watermelon.png"
            },
            {
                id: "l",
                path: "img/stims/egg.png"
            },
            {
                id: "m",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [],
        PARAMETERS: {
            N: 5,
            LENGTH: 143,
            TARGET_NUM: 46,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 400,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 600,
            DISTRACTORS_NUM: 0,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2100
        },
        BLOCK_FEEDBACK : [
                {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    },
    16: {
        INSTRUCTIONS: [
             //Greeting
             '<div class="container">'+
             '<div class="jumbotron jumbotron-dark">'+
             '<h1 class="level-title">Level 16</h1>'+
                 '<div class="row">'+
'<div class="img-cont col-sm">'+                     '<img class="intro-img" style="max-height: 500px" src="img/instructions/mariella/mariella-mug.jpg">'+'</div>'+
                     '<div class="jumbotron col-sm">'+
                     '<p>Congratulations on doing so well last time. Mariella says to you, \"Just take out the food. I\'ll take care of the drinks.\"  <br> Remember: just respond to the food items. If a drink appears, ignore it. Drinks don\'t count to toward the sequence of food items.<p>'+
                     '</div>'+
                 '</div>'+
             '</div>'+
         '</div>',
           //Audio check
               '<div class="container">'+
               '<div class="jumbotron jumbotron-dark">'+
                   '<div class="jumbotron">'+
                   "<h1>Check Audio</h1>"+
                   "<div class='stack'>"+
                       '<button onclick="test_sounds.play(\'correct\')" class="btn-success test-btn">Correct</button>'+
                       '<button onclick="test_sounds.play(\'incorrect\')" class="btn-danger test-btn">Incorrect</button>'+
                       '<button onclick="test_sounds.play(\'timeout\')" class="btn-warning test-btn">Too slow</button>'+
                       '<button onclick="test_sounds.play(\'invalid\')" class="btn-secondary test-btn">Wrong key</button>'+
                   "</div>"+
                       '<p>If you haven\'t already, check your audio levels and adjust them to a comfortable level.<br>These are the sounds that will play during the task based on your responses.</p>'+
                   '</div>'+
               '</div>'+
           '</div>',
//Instructions refresher
           '<div class="container">'+
           '<div class="jumbotron jumbotron-dark">'+
               '<div class="jumbotron">'+
                   '<p>Remember: today it\'s you and four other servers (<b>five servers total</b>), so be sure to press the <kbd>right arrow</kbd> when the food item is a match for the one that came <b>five beforehand (not counting any drinks in between).</b>Otherwise, press <kbd>left arrow</kbd></p>'+
                   '<table align="center" >'+
                       '<tr class="tr-icon">'+
                           '<td><img src="img/instructions/server.png"  style="float: right; height: 200px; width; 200px"></td>'+
                           '<td>x5</td>'+
                       '</tr>'+
                   '</table>'+
                   '<p><br>Click Next to start your shift!</p>'+
               '</div>'+
           '</div>'+
       '</div>'
        ],
        MESSAGES: {
            CORRECT: '<div class = centerbox><div style="color:green;font-size:60px"; class = "center-text fb-msg">Nice job!</div></div>',
            INCORRECT: '<div class = centerbox><div style="color:red;font-size:60px"; class = "center-text fb-msg">Wrong order!</div></div>',
            TIMEOUT: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Work faster!</div></div>',
            INVALID: '<div class = centerbox><div style="font-size:60px" class = "center-text fb-msg">Wrong key!</div></div>'
        }, 
            AUDIO: {
            ENABLED: true,
            SOURCE: './sounds/all-sounds.mp3',
            CORRECT(){
                let sprite_list = [[5000, 1332], [0, 1750], [3484, 830], [25229, 1384]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            INCORRECT(){
                let sprite_list = [[9000, 1079],[7763, 876], [23000, 746]];
                let max = sprite_list.length -1;
                let min = 0;
                let index = Math.floor(Math.random() * (max - min + 1)) + min;
                return sprite_list[index];
            },
            TIMEOUT: [16000, 2088],
            INVALID: [11000, 1897]
        },
        STIMS: [
            {
                id: "c",
                path: "img/stims/corn.png"
            },
            {
                id: "d",
                path: "img/stims/donut.png"
            },
            {
                id: "e",
                path: "img/stims/ice-cream.png"
            },
            {
                id: "f",
                path: "img/stims/noodles.png"
            },
            {
                id: "g",
                path: "img/stims/pizza.png"
            },
            {
                id: "h",
                path: "img/stims/sandwich.png"
            },
            {
                id: "i",
                path: "img/stims/egg.png"
            },
            {
                id: "j",
                path: "img/stims/carrot.png"
            }
        ],
        DISTRACTORS: [
            {
                id: "x",
                path: "img/distractors/juice.png"
            },
            {
                id: "y",
                path: "img/distractors/orange-juice.png"
            }
        ],
        PARAMETERS: {
            N: 5,
            LENGTH: 120,
            TARGET_NUM: 38,
            TIMING_FEEDBACK_DURATION: 500,
            STIM_DURATION: 500,
            RESPONSE_DURATION: 1500,
            POST_TRIAL_DURATION: 1000,
            DISTRACTORS_NUM: 5,
            VALID_CHOICES: [37, 39],
            POSSIBLE_CHOICES: [37, 38, 39, 40],
            TARGET_KEY: 39,
            NONTARGET_KEY: 37,
            TRIAL_DURATION: 2500
        },
        BLOCK_FEEDBACK : [
                {
                THRESHOLD: {
                    MIN: 0,
                    MAX: 75
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-sad.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were poor.</h1>'+
                                    '<p class="centerbox">Mariella says, \"Tomorrow is another day.\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 75,
                    MAX: 85
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-point.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were OK.</h1>'+
                                    '<p class="centerbox">Mariella says, \"You\'re getting the hang of this!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 85,
                    MAX: 90
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"Way to go!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.NEUTRAL
            },
            {
                THRESHOLD: {
                    MIN: 90,
                    MAX: 95
                },
                MESSAGE:'<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-ok.png">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<h1>Your tips were really good!</h1>'+
                                    '<p class="centerbox">Mariella says, \"You make me proud!\"</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            },
            {
                THRESHOLD: {
                    MIN: 95,
                    MAX: 100.01
                },
                MESSAGE: '<div class="container">'+
                    '<div class="jumbotron jumbotron-dark">'+
                        '<div class="row">'+
'<div class="img-cont col-sm">'+'<img class="intro-img" src="img/instructions/mariella/mariella-amazing.jpg">'+'</div>'+
                            '<div class="col-sm">'+
                                '<div class="jumbotron">'+
                                    '<p class="centerbox">Your tips were amazing!<br>Mariella says, \"You make me proud!\" and gives you a fist bump.</p>'+
                                    '<p class="centerbox">Press <b>any key</b> to continue.</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>',
                ADVANCE: ADVANCE.FORWARD
            }
        ]
    }
};
