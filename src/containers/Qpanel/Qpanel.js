import React, { Component } from "react";
import Question from "../../components/Question/Question";
import allquestions from "./allquestions";
import AdvanceContext from "../../context/advance-context";
// import
class Qpanel extends Component {
  answerHandler = (event, key) => {
    const oldNumber = this.state.question_number;
    this.setState({ ...this.state, question_number: oldNumber + 1 });
    const rightAns = allquestions.questions[oldNumber].solution;
    console.log(key, event, rightAns);
    // if ()

    // alert("clicked " + oldNumber);
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
            passClick={this.answerHandler}
          />
        )}
      </AdvanceContext.Consumer>
    );
  }
}
export default Qpanel;
