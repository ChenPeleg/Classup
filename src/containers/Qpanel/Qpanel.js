import React, { Component } from "react";
import Question from "../../components/Question/Question";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
// import
class Qpanel extends Component {
  answerHandler = (event, num) => {
    const oldNumber = this.state.question_number;
    //
    const rightAns = allquestions.questions[oldNumber].solution;
    console.log(num, event, rightAns);
    if (num === +allquestions.questions[oldNumber].solution) {
      alert("correct");
      this.setState({ ...this.state, question_number: oldNumber + 1 });
    } else {
      alert("false");
    }
  };
  num = 1;
  state = {
    question_number: 1,
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
          />
        )}
      </AdvanceContext.Consumer>
    );
  }
}
export default Qpanel;
