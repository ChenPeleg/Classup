/* one question */
import React from "react";

const answer = props => {
  console.log(props.num, props.isChosen);
  return (
    <p
      className={`answer ${props.isChosen ? "choosenAnswer" : ""}`}
      onClick={event => props.answerHandler(event, +props.num)}
    >
      {props.content}
    </p>
  );
};
export default answer;
