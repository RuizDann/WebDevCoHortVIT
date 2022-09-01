# Week 3 Day 2 Lecture

## Back to CSS - transform

The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

By default the transform property is `none`.

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

It may seem like a lot but there are variants of the main properties.

The main properties are the following:
- matrix
- rotate
- translate
- scale
- skew

The variations of these main properties are just specification of direction.

The one we need to focus to accomplish a carousel is the `translate` property.

### transform: translate()

The translate() CSS function repositions an element in the horizontal and/or vertical directions.

This transformation is characterized by a two-dimensional vector. Its coordinates define how much the element moves in each direction.


```css
/* Single <length-percentage> values */
transform: translate(200px);
transform: translate(50%);

/* Double <length-percentage> values */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

The single values determines the horizontal, x-coordinate. There it sets the vertical as a 0 value.

`transform: translate(2px)` is the equivalent of `transform: translate(2px 0)`.

The double value determines the horizontal and vertical respectively.

We can additionally single out a specific direction within the property with `translateX` and `translateY`.

For our carousel, since we are only sliding in a single direction, we have better use for `translateX` and `translateY`.

## Back to CSS - overflow: hidden

Content is clipped if necessary to fit the padding box. 

When we set a fixed width and height and the children elements are larger than the determined width and height, we can hide the overflown content with the property `overflow: hidden`


<div style="height: 50px; width: 50px; border: solid">
  <div style="height: 20px; width: 70px; border: solid red"></div>
</div>

<br />

<div style="height: 50px; width: 50px; border: solid; overflow:hidden">
  <div style="height: 20px; width: 70px; border: solid red"></div>
</div>

## Setting up the carousel/Understanding the dynamic

The idea is that we have a "window" and inside of the window is a "slider". 

The slider contains all of the images.

The window will be a fixed width and height with the images at the same dimensions. It also needs to be a `display: flex` in order to maintain the spacing of the children element (the slider).

The window will hide all of the overflown images.

<div style="height: 50px; width: 50px; border: solid">
  <div style="height: 46px; width: 150px; border: solid red"></div>
</div>

<br />

<div style="height: 50px; width: 50px; border: solid">
  <div style="height: 46px; width: 150px; border: solid red; transform: translate(-50px)"></div>
</div>

We would need to manipulate the slider to dynamically move according to the left or right by the same dimensions of the window/images by using transform: translate.

## Applying it to JavaScript

The goal is to use JavaScript to trigger the scrolling effects of the carousel.

We will use two buttons to trigger the scrolling effect left and right. 

We could directly query select and manipulate the `style.transform` inside of the onclick but that's a pretty static movement.

Given an example of images at 400px, we would only accomplish a single transform translate of 400px.

So how do we keep a running count of the number of images we translate by?

Plain old JavaScript!

We can keep a running count of which "position" we're currently at, at the top of the JavaScript file.

Why do we do this outside of functions and not inside?

Since both functions rely on the position variable, it should not exist inside the scope of a single function.

We use our basic query selection of the slider element.

Perform our logic to increment or decrement the position.

Perform our calculation to retrieve our new value to translate by.

Use basic DOM manipulation and string concatenation.

String concatenation is just using addition of string literals and variables which represents numbers or strings. **see demo.js for example**

## PRACTICE

## PRACTICE REVIEW

### Conditions

We run into an issue with pressing the buttons beyond what's alloted..

## EXERCISE