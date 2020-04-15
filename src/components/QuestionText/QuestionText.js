import React from "react";
import styles from "./QuestionText.module.scss";
const QuestionText = (props) => {
  return (
    <>
      <div className={styles.centeringDiv}>
        <pre className={styles.questionText}> {props.children}</pre>
      </div>
    </>
  );
};
export default QuestionText;
