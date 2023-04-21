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