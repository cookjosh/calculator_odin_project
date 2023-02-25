const calcDisplay = document.querySelector(".calc-display");

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
        let newNumber = add(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "-") {
        let newNumber = subtract(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "*") {
        let newNumber = multiply(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "/") {
        let newNumber = divide(firstNumber, secondNumber);
        return newNumber;
    } else if (operator === "**") {
        let newNumber = power(firstNumber, secondNumber);
        return newNumber;
    }
}
userInputArray = []
let buttonValue = 0;
function getValue() {
    buttonValue = this.value;
    userInputArray.push(buttonValue);
    console.log(userInputArray);
    //if (buttonValue)
    //calcDisplay.textContent = buttonValue;
}


// Creating buttons for the calculator pad
const buttonList = ["7", "8", "9", "x",
    "4", "5", "6", "/",
    "1", "2", "3", "+",
    "0", ".", "-", "=",
    "hold", "hold", "hold", "hold", 
]
const calcPad = document.querySelector(".calc-pad");
for (let x = 0; x < 20; x++) {
    const calcButton = document.createElement(`button`);
    calcButton.id = x;
    calcButton.value = buttonList[x];
    calcButton.onclick = getValue(this);
    calcButton.style.height = "50px";
    calcButton.style.width = "60px";
    calcButton.style.margin = "2.5px";
    calcButton.style.backgroundColor = "white";
    calcButton.style.borderColor = "black";
    calcButton.style.borderStyle = "solid";
    calcButton.style.borderWidth = "1px";
    calcButton.style.borderRadius = "5px";
    calcButton.style.display = "flex";
    calcButton.style.alignItems = "center";
    calcButton.textContent = `${buttonList[x]}`;
    calcButton.style.fontSize = "20px";
    calcButton.style.justifyContent = "center";
    calcPad.appendChild(calcButton);
}

// JS styling for the number display

calcDisplay.style.display = "flex";
calcDisplay.style.justifyContent = "flex-end";
calcDisplay.style.alignItems = "center";
calcDisplay.style.fontSize = "35px";
calcDisplay.style.paddingRight = "10px";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", getValue, false);
    calcDisplay.textContent = buttonValue;
});



