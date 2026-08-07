function OperatorButton({ operator }) {
  return (
    <div className="flex justify-center items-center h-1/5 w-full text-3xl font-bold text-white">
      <button className="bg-orange-400 border-1 border-orange-200 items-center justify-center w-[70px] h-[70px] rounded-full">
        {operator}
      </button>
    </div>
  );
}

export default OperatorButton;
