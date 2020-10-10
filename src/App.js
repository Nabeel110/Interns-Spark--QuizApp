import React from "react";
import "./App.css";
import Questionnaire from "./components/Questionnaire";

function App() {
  return (
    <div className="App">
      <h1>JavaScript Quiz</h1>
      <h3 className="author">By Nabeel Ahmed</h3>
      <Questionnaire />
    </div>
  );
}

export default App;
