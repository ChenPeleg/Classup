import React from "react";
import styles from "./SubjectHeader.module.scss";
const subjectHeader = (props) => (
  <p className={styles.subjectHeader}>{props.text}</p>
);

export default subjectHeader;
