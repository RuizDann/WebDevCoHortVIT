# Week 3 Day 1 Lecture

So far, our JavaScript code gets loaded into the browser and it runs immediately upon render.

Today we want to **trigger** specific JavaScript actions, and therefore we need a trigger point.

## EVENTS

HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

### Common HTML Events
Here is a list of some common HTML events:

Event	        Description
- onchange	    An HTML element has been changed
- onclick	    The user clicks an HTML element
- onmouseover	The user moves the mouse over an HTML element
- onmouseout	The user moves the mouse away from an HTML element
- onkeydown	    The user pushes a keyboard key
- onload	    The browser has finished loading the page


HTML allows **event handler attributes**, with JavaScript code, to be added to HTML elements.


## EVENT HANDLERS

Event handlers can be used to handle and verify user input, user actions, and browser actions:

- Things that should be done every time a page loads
- Things that should be done when the page is closed
- Action that should be performed when a user clicks a button
- Content that should be verified when a user inputs data
- And more ...

Many different methods can be used to let JavaScript work with events:

- HTML event attributes can execute JavaScript code directly
- HTML event attributes can call JavaScript functions
- You can assign your own event handler functions to HTML elements
- You can prevent events from being sent or being handled
- And more ...


With single quotes:

```html
<element event='some JavaScript'>
```

With double quotes:

```html
<element event="some JavaScript">
```

## ONCLICK


Back to HTML - introducing the button.

```html
<button>Click Me!</button>
```

this renders a <button>button</button>

We add the attribute onclick to the button.

Inside the onclick, we can add JavaScript code inbetween. 

```html
<button onclick="document.getElementById('something').style.backgroundColor = 'blue'; document.getElementById('something').style.color = 'green';">Change Color!</button>
```

NOTE: since the value of the onclick starts with double quotes, the inner quotations need to be single quotes. This works vice versa as well!

## PRACTICE

Inside the practice folder, there is a start code for a box and 3 buttons.

Apply onclick to each button to:
- make the box bigger
- return the box to normal
- make the box smaller

## FUNCTION

Instead of writing JavaScript directly in the attributes of the opening tag, we can write the code into JavaScript files inside of functions.

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

### JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name() {
    // the logic to be executed
}
```

This helps us especially if our onclick logic is going to take more than 1 line of code.

We can take the logic from our onclick and put it in between our function declaration.

```js
function makeBigger() {
    var boxElement = document.getElementById('box');
    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
}
```

We then can call the function in it's place in the onclick in the HTML side.

```html
<button onclick="makeBigger()">make bigger</button>
```

/EXERCISE
- see instructions in exercise.js