//// Hero /////////
var Hero = function(gravity){

    this.height = TILE;
    this.width = TILE;
    this.y = window.innerHeight / 2;
    this.x = window.innerWidth / 2;


    this.health = 100; // Player health
    this.gravityInPixel = gravity;



    var speed = 10;      // Speed
    var element = document.getElementById("hero");
    var self = this;

//-----------------------------------------------
// Collision Detection

    // this.findFirstObjInXAxis = function(){
    //     if (this.x-TILE || this.x+this.width+TILE ) {

    //         if within a range
    //             we look through all mapObjects
    //                 and find one that has the same x

    //         forEach(function(i){
    //             this.x-TILE
    //         });


    //     } else {

    //     }
    // }


    this.checkCollision = function(){
        mapObjects.forEach(function(i){

            if (recCollide(hero, i)) {
                movement.left = false;
                movement.right = false;
                movement.down = false;
                movement.up = false;
                console.log('bump');
            } else {
          

            }
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
        }

        if(movement.right){
            self.x += speed;
        }


    }



    // Hero render
    this.render = function(movement){


        this.run(movement);
        addGravity();
        this.jump(movement);

        this.checkCollision();

        element.style.top = this.y;
        element.style.left = this.x;

    }

}