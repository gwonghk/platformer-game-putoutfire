//// Tile /////////

var Tile = function(type, left, top){

	this.x = left;
	this.y = top;
	this.height = TILE;
	this.width = TILE;
    this.type = type;
    this.element = null;
    var self = this;

    function createElement(){

        self.element = ltb('div', 'tile')
        self.element.classList.add(type);
        self.element.style.top = top;
        self.element.style.left = left-50; // dont know how to fix this bug
        self.element.style.width = TILE+'px';
        self.element.style.height = TILE+'px';

		var levelEl = document.getElementById('level')
        levelEl.appendChild(self.element);

    }

    function init() {
        createElement();
    }
    init();
};