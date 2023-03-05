let result = document.getElementById("result");

function addDigit(digit) {
  result.value += digit;
}

function clearResult() {
  result.value = "";
}

function deleteDigit() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  let expression = result.value;
  if (operator == "=") {
    result.value = eval(expression);
  } else {
    result.value += operator;
  }
}
