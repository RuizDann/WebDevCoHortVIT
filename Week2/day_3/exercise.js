//  Write a JavaScript statement that selects the #meDom ID element.
console.log(document.getElementById("meDom"));

//  Write at least 2 ways to select the #myFamily ul element.
console.log(document.getElementById("myFamily"));
console.log(document.getElementsByTagName("ul"));

//  Write a JavaScript statement that selects Hans.
console.log(document.getElementsByClassName("rideOrDie")[1].innerText);

// Write a JavaScript statement that selects the .rideOrDie class.
document.getElementsByClassName("rideOrDie");

//  Bonus: Can you select Brian Oconner?
document.getElementsByClassName("rideOrDie")[2];

//  Bonus2: Can you console log Brian Oconner?
console.log(document.getElementsByClassName("rideOrDie")[2].innerText);