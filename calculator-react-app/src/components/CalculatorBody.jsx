import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonContainer from "./CalculatorButtonContainer";

function CalculatorBody() {
  return (
    <div className="bg-neutral-900 px-1 pt-4 pb-1 w-[300px] h-[570px]  ">
      <CalculatorDisplay></CalculatorDisplay>
      <CalculatorButtonContainer></CalculatorButtonContainer>
    </div>
  );
}

export default CalculatorBody;
