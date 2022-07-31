// VARIABLES //
let displayValue;
let operatorCount = 0;
const displayArea = document.querySelector('.calc-screen');
const buttons = document.querySelectorAll('.buttons');
const functionBtns = document.querySelectorAll('.function');
const equalsBtn = document.getElementById('.equals');

// CALCULATION FUNCTIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// OPERATOR FUNCTION
const operate = function(operator, firstNum, secondNum) {
  if (operator === '+') return add(firstNum, secondNum);
  if (operator === '-') return subtract(firstNum, secondNum);
  if (operator === 'x') return multiply(firstNum, secondNum);
  if (operator === '÷') return divide(firstNum, secondNum);
}

// EVENT LISTENERS //
buttons.forEach(button => button.addEventListener('click', (e) => 
  updateDisplay(e)));
functionBtns.forEach(button => button.addEventListener('click', (e) => {
  if (e.target.id === 'equals') 
    return 

  ++operatorCount;
  console.log({operatorCount});
  if (operatorCount > 1) {
    let secondOperator = displayValue.slice(-1);
    displayValue = displayValue.substring(0, (displayValue.length - 1));
    getOperator(displayValue);
    getFirstValue(displayValue);
    getSecondValue(displayValue);
    displayValue = operate(getOperator(displayValue), +getFirstValue(displayValue), +getSecondValue(displayValue));
    displayArea.textContent = displayValue;
    displayArea.textContent += secondOperator;
    displayValue += secondOperator;
  }
}));

// FUNCTIONS //

// UPDATE DISPLAY FUNCTION
function updateDisplay(e) {
  if (e.target.id === 'clear') {
    displayArea.textContent = null;
    operatorCount = 0;
    return displayValue = null;
  }
   if (e.target.id === 'equals') {
    displayValue = operate(getOperator(displayValue), +getFirstValue(displayValue), +getSecondValue(displayValue));
    operatorCount = 0;
    return displayArea.textContent = displayValue;
  }

  displayArea.textContent += e.target.id;
  displayValue = displayArea.textContent;
  console.log(displayValue);
}

// GET PARAMETERS FOR OPERATE FUNCTION
function getOperator(string) {
  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])) 
      return string[i]
  }
}

function getFirstValue(string) {
  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])) 
      return string.substring(0, i);
  }
}

function getSecondValue(string) {
  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])) 
      return string.substring((i + 1));
  }
}