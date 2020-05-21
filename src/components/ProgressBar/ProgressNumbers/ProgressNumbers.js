import React, { Component } from "react";
import "./ProgressNumbers.scss";
import ProgressNumber from "./ProgressNumber/ProgressNumber";

class progressNumbers extends Component {
  render() {
    const { q_number, q_total, q_next, info_questions } = this.props.q_counter;

    let q_prog_array = [];

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = q_next > i ? true : false;
      const isCurrent = i === q_number ? true : false;
      const isNext = i === q_next ? true : false;
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
        curren_q_number={q_number}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
        viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
        next_unanswered_q={this.props.next_unanswered_q}
      />
    ));
  }
}

export default progressNumbers;
