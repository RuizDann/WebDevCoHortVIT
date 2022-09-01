# Week 2 Day 4 Lecture
## What is JavaScript?

JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.

JavaScript is a programming language that provides functionality and acts as the "brain" to make a webpage interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). 

In our previous analogy of the human body:
- HTML = skeleton (bones)
- CSS = skin (style)
- JavaScript = brain (nerve center controlling the bones)

## Browsers have a JavaScript Runtime

Keeping up with this analogy, we also mentioned that the HTML file is a set of instructions for browser, so we're providing the bones and the skins.

The bones and skins are static (fixed) so it doesn't take much for the browser to just "lay" out the bones and skin.

JavaScript is different. Our brain is constantly "running" therefore we can't just provide the brain for the browser to lay out.

Browsers all have a JavaScript RunTime Environment.

A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs.

## Sandbox to run JavaScript - Console

When we give JavaScript "instructions" to the browser, it will perform those actions as declared.

Much like our brain, once the actions are completed, the JavaScript Runtime is still running (thinking).

We can access the "thinking" portion of the browser within the browser's DevTools under Console.

In here, we can perform regular JavaScript.

## What can we do with JavaScript?

JavaScript by itself can't really do much but it is still a programming language therefore we can do basic math operations.

JavaScript in combination with the web browser can do a lot of powerful stuff!

## Scripts - Importing

So how do we use JavaScript with our HTML?

Similiar to CSS, we have multiple options.
- Internal
- External

For both options, we are going to use the `<script>` tag.

### Internal Script

```html
<script>
    console.log("Hello!")
</script>
```

In this example above, we see basic JavaScript code in between the script tag.

But where does the script tag belong? 

- In the head?
- In the body?
- Somewhere else?

This has been a debate between developers due to various reasons!

Because the HTML file needs to tell the browser when to utilize JavaScript, the order of the code matters.

Therefore depending on the JavaScript code, would it make sense after the HTML elements are rendered or before?

We'll go over different scenarios as we progress, but for now, let's put it inside of the head.

### External Script

```html
<script src="script.js"></script>
```

```js
console.log("Hello!")
```

For external scripts, we have a separate JavaScript file. The filetype is `.js`.

In the HTML, we provide a `script` tag with attribute: `src`.

The value for the `src` attribute is the the path to the JavaScript file.

The `script` will be inside of the head of the HTML file.

NOTE: You can have multiple `script` tags.
## Console Logs

So far, our only example for JavaScript is `console.log`.

The console it is referring to is the browser console (JavaScript Runtime Environment) and the method in use is the `log`.

`console.log` is followed by parentheses: `console.log()`

In between the parentheses, we provide a `String` with quotation marks.

A `String` is the computer version of characters (alphanumeric combinations).

In the real world, this is a great method of debugging.

## PRACTICE
- Using the external method, import the practice JavaScript file into the HTML.
- Using the internal method, create a new console.log with your name!

## Introduction to Document Object Model (DOM)

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

The HTML DOM model is constructed as a tree:

<img src="pic_htmltree.gif">

With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

We use JavaScript to first access the HTML DOM elements and even console log the elements*

HTML DOM methods are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.

```html
<p id="demo">Demo Hello!</p>

<script>
    console.log(document.getElementById("demo").innerText)
    document.getElementById("demo").innerText = "Hello World!";
</script>
```

In the example above, getElementById is a method, while innerText is a property.

We will go over methods and properties in depth.

NOTE: Why would use JavaScript/DOM instead of writing into the HTML directly? 

We can **dynamically** update/render/manipulate HTML properties. 

Ex. Going to amazon.com its still a single HTML page but depending on if you're logged in or not, the content varies.

We'll get into "events" more later!

### DOM Methods/Query Selectors

In order to make any changes, we need the element itself in order to make those changes.

We have 5 available query selection methods but we will cover 3 today:
- document.getElementById()
- document.getElementsByTagName()
- document.getElementsByClassName()

If we look at the methods themselves, you can notice the distinction in "getElement/s",
where one returns a single element and the others return multiple elements.

document.getElementById() - Find an element by element id

Inside of the parentheses, you would provide the id in between quotation marks. (single or double)

```js
document.getElementById('currentHeader')
```

document.getElementsByTagName() - Find elements by tag name

Inside of the parentheses, you would provide the tag name in between quotation marks. (single or double)

```js
document.getElementsByTagName('p') // h1 // li // div
```

document.getElementsByClassName() - Find elements by class name

Inside of the parentheses, you would provide the class name in between quotation marks. (single or double)

```js
document.getElementsByClassName('navLinks') 
```

## DOM Family Tree

Similar to HTML family tree, we have the relationships with children, parents and siblings.

With JavaScript, we can use those relationship to access family member elements.

- firstChild
- lastChild
- nextSibling
- parentElement
- previousSibling

```html
<ul id="myList">
    <li>John</li>
    <li id="middleChild">Sally</li>
    <li>Bob</li>
<ul>
        
```

```js
// in order to get to John, we have options!
document.getElementById("myList").firstChild
document.getElementById("middleChild").previousSibling
```

## EXERCISE
- Instructions in the exercise.js