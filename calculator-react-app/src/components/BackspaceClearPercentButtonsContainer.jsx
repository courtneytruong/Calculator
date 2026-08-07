import BackspaceClearPercentButtons from "./BackspaceClearPercentButtons";

const BackspaceClearPercentButton = ["<", "C", "%"];

function BackspaceClearPercentButtonsContainer() {
  return (
    <div className="w-full h-1/6">
      <div className="flex justify-center w-full h-full">
        {BackspaceClearPercentButton.map((BackspaceClearPercentButton) => (
          <BackspaceClearPercentButtons
            key={BackspaceClearPercentButton}
            BackspaceClearPercentButton={BackspaceClearPercentButton}
          ></BackspaceClearPercentButtons>
        ))}
      </div>
    </div>
  );
}

export default BackspaceClearPercentButtonsContainer;
