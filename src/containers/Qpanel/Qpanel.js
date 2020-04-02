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
    alert("submit");
    const num = this.state.chosenAnswer;
    console.log(num);
    return;
    // const oldNumber = this.state.question_number;
    // //
    // const rightAns = allquestions.questions[oldNumber].solution;
    // if (num === +allquestions.questions[oldNumber].solution) {
    //   alert("correct");
    //   this.setState({ ...this.state, question_number: oldNumber + 1 });
    // } else {
    //   alert("false");
    // }
  };
  num = 1;
  state = {
    question_number: 1,
    chosenAnswer: false,
    current_question: allquestions.questions[this.num]
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
          />
        )}
      </AdvanceContext.Consumer>
    );
  }
}
export default Qpanel;
