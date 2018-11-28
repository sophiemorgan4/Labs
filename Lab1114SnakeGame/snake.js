//Snake Constructor function

function Snake(loc,vel){
  this.loc = createVector(width/2, height/2);
  this.vel = createVector(1,0);
  this.segments = [];
  this.segments.push(createVector(0,0));


  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w)
    this.loc.y = constrain(this.loc.y, 0, height-w)
  }

this.render = function(){
  for(var i = 0; i < this.segments.length; i++){
    rect(this.segments[i].x, this.segments[i].y, w,w)
  }
  fill(0, 255, 0);
  rect(this.loc.x, this.loc.y, w, w);
}

}/// End of Constructor Function
