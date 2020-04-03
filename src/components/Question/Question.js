/* one question */
import React from "react";
import Answer from "./Answer/Answer";
import "./question.css";

const question = props => {
  const ask = props.q_obj.ask;
  const answers = props.q_obj.answers;
  const arrayOfAnswers = answers =>
    answers.map(a => {
      return { content: a, number: 1 + answers.indexOf(a) };
    });

  return (
    <div>
      <div>
        {ask} {props.chosenAnswer}
      </div>
      <div className="question-options" onClick={props.click}>
        {arrayOfAnswers(answers).map(a => {
          const key = "Q" + props.question_number + a.number;

          return (
            <Answer
              content={a.content}
              key={key}
              num={a.number}
              answerHandler={props.answerHandler}
              isChosen={props.chosenAnswer === a.number ? true : false}
              marked_Answer={props.marked_Answer}
            />
          );
        })}

        <button
          className={`submitButton ${
            props.chosenAnswer ? "" : "submitDisabled"
          }`}
          onClick={props.submitHandler}
          disabled={props.chosenAnswer ? false : true}
        >
          submit
        </button>
      </div>
    </div>
  );
};
export default question;
