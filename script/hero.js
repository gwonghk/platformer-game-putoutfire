//// Hero /////////
var Hero = function(gravity){

    this.height = TILE;
    this.width = TILE;
    this.y = window.innerHeight / 2;
    this.x = window.innerWidth / 2;


    this.health = 100; // Player health
    this.gravityInPixel = gravity;


    var speed = 15;      // Speed
    var element = document.getElementById("hero");
    var self = this;

//-----------------------------------------------
// Movement Physics
    this.maxdx = TILE*20; // max horizontal speed
    this.maxdy = TILE*60; // max vertical speed

    this.hjump = TILE * 1500;
    this.hgravity = TILE*9.8*6;
    this.falling = false;

    this.accel = this.maxdx * 2;
    this.friction = this.maxdx * 6;
    this.dy = 0;
    this.dx = 0;

    var wasleft = this.dx < 0;
    var wasright = this.dx > 0;

//-----------------------------------------------
// Collision Detection

    function checkCollision(){
        mapObjects.forEach(function(i){

            if (recCollide(hero, i)) {
                self.y = i.y;
                console.log(self.y+' hero x position');
                console.log(i.y+" object x position");
                console.log('block movement');
            }
            // if (recCollideX(hero, i)) {
            //     self.x = i.x;
            // }
        });
    }



//-----------------------------------------------
// Jumping Variables
    var jumpSpeed = 20;
    var maxJumpHeight = 300;
    var currentJumpHeight = 0;
    var isJumping = false;
    var jumpingUp = true;

    function addGravity(){
        self.y += self.gravityInPixel;

        //console.log(self.y);
        var bottom = window.innerHeight;

        if(self.y > bottom){
            self.y = bottom;
        }
    }


    this.kill = function(){
        console.log('bang');
    }

    this.jump = function(movement){



        if(!movement.jump && !isJumping){   // if space is not press and the hero is not currently jumping
            return
        }

        isJumping = true;



        if(currentJumpHeight < maxJumpHeight && isJumping && jumpingUp){
            currentJumpHeight += jumpSpeed;
            this.y -= jumpSpeed;
        }


        if(currentJumpHeight >= maxJumpHeight && isJumping){
            currentJumpHeight -= jumpSpeed;
            this.y += jumpSpeed;
            jumpingUp = false;
        }

        if(currentJumpHeight < maxJumpHeight && isJumping && !jumpingUp){

            if( currentJumpHeight <= speed){ // close to an object than the speed
                currentJumpHeight = 0;
               // this.y += currentJumpHeight;
            }else{
                currentJumpHeight -= jumpSpeed;
                this.y += jumpSpeed;
            }

        }

        if(currentJumpHeight <= 0){
            isJumping = false;
            jumpingUp = true;
        }

        if(movement.jump && !isJumping){
            this.y -= jumpSpeed;
            currentJumpHeight += jumpSpeed;
        }
    }

    this.run = function(movement){

        if(movement.left){
            self.x -= speed;
        //     self.dx -= self.accel
        //     self.x -= self.dx;
        // } else if (wasleft){
        //     self.dx += self.friction;
        }

        if(movement.right){
            self.x += speed;
        }


    }



    // Hero render
    this.render = function(movement){


        this.run(movement);
        checkCollision();
        addGravity();
        this.jump(movement);

        element.style.top = this.y;
        element.style.left = this.x;

    }

}