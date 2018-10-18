function Ball(location, velocity, radius, col){
//Instance variables
    this.loc = location;
    this.vel = velocity;
    this.rad = radius;
    this.col = color;
    this.acc = createVector(0,.1);
//This function calls other function
    this.run = function(){
        this.checkEdges();
        this.update();
        this.render();
    }
//This function changes the location of the ball
    this.update = function(){
        this.loc.add(this.vel);
        this.vel.add(this.acc);
        this.loc.add(this.vel);
    }
//This function reverses direction when ball touches edge
    this.checkEdges = function(){
        if(this.loc.x < 0) this.vel.x = -this.vel.x;
        if(this.loc.y < 0) this.vel.y = -this.vel.y;
        if(this.loc.x > width) this.vel.x = -this.vel.x;
        if(this.loc.y > height) this.vel.y = -this.vel.y;
    }
    this.render = function(){
        fill(this.col);
        ellipse(this.loc.x,this.loc.y, this.rad, this.rad);
    }
}// End of Constructor Function
