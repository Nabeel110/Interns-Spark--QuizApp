import React from "react";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";

function ScoreArea({ correct, incorrect }) {
  return (
    <div className="scoreWrapper">
      <h1>Score Area</h1>
      <TotalCorrect correct={correct} />
      <TotalIncorrect incorrect={incorrect} />
    </div>
  );
}

export default ScoreArea;
