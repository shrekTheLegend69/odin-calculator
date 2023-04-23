function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    const c = a * b;
    return shortenNumber(c);
}

function divide(a, b) {
    if (b === 0)
        return;
    const c = a / b;
    return shortenNumber(c);
}

function shortenNumber(num) {
    numStr = num.toString();
    if (num.length <= 8)
        return numSetr;
    else return numStr.slice(0, 8);
}

function operate(firstNum, secondNum, operator) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator === ".plus") 
        return add(firstNum, secondNum);
    else if (operator === ".minus") 
        return subtract(firstNum, secondNum);
    else if (operator === ".multiply")
        return multiply(firstNum, secondNum);
    else if (operator === ".divide")
        return divide(firstNum, secondNum);
    else 
        return "ERROR";
}

function buttonCall() {
    showOnDisplay('.zero', 0);
    showOnDisplay('.one', 1);
    showOnDisplay('.two', 2);
    showOnDisplay('.three', 3);
    showOnDisplay('.four', 4);
    showOnDisplay('.five', 5);
    showOnDisplay('.six', 6);
    showOnDisplay('.seven', 7);
    showOnDisplay('.eight', 8);
    showOnDisplay('.nine', 9);

    buttonOperator('.plus');
    buttonOperator('.minus');
    buttonOperator('.multiply');
    buttonOperator('.divide');
    buttonOperator('.equals');
    buttonOperator('.reset');

}

function showOnDisplay(buttonClass, number) {
    const display = document.querySelector('.display');
    const button = document.querySelector(buttonClass);
    button.addEventListener('click', () => {
        if ((countOperator > 0 && keepSecondValue !== null)) {
            display.textContent = "";
            countOperator = 0;
        }
        if (equalsPressed) { // check if first button after equals
            display.textContent = "";
            equalsPressed = false; // Reset equalsPressed
        }
        if (display.textContent.length < 8)
            display.textContent += number;
    });
}

function displayValue() {
    const display = document.querySelector('.display');
    return display.textContent;
}

buttonCall();

// Check if operator button is clicked
// If clicked, store the current display value, then delete it
// Change operation if different operator clicked (ignore multiple clicks)
let equalsPressed = false;
let keepValue = null; 
let keepSecondValue = null;
// Wait for second number
// If equals clicked, solve the operation
// If another operator clicked, calculate the operation so far and display it on display
let countOperator = 0;
let previousOperator = 0;
// When another number clicked after this, delete the temporary result from display
function buttonOperator(buttonClass) {
    const display = document.querySelector('.display');
    const button = document.querySelector(buttonClass);
    button.addEventListener('click', () => {
        if (buttonClass === '.reset') {
            display.textContent = "";
            resetAll();
            return;
        }
        if (display.textContent === "")
            return;
        if (keepValue === null)
            keepValue = display.textContent; 
        if (keepValue !== null) 
            keepValue = keepValue; 
        if (countOperator !== 0) {
            keepSecondValue = display.textContent;
        } 
        if (countOperator === 0 && keepSecondValue === null)
            display.textContent = "";
        if (buttonClass === '.equals' && keepValue !== null) {
            if (countOperator === 1) {
                keepSecondValue = operate(keepValue, keepSecondValue, previousOperator);
                display.textContent = keepSecondValue;
                equalsPressed = true;
            }
            else {
                keepSecondValue = operate(keepSecondValue, keepValue, previousOperator);
                display.textContent = keepSecondValue;
                equalsPressed = true;
            }
        }
        if (keepSecondValue !== null  && previousOperator && buttonClass !== '.equals' && previousOperator !== '.equals') {
            keepSecondValue = operate(keepSecondValue, keepValue, previousOperator);
            display.textContent = keepSecondValue;
            keepValue = null;
        }
        countOperator++;
        previousOperator = buttonClass;
        if (buttonClass === '.equals')
            resetAll();
    });
}

function resetAll() {
    keepValue = null;
    keepSecondValue = null;
    countOperator = 0;
}