/*
** Ball Constructor Function
** Sophie Morgan
** Aug 20, 2018
*/

function Chaser(location, velocity, radius, col){
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
      // linear interpolation
      var mouseLoc = createVector(mouseX, mouseY);
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
    }
    this.vel.limit(3);
    this.loc.add(this.vel);
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
      fill(this.col);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    }

  }
