/*
TO DO APP

1. EASY: First write out the function that will add on to the existing list from the users input. */
var taskName = document.getElementById("displayName");

var taskList = document.getElementById("dateCol");

function addTask() {
    var taskVal = taskName.value;

    var newListElement = document.createElement("li");

    newListElement.innerText = taskVal;

    taskList.append(newListElement);
    
    taskName.value = "";
}

/* 2. MEDIUM: Create a button at the bottom of the list to clear out the whole list. */
function clearList() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

/* 3. HARD: With each item that is added, also add a delete button with the ability to delete just that item. NOTE: you may need to look up how to access the li that the button is attached to and how to remove it. */
var counter = 0;


/* 4. NIGHTMARE: Can you figure out a way to edit the task? NOTE: need to add an edit button */
