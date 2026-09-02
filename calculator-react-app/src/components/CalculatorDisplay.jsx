import { useRef, useLayoutEffect } from "react";

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
      className="flex justify-end items-end leading-none font-bold text-white px-4 py-2 w-full h-1/3"
    >
      {value}
    </div>
  );
}

export default CalculatorDisplay;
