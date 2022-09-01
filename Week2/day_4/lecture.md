# Week 2 Day 4 Lecture

## Review

Yesterday we learned the steps involved in accessing an element or elements of the DOM.  
The real 'magic' happens when you then manipulate properties of those elements.



```html
<img src="randomImage.jpg" id="randomImage">
```

The web browser will generate an HTMImageElement DOM object.

The input element has two attributes:

The src attribute with the value randomImage.jpg.
The id attribute with the value randomImage.

The generated HTMImageElement object will have the corresponding properties:

The img.src with the value randomImage.jpg.
The img.id with the value randomImage.

## DOM Properties

Once we have the element using the query selectors, we can now access/change the properties. Every single element in the DOM has a collection of properties we can access. 

The properties available are the attributes similiar to the ones we provide in the opening HTML tags.

```js
document.getElementById('randomImage').src
document.getElementById('navLink').href
document.getElementById('currentHeader').style
```

We also have two additional properties:
- innerText, only manipulates the Text
- innerHTML, allows us to overwrite all of inner HTML contents

```html
<h1 id="onlyHeader"><i>Best Header</i></h1>
```

```javascript
console.log(document.getElementById('onlyHeader').innerText) // Best Header
console.log(document.getElementById('onlyHeader').innerHTML) // <i>Best Header</i>
```

By using console.log we can confirm that we have successfully accessed/selected the element and its properties.

Now let's UPDATE the properties!

To update the properties, we're going to use the assignment operator (=)

We can best understand the operation by evaluating the left and right side of the assignment operator.

```syntax
assignee = assignment
```

```js
document.getElementById('onlyHeader').innerText = "A Brand New Header By JavaScript"

// or replace the inner HTML to add more jazz
document.getELementById('onlyHeader').innerHTML = '<span> style="font-weight: 300">A sleek Header</span>'
```

Though we can update the whole innerHTML of every element, we can get away with most of our needs by directly changing attributes and specifically, styles.

```js
document.getElementById('randomImage').src = "newRandomImage.jpg"
document.getElementById('onlyHeader').style = "background-color: black; color: white;"
```

## DOM CSS

The use of the style property will actually replace the whole style for the selected element.

Therefore, whether you have inline styling or the use of CSS, the JavaScript code will replace the whole style property for the selected element.

```html
<div style="width: 100px; height: 100px" id="container">This is my container</div>
```

Given the div with a width and height of 100px, we want to use JavaScript to change the background color.

```js
document.getElementById("container").style = "background-color: blue" // bad
```

This would replace the width and height with just the background color!

So in order for us to style with JavaScript and add any ADDITIONAL properties, we would need to include all of the previous properties.

```js
document.getElementById("container").style = "background-color: blue; width: 100px; height: 100px" // better but not good.
```

Specifically for style, we have the option to target specific CSS properties by appending it after `style.`

Let's consider an example, if you have a paragraph element with an ID of 'intro' you could easily change the color of that element using the DOM.

```js
document.getElementById('intro').style.color = '#FF0000'
```
NOTE: accessing the style properties through the DOM is done with pascalCase not the hyphenated case you see in your CSS.

```css
background-color: purple;
```

```js
document.getElementById('intro').style.backgroundColor = 'purple'
```

Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

## PRACTICE

## VARIABLES

There is one downfall to this.









Repetitive coding!


We don't want to add every style just to add one more property
and we don't want to keep selecting the same element and changing individual properties.

```js
document.getElementById('demo').style.color = "blue"
document.getElementById('demo').style.backgroundColor = "black"
document.getElementById('demo').style.height = "100px"

```

We cannot avoid the change of individual properties, but we can reduce the repetitive selector.

We can store the selected element into a "container"/reference point to refer to again and again.

Enter variables.

```js
var demoElement = document.getElementById('demo')
demoElement.style.color = "purple"
demoElement.style.backgroundColor = "yellow"
```

To instantiate a variable, we use the keyword `var` followed by any name we choose.

In the example above we named the variable demoElement.

Using the assignment operator again (=), the variable is the assignee and the assignment is going to be selected element itself.

Now we can replace the use of the query selection with the variable we created. They are one and the same now!

## Exercise