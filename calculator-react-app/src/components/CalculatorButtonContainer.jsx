import CalculatorButtons from "./CalculatorButtons";
import { BsBackspace } from "react-icons/bs";
import { MdOutlinePercent } from "react-icons/md";
import { FiDivide } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GrSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { FaEquals } from "react-icons/fa6";

const calcButtons = [
  { label: <BsBackspace />, type: "topRow", userInput: "backspace" },
  { label: "AC", type: "topRow", userInput: "clear" },
  { label: <MdOutlinePercent />, type: "topRow", userInput: "%" },
  { label: <FiDivide />, type: "operator", userInput: "/" },
  { label: "7", type: "number", userInput: "7" },
  { label: "8", type: "number", userInput: "8" },
  { label: "9", type: "number", userInput: "9" },
  { label: <RxCross2 />, type: "operator", userInput: "*" },
  { label: "4", type: "number", userInput: "4" },
  { label: "5", type: "number", userInput: "5" },
  { label: "6", type: "number", userInput: "6" },
  { label: <GrSubtract />, type: "operator", userInput: "-" },
  { label: "1", type: "number", userInput: "1" },
  { label: "2", type: "number", userInput: "2" },
  { label: "3", type: "number", userInput: "3" },
  { label: <IoMdAdd />, type: "operator", userInput: "+" },
  { label: "+/-", type: "number", userInput: "+/-" },
  { label: "0", type: "number", userInput: "0" },
  { label: ".", type: "number", userInput: "." },
  { label: <FaEquals />, type: "operator", userInput: "=" },
];

function CalculatorButtonContainer({ onClick: handleButtonClick }) {
  return (
    <div className="grid grid-cols-4 justify-items-center w-full h-2/3">
      {calcButtons.map((button) => (
        <CalculatorButtons
          key={button.userInput}
          label={button.label}
          type={button.type}
          onClick={handleButtonClick}
          userInput={button.userInput}
        />
      ))}
    </div>
  );
}

export default CalculatorButtonContainer;
