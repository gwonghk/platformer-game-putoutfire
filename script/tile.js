//// Tile /////////
var Tile = function(type, x, y){

    var type = "";
    var element = null;

    function createElement(){

        element = document.createElement("div");
        element.classList.add("tile");
        element.classList.add(type);
        element.style.top = y;
        element.style.left = x;

        var gameBoard = document.getElementById("gameboard")
        gameBoard.appendChild(element);
    }

    function init() {
        createElement();
    }
};