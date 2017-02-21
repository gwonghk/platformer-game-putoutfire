//// Hero /////////
var Hero = function(gravity){


    console.log("Hero gravity", gravity)

    this.health = 100;                          // Player health
    this.height = scale + 'px';
    this.width = scale + 'px';

    this.gravityInPixel = gravity

    this.position = {
        'x': window.innerWidth / 2,
        'y': window.innerHeight / 2
    }

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
        self.position.y += self.gravityInPixel;

        //console.log(self.position.y);
        var bottom = window.innerHeight - 90;

        if(self.position.y > bottom){
            self.position.y = bottom;
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
            this.position.y -= jumpSpeed;
        }


        if(currentJumpHeight >= maxJumpHeight && isJumping){
            currentJumpHeight -= jumpSpeed;
            this.position.y += jumpSpeed;
            jumpingUp = false;
        }

        if(currentJumpHeight < maxJumpHeight && isJumping && !jumpingUp){

            if( currentJumpHeight <= speed){ // close to an object than the speed
                currentJumpHeight = 0;
               // this.position.y += currentJumpHeight;
               // debugger;
            }else{
                currentJumpHeight -= jumpSpeed;
                this.position.y += jumpSpeed;
            }

        }

        if(currentJumpHeight <= 0){
            isJumping = false;
            jumpingUp = true;
        }

        if(movement.jump && !isJumping){
            this.position.y -= jumpSpeed;
            currentJumpHeight += jumpSpeed;
        }

    }

    this.run = function(movement){

        if(movement.left){
            this.position.x -= speed;
        }

        if(movement.right){
            this.position.x += speed;
        }


    }

    // Hero render
    this.render = function(movement){


        this.run(movement);
        addGravity();
        this.jump(movement);

        element.style.top = this.position.y;
        element.style.left = this.position.x;

    }

}