const display = document.getElementById("display");

/* 
function to show selected numbers on the screen
*/
function appendToDisplay(input) {
  display.value += input;
}

/* 
function to clear the display
*/
function clearDisplay() {
  display.value = "";
}

/* 
function calculates the equation in display 
error if its incomplete, etc.
*/
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

/* 
function calculates the percentage of the equation/number in the display
*/
function calculatePercent() {
  try {
    display.value = (eval(display.value)) / 100;
  } catch (error) {
    display.value = "Error";
  }
}

/* 
function deletes the last number/operator that was appended to the display
*/
function deleteLast() {
  let input = display.value;
  
  //delete/remove from expression
  display.value = input.replace(/.$/, "");
}

