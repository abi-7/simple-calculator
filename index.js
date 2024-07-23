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
