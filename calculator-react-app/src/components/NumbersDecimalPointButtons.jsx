function NumbersDecimalPointButtons({ number }) {
  return (
    <div className="flex h-5/6 w-full text-3xl font-bold text-white">
      <button className="bg-zinc-600 border-1 border-zinc-400 hover:bg-zinc-700 items-center justify-center w-[65px] h-[65px] rounded-full">
        {number}
      </button>
    </div>
  );
}

export default NumbersDecimalPointButtons;
