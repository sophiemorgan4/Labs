//Snake Constructor function

function Snake(loc,vel,status){
  this.loc = createVector(width/2, height/2);
  this.vel = createVector(1,0);
  this.status = status;
  this.xspeed = 0;
  this.yspeed = 0;
  this.tail = [];
  this.points = 0;

  this.run = function(){
    this.update();
  }

  function draw(){
    fill(0, 0, 255);
    rect(this.loc.x, this.loc.y, w, w);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, 20, 20);
    }
  }

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width/w)
    this.loc.y = constrain(this.loc.y, 0, height/w)
  }


  function eat(){
    if( this.x === food.x() && this.y === food.y()){
      food.eatd;
      this.points++;
      this.tail.push(createVector(this.x,this.y));
    }
  }

  // This function facilitates movement of the snake
  function move(){
    if (this.tail.length > 0){
      var tipOfTail = this.tail.pop();
      tipOfTail.x = this.x;
      tipOfTail.y = this.y;
      this.tail.unshift(tipOfTail);
    }
    // moves head along grid lines
    this.x += this.xspeed * w;
    this.y += this.yspeed * w;
  }

}/// End of Constructor Function
