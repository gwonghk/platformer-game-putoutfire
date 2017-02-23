//// Doom Fire /////////
var DoomFire = function(){
	this.x = -17000;
	this.y = 0;
	this.damage = 0;
	var speed = 10;
	var el = document.getElementById('doomfire')

	var self = this

	var inmotion = {
		right: false,
		left: false
	}

	function edgeDetect() {
		// body...
		if(self.x >= window.innerWidth){
			console.log('you died! =(!');
			inmotion.right = false;
		}
	}

	function move() {

		if (inmotion.right) {
			self.x += speed;
		} else if (!inmotion.right){
			self.x += 0;
		}
		el.style.left = self.x + 'px';

	}

	this.render = function() {
		move();
		edgeDetect();
	}


}

