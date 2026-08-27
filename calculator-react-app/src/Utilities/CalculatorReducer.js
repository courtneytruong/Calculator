import Calculate from "./Calculate";

export const ACTIONS = {
  CLEAR: "clear",
  DIGIT: "digit",
  BACKSPACE: "backspace",
  EQUALS: "equals",
  PERCENT: "percent",
  NEGATIVE: "negative",
  OPERATOR: "operator",
  DECIMAL: "decimal",
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
    case ACTIONS.BACKSPACE: {
      const sliced = state.displayValue.slice(0, -1);
      const slicedDisplay = (sliced && sliced !== "-" && sliced) || "0";
      if (!state.waitingForSecondOperand) {
        return {
          ...state,
          displayValue: slicedDisplay,
        };
      } else if (!state.errorFlagged) {
        return {
          ...state,
          displayValue: "0",
          waitingForSecondOperand: false,
        };
      } else {
        return initialState;
      }
    }
    case ACTIONS.EQUALS: {
      try {
        if (!state.errorFlagged) {
          if (state.waitingForSecondOperand) {
            const result = Calculate(
              state.firstOperand,
              state.lastOperand,
              state.operator,
            );
            return {
              ...state,
              displayValue: result.toString(),
              firstOperand: result,
            };
          } else {
            const secondResult = Calculate(
              state.firstOperand,
              parseFloat(state.displayValue),
              state.operator,
            );
            return {
              ...state,
              displayValue: secondResult.toString(),
              firstOperand: secondResult,
              waitingForSecondOperand: true,
              lastOperand: parseFloat(state.displayValue),
            };
          }
        }
      } catch (error) {
        return {
          ...state,
          errorFlagged: true,
          displayValue: error.message,
          operator: null,
          firstOperand: null,
          waitingForSecondOperand: true,
        };
      }
      return state;
    }
    case ACTIONS.OPERATOR:
      {
        if (!state.errorFlagged) {
          if (state.firstOperand === null) {
            const parsedDisplayValue = parseFloat(state.displayValue);
            return {
              ...state,
              firstOperand: parsedDisplayValue,
              operator: action.payload,
              waitingForSecondOperand: true,
              lastOperand: null,
            };
          } else if (state.operator && !state.waitingForSecondOperand) {
            try {
              const result = Calculate(
                state.firstOperand,
                parseFloat(state.displayValue),
                state.operator,
              );
              return {
                ...state,
                displayValue: result.toString(),
                firstOperand: result,
                operator: action.payload,
                waitingForSecondOperand: true,
                lastOperand: null,
              };
            } catch (error) {
              return {
                ...state,
                errorFlagged: true,
                displayValue: error.message,
                operator: null,
                firstOperand: null,
                waitingForSecondOperand: true,
              };
            }
          }
        }
      }
      return state;
    case ACTIONS.PERCENT: {
      if (!state.errorFlagged) {
        const percent = parseFloat(state.displayValue) / 100;
        return {
          ...state,
          displayValue: percent.toString(),
          waitingForSecondOperand: false,
        };
      }
      return state;
    }
    case ACTIONS.NEGATIVE: {
      if (!state.errorFlagged) {
        if (!state.displayValue.startsWith("-")) {
          const negative = "-".concat(state.displayValue);
          return {
            ...state,
            displayValue: negative,
            waitingForSecondOperand: false,
          };
        } else if (state.displayValue.startsWith("-")) {
          const negative = state.displayValue.slice(1);
          return {
            ...state,
            displayValue: negative,
            waitingForSecondOperand: false,
          };
        }
      }
      return state;
    }
    case ACTIONS.DECIMAL: {
      if (state.waitingForSecondOperand) {
        return {
          ...state,
          displayValue: "0.",
          errorFlagged: false,
          waitingForSecondOperand: false,
        };
      } else if (!state.displayValue.includes(".")) {
        return {
          ...state,
          displayValue: state.displayValue + ".",
          waitingForSecondOperand: false,
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export default CalculatorReducer;
