# Week 1 Day 4 Lecture

## CSS Continued

### Review
- Height and Width (Relative)
### Border

The CSS border properties allow you to specify the style, width, and color of an element's border.

The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.

It takes in 3 values that represent each of these three properties. Order does not matter.

There are allowed values for each of the properties.

border-color can be styled with any of the 3 ways of styling color:
- color name
- rgb
- hexadecimal

border-style takes in specific keyword values:

    border-style: none;
    border-style: hidden;
    border-style: dotted;
    border-style: dashed;
    border-style: solid;
    border-style: double;
    border-style: groove;
    border-style: ridge;
    border-style: inset;
    border-style: outset;

border-width takes in values same as width:
- relative
- absolute 

`border: solid;` This would be the same as just border-style

`border: dotted red;` Combination of two properties shorthanded

`border: solid 1px black;` The benefit of shorthand.

You have the option of separating the individual properties for individual sides.

### Margin

Margins are used to create space around elements, outside of any defined borders.

The CSS margin properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

CSS has properties for specifying the margin for each side of an element:
- margin-top
- margin-bottom
- margin-left
- margin-right

The margin CSS shorthand property sets the margin area on all four sides of an element.

    /* Apply to all four sides */
    margin: 20px;
    margin: -5px;

    /* vertical | horizontal */
    margin: 10px 5px;

    /* top | horizontal | bottom */
    margin: 10px auto 5px;

    /* top | right | bottom | left */
    margin: 1px 2px 0 3px;

Only demonstrating with absolute pixels here but it can take any measurement values.

### Padding

Padding is used to create space around an element's content, inside of any defined borders.

The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

CSS has properties for specifying the padding for each side of an element:
- padding-top
- padding-right
- padding-bottom
- padding-left

The padding CSS shorthand property sets the padding area on all four sides of an element at once.

    /* Apply to all four sides */
    padding: 1em;

    /* vertical | horizontal */
    padding: 5% 10%;

    /* top | horizontal | bottom */
    padding: 1em 2em 2em;

    /* top | right | bottom | left */
    padding: 5px 1em 0 2em;

NOTE: Padding cannot take in negative values while margin can.

## PRACTICE
Insice of the `practice.html`:
- set up your html and link the `practice.css`
- style all divs to have height and width of 200px 
- all divs to have a margin-bottom of 10px
- all divs to have a padding-left of 20 px
- all divs to have a border of dotted 2px red
  
### The Box Model

When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes.

Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge.

In modern browsers, there are developer tools that can provide visual virtualization of the box model.

Most styling issues are caused by a conflict in the box model and can be resolved with the developer tools and understanding.
#### Watch me

### CSS Display

The display property specifies the display behavior (the type of rendering box) of an element.

In HTML, the default display property value is taken from the HTML specifications or from the browser/user default style sheet.

    /* precomposed values */
    display: block;
    display: inline;
    display: inline-block;

block

The element generates a block element box, generating line breaks both before and after the element when in the normal flow.

inline

The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space

inline-block

The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).

## EXERCISE

Recreate the wireframes/mock-ups as close as possible!
Use external CSS