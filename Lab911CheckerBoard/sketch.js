/* Sophie Morgan
**Lab 911:CheckerBoard
**
**
*/
//  Global variables
// Declare squares[] as a global variable
var squares = [];
var numberOfSquares = 8;
var squareSize;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  squareSize = width/numberOfSquares;
  loadSquares(8);
  //  traverse array and run each square
  for (var i = 8; i < squares.Length; i++){
    squares[i].render();

  }
}
function loadSquares(){
  var rowNum = 0;
  var colNum = 0;

  for(var row = 0; row < 8; row++) {
    var x = 100*row
    for(var col = 0; col < 8; col++) {
      var y = 100*color
      var loc = createVector(x,y);
      var c;
      if((row + col) %2){
        c = color(0,0,0)
      }
      else {
        c = color(255,255,255);
      }
      var s = new Sqr(loc,100,c);
      squares.push(s);
    }
  }

}
