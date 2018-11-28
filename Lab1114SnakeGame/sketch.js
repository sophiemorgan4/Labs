//SOPHIE MORGAN
//November 14, 2018
var w = 20;
var cols, rows;
var snake;
var food;
var locX;
var locY;

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  var cols = width/w;
  var rows = height/w;
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
  food = new Food();
  frameRate(10);
}

//  The draw function is called @ 10 fps
foodPosition();
function draw() {
  background(5, 5, 5);
  snake.run();
  food.render(locX, locY);
  if(snake.loc.x == locX && snake.loc.y == locY){
    foodPosition();
  }
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

function foodPosition(){
  var randomX = Math.random() * 800;
  locX = randomX - (randomX%20);
  var randomY = Math.random() * 800;
  locY = randomY - (randomY%20);
}
