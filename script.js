let firstNum = 0;
let operator = 0;
let secondNum = 0;

function operate(firstNum, operator, secondNum) {
    if (operator == "+") {
        add(firstNum, secondNum);
    } else if (operator == "-") {
        subtract(firstNum, secondNum);
    } else if (operator == "*") {
        multiply(firstNum, secondNum);
    } else if (operator == "/") {
        divide(firstNum, secondNum);
    }
}

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
    return a/b;
}

