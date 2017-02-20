console.log("Activate Engine");

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
          window.setTimeout(callback, 1000 / 60);
          };
})();

// Viewport
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

// Initial position
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var speed = 20;

// Set hero position
var hero = document.getElementById("hero");
hero.style.top = y;
hero.style.left = x;

// Controlls
var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;

var motion = {
  up:false,
  down:false,
  left: false,
  right: false
}


document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  switch(e.keyCode){
    case 38: // 87 - w key
      keyUP = true;
      break;
    case 40: // 83 - s key
      keyDOWN = true;
      break;
    case 37: // 65 - a key
      keyLEFT = true;
      break;
    case 39: // 68 - d key
      break;
    default:
  }
});

document.addEventListener('keyup', function(e) {

  switch(e.keyCode){
    case 38:
      keyUP = false;
      break;
    case 40:
      keyDOWN = false;
      break;
    case 37:
      keyLEFT = false;
      break;
    case 39:
      keyRIGHT = false;
      break;
    default:
  }

});


function render(){

  if(keyUP || motion.up){
    y -= speed;
  }

  if(keyDOWN || motion.down){
    y += speed;
  }

  if(keyLEFT || motion.left){
    x -= speed;
  }

  if(keyRIGHT || motion.right){
    x += speed;
  }

  hero.style.top = y;
  hero.style.left = x;
}


(function animloop(){
  requestAnimFrame(animloop);
  render();
})();