/* one question */
import React from "react";
import Answer from "./Answer/Answer";
import "./question.css";

const question = props => {
  const ask = props.q_obj.ask;
  const answers = props.q_obj.answers;

  return (
    <div>
      <p>
        {ask} {props.chosenAnswer}
      </p>
      <div className="question" onClick={props.click}>
        {answers.map(a => {
          const key = "Q" + props.question_number + (1 + answers.indexOf(a));

          return (
            <Answer
              content={a}
              key={key}
              num={answers.indexOf(a) + 1}
              answerHandler={props.answerHandler}
              isChosen={
                props.chosenAnswer === answers.indexOf(a) + 1 ? true : false
              }
            />
          );
        })}

        <button
          className={`submitButton ${
            props.chosenAnswer ? "" : "submitDisabled"
          }`}
          onClick={props.submitHandler}
          disabled={props.chosenAnswer ? true : false}
        >
          submit
        </button>
      </div>
    </div>
  );
};
export default question;
