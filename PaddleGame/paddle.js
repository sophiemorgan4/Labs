function Paddle(location, width, length, color){
    //Instance Variables
    this.loc = location;
    this.w = width;
    this.l = length;
    this.col = color;

    // This function calls other functions
    this.run = function(){
        this.update();
        this.render();
    }

// lerp causes the paddle to follow the mouse
    this.update = function(){
        var mouseLoc = createVector(mouseX, mouseY);
        this.loc = p5.vector.lerp(this.loc, mouseLoc, .09)
    }
    //This function draws paddle at the new location
    this.render = function(){
        fill(0,255,0);
        rect(this.loc.x, 500, 150, 20);
    }
}// End of Constructor Function