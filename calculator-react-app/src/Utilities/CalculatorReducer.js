export const ACTIONS = {
  CLEAR: "clear",
  DIGIT: "digit",
};

export const initialState = {
  displayValue: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false,
  lastOperand: null,
  errorFlagged: false,
};

function CalculatorReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLEAR:
      return initialState;
    case ACTIONS.DIGIT: {
      const shouldOverwrite =
        state.waitingForSecondOperand || state.displayValue === "0";
      const overWrite = shouldOverwrite
        ? action.payload
        : state.displayValue + action.payload;
      return {
        ...state,
        errorFlagged: false,
        displayValue: overWrite,
        waitingForSecondOperand: false,
      };
    }
    default:
      return state;
  }
}

export default CalculatorReducer;
