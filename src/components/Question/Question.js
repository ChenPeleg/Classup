/* one question */
import React from "react";
import Answer from "./Answer/Answer";
import "./question.css";

const question = props => {
  return (
    <div>
      <div>
        {props.q_num}. {props.q_ask}
      </div>
      <div className="question-options" onClick={props.click}>
        {props.q_Ans_obj.map(a => {
          const key = "Q" + props.q_num + a.number;

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
