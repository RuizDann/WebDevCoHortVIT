# Week 3 Day 3 Lecture
## Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### The `<form>` Element

The HTML `<form>` element is used to create an HTML form for user input. 

It represents a document section containing interactive controls for submitting information.

There are optional attributes for the form with default behaviors.

- action: string/URL
- method: PUT, GET, DELETE, POST

The `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

### Input Element

The HTML `<input>` element is the most used form element.

An `<input>` element can be displayed in many ways, depending on the type attribute.

- text
- radio
- checkbox
- submit
- button

The `<input type="text">` defines a single-line input field for text input.

The form itself is not visible. Also note that the default width of an input field is 20 characters.

### The `<label>` Element

The `<label>` tag defines a label for many form elements.

The `<label>` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.

The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" name="lname">
</form>
```

<form>
  <label for="fname">First name:</label><br>
  <input type="text" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" name="lname">
</form>

<br>

NOTE: there is a `input` type of `submit` and `button` which is an older method compared to the button element.
### The Submit Button

The `<input type="submit">` defines a button for submitting the form data to a form-handler.

The form-handler is typically a file on the server with a script for processing input data.

The form-handler is specified in the form's action attribute.

The `button` element is a modern solution to `<input type="submit">` so we will continue to use the button element.

## INPUT TYPE - TEXT

For the most commonly used input type of text, we need to capture the value of what is typed in.

The value is actually an attribute of the input.

Once we have selected the element, we can use the `.value` attribute to access the content within.
## BREAKING DOWN THE DEMO

## PRACTICE

EASY
1. Take the value of the inputted subtotal and tip percentage to display the tip amount.
2. Uncomment the sections that are currently commented out in the HTML file.
3. Update calculate function to accommodate the new fields.

MEDIUM
1. Add the necessary elements to the HTML, CSS, and JavaScript files to calculate total with state tax at a fixed 6.0% and please console log accordingly to see the output.

HARD
1. Change the fixed state tax to allow user to input a custom amount.  Alert the output.

NIGHTMARE
1. Add necessary elements to split the bill amount between a certain number of people and alert the output.



## REVIEW

## EXERCISE

Inside of the footer for your ongoing exercise, create a contact us form.
The input fields should be:
- Name
- Email

When a user hits the submit button, "ALERT" a prompt with the user's name and email.
