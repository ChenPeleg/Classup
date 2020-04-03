import React, { Component } from "react";
import Question from "../../components/Question/Question";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
// import
class Qpanel extends Component {
  answerHandler = (event, num) => {
    this.setState({ ...this.state, chosenAnswer: num });
  };
  submitHandler = event => {
    const num = this.state.chosenAnswer;
    const oldNumber = this.state.question_number;
    // const rightAns = allquestions.questions[oldNumber].solution;
    if (num === +allquestions.questions[oldNumber].solution) {
      // this.setState({ ...this.state, question_number: oldNumber + 1 });
      this.setState({ ...this.state, marked_Answer: "RIGHT" });
    } else {
      this.setState({ ...this.state, marked_Answer: "WRONG" });
    }
  };
  num = 1;
  state = {
    question_number: 1,
    chosenAnswer: false,
    current_question: allquestions.questions[this.num],
    marked_Answer: false // WRONG, RIGHT
  };
  render() {
    return (
      <AdvanceContext.Consumer>
        {context => (
          <Question
            // q_obj={this.state.current_question}
            q_num={this.state.question_number}
            q_obj={allquestions.questions[this.state.question_number]}
            answerHandler={this.answerHandler}
            submitHandler={this.submitHandler}
            chosenAnswer={this.state.chosenAnswer}
            marked_Answer={this.state.marked_Answer}
          />
        )}
      </AdvanceContext.Consumer>
    );
  }
}
export default Qpanel;
