import React, { Component } from "react";
import dataSet from "../api/dataSet";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";

export class Questionnaire extends Component {
  constructor() {
    super();

    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      incorrect: 0,
      isFinished: false,
      restart: false,
      // fail:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }
  handleRestart(restart) {
    if (restart) {
      this.setState({
        current: 0,
        dataSet: dataSet,
        correct: 0,
        incorrect: 0,
        isFinished: false,
        restart: false,
      });
    }
  }
  handleClick(choice) {
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({
        correct: this.state.correct + 1,
      });
    } else {
      this.setState({
        incorrect: this.state.incorrect + 1,
      });
    }

    if (this.state.current === this.state.dataSet.length - 1) {
      this.setState({
        isFinished: true,
        restart: true,
      });
    } else {
      this.setState({
        current: this.state.current + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="quiz-area">
          <QuizArea
            restart={this.state.restart}
            handleRestart={this.handleRestart}
            correct={this.state.correct}
            incorrect={this.state.incorrect}
            handleClick={this.handleClick}
            isFinished={this.state.isFinished}
            dataSet={this.state.dataSet[this.state.current]}
          />
        </div>
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
      </div>
    );
  }
}

export default Questionnaire;
