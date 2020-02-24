/* one question */
import React from "react";
import Answer from "./Answer";
import "./question.css";

const question = props => {
  return (
    <div className="question">
      <Answer content="ans1" />
      <Answer content="ans2" />
      <Answer content="ans3" />
      <Answer content="ans4" />
    </div>
  );
};
export default question;
