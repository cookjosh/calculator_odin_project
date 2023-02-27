const calcDisplay = document.querySelector(".calc-display");
calcDisplay.style.display = "flex";
calcDisplay.style.justifyContent = "flex-end";
calcDisplay.style.alignItems = "center";
calcDisplay.style.fontSize = "35px";
calcDisplay.style.paddingRight = "10px";
calcDisplay.style.fontFamily = "Orbitron";

function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

function arraySum(numArray) {
	let overallSum = numArray.reduce((total, num) => {
    return total + num;
  }, 0)
  return overallSum;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function power(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        newNumber = add(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "-") {
        newNumber = subtract(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "*") {
        newNumber = multiply(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "/") {
        newNumber = divide(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "**") {
        newNumber = power(firstNumber, secondNumber);
        return newNumber;
    }
}
let userInputArray = []
let newNumber = "";
let buttonValue = 0;
let operator = "";
let currentNumber = "";
function getValue() {
    buttonValue = this.value;
    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/" || buttonValue === "**") {
        operator += buttonValue;
        userInputArray.push(currentNumber);
        userInputArray.push(operator);
        currentNumber = "";
    } else if (buttonValue === "C") {
        clearMemory();
    } else if (buttonValue === "=") {
        userInputArray.push(currentNumber);
        operate(operator, Number(userInputArray[0]), Number(userInputArray[2]))
        calcDisplay.textContent = newNumber;
        currentNumber = newNumber;
        operator = "";
        userInputArray = [];
    } else {
        currentNumber += buttonValue;
        calcDisplay.textContent = currentNumber;
    }
}


function clearMemory() {
    userInputArray = []
    newNumber = "";
    buttonValue = 0;
    operator = "";
    currentNumber = "";
    calcDisplay.textContent = buttonValue;
}

// Creating buttons for the calculator pad
const buttonList = ["7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "-", "/",
    "C", "", "=", "**", 
]
const numberList = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 0
]

const operatorList = ["+", "-", "*",
    "/", "**",
]

const calcPad = document.querySelector(".calc-pad");
for (let x = 0; x < 20; x++) {
    const calcButton = document.createElement(`button`);
    calcButton.id = x;
    calcButton.value = buttonList[x];
    calcButton.style.height = "50px";
    calcButton.style.width = "60px";
    calcButton.style.margin = "2.5px";
    calcButton.style.backgroundColor = "rgb(0, 255, 0, 0.15)";
    calcButton.style.borderColor = "rgb(0, 255, 0)";
    calcButton.style.borderStyle = "solid";
    calcButton.style.borderWidth = "2px";
    calcButton.style.borderRadius = "5px";
    calcButton.style.display = "flex";
    calcButton.style.alignItems = "center";
    calcButton.textContent = `${buttonList[x]}`;
    calcButton.style.fontSize = "20px";
    calcButton.style.fontFamily = "Orbitron";
    calcButton.style.color = "rgb(0, 255, 0)";
    calcButton.style.justifyContent = "center";
    calcPad.appendChild(calcButton);
}



const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", getValue);
    button.addEventListener("mouseenter", (e) => {
        button.style.borderWidth = "4px";
    })
    button.onmouseleave = (e) => {button.style.borderWidth = "2px";}
    calcDisplay.textContent = buttonValue;
});



