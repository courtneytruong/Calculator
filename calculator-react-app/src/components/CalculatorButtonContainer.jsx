import CalculatorButtons from "./CalculatorButtons";
import { BsBackspace } from "react-icons/bs";
import { MdOutlinePercent } from "react-icons/md";
import { FiDivide } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GrSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { FaEquals } from "react-icons/fa6";

const calcButtons = [
  { label: <BsBackspace />, type: "topRow" },
  { label: "AC", type: "topRow" },
  { label: <MdOutlinePercent />, type: "topRow" },
  { label: <FiDivide />, type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: <RxCross2 />, type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: <GrSubtract />, type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: <IoMdAdd />, type: "operator" },
  { label: "+/-", type: "number" },
  { label: "0", type: "number" },
  { label: ".", type: "number" },
  { label: <FaEquals />, type: "operator" },
];

function CalculatorButtonContainer() {
  return (
    <div className="grid grid-cols-4 justify-items-center w-full h-2/3">
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
