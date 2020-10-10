import React from "react";
import Answer from "./Answer";

function AnswerList({ dataSet, handleClick }) {
  const options = [];

  for (let i = 0; i < dataSet.options.length; i++) {
    options.push(
      <Answer
        key={i}
        choice={i}
        handleClick={handleClick}
        answer={dataSet.options[i]}
      />
    );
  }
  return <p>{options}</p>;
}

export default AnswerList;
