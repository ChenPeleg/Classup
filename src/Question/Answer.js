/* one question */
import React from "react";

const answer = props => {
  return (
    <p>
      i'm answer "{props.content}" number {Math.floor(Math.random() * 30)}
    </p>
  );
};
export default answer;
