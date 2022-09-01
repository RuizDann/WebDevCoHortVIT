# Week 1 Day 3 Lecture

## CSS

CSS is the language we use to style an HTML document.

CSS stands for Cascading Style Sheets

CSS describes how HTML elements are to be displayed on screen, paper, or in other media.

CSS saves a lot of work. It can control the layout of multiple web pages all at once.

Here is an example of CSS

```css
body {
  background-color: 'blue';
}
```

### CSS Solved a Big Problem
HTML was NEVER intended to contain tags for formatting a web page!

HTML was created to describe the content of a web page, like:

`<h1>This is a heading</h1>`

`<p>This is a paragraph.</p>`

When tags like `<font>`, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. 

Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

To solve this problem, the World Wide Web Consortium (W3C) created CSS.

CSS removed the style formatting from the HTML page!

### Syntax

```
selector {
  property: value; /* this is a declaration/rule */
}
```

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

### How do we add/import/join/link/use CSS with our HTML page?

There are three ways of inserting a style sheet:

- External CSS
- Internal CSS
- Inline CSS

#### External CSS

An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

Each HTML page must include a reference to the external style sheet file inside the `<link>` element, inside the head section.

```html
<html>
  <head>
    <link rel='stylesheet' href="dummy.css">
  </head>
  <body>
    <a href="https://www.vetsintech.co">Visit ViT</a>
  </body>
</html>
```

#### Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
    body {
      background-color: linen;
    }

    h1 {
      color: maroon;
    }
    </style>
  </head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>
```

#### Inline CSS
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

```html
<!DOCTYPE html>
<html>
  <body>

    <h1 style="color:blue;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>

  </body>
</html>
```

### So what can we do with CSS? What "declarations" can we make?

There are many declarations that are available, but let's focus on some basics.

- color
- background-color
- height
- width
- font-family
- font-style
- font-weight
- font-size

### COLOR

Color applies to typography and background-color applies to the fill of the element.

Both properties for color can be defined with different ways:
- By color name
- RGB
- hexadecimal
- etc.

There are 140+ color names that modern browsers support:
- black
- aliceblue
- blue
- aqua
- aquamarine
- hotpink
- mediumorchid
- lemonchiffon
- etc.

```css
h1 {
  color: red; /* all h1s will now be color red */
}
```

RGB and Hexadecimal depends on a set of 3 values.

RGB takes in 3 values, each ranging from 0 - 255, which each value in the set representing red, green, blue respectively.

Hexadecimal takes in a single 6 character/digit value with each pair representing red, green, blue respectively. The pair ranges from 00 - FF, a 255 combination that takes proceeds numeric values with alphabet values.

```css
h1 {
  color: #0000FF; /* hexadecimal color blue */
  background-color: rgb(0, 255, 0); /* RGB color green */
}
```

## PRACTICE

Inside of `practice.html` using internal stylesheet, style all:
- divs to have the background color of black
- h1 to have the color of white
- p to have the color of yellow

-Make sure to have the file open in your browser, save your changes and then refresh your browser 

### FONT-FAMILY

In CSS there are five generic font families:

- Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
- Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
- Monospace fonts - here all the letters have the same fixed width. They create a mechanical look. 
- Cursive fonts imitate human handwriting.
- Fantasy fonts are decorative/playful fonts.

    /* A generic family name only */
    font-family: serif;
    font-family: sans-serif;
    font-family: monospace;
    font-family: cursive;
    font-family: fantasy;

The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. 

Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). 

The font names should be separated with comma.

### FONT-STYLE

The font-style property is mostly used to specify italic text.

This property has three values:

- normal - The text is shown normally
- italic - The text is shown in italics
- oblique - The text is "leaning" (oblique is very similar to italic, but less supported)

```css
h1 {
  font-style: normal;
}

h2 {
  font-style: italic;
}

h3 {
  font-style: oblique;
}
```

### FONT-WEIGHT

The font-weight property specifies the weight of a font:

```css
p {
  font-weight: normal;
}

span {
  font-weight: bold;
}
```

    /* Keyword values */
    font-weight: normal;
    font-weight: bold;

    /* Keyword values relative to the parent */
    font-weight: lighter;
    font-weight: bolder;

    /* Numeric keyword values */
    font-weight: 100;
    font-weight: 200;
    font-weight: 300;
    font-weight: 400;// normal
    font-weight: 500;
    font-weight: 600;
    font-weight: 700;// bold
    font-weight: 800;
    font-weight: 900;

### FONT-SIZE

The font-size property sets the size of the text.

There are multiple value types for font-size categorized into two methods:
- absolute
- relative

We will only be covering the absolute method of pixels in this course.

```css
h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  font-size: 14px;
}
```

### HEIGHT AND WIDTH

The CSS height and width properties are used to set the height and width of an element.

The CSS max-width property is used to set the maximum width of an element.

```css
div {
  height: 200px;
  width: 200px;
  max-width: 400px;
  background-color: powderblue;
}
```

## EXERCISE

Inside of the exercise.html page:
- link the external exercise.css page
- create a div with:
  - h1 with the content: I am a heading
  - p with the content: I am a p tag
  - img from the internet

Inside of the exercise.css page:
- style the p to be as close as possible to the h1
- set a height and width to the image so it is a 200px by 200px square