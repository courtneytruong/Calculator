function CalculatorDisplay({ value }) {
  return (
    <div className="flex justify-end items-end text-3xl font-bold text-white px-4 py-2 w-full h-1/3">
      {value}
    </div>
  );
}

export default CalculatorDisplay;
