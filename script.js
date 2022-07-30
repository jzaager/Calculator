
// CALCULATION FUNCTIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// OPERATOR FUNCTION
const operate = function(operator, firstNum, secondNum) {
  if (operator === '+') return add(firstNum, secondNum);
  if (operator === '-') return subtract(firstNum, secondNum);
  if (operator === '*') return multiply(firstNum, secondNum);
  if (operator === '/') return divide(firstNum, secondNum);
}

// POPULATE DISPLAY UPON NUMBER PRESS
const displayArea = document.querySelector('.calc-screen');
const numberBtns = document.querySelectorAll('.number-buttons');
let displayValue;

numberBtns.forEach(button => button.addEventListener('click', (e) => {
  if (e.target.id === 'clear') {
    displayArea.textContent = null;
    displayValue = null;
    return displayValue;
  }
  displayArea.textContent += e.target.id;
  displayValue = displayArea.textContent;
  console.log(displayValue);
}));
