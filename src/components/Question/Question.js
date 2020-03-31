/* one question */
import React from "react";
import Answer from "./Answer";
import "./question.css";

const question = props => {
  const ask = props.q_obj.ask;
  const answers = props.q_obj.answers;

  return (
    <div className="question" onClick={props.click}>
      {answers.map(a => {
        const key = "Q" + props.question_number + (1 + answers.indexOf(a));
        return <Answer content={a} key={key} />;
      })}
    </div>
  );
};
export default question;
