import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SummaryContainer from "../SummaryContatiner/SummaryContatiner";

// import

const updateSummaryArray = (sumArray = [], q_number, result = "RIGHT") => {
  let array = [...sumArray];

  array[q_number].push(result);
  return array;
};
class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;
  total_q = Object.keys(allquestions.questions).length;
  answeringHandler = (action) => {
    const newSummaryArray = updateSummaryArray(
      [...this.state.summaryArray],
      this.state.question_number,
      action
    );

    const new_q_number =
      this.state.question_number + (action === "WRONG" ? 0 : 1);
    this.setState({
      ...this.state,
      question_number: new_q_number,
      question_Object: allquestions.questions[new_q_number],
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
      question_Object: allquestions.questions[number + 1],
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 32) {
        this.answeringHandler("RIGHT");
      }
      // for Testing purpuses
    });
  }
  num = 1;
  state = {
    question_number: this.num,
    question_Object: allquestions.questions[this.num],
    next_unanswered_q: this.num,
    summaryArray: [...Array(this.total_q + 1)].map((e) => []),
  };
  info_Array = Object.keys(allquestions.questions)
    .filter((num) =>
      allquestions.questions[num].type === "info" ? Number(+num) : null
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
        {this.total_q >= this.state.question_number && false ? (
          <QuestionContainer
            Question_Object={this.state.question_Object}
            q_num={this.state.question_number}
            answeringHandler={this.answeringHandler}
            next_unanswered_q={this.state.next_unanswered_q}
          />
        ) : (
          <SummaryContainer />
        )}
      </AdvanceContext.Provider>
    );
  }
}
export default LearningContainer;
