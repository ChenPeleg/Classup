import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SummaryContainer from "../SummaryContainer/SummaryContainer";
import Util from "../../Utility/Utility";

class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;
  total_q = Object.keys(this.props.AllQuestions.questions).length;
  answeringHandler = (action) => {
    const newSummaryArray = Util.updateSummaryArray(
      [...this.state.summaryArray],
      this.state.question_number,
      action
    );
    const new_q_number =
      this.state.question_number + (action === "WRONG" ? 0 : 1);
    this.setState({
      ...this.state,
      question_number: new_q_number,
      question_Object: this.props.AllQuestions.questions[new_q_number],
      next_unanswered_q:
        new_q_number > this.state.next_unanswered_q
          ? new_q_number
          : this.state.next_unanswered_q,
      summaryArray: newSummaryArray,
    });
  };
  viewAnotherQuestionHandler = (number) => {
    const questionWasntReached = this.state.next_unanswered_q < +number + 1;
    const isItSummary = this.total_q <= this.state.question_number;
    if (questionWasntReached || isItSummary) {
      return;
    }
    this.setState({
      ...this.state,
      question_number: number + 1,
      question_Object: this.props.AllQuestions.questions[number + 1],
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
      question_number: num,
      question_Object: this.props.AllQuestions.questions[1],
      next_unanswered_q: num,
      summaryArray: [...Array(this.total_q + 1)].map((e) => []),
    });
  };
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (this.state.next_unanswered_q > this.state.question_number) return;
      if (event.keyCode === 32) {
        this.total_q >= this.state.question_number
          ? this.answeringHandler("RIGHT")
          : this.resetGameHandler();
      }
      // for Testing purpuses
    });
  }
  state = {
    question_number: 1,
    question_Object: this.props.AllQuestions.questions[1],
    next_unanswered_q: 1,
    summaryArray: [...Array(this.total_q + 1)].map((e) => []),
    gameHistory: [],
  };
  info_Array = Object.keys(this.props.AllQuestions.questions)
    .filter((num) =>
      this.props.AllQuestions.questions[num].type === "info"
        ? Number(+num)
        : null
    )
    .map((e) => +e);

  render() {
    return (
      <AdvanceContext.Provider
        value={{
          q_number: this.state.question_number,
          total_q: this.total_q,
          q_next: this.state.next_unanswered_q,
          info_questions: this.info_Array,
        }}
      >
        <ProgressBar
          viewAnotherQuestionHandler={this.viewAnotherQuestionHandler}
        />
        {this.total_q >= this.state.question_number ? (
          <QuestionContainer
            Question_Object={this.state.question_Object}
            q_num={this.state.question_number}
            answeringHandler={this.answeringHandler}
            next_unanswered_q={this.state.next_unanswered_q}
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
