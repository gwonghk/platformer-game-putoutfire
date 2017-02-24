//// Hero /////////
var Hero = function(gravity){

    this.height = TILE;
    this.width = TILE;
    this.y = 0;
    this.x = 350;


    this.health = 100; // Player health

    var speed = 10;      // Speed
    this.element = document.getElementById("hero");
    var self = this;

//-----------------------------------------------
// Movement Physics
    // self.falling = false;

    // self.friction = 1/6;
    // self.accel = 1/3;
    // self.dx = 0;
    // self.dy = 0;
    // self.ddx = 0;
    // self.maxdx = 15;
    // self.maxdy = 60;

//-----------------------------------------------
// Collision Detection

    function checkCollision(){

        return;

        mapObjects.forEach(function(i){

            if (recCollide(hero, i) && (i.type != 'bucket')){
                self.y = i.y;
            // } else if (recCollide(hero, i) && ( (i.y + y.height) >= ( hero.y-hero.height) )){
            //     // trying to detect ceiling

            //     console.log('tagged');

            } else if (recCollide(hero, i) && (i.type == 'bucket')){
                winGame();
            }
        });
    }

    function winGame() {
        doomfire.inmotion.right = false;
        console.log('wingame');
    }

    // self.returnCollisionObj = function() {
    //     mapObjects.forEach(function(i){

    //         if (recCollideObj(hero, i))  {
    //             var a = recCollideObj(hero, i);
    //             self.y = a.y
    //         }
    //     });
    //     // body...
    // }



//-----------------------------------------------
// Jumping Variables


    self.addGravity = function(movement){
        self.y += movement.gravity;

        // console.log(self.y);
        var bottom = window.innerHeight;

        if(self.y > bottom){
            self.y = bottom;
        }
    }

    var jumpSpeed = 20;
    var maxJumpHeight = 200;
    var currentJumpHeight = 0;
    var isJumping = false;
    var jumpingUp = true;

    self.jump = function(movement){
        if(!movement.jump && !isJumping){   // if space is not press and the hero is not currently jumping
            //checkCollision()
            return
        }

        isJumping = true;

        if(currentJumpHeight < maxJumpHeight && isJumping && jumpingUp){
            //start jump up
            currentJumpHeight += jumpSpeed;
            self.y -= jumpSpeed;
        }

        if(currentJumpHeight >= maxJumpHeight && isJumping){
            currentJumpHeight -= jumpSpeed;
            //start fall
            self.y += jumpSpeed;
            jumpingUp = false;
            movement.gravity = 10;
        }

        if(currentJumpHeight < maxJumpHeight && isJumping && !jumpingUp){
            //falling
            if( currentJumpHeight <= speed){ // close to an object than the speed
                currentJumpHeight = 0;
                this.y += currentJumpHeight;
            }else{
                currentJumpHeight -= jumpSpeed;
                // this.y += jumpSpeed;


            }

        }

        if(currentJumpHeight <= 0){
            isJumping = false;
            jumpingUp = true;
        }

        if(movement.jump && !isJumping){
            movement.gravity = 0;
            self.y -= jumpSpeed;
            currentJumpHeight += jumpSpeed;
        }
    }


    self.run = function(movement){

        /*
        if(movement.left && checkCollision()){
            self.x -= 0;
        } else if (movement.left && !checkCollision()){
            self.x -= speed;
        }
        if(movement.right && checkCollision()){
            self.x -= 0;
        } else if (movement.right && !checkCollision()){
            self.x += speed;
        }*/


        if(movement.left){
            self.x -= movement.speedLeft;
        }

        if(movement.right){
            self.x += movement.speedRight;
        }
    }


    // Hero render
    self.render = function(movement){

        self.run(movement);

        this.jump(movement);
        self.element.style.top = this.y;
        self.element.style.left = this.x;
    }

}


    // self.run = function(movement){


    //     if(movement.left){
    //         self.ddx -= self.accel;
    //     }

    //     if(movement.right){
    //         self.ddx += self.accel;
    //     }
    // }

    // function update() {
    //     var wasleft = self.dx < 0;
    //     var wasright = self.dx > 0;

    //     if (wasleft) {
    //         self.ddx += self.friction;
    //     }
    //     if (wasright){
    //         self.ddx -= self.friction;
    //     }

    //     self.x -= self.dx;
    //     self.y -= self.dy;


    //     self.dx = bound(self.dx + self.ddx, -self.maxdx, self.maxdx);
    //     self.dy = bound(self.dy + self.ddy, -self.maxdy, self.maxdy);

    //     element.style.top = self.y;
    //     element.style.left = self.x;
    // }