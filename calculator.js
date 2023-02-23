

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

function multiply(numArray) {
  let overallSum = numArray.reduce((total, num) => {
    return total * num;
  }, 1)
  return overallSum;
};

function power(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};