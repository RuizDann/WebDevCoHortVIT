// copy the completed HTML, CSS and JavaScript file into the files in this folder
// above the 3 pillar columns, create a hero image carousel!
// A hero image is a large image often at the top of the website.
// check out zola.com and see the carousel hero image!
// NOTE: yours only needs to be triggered by buttons.

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

var position = 0;

function scrollPrev() {
  if (position > 0) {
    var slider = document.getElementById("imgSlider");
    position -= 1;
    var offset = position * 400 + 0;
    slider.style.transform = "translateY(-" + offset + "px)";
  }
};

function scrollNext() {
  if(position < 5) {
    var slider = document.getElementById("imgSlider");
    position += 1;
    var offset = position * 400 + 0;
    slider.style.transform = "translateY(-" + offset + "px)";
  }
};

function addContact() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var date = new Date().toLocaleDateString();
    var nameInput = document.getElementById("displayName");
    var emailInput = document.getElementById("displayEmail");

    if (emailInput.value.match(validRegex)) {
        var dateCol = document.getElementById("dateCol");
        var contactNames = document.getElementById("nameCol");
        var contactEmails = document.getElementById("emailCol");

        var nameVal = nameInput.value;
        var emailVal = emailInput.value;

        var newDateElement = document.createElement("li");
        var newNameElement = document.createElement("li");
        var newEmailElement = document.createElement("li");
    
        newDateElement.innerText = date;
        newNameElement.innerText = nameVal;
        newEmailElement.innerText = emailVal;

        dateCol.append(newDateElement);
        contactNames.append(newNameElement);
        contactEmails.append(newEmailElement);
    
        nameInput.value = "";
        emailInput.value = "";

        alert("You have been successfully added to the contact list!");
    } 
    else {
        alert("Invalid email address!");

        emailInput.value = "";
    }
};