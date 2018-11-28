function Food(xLocation, yLocation){
//this.loc = createVector(0, 0);
this.xLocation = xLocation;
this.yLocation = yLocation;
this.run = function(){
  this.render(this.locX, this.locY);
}

  this.render = function(){
    fill(255,0,0);
    rect(xLocation, yLocation, w,w);
  }
}// End of Constructor function
