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
  historyLine: null,
};

function CalculatorReducer(state, action) {
  switch (action.type) {
    // resets states to clear the calculator
    case ACTIONS.CLEAR:
      return initialState;
    // logic for updating the digits on the display
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
        historyLine: null,
      };
    }
    // backspace function.
    case ACTIONS.BACKSPACE: {
      const sliced = state.displayValue.slice(0, -1);
      const slicedDisplay = (sliced && sliced !== "-" && sliced) || "0";
      if (!state.waitingForSecondOperand) {
        return {
          ...state,
          displayValue: slicedDisplay,
          historyLine: null,
        };
      } else if (!state.errorFlagged) {
        return {
          ...state,
          displayValue: "0",
          waitingForSecondOperand: false,
          historyLine: null,
        };
      } else {
        return initialState;
      }
    }
    // logic for how = button works
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
              historyLine: `${state.firstOperand || ""} ${state.operator || ""} ${state.lastOperand || ""}`,
            };
          } else {
            const secondOperand = parseFloat(state.displayValue);
            const secondResult = Calculate(
              state.firstOperand,
              secondOperand,
              state.operator,
            );
            return {
              ...state,
              displayValue: secondResult.toString(),
              firstOperand: secondResult,
              waitingForSecondOperand: true,
              lastOperand: secondOperand,
              historyLine: `${state.firstOperand || ""} ${state.operator || ""} ${secondOperand || ""}`,
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
          historyLine: null,
        };
      }
      return state;
    }
    // logic for what calculation to do from calculate based on which operator button is used
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
              historyLine: null,
            };
          }
          if (state.operator && state.waitingForSecondOperand) {
            return {
              ...state,
              operator: action.payload,
              lastOperand: null,
              historyLine: null,
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
                historyLine: null,
              };
            } catch (error) {
              return {
                ...state,
                errorFlagged: true,
                displayValue: error.message,
                operator: null,
                firstOperand: null,
                waitingForSecondOperand: true,
                historyLine: null,
              };
            }
          }
        }
      }
      return state;
    // percent function divides number by 100 to find percent
    case ACTIONS.PERCENT: {
      if (!state.errorFlagged) {
        if (state.firstOperand !== null) {
          const percentResult =
            (state.firstOperand * parseFloat(state.displayValue)) / 100;
          return {
            ...state,
            displayValue: percentResult.toString(),
            waitingForSecondOperand: false,
            historyLine: null,
          };
        } else if (state.firstOperand === null) {
          const percent = parseFloat(state.displayValue) / 100;
          return {
            ...state,
            displayValue: percent.toString(),
            waitingForSecondOperand: false,
            historyLine: null,
          };
        }
      }
      return state;
    }

    // toggles number between negative and positive
    case ACTIONS.NEGATIVE: {
      if (!state.errorFlagged) {
        if (!state.displayValue.startsWith("-")) {
          const negative = "-".concat(state.displayValue);
          return {
            ...state,
            displayValue: negative,
            waitingForSecondOperand: false,
            historyLine: null,
          };
        } else if (state.displayValue.startsWith("-")) {
          const negative = state.displayValue.slice(1);
          return {
            ...state,
            displayValue: negative,
            waitingForSecondOperand: false,
            historyLine: null,
          };
        }
      }
      return state;
    }
    // logic for decimal point button. only allows one decimal point per operand
    case ACTIONS.DECIMAL: {
      if (state.waitingForSecondOperand) {
        return {
          ...state,
          displayValue: "0.",
          errorFlagged: false,
          waitingForSecondOperand: false,
          historyLine: null,
        };
      } else if (!state.displayValue.includes(".")) {
        return {
          ...state,
          displayValue: state.displayValue + ".",
          waitingForSecondOperand: false,
          historyLine: null,
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export default CalculatorReducer;
