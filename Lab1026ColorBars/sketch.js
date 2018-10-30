var Bars = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  numBars = 40;
  loadBars(numBars);
  bubbleSort(numBars);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20,6000);
  noStroke();
  for (var i = 0; i < Bars.length; i++){
    Bars[i].run();
  }
}

function loadBars(numBars){
  for(var i = 0; i < numBars; i ++){
    var w = 600/numBars;
    var h = 250;
    var loc = createVector((w+i), 150);
    var red = random(0,255);
    var green = random(0,255);
    var blue = random(0,255);
    var col = color(red, green, blue);
    var clrA = (red+green+blue)/3
    var bar = new Bar(loc, w, h, col, clrA);
    Bars.push(Bar);
  }
}

function bubbleSort(Bars){
  //variable defining sorting basis
  var length = Bars.length
    for(var i = 0; i < length; i ++){
      for(var j = 0; j < (length-1); j++){
        if(Bars[j] > j[j+1]){
          var temp = Bars[j+1];
          Bars[j] = Bars[i+1];
          Bar[j+1] = temp;
          console.log(Bars);
        }
      }
    }
}
