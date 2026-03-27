import React, { useState, useEffect } from 'react';
import Answer from '../../components/Answer/Answer';
import QuestionText from '../../components/QuestionText/QuestionText';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import QuestionWrapper from '../../components/QuestionWrapper/QuestionWrapper';
import CorrectMedia from '../../assets/media/Correct.mp3';
import WrongMedia from '../../assets/media/Wrong.mp3';
import util from '../../Utility/Utility';
import { AnswerObject, QuestionData, ResultType } from '../../types/questions';

const timeAfterAnswer = 2000;

const correctSound = new Audio(CorrectMedia);
const Wrongsound = new Audio(WrongMedia);

interface QuestionContainerProps {
  QuestionObject: QuestionData;
  qNumber: number;
  answeringHandler: (action: ResultType | 'INFO') => void;
  nextUnansweredQ: number;
  soundOn: boolean;
}

const Question = (props: QuestionContainerProps) => {
  const [chosenAnswer, setChosenAnswer] = useState<number | false>(false);
  const [markInAnswer, setMarkInAnswer] = useState<ResultType | false>(false);
  const [answersArray, setanswersArray] = useState<AnswerObject[]>(
    util.createAnswerObject(props.QuestionObject.answers)
  );
  useEffect(() => {
    setanswersArray(util.createAnswerObject(props.QuestionObject.answers));
    if (props.nextUnansweredQ > props.qNumber) {
      setChosenAnswer(+props.QuestionObject.solution);
      setMarkInAnswer('RIGHT');
    } else {
      setChosenAnswer(false);
      setMarkInAnswer(false);
    }
  }, [props.QuestionObject, props.qNumber, props.nextUnansweredQ]);

  const wasAnswered = props.qNumber < props.nextUnansweredQ;
  const isInfo = props.QuestionObject.type === 'info';

  const setAnswerHandler = (_event: React.MouseEvent, num: number) => {
    if (wasAnswered || markInAnswer) return;
    setChosenAnswer(num);
  };

  const submitHandler = () => {
    const isCorrect = chosenAnswer === +props.QuestionObject.solution;
    const resetQuestionState = () => {
      setMarkInAnswer(false);
      setChosenAnswer(false);
    };
    if (wasAnswered && !isInfo) {
      return;
    } else if (isInfo) {
      props.answeringHandler('INFO');
      return;
    } else if (isCorrect) {
      if (props.soundOn) correctSound.play();
      setMarkInAnswer('RIGHT');
      setTimeout(
        () => {
          props.answeringHandler('RIGHT');
          resetQuestionState();
        },
        false ? 2 : timeAfterAnswer
      );
    } else {
      if (props.soundOn) Wrongsound.play();
      setMarkInAnswer('WRONG');
      props.answeringHandler('WRONG');
      setTimeout(() => {
        setanswersArray(util.reorderAnswers(answersArray));
        resetQuestionState();
      }, timeAfterAnswer);
    }
  };

  return (
    <QuestionWrapper>
      <QuestionText>
        {props.qNumber}. {props.QuestionObject.text}
      </QuestionText>
      {answersArray.map((a) => (
        <Answer
          content={a.content}
          key={'Q' + props.qNumber + a.number}
          num={a.number}
          isChosen={chosenAnswer === a.number ? true : false}
          chooseAnswerHandler={setAnswerHandler}
          markedAnswer={markInAnswer || undefined}
        />
      ))}
      <br></br>
      <SubmitButton
        disableButton={(!(chosenAnswer && !markInAnswer) || !!markInAnswer) && !isInfo}
        submitHandler={submitHandler}
      >
        {isInfo ? 'Continue' : 'Submit'}
      </SubmitButton>
    </QuestionWrapper>
  );
};
export default Question;
