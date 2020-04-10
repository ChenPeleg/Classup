import React, { Component } from "react";
import "./ProgressNumbers.scss";
import ProgressNumber from "./ProgressNumber/ProgressNumber";

class progressNumbers extends Component {
  render() {
    const { q_current, q_total, q_next } = this.props.q_counter;

    let q_prog_array = [];

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = q_next > i ? true : false;
      const isCurrent = i === q_current ? true : false;
      const isNext = i === q_next ? true : false;
      q_prog_array.push({
        txt: txt,
        wasAnswered: wasAnswered,
        isCurrent: isCurrent,
        isNext: isNext,
      });
    }

    return q_prog_array.map((q) => (
      <ProgressNumber
        key={q.txt + "progKey"}
        className={`prog_q_icon ${q.wasAnswered ? "answered" : "unanswered"} ${
          q.isCurrent ? "current_Q_num" : ""
        } ${q.isNext ? "next_q_num" : ""}`}
        text={q.txt}
        current={q_current}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
        viewHandler={this.props.viewHandler}
        next_unanswered_q={this.props.next_unanswered_q}
      />
    ));
  }
}

export default progressNumbers;
