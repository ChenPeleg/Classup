import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SummaryContainer from "../SummaryContainer/SummaryContainer";
import Util from "../../Utility/Utility";

class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;
  totalQ = Object.keys(this.props.AllQuestions.questions).length;
  answeringHandler = (action) => {
    const newSummaryArray = Util.updateSummaryArray(
      [...this.state.summaryArray],
      this.state.question_number,
      action
    );
    const new_qNumber =
      this.state.question_number + (action === "WRONG" ? 0 : 1);
    this.setState({
      ...this.state,
      question_number: new_qNumber,
      question_Object: this.props.AllQuestions.questions[new_qNumber],
      nextUnansweredQ:
        new_qNumber > this.state.nextUnansweredQ
          ? new_qNumber
          : this.state.nextUnansweredQ,
      summaryArray: newSummaryArray,
    });
  };
  viewAnotherQuestionHandler = (number) => {
    const questionWasntReached = this.state.nextUnansweredQ < +number + 1;
    const isItSummary = this.totalQ <= this.state.question_number;
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
      nextUnansweredQ: num,
      summaryArray: [...Array(this.totalQ + 1)].map((el) => []),
    });
  };
  onKeyPressed(e) {
    e.preventDefault();
    if (this.state.nextUnansweredQ > this.state.question_number) return;
    if (e.keyCode === 32) {
      this.totalQ >= this.state.question_number
        ? this.answeringHandler("RIGHT")
        : this.resetGameHandler();
      // for Testing purpuses
    }
  }
  onKeyPressedFake(e) {

  }
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (this.state.nextUnansweredQ > this.state.question_number) return;
      if (event.keyCode === 32) {
        this.totalQ >= this.state.question_number
          ? this.answeringHandler("RIGHT")
          : this.resetGameHandler();
      }
      // for Testing purpuses
    });
  }
  state = {
    question_number: 1,
    question_Object: this.props.AllQuestions.questions[1],
    nextUnansweredQ: 1,
    summaryArray: [...Array(this.totalQ + 1)].map((e) => []),
    gameHistory: [],
  };
  info_Array = Object.keys(this.props.AllQuestions.questions)
    .filter((num) =>
      this.props.AllQuestions.questions[num].type === "info"
        ? Number(+num)
        : null
    )
    .map((el) => +el);

  render() {
    return (
      <div tabIndex="0" onKeyDown={(e) => this.onKeyPressedFake(e)} >

        <AdvanceContext.Provider
          value={{
            qNumber: this.state.question_number,
            totalQ: this.totalQ,
            qNext: this.state.nextUnansweredQ,
            info_questions: this.info_Array,
          }}
        >
          <ProgressBar
            viewAnotherQuestionHandler={this.viewAnotherQuestionHandler}
          />
          {this.totalQ >= this.state.question_number ? (
            <QuestionContainer
              Question_Object={this.state.question_Object}
              q_num={this.state.question_number}
              answeringHandler={this.answeringHandler}
              nextUnansweredQ={this.state.nextUnansweredQ}
              soundOn={this.props.soundOn}
            />
          ) : (
              <SummaryContainer
                sumData={this.state.summaryArray}
                resetHandler={this.resetGameHandler}
              />
            )}
        </AdvanceContext.Provider>
      </div>
    );
  }
}
export default LearningContainer;
