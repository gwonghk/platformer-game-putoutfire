//// Doom Fire /////////
var DoomFire = function(spawntime){
	var self = this;

	self.x = -window.innerWidth;
	self.y = 0;
	self.damage = 0;
	var speed = 10;
	var el = document.getElementById('doomfire');


	self.inmotion = {
		right: false,
	}

	function edgeDetect() {
		// body...
		if(self.x >= window.innerWidth){
			self.inmotion.right = false;
			console.log('you died! =(!');
		}
	}

	function move() {

		(self.inmotion.right) ? self.x += speed : self.x -= 0;
		el.style.left = self.x + 'px';

	}

	self.render = function() {
		move();
		edgeDetect();
	}


}

