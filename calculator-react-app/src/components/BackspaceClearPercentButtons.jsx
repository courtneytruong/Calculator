function BackspaceClearPercentButtons({ BackspaceClearPercentButton }) {
  return (
    <div className="flex h-1/3 w-full text-3xl font-bold text-white">
      <button className="bg-gray-400 border-1 border-gray-200 hover:bg-gray-500 items-center justify-center w-[65px] h-[65px] rounded-full">
        {BackspaceClearPercentButton}
      </button>
    </div>
  );
}

export default BackspaceClearPercentButtons;
