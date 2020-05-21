import React, { Component } from "react";
import "./ProgressNumbers.scss";
import ProgressNumber from "./ProgressNumber/ProgressNumber";

class progressNumbers extends Component {
  render() {
    const { questionNumber, q_total, questionNext, info_questions } = this.props.questionCounter;

    let q_prog_array = [];

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = questionNext > i ? true : false;
      const isCurrent = i === questionNumber ? true : false;
      const isNext = i === questionNext ? true : false;
      const isInfo = info_questions.includes(i);
      q_prog_array.push({
        txt: txt,
        wasAnswered: wasAnswered,
        isCurrent: isCurrent,
        isNext: isNext,
        isInfo: isInfo,
      });
    }

    return q_prog_array.map((q) => (
      <ProgressNumber
        key={q.txt + "progKey"}
        className={`prog_q_icon ${q.wasAnswered ? "answered" : "unanswered"} ${
          q.isCurrent ? "current_Q_num" : ""
          } ${q.isNext ? "next_ questionNum" : ""} ${q.isInfo ? " infoNumber" : ""}`}
        text={q.txt}
        curren_ questionNumber={questionNumber}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
        viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
        nextUnansweredQuestion={this.props.nextUnansweredQuestion}
      />
    ));
  }
}

export default progressNumbers;
