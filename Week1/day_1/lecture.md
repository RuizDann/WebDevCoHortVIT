# Week 1 Day 1 Lecture

## The Big 3

- HTML
- CSS
- JavaScript

### HTML

Responsible for the content of web page.

Considered the bones.

### CSS

Responsible for the style of web page.

Considered the skins.

### JavaScript

Responsible for the functionality of web page.

Considered the brains.

## What is HTML?

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure\* of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

When creating a web page, you add tags (known as markup) to the content of the page.

These tags provide extra meaning and allow browsers to show users the appropriate structure for the page.

### The makeup (syntax) of a HTML tag

Here is an example of a basic HTML tag

```HTML
<h1>Hello World</h1>
```

Pay attention **opening and closing tags**

- The whole line is considered an element, specifically an `h1` element and it consists of the opening tag, the content/value, and the closing tag
- Both opening and closing tag use the arrow brackets `< >`
- The opening tag tells the browser that everything from this point on will the following elements' content until it sees the closing tag
- The closing tag is near identical except it precedes the tag name (`h1`) with a forward slash (`/`)

So what can we use as elements? What are considered tags?

Let's go over some basic ones

### Headings

```html
Element Description Example h1 Main headings
<h1>ViT Academy</h1>
h2-h6 Subheadings
<h2>About Us</h2>
```

### Typography

```html
Element Description Example p Paragraph of text
<p>This is a great site!</p>
span Generic content <span>Isn’t it?</span>
```

NOTE: Not much difference, content-wise, between these two but we'll go more into them later!

### Lists

```html
Element Description ul Unordered List - displays as bullet points ol Ordered
List - displays as number points li List Item Example
<ul>
  <li>One Bullet Point Item</li>
</ul>

<ol>
  <li>Ordered List Item #1</li>
</ol>
```

NOTE: The `li` are considered **children** of the `ul` and `ol`. See how it is "nested" inside of them. More to follow..

Before we go on, we should see how this actually renders!

HTML can be programmed directly in your notepad (or equivalent) to produce a web page.

Inside of the same folder, we have a `practice.html` file. Notice the file type (`.html`) and the icon!

Please just watch me first!

## PRACTICE

- Create a main heading with your name.
- Create a h2 subheading with "My Favorite Things"
- Create a h3 subheading with "Movies"
- Create an ordered list
  - Create 3 list items **within** the list with your favorite movie titles
- Create a h4 subheading with "Locations"
- Create an unorder list
  - Create 3 list items **within** the list with your favorite locations

### Attributes

HTML attributes provide additional information about HTML elements.

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

Example:

```html
<pizza crust="“thin”" toppings="“pepperoni”">mozzarella</pizza>
```

Syntax:

```html
<tagName name="“value”"></tagName>
```

#### Links

The `<a>` tag defines a hyperlink.

The href attribute specifies the URL of the page the link goes to:

```html
<a href="https://vetsintech.co/">Visit VetsInTech</a>
```

#### Images

Images are added to the page with the img element

- Two required attributes – src and alt

```html
<img src=“images.google.com/pikachu-1” alt=“pikachu from pokemon”>
```

### Elements with no content

Examples:

- `<br>`\*
- `<hr>`
- `<img>`
- `etc.`

The browser will not looking for a closing tag for these elements!

Since it does not have any content, it will render the element itself.

#### White Spaces

When the browser comes across two or more spaces next to each other, it only display one space.

Similarly if the browser comes across a line break, it treats that as a white space.

Developers often take advantage of this to make their code easier to read. (Just because we put 1000 spaces between lines of code, it will not rendered as such)

If you want to add a line break, we can use the `br` element.

## EXERCISE

- Add a picture of yourself
- Add a link to your LinkedIn
