import React, { Component } from "react";
import "./ProgressStick.scss";
import ProgressNumber from "../ProgressNumber/ProgressNumber";

class progressStick extends Component {
  render() {
    const { q_current, q_total } = this.props.q_counter;
    let q_prog_array = [];

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = q_current > i ? true : false;
      if (i === q_current) {
      }
      q_prog_array.push({ txt: txt, wasAnswered: wasAnswered });
    }

    return q_prog_array.map((q) => (
      <ProgressNumber
        key={q.txt + "progKey"}
        className={`prog_q_icon ${q.wasAnswered ? "answered" : "unanswered"}`}
        text={q.txt}
        current={q_current}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
      />
    ));
  }
}

export default progressStick;
