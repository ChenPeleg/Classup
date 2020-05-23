import React, { Component } from "react";
import "./ProgressNumbers.scss";
import ProgressNumber from "./ProgressNumber/ProgressNumber";

class progressNumbers extends Component {
  render() {
    const { qNumber, q_total, qNext, info_questions } = this.props.q_counter;

    let q_prog_array = [];

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = qNext > i ? true : false;
      const isCurrent = i === qNumber ? true : false;
      const isNext = i === qNext ? true : false;
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
          } ${q.isNext ? "next_q_num" : ""} ${q.isInfo ? " infoNumber" : ""}`}
        text={q.txt}
        curren_qNumber={qNumber}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
        viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
        nextUnansweredQ={this.props.nextUnansweredQ}
      />
    ));
  }
}

export default progressNumbers;
