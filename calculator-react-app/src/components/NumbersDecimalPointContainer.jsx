import NumbersDecimalPointButtons from "./NumbersDecimalPointButtons";

const numbersDecimalPoint = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "+/-",
  "0",
  ".",
];

function NumbersDecimalPointContainer() {
  return (
    <div className="w-full h-1/6">
      <div className="grid grid-cols-3 gap-2 justify-center w-full h-full">
        {numbersDecimalPoint.map((number) => (
          <NumbersDecimalPointButtons
            key={number}
            number={number}
          ></NumbersDecimalPointButtons>
        ))}
      </div>
    </div>
  );
}

export default NumbersDecimalPointContainer;
