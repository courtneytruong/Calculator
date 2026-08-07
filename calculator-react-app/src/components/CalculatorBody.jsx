import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";

function CalculatorBody() {
  return (
    <div className="border-x-1 border-slate-500 h-screen w-1/4">
      <CalculatorDisplay></CalculatorDisplay>
      <CalculatorButtonContainer></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
