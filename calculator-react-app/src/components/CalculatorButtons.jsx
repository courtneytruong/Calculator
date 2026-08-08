function CalculatorButtons({ label, type }) {
  const buttonStyles = {
    topRow:
      "flex justify-center items-center text-white text-3xl bg-stone-500 border-1 border-stone-400 hover:bg-stone-400 border-stone-300 w-[70px] h-[70px] rounded-full",
    operator:
      "flex justify-center items-center text-white text-3xl bg-amber-600 border-1 border-amber-500 hover:bg-amber-500 border-amber-400 w-[70px] h-[70px] rounded-full",
    number:
      "flex justify-center items-center text-white text-3xl bg-stone-600 border-1 border-stone-500 hover:bg-stone-500 border-stone-400 w-[70px] h-[70px] rounded-full",
  };

  return (
    <div>
      <button className={buttonStyles[type]}>{label}</button>
    </div>
  );
}

export default CalculatorButtons;
