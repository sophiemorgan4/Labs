// Sophie Morgan
var data;


function preload(){
  data = loadJSON("paris.json");
//  console.log(data);

}
function bubbleSort(){
  for(var i = (data.length - 1); i >= 0; i--){
    for(var j = 0; j < i; j++){
      if(data[j].high < data[j+1].high){
        var temp = data[j]
        data[j] = data[i+1]
        data[j+1] = temp
      }
    }
  }
}
function setup(){
  noCanvas();
  console.log(data.forecast);
}
