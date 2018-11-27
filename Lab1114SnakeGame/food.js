function Food(){
  this.vec = createVector().mult(w);

  this.x = function(){
      return this.vec.x;
  }

  this.y = function(){
    return this.vec.y;
  }

  this.eatd = function(){
    this.vec = createVector().mult(w);

  this.render = function(){
    fill(255,255,255);
    rect(this.x(), this.y(), w, w);
  }
  }
}// End of constructor function
