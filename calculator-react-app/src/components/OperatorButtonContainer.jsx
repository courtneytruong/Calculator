import OperatorButton from "./OperatorButton";

const operators = ["/", "x", "-", "+", "="];

function OperatorButtonContainer() {
  return (
    <div className="flex w-1/4 h-full">
      <div className="w-full h-full flex flex-col gap-2">
        {operators.map((operator) => (
          <OperatorButton key={operator} operator={operator}></OperatorButton>
        ))}
      </div>
    </div>
  );
}

export default OperatorButtonContainer;
