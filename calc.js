function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
    if (operator === "+") 
        return add(firstNum, secondNum);
    else if (operator === "-") 
        return subtract(firstNum, secondNum);
    else if (operator === "*")
        return multiply(firstNum, secondNum);
    else if (operator === "/")
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
}

function showOnDisplay(buttonClass, number) {
    const display = document.querySelector('.display');
    const button = document.querySelector(buttonClass);
    button.addEventListener('click', () => {
        display.textContent += number;
    })
}

buttonCall();