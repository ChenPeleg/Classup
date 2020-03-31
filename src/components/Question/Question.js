/* one question */
import React from "react";
import Answer from "./Answer";
import "./question.css";

const question = props => {
  return (
    <div className="question" onClick={props.click}>
      <Answer content="Red " />
      <Answer content="Orange" />
      <Answer content="Blue" />
      <Answer content="Pink" />
    </div>
  );
};
export default question;
