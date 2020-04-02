/* one question */
import React from "react";

const answer = props => {
  return (
    <p
      className="answer"
      onClick={event => props.answerHandler(event, +props.num + 1)}
    >
      {props.content}
    </p>
  );
};
export default answer;
