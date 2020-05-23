import React, { useState, useEffect } from "react";
import Answer from "../../components/Answer/Answer";
import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import CorrectMedia from "../../assets/media/Correct.mp3";
import WrongMedia from "../../assets/media/Wrong.mp3";
import util from "../../Utility/Utility"
const TIME_AFTER_ANSWER = 2000;

const correctSound = new Audio(CorrectMedia);
const Wrongsound = new Audio(WrongMedia);
const Question = (props) => {
  const [chosenAnswer, setChosenAnswer] = useState(false);
  const [markInAnswer, setMarkInAnswer] = useState(false);
  const [answersArray, setanswersArray] = useState(
    util.createAnswerObject(props.Question_Object.answers)
  );
  useEffect(() => {
    setanswersArray(util.createAnswerObject(props.Question_Object.answers));
    if (props.next_unanswered_q > props.q_num) {
      setChosenAnswer(+props.Question_Object.solution);
      setMarkInAnswer("RIGHT");
    } else {
      setChosenAnswer(false);
      setMarkInAnswer(false);
    }
  }, [props.Question_Object, props.q_num, props.next_unanswered_q]);

  const wasAnswered = props.q_num < props.next_unanswered_q;
  const isInfo = props.Question_Object.type === "info";

  const setAnswerHandler = (event, num) => {
    if (wasAnswered || markInAnswer) return;
    setChosenAnswer(num);
  };
  const submitHandler = (event) => {
    const isCorrect = chosenAnswer === +props.Question_Object.solution;
    const resetQuestionState = () => {
      setMarkInAnswer(false);
      setChosenAnswer(false);
    };
    if (wasAnswered && !isInfo) {
      return;
    } else if (isInfo) {
      props.answeringHandler("INFO");
      return;
    } else if (isCorrect) {
      if (props.soundOn) correctSound.play();
      setMarkInAnswer("RIGHT");
      setTimeout(
        () => {
          props.answeringHandler("RIGHT");
          resetQuestionState();
        },
        false ? 2 : TIME_AFTER_ANSWER
      );
    } else {
      if (props.soundOn) Wrongsound.play();
      setMarkInAnswer("WRONG");
      props.answeringHandler("WRONG");
      setTimeout(() => {
        setanswersArray(util.reorderAnswers(answersArray));
        resetQuestionState();
      }, TIME_AFTER_ANSWER);
    }
  };
  return (
    <QuestionWrapper>
      <QuestionText>
        {props.q_num}. {props.Question_Object.text}
      </QuestionText>
      {answersArray.map((a) => (
        <Answer
          content={a.content}
          key={"Q" + props.q_num + a.number}
          num={a.number}
          isChosen={chosenAnswer === a.number ? true : false}
          chooseAnswerHandler={setAnswerHandler}
          markedAnswer={markInAnswer}
        />
      ))}
      <br></br>
      <SubmitButton
        disableButton={
          (!(chosenAnswer && !markInAnswer) || markInAnswer) && !isInfo
        }
        submitHandler={submitHandler}
      >
        {isInfo ? "Continue" : "Submit"}
      </SubmitButton>
    </QuestionWrapper>
  );
};
export default Question;
