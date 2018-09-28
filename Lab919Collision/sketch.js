//  Global variables

var boids = [];
var chaser;

// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  chaser = new Chaser (createVector(width/2, height/2), createVector(.5,-.8),
                25, color(255,0,0));

  loadBoids(55);  //  !!!!!!!!!!  this is a function call


function draw() {
    background(20,20,20,22);
      for(var i = 0; i < boids.length; i++){
          boids[i].run(); // calls array
      }
  }
//calling boids function
function loadBoids(numBoids){
    for(var i = 0; i < numBoids; i++){
        var loc = createVector(width/2,height/2);
        var vel = createVector(random(-3,3), random(-3,3));
        var clr = color(255,0,0);
        boids.push(new Boid(loc, vel, clr)); // pushes boids into array
    }
    console.log(boids);
}

console.log(chaser);
}
