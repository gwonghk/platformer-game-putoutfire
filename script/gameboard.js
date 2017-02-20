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

    /*
     *  Game global variables
     */
    var element = document.getElementById("gameboard");             // Gameboard element
    var gravity = 5;                                               // Gravity in px;

    /*
     *  Game assets
     */
    var level = [];
    var hero = new Hero(gravity);
    var movement = {
        "up": false,
        "down": false,
        "left": false,
        "right": false,
        "jump": false
    };

    /*
     *  Event listeners
     */
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

            case 32:
                movement.jump = true;
                break;
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


    /*
     *  Render
     */
    function render(){

        hero.render(movement);

    }

    /*
     *  Game loop
     */
    function animloop(){
        window.requestAnimFrame(animloop);
        render();
    };
    animloop();

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






