//// Hero /////////
var Hero = function(){

    this.position = {
        'x': window.innerWidth / 2,
        'y': window.innerHeight / 2,
        'width': 0,			// Hero width 1 METER
        'height': 0,		// Hero height 2 METER
        'hp': 3
    }

    this.speed = 20;

    this.kill = function(){
        console.log('bang');
    }

    this.jump = function(){

    }

    this.run = function(){

    }


    // Hero render
    this.render = function(){

    }

}