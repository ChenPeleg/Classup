/* one question */
import React from "react";
import "./Answer.css";
import Mark from "./Mark";

const answer = props => {
  console.log(props.num, props.isChosen);
  return (
    <p
      className={`answer ${props.isChosen ? "choosenAnswer" : ""}`}
      onClick={event => props.answerHandler(event, +props.num)}
    >
      {props.content}
      <Mark />
    </p>
  );
};
export default answer;
