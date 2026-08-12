import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import { useState } from "react";

function CalculatorBody() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);

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

  function handleButtonClick(userInput) {
    if (userInput === "clear") {
      setDisplayValue("0");
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(false);
    } else if (userInput === "backspace") {
      setDisplayValue((prevValue) => prevValue.slice(0, -1) || "0");
    } else if (userInput === "%") {
      const percent = parseFloat(displayValue) / 100;
      setDisplayValue(percent.toString());
    } else if (userInput === "+/-") {
      const negative = -parseFloat(displayValue);
      setDisplayValue(negative.toString());
    } else if (userInput === "=") {
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
    } else if (["+", "-", "*", "/"].includes(userInput)) {
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
    } else {
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
