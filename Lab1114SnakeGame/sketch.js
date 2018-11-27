//SOPHIE MORGAN
//November 14, 2018
var w = 20;
var snake;
var food;
var segments = [];

//  The setup function function is called once when your program begins
function setup() {
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  var cols = width/w;
  var rows = height/w;
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  food = new Food();
}

//  The draw function is called @ 10 fps
function draw() {
  Food.render();
  background(20, 20, 20, 6000);
  snake.run();
}
// This function moves the snake based on the key pressed
function keyPressed(){
  //up
  if(keyCode === UP_ARROW){
   snake.vel = createVector(0, -20);
   snake.loc.add(snake.vel);
 }
 //down
 if(keyCode === DOWN_ARROW){
   snake.vel = createVector(0, 20);
   snake.loc.add(snake.vel);
 }
 //right
 if(keyCode === RIGHT_ARROW){
   snake.vel = createVector(20, 0);
   snake.loc.add(snake.vel);
 }
 //left
 if(keyCode === LEFT_ARROW){
   snake.vel = createVector(-20, 0);
   snake.loc.add(snake.vel);
  }
}

//function cols(){
//  return floor(width/w);

//function rows(){
  //return floor(height/w);

//function randomVector(){
  //return createVector(floor(width/w),floor(height/w));
