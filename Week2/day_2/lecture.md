# Week 2 Day 2 Lecture

So far in this course, everything we rendered in the browser flows from left to right and top to bottom.

Even when using `display: inline-block` all of the items are squished to the left!

We can automatically assign margins to offset and help the look of the page but that can be dangerous.

We haven't encountered this yet, but another hard point of web development is alignment! Especially vertical alignment. 

Enter flexbox. It makes all of the problems above easier.

## FLEX

It gives the container the ability to expand and shrink to best use direction and all available spaces in relation to the children elements.

Flexbox is a layout mechanism designed for laying out groups of items in one dimension

The Flexible Box Layout Model (flexbox) is a layout model designed for one-dimensional content. It excels at taking a bunch of items which have different sizes, and returning the best layout for those items.

### What can you do with a flex layout? 

Flex layouts have the following features:

- They can display as a row, or a column.
- They are single line by default, but can be asked to wrap onto multiple lines.
- Space can be distributed inside the items, so they become bigger and smaller according to the space available in their parent.
- Space can be distributed around the items and flex lines in a wrapped layout, using the Box Alignment properties.
- The items themselves can be aligned on the cross axis.
- Items in the layout can be visually reordered.

### The main axis and the cross axis

The key to understanding flexbox is to understand the concept of a main axis and a cross axis. The main axis is the one set by your flex-direction property. If that is row your main axis is along the row, if it is column your main axis is along the column.

Flex items move as a group on the main axis. Remember: we've got a bunch of things and we are trying to get the best layout for them as a group.

The cross axis runs in the other direction to the main axis, so if flex-direction is row the cross axis runs along the column.

You can do two things on the cross axis. You can move the items individually or as a group so they align against each other and the flex container. Also, if you have wrapped flex lines, you can treat those lines as a group in order to control how space is assigned to those lines. You will see how this all works in practice throughout this guide, for now just keep in mind that the main axis follows your flex-direction.

### Creating a flex container

```html
<div id="demoFlex">
    <div></div>
    <div></div>
    <div></div>
</div>

```

In the example above, we have 3 divs with in a parent div. By default, since divs are blocks, they would render on top of each other. So far we learned of `display: inline-block` to render them side by side. But we also manually set the width in order for it to play nicely.

Let's look at the changes with `display: flex`

To use flexbox you need to declare that you want to use a flex formatting context and not regular block and inline layout. Do this by changing the value of the display property to flex.

```css
#demoFlex {
    display: flex;
}
```

The flex items immediately start exhibiting some flexbox behavior, using their initial values.

The initial values mean that:

- Items display as a row.
- They do not wrap.
- They do not grow to fill the container.
- They line up at the start of the container.

## DEMO - Watch me! (demo.html)

By default, by assigning the parent element with display flex, it applied the default flex direction of row. This is significantly better than applying display inline-block to every div and manipulating the width.

We can change the direction by ADDITIONALLY adding the flex-direction property.

```css
.demoFlex {
    display: flex;
    flex-direction: column;
}
```

There are multiple flex properties.

NOTE: In order to use flex properties, the display must be flex!

### justify-content

This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

    /* Positional alignment */
    justify-content: center;     /* Pack items around the center */
    justify-content: start;      /* Pack items from the start */
    justify-content: end;        /* Pack items from the end */
    justify-content: flex-start; /* Pack flex items from the start */
    justify-content: flex-end;   /* Pack flex items from the end */
    justify-content: left;       /* Pack items from the left */
    justify-content: right;      /* Pack items from the right */

- center: items are centered along the line
- start: items are packed toward the start of the writing-mode direction.
- end: items are packed toward the end of the writing-mode direction.
- flex-start (default): items are packed toward the start of the flex-direction.
- flex-end: items are packed toward the end of the flex-direction.
- left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
- right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
  
- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line
- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

## PRACTICE
https://flexboxfroggy.com/ LEVEL 1 - 4

Some additionally properties for the parents!

### align-items

This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

    /* Basic keywords */
    align-items: normal;
    align-items: stretch;

    /* Positional alignment */
    /* align-items does not take left and right values */
    align-items: center; /* Pack items around the center */
    align-items: start; /* Pack items from the start */
    align-items: end; /* Pack items from the end */
    align-items: flex-start; /* Pack flex items from the start */
    align-items: flex-end; /* Pack flex items from the end */


- stretch (default): stretch to fill the container (still respect min-width/max-width)
- flex-start / start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
- flex-end / end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
- center: items are centered in the cross-axis

### flex-wrap

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

    flex-wrap: nowrap; /* Default value */
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;

- nowrap (default): all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

## Properties for the Children

So far just by applying `display: flex` on the parent, we have a lot of control of the children element.

We can still use flex specific properties on the specific child flex elements for additional style.

NOTE: the parent element **must** be display flex.

### order

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

```css
#specificListItem {
    order: -1; /* default is 0 */
}
```
Imagine a list with 10 list items. If the last item (10th) out of 10 has this id applied, it would render it at the beginning!

### flex-grow

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).
```css
#centerPiece {
  flex-grow: 2; /* default 0 */
}
```

If a parent div has 3 children div, it would evenly split the width to 33.33% among the 3 children div. With flex-grow, we can set change the distribution.

### flex-shrink

This defines the ability for a flex item to shrink if necessary.

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

## EXERCISE

https://flexboxfroggy.com/