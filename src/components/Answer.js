import React from "react";

function Answer({ choice, answer, handleClick }) {
  return (
    <button
      className="btnAnswer"
      onClick={() => handleClick(choice)}
      type="button"
    >
      {answer}
    </button>
  );
}

export default Answer;
