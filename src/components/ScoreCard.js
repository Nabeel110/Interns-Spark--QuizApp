import React from "react";

const ScoreCard = ({ correct, incorrect }) => {
  if (correct < 2) {
    return (
      <div>
        <h2 className="fail">You have Failed the Quiz.</h2>
        <div className="score-card-bg">
          {" "}
          <p className="score-card">
            Your final score: {correct}/{correct + incorrect}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2 className="pass">You have Passed the Quiz.</h2>
        <p className="score-card">
          Your final score: {correct}/{correct + incorrect}
        </p>
      </>
    );
  }
};

export default ScoreCard;
