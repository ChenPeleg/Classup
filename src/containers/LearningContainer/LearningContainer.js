import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

// import
class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;

  nextQuestionHandler = (event, TEST_MODE = false) => {
    if (
      this.state.question_number < this.state.next_unanswered_q &&
      this.state.question_Object.type !== "info"
    )
      return;
    const new_q_number = this.state.question_number + 1;
    this.setState({
      ...this.state,
      question_number: new_q_number,
      question_Object: allquestions.questions[new_q_number],
      next_unanswered_q: new_q_number,
    });
  };
  viewAnotherQuestionHandler = (event, number) => {
    if (this.state.next_unanswered_q < +number + 1) {
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
        this.nextQuestionHandler(event, true);
      }
      // do something
    });
  }
  num = 1;
  state = {
    question_number: this.num,
    chosenAnswer: false,
    question_Object: allquestions.questions[this.num],
    marked_Answer: false, // WRONG, RIGHT
    next_unanswered_q: this.num,
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
          total_q: Object.keys(allquestions.questions).length,
          q_next: this.state.next_unanswered_q,
          info_questions: this.info_Array,
        }}
      >
        <ProgressBar
          viewAnotherQuestionHandler={this.viewAnotherQuestionHandler}
        />
        <QuestionContainer
          Question_Object={this.state.question_Object}
          q_num={this.state.question_number}
          nextQuestionHandler={this.nextQuestionHandler}
          next_unanswered_q={this.state.next_unanswered_q}
        />
      </AdvanceContext.Provider>
    );
  }
}
export default LearningContainer;
