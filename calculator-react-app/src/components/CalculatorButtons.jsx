function CalculatorButtons({ label, type }) {
  const buttonStyles = {
    topRow:
      "text-white text-3xl bg-stone-500 border-1 border-stone-400 hover:bg-stone-400 border-stone-300 w-[60px] h-[60px] rounded-full",
    operator:
      "text-white text-3xl bg-amber-600 border-1 border-amber-500 hover:bg-amber-500 border-amber-400 w-[60px] h-[60px] rounded-full",
    number:
      "text-white text-3xl bg-stone-600 border-1 border-stone-500 hover:bg-stone-500 border-stone-400 w-[60px] h-[60px] rounded-full",
  };

  return (
    <div>
      <button className={buttonStyles[type]}>{label}</button>
    </div>
  );
}

export default CalculatorButtons;
