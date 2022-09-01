function enlargeBox() {
  var boxElement = document.getElementById("enlargeBox");
  boxElement.style.width = "200px";
  boxElement.style.height = "200px";
}

function changeBoxColorToSkyblue() {
  var boxElement = document.getElementById("colorBox");
  boxElement.style.backgroundColor = "skyblue";
}

var degree = 15; // need a starting number

function rotateBox() {
  var boxElement = document.getElementById("rotateBox");
  boxElement.style.transform = "rotate(" + degree + "deg)"; // rotate by the degree variable
  degree = degree + 15; // increase the degree in order to keep rotating
}

function randomizeBgColor() {
  // given a list of random colors
  var colorList = [
    "black",
    "blue",
    "red",
    "orange",
    "purple",
    "green",
    "yellow",
  ];
  // pick a random number
  var randomNumber = Math.floor(Math.random() * 7); // makes a whole number out of a random number from 0 to 7 (the number of colors in the array)
  var boxElement = document.getElementById("colorBox");
  boxElement.style.backgroundColor = colorList[randomNumber];
}
