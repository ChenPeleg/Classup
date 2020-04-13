import React, { Component } from "react";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

// import
class LearningContainer extends Component {
  TIME_AFTER_ANSWER = 1500;

  nextQuestionHandler = (event, TEST_MODE = false) => {
    const new_q_number = this.state.question_number + 1;
    this.setState({
      ...this.state,
      question_number: new_q_number,
      question_Object: allquestions.questions[new_q_number],
      next_unanswered_q: new_q_number,
    });
    // const num = this.state.chosenAnswer;
    // const oldNumber = this.state.question_number;
    // if (
    //   this.state.next_unanswered_q > oldNumber &&
    //   this.state.question_Object.type !== "info"
    // ) {
    //   return;
    // }
    // if (this.state.question_Object.type === "info") {
    //   if (this.state.question_number !== this.state.next_unanswered_q) {
    //     this.viewHandler(true, this.state.question_number);
    //     return;
    //   }
    //   const new_q_number = this.state.question_number + 1;
    //   this.setState({
    //     ...this.state,
    //     marked_Answer: false,
    //     chosenAnswer: false,
    //     question_number: new_q_number,
    //     next_unanswered_q: new_q_number,
    //     question_Object: allquestions.questions[new_q_number],
    //   });
    // } else if (
    //   num === +allquestions.questions[oldNumber].solution ||
    //   TEST_MODE
    // ) {
    //   this.setState({ ...this.state, marked_Answer: "RIGHT" });
    //   const new_q_number = this.state.question_number + 1;
    //   setTimeout(
    //     () => {
    //       this.setState({
    //         ...this.state,
    //         marked_Answer: false,
    //         chosenAnswer: false,
    //         question_number: new_q_number,
    //         next_unanswered_q: new_q_number,
    //         question_Object: allquestions.questions[new_q_number],
    //       });
    //     },
    //     TEST_MODE ? 2 : this.TIME_AFTER_ANSWER
    //   );
    // } else {
    //   this.setState({ ...this.state, marked_Answer: "WRONG" });
    //   setTimeout(() => {
    //     // const new_ans_array = [...this.state.current_answer_obj].sort(
    //     //   () => Math.random() - 0.5
    //     // );
    //     this.setState({
    //       ...this.state,
    //       marked_Answer: false,
    //       // current_answer_obj: new_ans_array,
    //       chosenAnswer: false,
    //     });
    //   }, this.TIME_AFTER_ANSWER);
    // }
  };
  viewHandler = (event, number) => {
    let returnToLast = false;
    if (this.state.next_unanswered_q < +number + 1) {
      return;
    } else if (this.state.next_unanswered_q === +number + 1) {
      returnToLast = true;
    }

    const question_to_view = +number + 1;

    this.setState({
      ...this.state,
      marked_Answer: returnToLast ? false : "RIGHT",
      chosenAnswer: returnToLast
        ? false
        : +allquestions.questions[question_to_view].solution,
      question_number: question_to_view,
      question_Object: allquestions.questions[question_to_view],
      current_answer_obj: this.createAnswerObject(
        allquestions.questions[question_to_view].answers
      ),
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
        <ProgressBar viewHandler={this.viewHandler} />
        <QuestionContainer
          Question_Object={this.state.question_Object}
          q_num={this.state.question_number}
          answerHandler={this.answerHandler}
          nextQuestionHandler={this.nextQuestionHandler}
          // chosenAnswer={this.state.chosenAnswer}
          // marked_Answer={this.state.marked_Answer}
          next_unanswered_q={this.state.next_unanswered_q}
        />
      </AdvanceContext.Provider>
    );
  }
}
export default LearningContainer;
