import React from "react";
import styles from "./QuestionText.module.scss";
const QuestionText = (props) => {
  return (
    <>
      <br></br>
      <div className={styles.centeringDiv}>
        <pre className={styles.questionText}> {props.children}</pre>
      </div>
      <br></br>
    </>
  );
};
export default QuestionText;
