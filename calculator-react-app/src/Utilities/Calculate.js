function Calculate(firstOperand, secondOperand, operator) {
  if (secondOperand === null) {
    throw new Error("Missing Second Operand");
  } else {
    let calculateResult;
    switch (operator) {
      case "+":
        calculateResult = firstOperand + secondOperand;
        break;
      case "-":
        calculateResult = firstOperand - secondOperand;
        break;
      case "*":
        calculateResult = firstOperand * secondOperand;
        break;
      case "/":
        if (secondOperand === 0) {
          throw new Error("Cannot divide by zero");
        }
        calculateResult = firstOperand / secondOperand;
        break;
      default:
        calculateResult = secondOperand;
        break;
    }
    return parseFloat(calculateResult.toFixed(9));
  }
}

export default Calculate;
