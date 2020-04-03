/* one question */
import React from "react";
import "./Answer.css";
import Mark from "./Mark";

const answer = props => {
  return (
    <div
      className={`answer ${props.isChosen ? "choosenAnswer" : ""}`}
      onClick={event => props.answerHandler(event, +props.num)}
    >
      {props.content}
      {props.isChosen && props.marked_Answer ? (
        <Mark marked_Answer={props.marked_Answer} />
      ) : null}
    </div>
  );
};
export default answer;
