///////////// Gameboard ////////////////////
/*
var TILE = ?? // some distance in pixels
var METER = TILE
var FLOOR = { tilewidth , tileheight };

//governing movement
var GRAVITY = METER * 9.8 // can * a multiplyer
var MAXDX = METER * 20 // max horz speed in tiles/sec
var MAXDY = METER*20
var JUMP = METER*5 //some jump distance
*/
/////////// View Window ///////////////////////



var GameBoard = function(){

//-----------------------------------------------
// Global Variables
    var element = document.getElementById("gameboard");             // Gameboard element
    var gravity = 5; // Gravity in px;
    var isGameRunning = false;
    var scale = 50;


//-----------------------------------------------
// Game Assets
    var hero = new Hero(gravity);

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
        var music = document.getElementById('bgm-bikerace');
        return music.paused ? music.play() : music.pause();
    }


//-----------------------------------------------
// Render

    function render(){
        hero.render(movement);

    }

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
        simpleLevel.drawBackground();
        //hide start screen
        document.getElementsByClassName('startscreen-container')[0].style.zIndex = -100;
        // run rendering
        animloop();
    }
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();



var gameBoard = new GameBoard();

