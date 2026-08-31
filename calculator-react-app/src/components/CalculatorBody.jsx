import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";
import CalculatorReducer, {
  ACTIONS,
  initialState,
} from "../Utilities/CalculatorReducer";
import { useReducer } from "react";

function CalculatorBody() {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

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
      <CalculatorDisplay value={state.displayValue}></CalculatorDisplay>
      <CalculatorButtonContainer
        onClick={handleButtonClick}
      ></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
