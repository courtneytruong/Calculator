import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import CalculatorReducer, {
  ACTIONS,
  initialState,
} from "../Utilities/CalculatorReducer";
import { useReducer } from "react";

function CalculatorBody() {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  // resets states to clear the calculator
  function handleClear() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  // backspace function.
  function handleBackspace() {
    dispatch({ type: ACTIONS.BACKSPACE });
  }

  // percent function divides number by 100 to find percent
  function handlePercent() {
    dispatch({ type: ACTIONS.PERCENT });
  }

  // toggles number between negative and positive
  function handleNegative() {
    dispatch({ type: ACTIONS.NEGATIVE });
  }

  // logic for how = button works
  function handleEquals() {
    dispatch({ type: ACTIONS.EQUALS });
  }

  // logic for what calculation to do from calculate based on which operator button is used
  function handleOperator(userInput) {
    dispatch({ type: ACTIONS.OPERATOR, payload: userInput });
  }

  // logic for decimal point button. only allows one decimal point per operand
  function handleDecimal() {
    dispatch({ type: ACTIONS.DECIMAL });
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
