/* one question */
import React from "react";

const answer = props => {
  return (
    <p className="answer" onClick={props.onClick}>
      {props.content}
    </p>
  );
};
export default answer;
