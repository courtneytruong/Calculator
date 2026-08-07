function OperatorButton({ operator }) {
  return (
    <div className="flex justify-center items-center h-1/6 w-full text-3xl font-bold text-white">
      <button className="bg-orange-400 border-1 border-orange-200 hover:bg-orange-500 items-center justify-center w-[65px] h-[65px] rounded-full">
        {operator}
      </button>
    </div>
  );
}

export default OperatorButton;
