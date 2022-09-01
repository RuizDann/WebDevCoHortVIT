# Week 1 Day 2 Lecture

## Review

- HTML elements and the “makeup” (the syntax) of an element.
- Opening and closing tags with some exceptions.
- Attributes provide additional information to elements.
    - Important for links (anchors) and images.
- At the end of the exercise, should have a basic bio page.

## HTML Structure

Yesterday, we only worked with just HTML elements to be directly rendered on the browser. 

But there is more to an HTML file than just the elements we covered yesterday.

Let's dive into a more modern HTML file.

```HTML
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
```

## Example Explained

### DOCTYPE
The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document

- DESCRIPTION: The document type declaration, tells the browser that this file is written in latest version of HTML – HTML5
- BEST PRACTICES: Must be very first thing at the top of the HTML document

### HTML
The `<html>` element is the root element of an HTML page

- DESCRIPTION: ALL our HTML code should go within these tags
- BEST PRACTICES: Directly after DOCTYPE
- NOTE: note the opening and closing tag for `<html>`

### HEAD
The `<head>` element contains meta information about the HTML page

- DESCRIPTION: 
  - For behind the scenes info
  - Metadata that is not displayed
  - Info used by browser, search engines
- BEST PRACTICES: 
    - Opens – after opening HTML tag
    - Closes – before opening body tag
    - Only one in each HTML file

### META CHARSET
- DESCRIPTION: 
    - Tells browser which character set to use
    - Should always use UTF-8
- BEST PRACTICES: 
    - required
    - Goes inside head tags


### TITLE
The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)

- DESCRIPTION: 
    - Tells browser name of site
    - Used for browser tab
    - Used for browser bookmarks
    - Used by search engines
- BEST PRACTICES: 
    - required
    - Goes inside head tags


### BODY
The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

- DESCRIPTION: 
  - Wraps ALL content for site
  - Everything we want displayed in the browser window gets placed between body tags
- BEST PRACTICES: 
  - required
  - Opens – after closing head tag
  - Closes – before closing HTML tag
  - Only one in each HTML file

The `<h1>` element defines a large heading

The `<p>` element defines a paragraph

## PAGE STRUCTURE

We often use the same terms that we would use to describe the relationship between family members, to describe the relationship between HTML elements

### NESTING

- There are certain tags that get placed inside other tags
- `<li>` tags get placed between opening and closing `<ul>` tags
- We say that the `<ul>` wraps the `<li>` elements
- We can also say that the `<li>` elements are nested inside the `<ul>` element

```html
<body>
  <h1>Hello World!</h1>
  <h2>List of Employment</h2>
  <ul>
    <li>
      <a href="www.usmc.mil">United States Marine Corps</a>
    </li>
  </ul>
</body>

```

- Here, the `<ul>` is the parent of the `<li>` tag
- We can also say that the`<li>` are children of the `<ul>`
- an `<a>` tag is nested inside, or wrapped by an `<li>` element
- All our HTML content is wrapped by the body, or nested inside the body since they are within the opening and closing body tags

## Indentation

Yesterday, we didn't focus on indentation but this is a great time to cover it. If you notice in today's HTML examples, there are indented code. 

Children elements **should** be indented to allow for "code cleaniness". It assists fellow developers to easily follow along and for individuals to troubleshoot accordingly.

## IDE

Integrated Development Environment/Editor

    An integrated development environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development.

Follow the link in the resources and download Visual Studio Code.

# BREAK

## Getting Familiar with Visual Studio Code

### WATCH ME

    Open Visual Studio Code
    File > Open Folder > (navigate to a folder!) > Select

Your visual studio code should look like mine!

NOTE: Explorer on the right titled with the folder name and only the same files shown.

## PRACTICE

- Inside of the `practice.html`, set up the boiler plate for HTML
- Inside of the body, display a heading of "Proper HTML"

## INLINE VS BLOCK

Every HTML element has a default display value, depending on what type of element it is.

There are two display values: block and inline.

### BLOCK

- A block-level element always starts on a new line.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
- A block level element has a top and a bottom margin, whereas an inline element does not.

`<h1>` and all the other headings are considered block elements.

No matter how much length the content of the `h1` takes, it will take up the full width available.

That is why regardless of any code that follows, it will be displayed in the next line on the browser.

### INLINE

- An inline element does not start on a new line.
- An inline element only takes up as much width as necessary.
- A perfect example is a the `span` element.

Whatever I put next to the span element, it will render right next to the `span` element.

### DIV 

We can make best use of block and inline element by grouping elements together inside of containers.

The most common element in front end development is a block element called `div`.

It's sole purpose is to structure and containerize groups of elements.

`div` be default is a block element.

```html
<body>
    <div>
        <h1>Two Group</h1>
        <p>Some notes here</p>
    </div>
    <div>
        <h2>Second Group</h2>
        <span>Yes</span>
    </div>
</body>
```

## EXERCISE

- set up the HTML boilerplate inside of `exercise.html`
- inside of the body, create 3 div
- in each div, create a h1 with "Header", "Main", "Footer" respectively
- inside the first div, below the h1, create 5 a tags with href to "#" and the following content respectively, "Home", "Categories", "Products", "About Us", "Contact"
- inside the second div, below the h1, create 2 p tags with random text and 1 random image
- inside the third div, below the h1, create 3 spans with the following content respectively "Copyright", "Terms of Service", "VetsInTech"

NOTES

    After each section, you should refresh the browser to verify the changes.

    You will not see any changes from the divs alone!