import CalculatorButtons from "./CalculatorButtons";

const calcButtons = [
  { label: "⌫", type: "topRow" },
  { label: "AC", type: "topRow" },
  { label: "%", type: "topRow" },
  { label: "/", type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "*", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "+/-", type: "number" },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: "=", type: "operator" },
];

function CalculatorButtonContainer() {
  return (
    <div className="grid grid-cols-4 justify-items-center xl:w-full h-2/3">
      {calcButtons.map((button) => (
        <CalculatorButtons
          key={button.label}
          label={button.label}
          type={button.type}
        />
      ))}
    </div>
  );
}

export default CalculatorButtonContainer;
