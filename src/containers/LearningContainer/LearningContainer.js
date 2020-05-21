import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SummaryContainer from "../SummaryContainer/SummaryContainer";
import Util from "../../Utility/Utility";

class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;
  totalQuestions = Object.keys(this.props.allQuestions.questions).length;
  answeringHandler = (action) => {
    const newSummaryArray = Util.updateSummaryArray(
      [...this.state.summaryArray],
      this.state.questionNumber,
      action
    );
    const newQuestionNumber =
      this.state.questionNumber + (action === "WRONG" ? 0 : 1);
    this.setState({
      ...this.state,
      questionNumber: newQuestionNumber,
      questionObject: this.props.allQuestions.questions[newQuestionNumber],
      nextUnansweredQuestion:
        newQuestionNumber > this.state.nextUnansweredQuestion
          ? newQuestionNumber
          : this.state.nextUnansweredQuestion,
      summaryArray: newSummaryArray,
    });
  };
  viewAnotherQuestionHandler = (number) => {
    const questionWasntReached = this.state.nextUnansweredQuestion < +number + 1;
    const isItSummary = this.totalQuestions <= this.state.questionNumber;
    if (questionWasntReached || isItSummary) {
      return;
    }
    this.setState({
      ...this.state,
      questionNumber: number + 1,
      questionObject: this.props.allQuestions.questions[number + 1],
    });
  };
  resetGameHandler = () => {
    const newGameHistory = [...this.state.gameHistory];

    newGameHistory.push({ summary: this.state.summaryArray, time: Date.now() });
    this.initState();
    setTimeout(() => {
      this.setState({ ...this.state, gameHistory: newGameHistory });
    }, 10);
  };

  initState = () => {
    const num = 1;
    this.setState({
      questionNumber: num,
      questionObject: this.props.allQuestions.questions[1],
      nextUnansweredQuestion: num,
      summaryArray: [...Array(this.totalQuestions + 1)].map((e) => []),
    });
  };
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (this.state.nextUnansweredQuestion > this.state.questionNumber) return;
      if (event.keyCode === 32) {
        this.totalQuestions >= this.state.questionNumber
          ? this.answeringHandler("RIGHT")
          : this.resetGameHandler();
      }
      // for Testing purpuses
    });
  }
  state = {
    questionNumber: 1,
    questionObject: this.props.allQuestions.questions[1],
    nextUnansweredQuestion: 1,
    summaryArray: [...Array(this.totalQuestions + 1)].map((e) => []),
    gameHistory: [],
  };
  info_Array = Object.keys(this.props.allQuestions.questions)
    .filter((num) =>
      this.props.allQuestions.questions[num].type === "info"
        ? Number(+num)
        : null
    )
    .map((e) => +e);

  render() {
    return (
      <AdvanceContext.Provider
        value={{
          q_number: this.state.questionNumber,
          totalQuestions: this.totalQuestions,
          q_next: this.state.nextUnansweredQuestion,
          info_questions: this.info_Array,
        }}
      >
        <ProgressBar
          viewAnotherQuestionHandler={this.viewAnotherQuestionHandler}
        />
        {this.totalQuestions >= this.state.questionNumber ? (
          <QuestionContainer
            Question_Object={this.state.questionObject}
            q_num={this.state.questionNumber}
            answeringHandler={this.answeringHandler}
            nextUnansweredQuestion={this.state.nextUnansweredQuestion}
            soundOn={this.props.soundOn}
          />
        ) : (
            <SummaryContainer
              sumData={this.state.summaryArray}
              resetHandler={this.resetGameHandler}
            />
          )}
      </AdvanceContext.Provider>
    );
  }
}
export default LearningContainer;
