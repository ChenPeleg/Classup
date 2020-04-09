import React, { Component } from "react";
import "./ProgressStick.scss";
import ProgressNumber from "../ProgressNumber/ProgressNumber";

class progressStick extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !equals(nextProps, this.props); // equals() is your implementation
  // }
  render() {
    const { q_current, q_total } = this.props.q_counter;
    let q_prog_array = [];
    let isCurrent = false;

    for (let i = 1; i <= q_total; i++) {
      const txt = i;
      const wasAnswered = q_current > i ? true : false;
      isCurrent = i === q_current ? true : false;
      console.log(i, q_current, q_total);
      q_prog_array.push({
        txt: txt,
        wasAnswered: wasAnswered,
        isCurrent: isCurrent,
      });
    }

    return q_prog_array.map((q) => (
      <ProgressNumber
        key={q.txt + "progKey"}
        className={`prog_q_icon ${q.wasAnswered ? "answered" : "unanswered"} ${
          q.isCurrent ? "current_Q_num" : ""
        }`}
        text={q.txt}
        current={q_current}
        number={q_prog_array.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
      />
    ));
  }
}

export default progressStick;
