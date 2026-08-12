import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import { useState } from "react";

function CalculatorBody() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);

  // math functions for calculator
  function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        if (secondOperand === 0) {
          throw new Error("Cannot divide by zero");
        }
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }

  // resets states to clear the calculator
  function handleClear() {
    setDisplayValue("0");
    setOperator(null);
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
  }

  // backspace function.
  function handleBackspace() {
    setDisplayValue((prevValue) => prevValue.slice(0, -1) || "0");
  }
  // percent function divides number by 100 to find percent
  function handlePercent() {
    const percent = parseFloat(displayValue) / 100;
    setDisplayValue(percent.toString());
  }

  // toggles number between negative and positive
  function handleNegative() {
    const negative = -parseFloat(displayValue);
    setDisplayValue(negative.toString());
  }

  // logic for how = button works
  function handleEquals(userInput) {
    try {
      if (waitingForSecondOperand) {
        const result = calculate(firstOperand, lastOperand, operator);
        setDisplayValue(result.toString());
        setFirstOperand(result);
      } else {
        const result = calculate(
          firstOperand,
          parseFloat(displayValue),
          operator,
        );
        setDisplayValue(result.toString());
        setFirstOperand(result);
        setWaitingForSecondOperand(userInput);
        setLastOperand(parseFloat(displayValue));
      }
    } catch {
      setDisplayValue("Cannot divide by zero.");
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(false);
    }
  }

  // logic for what calculation to do from calculate based on which operator button is used
  function handleOperator(userInput) {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
    } else if (operator) {
      const result = calculate(
        firstOperand,
        parseFloat(displayValue),
        operator,
      );
      setDisplayValue(result.toString());
      setFirstOperand(result);
    }
    setOperator(userInput);
    setWaitingForSecondOperand(true);
  }

  // logic for updating the digits on the display
  function handleDigit(userInput) {
    setDisplayValue((prevValue) => {
      const newValue = waitingForSecondOperand
        ? userInput
        : prevValue + userInput;
      setWaitingForSecondOperand(false);
      {
        const shouldOverwrite = waitingForSecondOperand || prevValue === "0";
        return shouldOverwrite ? userInput : newValue;
      }
    });
  }

  function handleButtonClick(userInput) {
    if (userInput === "clear") {
      handleClear();
    } else if (userInput === "backspace") {
      handleBackspace();
    } else if (userInput === "%") {
      handlePercent();
    } else if (userInput === "+/-") {
      handleNegative();
    } else if (userInput === "=") {
      handleEquals(userInput);
    } else if (["+", "-", "*", "/"].includes(userInput)) {
      handleOperator(userInput);
    } else {
      handleDigit(userInput);
    }
  }

  return (
    <div className="bg-neutral-900 px-1 pt-4 pb-1 w-[300px] h-[570px]  ">
      <CalculatorDisplay value={displayValue}></CalculatorDisplay>
      <CalculatorButtonContainer
        onClick={handleButtonClick}
      ></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
