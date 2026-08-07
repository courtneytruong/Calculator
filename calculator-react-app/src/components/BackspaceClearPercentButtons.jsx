function BackspaceClearPercentButtons({ BackspaceClearPercentButton }) {
  return (
    <div className="flex h-1/3 w-full text-3xl font-bold text-white">
      <button className="bg-zinc-400 border-1 border-zinc-200 hover:bg-zinc-500 items-center justify-center w-[65px] h-[65px] rounded-full">
        {BackspaceClearPercentButton}
      </button>
    </div>
  );
}

export default BackspaceClearPercentButtons;
