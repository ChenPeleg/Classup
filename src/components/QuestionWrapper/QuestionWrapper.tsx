import React from 'react';
import styles from './QuestionWrapper.module.scss';

interface QuestionWrapperProps {
  children: React.ReactNode;
}

const QuestionWrapper = (props: QuestionWrapperProps) => (
  <div className={styles.questionWrapper}>
    <div className={styles.questionScroller}> {props.children}</div>
  </div>
);
export default QuestionWrapper;
