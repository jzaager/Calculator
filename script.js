// VARIABLES //
let displayValue;
let operatorCount = 0;
const displayArea = document.querySelector('.calc-screen');
const buttons = document.querySelectorAll('.buttons');
const functionBtns = document.querySelectorAll('.function');
const equalsBtn = document.getElementById('.equals');
const deleteBtn = document.querySelector('.delete');

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
  if (operator === '÷') {
    if (secondNum == 0) {
      return displayArea.textContent = "No Witchcraft";
    }
  }
  return divide(firstNum, secondNum);
}

// EVENT LISTENERS //
buttons.forEach(button => button.addEventListener('click', (e) => 
  updateDisplay(e)));
deleteBtn.addEventListener('click', () => {
  let deletedItem = displayArea.textContent.slice(-1);
  if (deletedItem === '+' || deletedItem === '-' || deletedItem === 'x' ||
  deletedItem === '÷') {
    --operatorCount;
  }
  displayValue = displayArea.textContent.slice(0, -1);
  displayArea.textContent = displayValue;
  return displayValue;
});
functionBtns.forEach(button => button.addEventListener('click', (e) => {
  if (e.target.id === 'equals') {
    return;
  }
  ++operatorCount;
  if (operatorCount > 1) {
    let secondOperator = displayValue.slice(-1);
    displayValue = displayValue.substring(0, (displayValue.length - 1));
    let solution = operate(getOperator(displayValue), +getFirstValue(displayValue), +getSecondValue(displayValue));
    displayArea.textContent = solution;
    displayArea.textContent += secondOperator;
    displayValue = displayArea.textContent;
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
    let solution = operate(getOperator(displayValue), +getFirstValue(displayValue), +getSecondValue(displayValue));
    operatorCount = 0;
    return displayArea.textContent = solution;
  }
  displayArea.textContent += e.target.id;
  displayValue = displayArea.textContent;
  console.log(displayValue);
}

// GET PARAMETERS FOR OPERATE FUNCTION
function getOperator(string) {
  if (string[0] === '-') {
    for (let j = 1; j < string.length; j++) {
      if (isNaN(+string[j])) {
        if (string[j] === '.') {
          continue;
        }
      return string[j];
      }
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])) {
      if (string[i] === '.') {
        continue;
      }
    return string[i];
    }
  }
}

function getFirstValue(string) {
  if (string[0] === '-') {
    for (let j = 1; j < string.length; j++) {
      if (isNaN(+string[j])) {
        if (string[j] === '.') {
          continue;
        }
      return string.substring(0, j);
      }
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])){
      if (string[i] === '.')
        continue;
    return string.substring(0, i);
    }
  }
}

function getSecondValue(string) {
  if (string[0] === '-') {
    for (let j = 1; j < string.length; j++) {
      if (isNaN(+string[j])) {
        return string.substring(j + 1);
      }
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (isNaN(+string[i])) {
      if (string[i] === '.') {
        continue;
      }
    return string.substring((i + 1));
    }
  }
}