var txt = ["lionfish", "seahorse", "eel", "coral", "jellyfish","turtle", "gobi", "puffer"];

function setup(){
  noCanvas();
  console.log(txt)
  bubbleSort(txt);
}
function draw(){
  
}

function bubbleSort(txt) {
  //variable will define word length for sorting
    var length = txt.length;
        for (var i=0; i < length; i++) {
          //for loop that indicates which word is shorter for sorting
          for (var j = 1; j < (length - 1); j++){
            //identifies if left one is larger than right
            if (txt[j] > txt[j+1]) {
              //defines variables and parts of if statement
                var temp = txt[j]; // replaces current string
                txt[j] = txt[i+1];
                txt[j+1] = temp;
              console.log(txt);
            }
        }
    }
}
