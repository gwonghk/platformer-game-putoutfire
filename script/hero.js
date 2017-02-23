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
    self.falling = false;

    self.friction = 1/6;
    self.accel = 1/3;
    self.dx = 0;
    self.dy = 0;
    self.ddx = 0;
    self.maxdx = 15;
    self.maxdy = 60;

//-----------------------------------------------
// Collision Detection

    function checkCollision(){
        mapObjects.forEach(function(i){

            if (recCollide(hero, i)) {
                self.y = i.y;
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
            checkCollision()
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
                checkCollision();
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


    this.run = function(movement, dt){

        if(movement.left && checkCollision()){
            self.x -= 0;
        } else if (movement.left && !checkCollision()){
            self.x -= speed;
        }

        if(movement.right && checkCollision()){
            self.x -= 0;
        } else if (movement.right && !checkCollision()){
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