function HistoryLine({ firstOperand, operator, lastOperand }) {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 bg-gray-800 text-white">
      <span className="text-sm">
        0 {firstOperand} {operator} {lastOperand}
      </span>
    </div>
  );
}

export default HistoryLine;
