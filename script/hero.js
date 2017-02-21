//// Hero /////////
var Hero = function(gravity){

    console.log("Hero gravity", gravity)

    this.health = 100;                          // Player health
    this.gravityInPixel = gravity;


    this.height = scale + 'px';
    this.width = scale + 'px';
    this.y = window.innerHeight / 2;
    this.x = window.innerWidth / 2;

    var speed = 20;                             // Speed
    var currentSpeed = 0;
    var element = document.getElementById("hero");
    var self = this;

    /*
     * Jump variables
     */
    var jumpSpeed = 20;
    var maxJumpHeight = 300;
    var currentJumpHeight = 0;
    var isJumping = false;
    var jumpingUp = true;


    function addGravity(){
        self.y += self.gravityInPixel;

        //console.log(self.y);
        var bottom = window.innerHeight - 90;

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
               // debugger;
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
            this.x -= speed;
        }

        if(movement.right){
            this.x += speed;
        }


    }

    // Hero render
    this.render = function(movement){


        this.run(movement);
        addGravity();
        this.jump(movement);

        element.style.top = this.y;
        element.style.left = this.x;

    }

}