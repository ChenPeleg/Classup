/* one question */
import React from 'react';
import styles from './Answer.module.scss';
import Mark from '../Mark/Mark';
import { ResultType } from '../../types/questions';

interface AnswerProps {
  content: string;
  num: number;
  isChosen: boolean;
  chooseAnswerHandler: (event: React.MouseEvent, num: number) => void;
  markedAnswer?: ResultType;
}

const answer = (props: AnswerProps) => {
  return (
    <div
      className={`${styles.answer} ${props.isChosen ? styles.choosenAnswer : ''}`}
      onClick={(event) => {
        props.chooseAnswerHandler(event, +props.num);
      }}
    >
      {props.content}
      {props.isChosen && props.markedAnswer ? <Mark markedAnswer={props.markedAnswer} /> : null}
    </div>
  );
};
export default answer;
