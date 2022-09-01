// copy the completed HTML, CSS and JavaScript file into the files in this folder
// add buttons below the div A div B div C
// in each div, create a button with value change something

function changeColor() {
    var box1 = document.getElementById("box1");
    if (box1.style.backgroundColor.match("blue")) {

        box1.style.backgroundColor = "red";
        box1.style.border = "dashed 3px blue";
        console.log("red");
    }
    else {
        box1.style.backgroundColor = "blue";
        box1.style.border = "dashed 3px red";
        console.log("blue");
    }
};

function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("gameOn.jpg")) {
        image.src = "neonTri.jpg";
        console.log("neon");
    }
    else {
        image.src = "gameOn.jpg";
        console.log("game");
    }
};

function changeSize() {
    var size = document.getElementById("box3").style;
    if (size.width == "100px") {
        size.width = "300px";
        size.height = "300px";
    }
    else {
        size.width = "100px";
        size.height = "100px";
    }
};