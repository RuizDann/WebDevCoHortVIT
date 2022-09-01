# Week 2 Day 1 Lecture

## Selectors

From the weekend exercise, we run into the issue of styling ALL the elements that we select. 

But what if we want to specify specific elements?

We have two options available to us:
- id
- class

In order to target specific elements we need to set the selectors in our html

Example:

```html
<a id="current" class="navLink internal"></a>
<a class="navLink internal"></a>
<a class="external navLink"></a>
<a class="navLink"></a>
<a class="navLink" id="flash"></a>
```

We insert in the appropriate attribute for either class or id in the opening tag that we want to select.

### Class

Classes are meant for multiple elements.

Since they can be re-used amongst other elements, elements can use multiple classes, as well.

The classes are space separate between the different class names.

`.class_name { style properties }`

In CSS, we select the class name proceeded with a period (.) ie. `.navLink`

```css
.navLink {
  margin: 2px;
}
```

BEST PRACTICES

If I know that I'm going to style a group of elements using the same style, I can create that style in CSS first with the class name.

```css
.galleryCard {
  height: 100px;
  width: 100px;
  border: solid 1px black;
  border-radius: 20%;
  margin: 5px;
}
```

Then whenever I create my "gallery cards" in HTML, I can create it with the class name!

```html
<img class='galleryCard' src="#" alt="Sample card">
<img class='galleryCard' src="#" alt="Sample card 2">
<img class='galleryCard' src="#" alt="Sample card 3">
<img class='galleryCard' src="#" alt="Sample card 4">
```

This may take some time getting used to but no worries.

## PRACTICE
in the css file, create declarations with the following properties for: 
  - `headline` class :
    - font style underline
    - color grey
  - `bulletPoints` class:
    - list style square
    - color red

in the html file, create 3 divs for h1 in each div and the class headline.

content should be 'header' 'main' 'footer'

inside of the "main" div, also create a ul with the class bulletPoints
  - add list items for favorite resturants

### ID

Ids are meant to be unique.

Since ids are unique, there should be one for each element.

In the example above, we can see multple different classes for certain elements but there is only one id where applicable.

`#id_value { style properties }`

In CSS, we select the id preceeded with a pound/hashtag (#) ie. `#current`

```css
#current {
  font-size: 40px;
  color: hotpink;
}
```

## SPECIFICITY

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration are ultimately applied to an element.

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

Inline styles - Example: `<h1 style="color: pink;">`
IDs - Example: `#navbar`
Classes - Example: `.test`
Elements - Example: `h1`

Note: Inline style is always given the highest priority!

Note 2: There is one exception to this rule: if you use the !important rule, it will even override inline styles!

### More Specificity Rules Examples

Equal specificity: the latest rule wins - If the same rule is written twice into the external style sheet, then the latest rule wins:

```css
h1 {background-color: yellow;}
h1 {background-color: red;}
```

## EXERCISE

Looking at the exercise.html and exercise.css, assign the appropriate class and ids to the elements to accomplish the following:

- make the divs into 3 columns to achieve the 3 pillar style
- give the h1 more pop with a vibrant color (needs to be readable)
- highlight the h2s and provide a contrast color.

there are wrong declarations, choose wisely :)

you should only be changing the html file!

bonus: fix the names of the selectors!