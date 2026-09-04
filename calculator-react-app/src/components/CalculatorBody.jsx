import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import CalculatorReducer, {
  ACTIONS,
  initialState,
} from "../Utilities/CalculatorReducer";
import { useReducer, useEffect } from "react";

function CalculatorBody() {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key;
      if (
        (key >= "0" && key <= "9") ||
        key === "." ||
        key === "%" ||
        key === "+" ||
        key === "-" ||
        key === "*"
      ) {
        handleButtonClick(key);
      } else if (key === "Backspace" || key === "Delete") {
        event.preventDefault(); // Prevent default backspace behavior (navigation)
        handleButtonClick("backspace");
      } else if (key === "Enter" || key === "=") {
        event.preventDefault(); // Prevent default enter behavior (navigation)
        handleButtonClick("=");
      } else if (key === "Escape" || key === "c" || key === "C") {
        handleButtonClick("clear");
      } else if (key === "/") {
        event.preventDefault(); // Prevent default behavior (navigation)
        handleButtonClick("/");
      } else if (key === "_") {
        event.preventDefault(); // Prevent default behavior (navigation)
        handleButtonClick("+/-");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleDisplayChange() {
    if (state.operator === null && state.historyLine === null) {
      const newDisplayValue = state.displayValue;
      return newDisplayValue;
    } else if (state.waitingForSecondOperand && state.historyLine === null) {
      const newDisplayValue = state.firstOperand + " " + state.operator;
      return newDisplayValue;
    } else if (state.waitingForSecondOperand && state.historyLine !== null) {
      const newDisplayValue = state.displayValue;
      return newDisplayValue;
    } else if (!state.waitingForSecondOperand) {
      const newDisplayValue =
        state.firstOperand + " " + state.operator + " " + state.displayValue;
      return newDisplayValue;
    }
  }

  function handleButtonClick(userInput) {
    switch (userInput) {
      case "clear":
        dispatch({ type: ACTIONS.CLEAR });
        break;
      case "backspace":
        dispatch({ type: ACTIONS.BACKSPACE });
        break;
      case ".":
        dispatch({ type: ACTIONS.DECIMAL });
        break;
      case "%":
        dispatch({ type: ACTIONS.PERCENT });
        break;
      case "+/-":
        dispatch({ type: ACTIONS.NEGATIVE });
        break;
      case "=":
        dispatch({ type: ACTIONS.EQUALS });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        dispatch({ type: ACTIONS.OPERATOR, payload: userInput });
        break;
      default:
        dispatch({ type: ACTIONS.DIGIT, payload: userInput });
    }
  }

  return (
    <div className="bg-neutral-900 px-1 pt-4 pb-1 w-[300px] h-[570px]  ">
      <CalculatorDisplay
        value={handleDisplayChange()}
        historyLine={state.historyLine}
      ></CalculatorDisplay>
      <CalculatorButtonContainer
        onClick={handleButtonClick}
      ></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
