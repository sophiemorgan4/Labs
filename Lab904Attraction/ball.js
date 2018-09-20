/*
** Ball Constructor Function
** Sophie Morgan
** Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance Variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function(){
    if(this !== b1){
      //if this is less than 250 away from ball
      //attract:: accelerate towards ball
      var d = this.loc.dist(b1.loc)
      if(d<350){
        var attForce = p5.Vector.sub(b1.loc, this.loc);
        attForce.normalize();
        attForce.mult(.08);
        this.vel.add(attForce)
      }
      //if this is less than 85 away from ball
      //repel:: accelerate away from ball
      if(d < 85){
        var repForce = p5.Vector.sub( this.loc, b1.loc,);
        repForce.normalize();
        repForce.mult(.5);
        this.vel.add(repForce)
      }
    }
    this.vel.limit(3);
    this.loc.add(this.vel);

  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    // if(this.loc.x < 0) this.vel.x = -this.vel.x
    // if(this.loc.x > width) this.vel.x = -this.vel.x
    // if(this.loc.y < 0) this.vel.y = -this.vel.y
    // if(this.loc.y > height) this.vel.y = -this.vel.y

  //this makes balls come from opposite side when they touch an edge
   if(this.loc.x < 0) this.loc.x = width;
   if(this.loc.x > width) this.loc.x = 0;
   if(this.loc.y < 0) this.loc.y = height;
   if(this.loc.y > height) this.loc.y = 0;
  }
  // render () draws the ball at the new location
  this.render = function (){
    fill(this.col);
    ellipse(this.loc.x,this.loc.y, this.rad, this.rad)
  }
}
