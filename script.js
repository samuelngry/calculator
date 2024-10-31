let operator = 0;
let currentValue = 0;
let firstValue = 0;
let operatorClicked = false;
let secondOperatorClicked = false;
let operation = "";
const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const clearValue = document.querySelector("#clearValue");
const operatorButton = document.querySelectorAll(".operate");
const equalButton = document.querySelector(".equals");
const header = document.querySelector(".header");


function populateDisplay() {
    number.forEach(button => {
        button.addEventListener("click", ()=> {
            if (!operatorClicked) { // First value
                display.value += button.innerText;
                firstValue = display.value;
            } else if (operatorClicked && !secondOperatorClicked){ // Second value
                display.value += button.innerText;
                secondValue = display.value;
            } else if (operatorClicked && secondOperatorClicked) {
                display.value = button.innerText;
                secondOperatorClicked = false;
            }
        });
    });
}

operatorButton.forEach(button => {
    button.addEventListener("click", ()=> {
        if (!operatorClicked) {
        operatorClicked = true;
        operation = button.innerText;
        firstValue = parseFloat(display.value);
        display.value = "";
        header.innerText = `${firstValue} ${operation}`;
        } else {
            secondValue = parseFloat(display.value);
            operate(firstValue,secondValue,operation);
            // start
            firstValue = parseFloat(display.value);
            secondOperatorClicked = true;
            operation = button.innerText;
            header.innerText = `${firstValue} ${operation}`;
        } 
     });
});

function equalsTo() {
    equalButton.addEventListener("click", ()=> {
        secondValue = parseFloat(display.value);
        header.innerText = `${firstValue} ${operation} ${secondValue} = `
        operate(firstValue, secondValue, operation);
        operatorClicked = false;
        secondOperatorClicked = false;
    })
}

function clearDisplay() {
    clearValue.addEventListener("click", ()=> {
        display.value = "";
        operation = "";
        header.innerText = "";
        firstValue = 0;
        secondValue = 0;
        operatorClicked = false;
    });
}

function operate(firstNum, secondNum, operator) {
    if (operator == "+") {
        add(firstNum, secondNum);
    } else if (operator == "-") {
        subtract(firstNum, secondNum);
    } else if (operator == "x") {
        multiply(firstNum, secondNum);
    } else if (operator == "÷") {
        divide(firstNum, secondNum);
    }
}

function add(a, b) {
    display.value = a + b;
}

function subtract(a, b) {
    display.value = a - b;
}

function multiply(a, b) {
    display.value = a * b;
}

function divide(a, b) {
    if (b == 0) {
        display.value = "Cannot be divided by 0";
    } else {
        display.value = a / b;
    }
}

populateDisplay();
clearDisplay();
equalsTo();