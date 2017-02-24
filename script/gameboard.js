// i dont know why i have to declare the hero twice but i do, or else i loose the object.
var hero = new Hero(1);
//var doomfire = new DoomFire();
var TILE = 50;
var mapObjects = [];


var GameBoard = function(){

//-----------------------------------------------
// Global Variables
    var element = document.getElementById("gameboard");             // Gameboard element
    var isGameRunning = false;


//-----------------------------------------------
// Game Assets
    var level = [];
    var movement = {
        "up": false,
        "down": false,
        "left": false,
        "right": false,
        "jump": false,
        "gravity": 10,
        "speedLeft": 10,
        "speedRight": 10
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
// Collision Detection

    function collisionDetection(){

        movement.gravity = 10;
        movement.speedLeft = 10;
        movement.speedRight = 10;
        if( hero.element.getClientRects().length == 0 ){
            return;
        }

        var heroRect = hero.element.getClientRects()[0];

        for(var i =0; i<mapObjects.length;i++){
            var tile = mapObjects[i];

            if( tile.element.getClientRects().length == 0 ){
                continue;
            }
            var tileRect = tile.element.getClientRects()[0];

            if (movement.gravity > 0) {

                //btm chk
                if(heroRect.bottom >= tileRect.top &&
                   heroRect.left <= tileRect.left + tileRect.width &&
                   heroRect.left + heroRect.width >= tileRect.left &&
                   heroRect.top <= tileRect.bottom
                )
                {
                    tile.element.style.background = "red";
                    console.log("collision bottom");
                    movement.gravity = 0;
                    hero.element.top = tileRect.top + 50;
                }
            }
/*            if (movement.gravity < 0) {
                //top chk
                if(heroRect.top <= tileRect.bottom &&
                    heroRect.left <= tileRect.left + tileRect.width &&
                    heroRect.left + heroRect.width > tileRect.left &&
                    heroRect.bottom > tileRect.top
                )
                {
                    tile.element.style.background = "yellow";
                    console.log("collision top");
                    hero.y = tileRect.bottom
                }

            }*/

            if (movement.speedLeft > 0) {
                // left check
                if( heroRect.left <= tileRect.left + tileRect.width &&
                    heroRect.left + heroRect.width > tileRect.left &&
                    heroRect.bottom > tileRect.top &&
                    heroRect.top <= tileRect.bottom
                )
                {
                    tile.element.style.background = "blue";
                    console.log("collision Left");
                    movement.speedLeft = 0;
                }
            }

            if (movement.speedRight > 0) {
                // right check
                if( heroRect.left + heroRect.width >= tileRect.left &&
                    heroRect.left < tileRect.left + tileRect.width &&
                    heroRect.bottom > tileRect.top &&
                    heroRect.top <= tileRect.bottom
                )
                {
                    debugger;
                    tile.element.style.background = "purple";
                    console.log("collision right");
                    movement.speedRight = 0;
                }
            }


            


            /*

            if (heroRect.left <= tileRect.left + tileRect.width &&
                heroRect.left + heroRect.width >= tileRect.left &&
                heroRect.top <= tileRect.top + tileRect.height &&
                heroRect.height + heroRect.top >= tileRect.top){

                tile.element.style.background = "red";

                // Bottom
                if(heroRect.top+heroRect.height >= tileRect.top){
                    hero.y = tileRect.top - heroRect.height;
                    console.log("Bottom");
                    movement.gravity = 0;
                }

                // Left
                //console.log("Left", heroRect.left, tileRect.left, tileRect.width)
                if(heroRect.left < tileRect.left + tileRect.width){
                    movement.speedLeft = 0;
                    console.log("Left");
                }
                   // Right
                if(heroRect.left+heroRect.width >= tileRect.left){
                    hero.x = tileRect.left - heroRect.width -1;
                    console.log("Right");
                }

                // Top
                if(heroRect.top <= tileRect.top + tileRect.height){
                    hero.x = tileRect.top + tileRect.height + 1;
                    console.log("Top");
                }
                */
            }
        };


//-----------------------------------------------
// BG Music

    function musicToggle() {
        // body...
        var music = document.getElementById('bgm-bikerace');
        return music.paused ? music.play() : music.pause();
    }

//-----------------------
// Render
    function render(){
        collisionDetection();
        hero.addGravity(movement);
        hero.render(movement);
        doomfire.render();
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
        hero = new Hero(movement.gravity);
        doomfire = new DoomFire();
        // window.setTimeout((doomfire.inmotion.right = true), 60000)

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

