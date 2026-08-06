import OperatorButtonContainer from "./OperatorButtonContainer";
import NumberButtonContainer from "./NumberButtonContainer";

function CalculatorButtonContainer() {
  return (
    <div className="flex bg-red-500 w-full h-2/3">
      <NumberButtonContainer></NumberButtonContainer>
      <OperatorButtonContainer></OperatorButtonContainer>
    </div>
  );
}

export default CalculatorButtonContainer;
