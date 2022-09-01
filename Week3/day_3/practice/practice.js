/*
EASY
1. Take the value of the inputted subtotal and tip percentage to display the tip amount.
2. Update calculate function to accommodate the new fields.

MEDIUM
1. Add the necessary elements to the JavaScript files to calculate total with state tax at a fixed 6.0%.

HARD
1. Change the fixed state tax to allow user to input a custom amount.

NIGHTMARE
1. Add necessary elements to split the bill amount between a certain number of people and alert the output.
*/

function calculate() {
  var subTotal = document.getElementById("subtotal").value;
  var tipPer = document.getElementById("tipPercentage").value / 100;
  var taxPer = document.getElementById("taxPercentage").value / 100;
  var party = document.getElementById("split").value;

  var taxTotal = (taxPer + 1) * subTotal;
  var tipTotal = taxTotal * tipPer;
  tipTotal = tipTotal;
  var overallTotal = tipTotal + taxTotal;
  overallTotal = overallTotal;
  var partySplit = overallTotal / party;
  partySplit = partySplit.toFixed(2);

  var calcTip = document.getElementById("calculatedTipAmount").innerText; 
  calcTip = "$" + tipTotal.toFixed(2);
  var calcTotal = document.getElementById("totalAmount").innerText;
  calcTotal = "$" + overallTotal.toFixed(2);
  
  alert("$" + partySplit);


}
