import React from 'react';
import styles from './QuestionText.module.scss';

interface QuestionTextProps {
  children: React.ReactNode;
}

const QuestionText = (props: QuestionTextProps) => {
  return (
    <>
      <div className={styles.centeringDiv}>
        <pre className={styles.questionText}> {props.children}</pre>
      </div>
    </>
  );
};
export default QuestionText;
