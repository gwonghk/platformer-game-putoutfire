//// Tile /////////

var Tile = function(type, left, top){

	this.x = left;
	this.y = top;
	this.height = TILE;
	this.width = TILE;
    this.type = type;
    var element = null;

    function createElement(){

		var el = ltb('div', 'tile')
		el.classList.add(type);
		el.style.top = top;
		el.style.left = left-50; // dont know how to fix this bug
		el.style.width = TILE+'px';
		el.style.height = TILE+'px';

		var levelEl = document.getElementById('level')
        levelEl.appendChild(el);

    }

    function init() {
        createElement();
    }
    init();
};