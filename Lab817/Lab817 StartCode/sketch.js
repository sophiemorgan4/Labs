
//  Sophie Morgan and Danny Sochoux
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  ellipse(400, 400, 200, 200);
  fill(0, 100, 0);
}

//  The draw function is called @ 30 fps
function draw() {
  //body 1
  //body
  fill(35, 239, 73);
  stroke(1);
  ellipse(400, 400, 200, 200);
  //white eye
  fill(255, 255, 255);
  stroke(255);
  ellipse(400, 370, 100, 100);
  //teal eye
  fill(6, 159, 145);
  stroke(1);
  ellipse(400, 370, 50, 50);
  //pupil
  fill(1, 1, 1);
  stroke(1);
  ellipse(400, 370, 30, 30);
  //horns
  fill(255, 255, 255);
  triangle(350, 300, 355, 320, 345, 320);
  fill(255, 255, 255);
  triangle(450, 300, 455, 320, 445, 320);
  //mouth
  fill(1, 1, 1);
  ellipse(400, 450, 75, 40);
  //legs
  fill(35, 239, 73);
  stroke(35, 239, 73);
  rect(350, 480, 10, 70);
  rect(450, 480, 10, 70);
  //Arms
  rect(250, 400, 70, 10);
  rect(485, 400, 70, 10);
  //feet
  ellipse(335, 550, 50, 20);
  ellipse(435, 550, 50, 20);
  //hands
  rect(250, 380, 10, 30);
  rect(545, 410, 10, 30);
  //body 2
  //body
  fill(35, 239, 73);
  stroke(1);
  ellipse(100, 400, 200, 200);
  //white eye
  fill(255, 255, 255);
  stroke(255);
  ellipse(100, 370, 100, 100);
  //teal eye
  fill(6, 159, 145);
  stroke(1);
  ellipse(100, 370, 50, 50);
  //pupil
  fill(1, 1, 1);
  stroke(1);
  ellipse(100, 370, 30, 30);
  //horns
  fill(255, 255, 255);
  triangle(50, 300, 55, 320, 45, 320);
  fill(255, 255, 255);
  triangle(150, 300, 155, 320, 145, 320);
  //mouth
  fill(1, 1, 1);
  ellipse(100, 450, 75, 40);
  //legs
  fill(35, 239, 73);
  stroke(35, 239, 73);
  rect(50, 480, 10, 70);
  rect(150, 480, 10, 70);
  //Arms
  rect(-50, 400, 70, 10);
  rect(185, 400, 70, 10);
  //feet
  ellipse(35, 550, 50, 20);
  ellipse(135, 550, 50, 20);
  //hands
  rect(-50, 380, 10, 30);
  rect(245, 410, 10, 30);
  //body 3
  //body
  fill(35, 239, 73);
  stroke(1);
  ellipse(700, 400, 200, 200);
  //white eye
  fill(255, 255, 255);
  stroke(255);
  ellipse(700, 370, 100, 100);
  //teal eye
  fill(6, 159, 145);
  stroke(1);
  ellipse(700, 370, 50, 50);
  //pupil
  fill(1, 1, 1);
  stroke(1);
  ellipse(700, 370, 30, 30);
  //horns
  fill(255, 255, 255);
  triangle(650, 300, 655, 320, 645, 320);
  fill(255, 255, 255);
  triangle(750, 300, 755, 320, 745, 320);
  //mouth
  fill(1, 1, 1);
  ellipse(700, 450, 75, 40);
  //legs
  fill(35, 239, 73);
  stroke(35, 239, 73);
  rect(650, 480, 10, 70);
  rect(750, 480, 10, 70);
  //Arms
  rect(550, 400, 70, 10);
  rect(785, 400, 70, 10);
  //feet
  ellipse(635, 550, 50, 20);
  ellipse(735, 550, 50, 20);
  //hands
  rect(550, 380, 10, 30);
  rect(845, 410, 10, 30);
}
