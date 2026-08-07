import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";

function CalculatorBody() {
  return (
    <div className="border-1 xl:w-1/6 h-1/2">
      <CalculatorDisplay></CalculatorDisplay>
      <CalculatorButtonContainer></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
