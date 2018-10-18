import {createCanvas, windowWidth} from "p5/global";

var Balls = [];
var paddle;
var score = 0;

//Put setup code here
function setup(){
    var cnv = createCanvas(1200, 800);
    cnv.position((windowWidth-width)/2, 30);
    background(20,20,20);
    loadBalls(30);
    frameRate(60);
//Creating lerping paddle
    paddle = new paddle(createVector(width/2, height/2), createVector(1,2), 25, color(255,0,0));
}

function draw() {
    background(20, 20, 20, 5000);
    // creates score on template
    textSize(32);
    fill(255,255,255);
    text(score, 400, 400)
//makes sure objects don't have outline
    noStroke();
    paddle.run();
    for (var i = 0; i < Balls.length; i++) {
        Balls[i].run();
        var Balls = Balls[i];
        checkCollision()

    }
}
//This removes the ball from the array when it touches the paddle
function checkCollision(){
    for(var j = 0; j < balls.length; j++)
        if (balls[i].loc.x > paddle.loc.x &&
        balls[i].loc.x < paddle.width &&
        balls[i].loc.y > paddle.loc.y &&
        balls[i].loc.y < paddle.height)
        balls[i].splice(i,1)

    }

//Loads the balls
function loadBalls(numBalls){
//Ball variables
    for(var i = 0; i < numBalls; i++)
        var loc = createVector(width/2,height/2);
        var vel = createVector(random(-3,3), random (-3,3));
        var rad = 25
        var col = color(random(0, 255), random(0,255), random(0,255))
    //creates ball using new variables we just defined
        var b = new Ball(loc, vel, rad, col);
        Balls.push(b);

}
