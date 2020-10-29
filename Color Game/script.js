
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change color of squares
  for(var i =0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
}); 

colorDisplay.textContent = pickedColor;

for(var i =0;i<squares.length;i++){
  //add initial colors to the squares
  squares[i].style.backgroundColor = colors[i];

  //add click listener to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor ){
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });

}

function changeColors(color){
  //loop through all squares
  for(var i =0; i< colors.length;i++){
    //change each other to match given color
    squares[i].style.backgroundColor = color;
  }
  
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i<num;i++){
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", "+ g +", " + b + ")";
}