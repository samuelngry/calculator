let firstNum = 0;
let operator = 0;
let secondNum = 0;
let currentValue = 0;
const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const clearValue = document.querySelector("#clearValue");

function populateDisplay() {
    number.forEach(button => {
        button.addEventListener("click", ()=> {
            display.value += button.innerText;
            currentValue = display.value;
        });
    });
}

function clearDisplay() {
    clearValue.addEventListener("click", ()=> {
        display.value = "";
        currentValue = display.value;
    });
}

clearDisplay();

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

populateDisplay();