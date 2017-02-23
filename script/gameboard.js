// i dont know why i have to declare the hero twice but i do, or else i loose the object.
var hero = new Hero(1);
var doomfire = new DoomFire();
var TILE = 50;
var mapObjects = [];


var GameBoard = function(){

//-----------------------------------------------
// Global Variables
    var element = document.getElementById("gameboard");             // Gameboard element
    var isGameRunning = false;
    var gravity = 10; // Gravity in px;


//-----------------------------------------------
// Game Assets
    var level = [];
    var movement = {
        "up": false,
        "down": false,
        "left": false,
        "right": false,
        "jump": false
    };

//-----------------------------------------------
// Event Listeners

    document.addEventListener('keydown', function(e) {

        switch(e.keyCode){
            case 38: // 87 - w key
                movement.up = true;
                break;
            case 40: // 83 - s key
                movement.down = true;
                break;
            case 37: // 65 - a key
                movement.left = true;
                break;
            case 39: // 68 - d key
                movement.right = true;
                break;

            case 32: //space
                if (isGameRunning === true) {
                    movement.jump = true;
                } else {
                    startGame();
                    isGameRunning = true;

                }
                break;

            case 77: //m key
                console.log('toggle mute');
                musicToggle();

            default:
        }
    });

    document.addEventListener('keyup', function(e) {

        switch(e.keyCode){
            case 38: // 87 - w key
                movement.up = false;
                break;
            case 40: // 83 - s key
                movement.down = false;
                break;
            case 37: // 65 - a key
                movement.left = false;
                break;
            case 39: // 68 - d key
                movement.right = false;
                break;

            case 32:
                movement.jump = false;
                break;
            default:
        }
    });

//-----------------------------------------------
// BG Music

    function musicToggle() {
        // body...
        doomfire.inmotion.right = true;
        var music = document.getElementById('bgm-bikerace');
        return music.paused ? music.play() : music.pause();
    }

//-----------------------
// Render
    function render(){
        hero.render(movement);
        doomfire.render();
    }

  //   var fps = 60,
  //   step = 1/fps,
  //   counter = 0,
  //   dt = 0,
  //   now,
  //   last = timestamp();
  // // fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  //   (function frame() {
  //           // fpsmeter.tickStart();
  //           now = timestamp(); //the time at the start of this loop
  //           dt = dt + Math.min(1, (now - last) / 1000); //the delta between now and last
  //           while(dt > step) {
  //             dt = dt - step;
  //             // update(step);
  //           }
  //           render(counter, dt);
  //           last = now; // the time at the start of the previous loop
  //           counter++;
  //           requestAnimationFrame(frame);
  //   })();


//-----------------------------------------------
// Game Loop
    function animloop(){
        window.requestAnimFrame(animloop);
        render();

    };

//-----------------------------------------------
// Start Game
    function startGame(){
        //create level
        var simpleLevel = new Level(simpleLevelPlan);
            hero = new Hero(gravity);
            doomfire = new DoomFire();
        //hide start screen
        document.getElementsByClassName('startscreen-container')[0].style.zIndex = -100;
        // run rendering
        animloop();
    }
}

//-----------------------------------------------
// Game Loop

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();



var gameBoard = new GameBoard();

