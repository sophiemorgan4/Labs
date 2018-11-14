//Snake Constructor function

function Snake(loc,vel){
  this.loc = loc;
  this.vel = vel;

  this.run(){
    this.update();
    this.render();
  }

  this.update(){
    this.vel.mult(w);
    this.loc.add(this.vel)
  }

  this.render();
}
