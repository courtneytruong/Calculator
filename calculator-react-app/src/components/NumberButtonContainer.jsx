import BackspaceClearPercentButtonsContainer from "./BackspaceClearPercentButtonsContainer";
import NumbersDecimalPointContainer from "./NumbersDecimalPointContainer";

function NumberButtonContainer() {
  return (
    <div className="flex-col justify-center items-center w-3/4 h-full">
      <BackspaceClearPercentButtonsContainer></BackspaceClearPercentButtonsContainer>
      <NumbersDecimalPointContainer></NumbersDecimalPointContainer>
    </div>
  );
}

export default NumberButtonContainer;
