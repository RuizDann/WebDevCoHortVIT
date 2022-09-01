# Week 3 Day 4 Lecture

# Modifying the document

DOM modification is the key to creating “live” pages.

Today we’ll create new elements “on the fly” and modify the existing page content.

## Creating an element

To create DOM nodes, there are two methods:

document.createElement(tag)

Creates a new element node with the given tag:

```js
var div = document.createElement("div");
document.createTextNode(text);
```

Creates a new text node with the given text:

```js
var textNode = document.createTextNode("Here I am");
```

Most of the time we need to create element nodes (using tags), such as the li or div.

Using an example of an error message:

Creating the message div takes 3 steps:

```js
// 1. Create <div> element
let div = document.createElement("div");

// 2. Set its class to "error"
div.className = "error";

// 3. Fill it with the content
div.innerHTML =
  "<p>Invalid <strong>email address.</strong> Please try again.</p>";
```

We’ve created the element. But as of now it’s only in a variable named div, not in the page yet. So we can’t see it.

## Insertion methods

To make the div show up, we need to insert it somewhere into document. For instance, into `<body>` element, referenced by document.body.

There’s a special method append for that:
`document.body.append(div)`.

```html
<style>
  .error {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: red;
    background-color: #dff0d8;
  }
</style>

<script>
  let div = document.createElement("div");
  div.className = "error";
  div.innerHTML =
    "<p>Invalid <strong>email address.</strong> Please try again.</p>";

  document.body.append(div);
</script>
```

NOTE: we can also directly assign class since it is an attribute but in JavaScript, class is a special keyword so we use className

Here we called append on document.body, but we can call append method on any other element, to put another element into it.

For instance, we can append something to `<div>` by calling `div.append(anotherElement)`.

Here are more insertion methods, they specify different places where to insert:

- `node.append(...nodes or strings)` – append nodes or strings at the end of node,
- `node.prepend(...nodes or strings)` – insert nodes or strings at the beginning of node,
- `node.before(...nodes or strings)` –- insert nodes or strings before node,
- `node.after(...nodes or strings)` –- insert nodes or strings after node,
- `node.replaceWith(...nodes or strings)` –- replaces node with the given nodes or strings.

Here’s an example of using these methods to add items to a list and the text before/after it:

```html
<ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  var ol = document.getElementById("ol");
  ol.before("before"); // insert string "before" before <ol>
  ol.after("after"); // insert string "after" after <ol>

  let liFirst = document.createElement("li");
  liFirst.innerHTML = "prepend";
  ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

  let liLast = document.createElement("li");
  liLast.innerHTML = "append";
  ol.append(liLast); // insert liLast at the end of <ol>
</script>
```

before

<ol id="ol">
  <li>prepend</li>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>append</li>
</ol>
after

Here’s a visual picture of what the methods do:

!![Visual](Untitled.png)

So the final list will be:

```html
before
<ol id="ol">
  <li>prepend</li>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>append</li>
</ol>
after
```

## BREAKING DOWN THE DEMO

## PRACTICE

TO DO APP

## Feel free to style as you see fit to make this look nice

1. EASY: First write out the function that will add on to the existing list from the users input.
2. MEDIUM: Create a button at the bottom of the list to clear out the whole list.
3. HARD: With each item that is added, also add a delete button with the ability to delete just that item. NOTE: you may need to look up how to access the li that the button is attached to and how to remove it.
4. NIGHTMARE: Can you figure out a way to edit the task? NOTE: need to add an edit button

## EXERCISE

Populate a contact list from the form in the footer that you created yesterday. (look at untitled.png for a visual reference.)

## RETROSPECTIVE
