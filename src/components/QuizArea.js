import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreeting";
import ScoreCard from "./ScoreCard";

function QuizArea({
  isFinished,
  dataSet,
  handleClick,
  correct,
  incorrect,
  restart,
  handleRestart,
}) {
  if (isFinished) {
    return (
      <>
        <UserGreeting />
        <ScoreCard correct={correct} incorrect={incorrect} />{" "}
        <button
          className="restart"
          onClick={() => handleRestart(restart)}
          type="button"
        >
          Restart Quiz
        </button>
      </>
    );
  }

  return (
    <div>
      <h2>Quiz Area</h2>
      <Question dataSet={dataSet} />
      <AnswerList handleClick={handleClick} dataSet={dataSet} />
    </div>
  );
}

export default QuizArea;
