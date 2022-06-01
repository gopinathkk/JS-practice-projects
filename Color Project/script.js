var index = 0;
var r = 0;
var g = 0;
var b = 0;
var swicth = false;
var myTime = 0;


//function for switching between an array of colors each time the buuton is pressed.
function changeColors() {
  //stop auto switching
  clearInterval(myTime);
  swicth=false;
  //change to fixed set of color as given in the array.
  var color = ["red", "blue", "magenta", "purple", "cyan", "gold", "teal"];
  document.getElementsByTagName("body")[0].style.background = color[index++];
  if (index > color.length - 1) {
    index = 0;
  }
}

//function for swicthing to randon colors each time the button is pressed. Change color function is doing the job, each time the button is pressed.
function autocolor() {
  //stop auto switching
  clearInterval(myTime);
  swicth=false;
  //call the color change function each time the button is pressed
  colorchange();
 }

 // function for switching randon colors automatically every second. Switching this function on and off using the one button.
function randomcolor() {

  //start auto switch on and off using a single button
  if (swicth == false) {
    swicth = true;
  } else {
    swicth = false;
  }
//when the switch is on , call the change color function at 1 sec intervals until stop.
  if (swicth == true) {
    myTime = setInterval(function () {
      colorchange();
    }, 1000);
  } else {
    clearInterval(myTime);
  }

  console.log(swicth);
  console.log(myTime);
}


//color change function
function colorchange() {
  r = r + 23;
  g = g + 34;
  b = b + 63;
  var color = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementsByTagName("body")[0].style.background = color;
  
  if (r > 255) {
    r = 0;
  }
  if (g > 255) {
    g = 0;
  }
  if (b > 255) {
    b = 0;
  }

  console.log(r);
  console.log(g);
  console.log(b);

  return;
}
