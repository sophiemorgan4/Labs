/*
** Collision
** Sophie Morgan
** Sept 24, 2018
*/

function Boid(location, velocity, color){
  // Instance Variables
  this.loc = location;
  this.vel = velocity;
  this.clr = color;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    //if this is less than 85 away from ball
    //repel:: accelerate away from ball
    var repForce = p5.Vector.sub( this.loc, chaser.loc,);
    repForce.normalize();
    repForce.mult(.5);
    this.vel.add(repForce)
    this.loc.add(this.vel);

  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){

    //this makes balls come from opposite side when they touch an edge
    if(this.loc.x < 0) this.loc.x = width;
    if(this.loc.x > width) this.loc.x = 0;
    if(this.loc.y < 0) this.loc.y = height;
    if(this.loc.y > height) this.loc.y = 0;
  }
  // render () draws the ball at the new location
  this.render = function (){
    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(PI);
    triangle(-5, 0, 5, 0, 0, -15);
    pop()
  }


}//  ++++++++++++++++++++++++++++++++++++++  end of Boid constructor
