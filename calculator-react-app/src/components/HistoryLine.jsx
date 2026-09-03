function HistoryLine({ historyLine }) {
  return (
    <div className="flex justify-between items-center w-full px-1 py-2 text-gray-400 text-sm">
      <span className="text-sm">{historyLine}</span>
    </div>
  );
}

export default HistoryLine;
