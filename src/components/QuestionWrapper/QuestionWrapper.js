import React from "react";
import styles from "./QuestionWrapper.module.scss";
const QuestionWrapper = (props) => (
  <div className={styles.questionWrapper}>
    <div className={styles.questionScroller}> {props.children}</div>
  </div>
);
export default QuestionWrapper;
