/* one question */
import React from "react";
import Answer from "./Answer/Answer";
import styles from "./Question.module.scss";

const question = (props) => {
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.questionOptions} onClick={props.click}>
        <br></br>
        <div style={{ margin: "10px" }}>
          {props.q_num}. {props.q_ask}
        </div>
        <br></br>
        {props.q_Ans_obj.map((a) => {
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
          className={`${styles.submitButton} ${
            props.chosenAnswer ? "" : styles.submitDisabled
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
