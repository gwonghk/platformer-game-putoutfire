console.log("Activate Engine");

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
          window.setTimeout(callback, 1000 / 60);
          };
})();

var Player = new Hero();

// Viewport
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;


//-----------------------------------------------
// BG Music



//--------------------------------------------------
// Start Positioning

// Initial position
var x = Player.position.x / 2;
var y = Player.position.y / 2;
var speed = Player.speed;

// Set hero position
var hero = document.getElementById("hero");
hero.style.left = x;
hero.style.top = y;




//--------------------------------------------------
// Controls
var keyUP = false;
var keyDOWN = false;
var keyLEFT = false;
var keyRIGHT = false;

document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  // Controll Key Setting


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
      keyRIGHT = true;
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

  if(keyUP){
    y -= speed;
  }

  if(keyDOWN){
    y += speed;
  }

  if(keyLEFT){
    x -= speed;
  }

  if(keyRIGHT){
    x += speed;
  }

  hero.style.top = y;
  hero.style.left = x;
}


(function animloop(){
  requestAnimFrame(animloop);
  render();
})();