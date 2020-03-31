import React, { Component } from "react";
import Question from "../../components/Question/Question";
import allquestions from "./allquestions";
// import
class Qpanel extends Component {
  answerHandler = event => {
    alert("clicked");
  };
  num = 1;
  state = {
    question_number: "1",
    current_question: allquestions.questions[this.num]
  };
  render() {
    return (
      <Question
        q_obj={this.state.current_question}
        q_num={this.state.question_number}
        click={this.answerHandler}
      />
    );
  }
}
export default Qpanel;
