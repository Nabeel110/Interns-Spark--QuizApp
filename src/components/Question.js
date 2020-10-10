import React from "react";

function Question({ dataSet }) {
  return (
    <div>
      <h2 className="question">{dataSet.question}</h2>
    </div>
  );
}

export default Question;
