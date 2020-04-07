import React from "react";
import "./ProgressStick.scss";

const progressStick = (props) => {
  const { q_current, q_total } = props.q_counter;
  let q_prog_array = [];
  for (let i = 1; i <= q_total; i++) {
    const txt = i;
    const wasAnswered = q_current > i ? true : false;
    q_prog_array.push({ txt: txt, wasAnswered: wasAnswered });
  }
  return q_prog_array.map((q) => (
    <div
      key={q.txt + "progKey"}
      className={`prog_q_icon ${q.wasAnswered ? "answered" : "unanswered"}`}
    >
      {q.txt}
    </div>
  ));
};

export default progressStick;
