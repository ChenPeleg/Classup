import React from "react";
import styles from "./QuestionWrapper.module.scss";
const QuestionWrapper = (props) => (
  <div className={styles.questionWrapper}>
    <div className={styles.questionOptions}> {props.children}</div>
  </div>
);
export default QuestionWrapper;
