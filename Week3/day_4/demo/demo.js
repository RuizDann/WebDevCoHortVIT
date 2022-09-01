function addLifts() {
  var date = new Date().toLocaleDateString();
  var name = document.getElementById("displayName").value;
  var bench = document.getElementById("benchPress").value;
  var squat = document.getElementById("squat").value;
  var deadlift = document.getElementById("deadlift").value;

  var newDateElement = document.createElement("li");
  var newNameElement = document.createElement("li");
  var newBenchElement = document.createElement("li");
  var newSquatElement = document.createElement("li");
  var newDeadliftElement = document.createElement("li");

  newDateElement.innerText = date;
  newNameElement.innerText = name;
  newBenchElement.innerText = bench;
  newSquatElement.innerText = squat;
  newDeadliftElement.innerText = deadlift;

  newDateElement.className = "newList";

  var dateCol = document.getElementById("dateCol");
  dateCol.append(newDateElement);

  var nameCol = document.getElementById("nameCol");
  nameCol.append(newNameElement);

  var benchCol = document.getElementById("benchCol");
  benchCol.append(newBenchElement);

  var squatCol = document.getElementById("squatCol");
  squatCol.append(newSquatElement);

  var deadliftCol = document.getElementById("deadliftCol");
  deadliftCol.append(newDeadliftElement);
}

function addDate() {
  var date = new Date().toLocaleDateString();
  var newDateElement = document.createElement("li");
  newDateElement.innerText = date;
  newDateElement.className = "newList";
  var dateCol = document.getElementById("dateCol");
  dateCol.append(newDateElement);

  dateCol.innerHTML = "<li class='newList'>" + date + "</li>";
}

function addName() {
  var name = document.getElementById("displayName").value;
  var newNameElement = document.createElement("li");
  newNameElement.innerText = name;

  var nameCol = document.getElementById("nameCol");
  nameCol.append(newNameElement);
}

function addBench() {
  var bench = document.getElementById("benchPress").value;
  var newBenchElement = document.createElement("li");
  newBenchElement.innerText = bench;

  var benchCol = document.getElementById("benchCol");
  benchCol.append(newBenchElement);
}

function addSquat() {
  var squat = document.getElementById("squat").value;
  var newSquatElement = document.createElement("li");
  newSquatElement.innerText = squat;
  var squatCol = document.getElementById("squatCol");
  squatCol.append(newSquatElement);
}

function addDeadlift() {
  var deadlift = document.getElementById("squat").value;
  var newDeadliftElement = document.createElement("li");
  newDeadliftElement.innerText = deadlift;
  var deadliftCol = document.getElementById("deadliftCol");
  deadliftCol.append(newDeadliftElement);
}

function advanceAddLifts() {
  addDate();
  addName();
  addBench();
  addSquat();
  addDeadlift();
}