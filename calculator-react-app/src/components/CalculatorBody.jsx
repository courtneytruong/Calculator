import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import CalculatorReducer, {
  ACTIONS,
  initialState,
} from "../Utilities/calculatorReducer";
import { useState, useReducer } from "react";

function CalculatorBody() {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [lastOperand, setLastOperand] = useState(null);
  const [errorFlagged, setErrorFlagged] = useState(false);

  // math functions for calculator
  function calculate(firstOperand, secondOperand, operator) {
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

  // resets states to clear the calculator
  function handleClear() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  // backspace function.
  function handleBackspace() {
    if (!waitingForSecondOperand) {
      setDisplayValue((prevValue) => {
        const sliced = prevValue.slice(0, -1);
        return (sliced && sliced !== "-" && sliced) || "0";
      });
    } else if (!errorFlagged) {
      setDisplayValue("0");
      setWaitingForSecondOperand(false);
    } else {
      handleClear();
    }
  }

  // percent function divides number by 100 to find percent
  function handlePercent() {
    if (!errorFlagged) {
      const percent = parseFloat(displayValue) / 100;
      setDisplayValue(percent.toString());
      setWaitingForSecondOperand(false);
    }
  }

  // toggles number between negative and positive
  function handleNegative() {
    if (!errorFlagged) {
      if (!displayValue.startsWith("-")) {
        const negative = "-".concat(displayValue);
        setDisplayValue(negative);
        setWaitingForSecondOperand(false);
      } else if (displayValue.startsWith("-")) {
        const negative = displayValue.slice(1);
        setDisplayValue(negative);
        setWaitingForSecondOperand(false);
      }
    }
  }

  // logic for how = button works
  function handleEquals() {
    try {
      if (!errorFlagged) {
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
          setWaitingForSecondOperand(true);
          setLastOperand(parseFloat(displayValue));
        }
      }
    } catch (error) {
      setErrorFlagged(true);
      setDisplayValue(error.message);
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(true);
    }
  }

  // logic for what calculation to do from calculate based on which operator button is used
  function handleOperator(userInput) {
    if (!errorFlagged) {
      if (firstOperand === null) {
        setFirstOperand(parseFloat(displayValue));
      } else if (operator && !waitingForSecondOperand) {
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
      setLastOperand(null);
    }
  }

  // logic for decimal point button. only allows one decimal point per operand
  function handleDecimal() {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setErrorFlagged(false);
      setWaitingForSecondOperand(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue((prevValue) => prevValue + ".");
      setWaitingForSecondOperand(false);
    }
  }

  // logic for updating the digits on the display
  function handleDigit(userInput) {
    dispatch({ type: ACTIONS.DIGIT, payload: userInput });
  }

  function handleButtonClick(userInput) {
    switch (userInput) {
      case "clear":
        handleClear();
        break;
      case "backspace":
        handleBackspace();
        break;
      case ".":
        handleDecimal();
        break;
      case "%":
        handlePercent();
        break;
      case "+/-":
        handleNegative();
        break;
      case "=":
        handleEquals();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(userInput);
        break;
      default:
        handleDigit(userInput);
    }
  }

  return (
    <div className="bg-neutral-900 px-1 pt-4 pb-1 w-[300px] h-[570px]  ">
      <CalculatorDisplay value={state.displayValue}></CalculatorDisplay>
      <CalculatorButtonContainer
        onClick={handleButtonClick}
      ></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
