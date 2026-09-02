import { useRef, useLayoutEffect } from "react";
import HistoryLine from "./HistoryLine";

function CalculatorDisplay({ value }) {
  const displayRef = useRef(null);

  useLayoutEffect(() => {
    if (displayRef.current) {
      const displayWidth = displayRef.current.offsetWidth;
      const fontSize = Math.min(48, (displayWidth / value.length) * 1.5);
      displayRef.current.style.fontSize = `${fontSize}px`;
    }
  }, [value]);
  return (
    <div
      ref={displayRef}
      className="flex flex-col justify-end items-end leading-none font-bold text-white px-4 py-2 w-full h-1/3"
    >
      <div>
        <HistoryLine />
      </div>
      <div>{value}</div>
    </div>
  );
}

export default CalculatorDisplay;
