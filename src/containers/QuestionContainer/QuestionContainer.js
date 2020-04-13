import React, { useState, useEffect } from "react";
import Answer from "../../components/Answer/Answer";

import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
const TIME_AFTER_ANSWER = 2000;
const TEST_MODE = true;

const createAnswerObject = (answers) =>
  answers.map((a) => {
    return { content: a, number: 1 + answers.indexOf(a) };
  });

const Question = (props) => {
  const [chosenAnswer, setChosenAnswer] = useState(false);
  const [markInAnswer, setMarkInAnswer] = useState(false);
  const [answersObject, setAnswersObject] = useState(
    createAnswerObject(props.Question_Object.answers)
  );
  useEffect(() => {
    setAnswersObject(createAnswerObject(props.Question_Object.answers));

    if (props.next_unanswered_q > props.q_num) {
      setChosenAnswer(+props.Question_Object.solution);
      setMarkInAnswer("RIGHT");
    } else {
      setChosenAnswer(false);
      setMarkInAnswer(false);
    }
  }, [props.Question_Object]);

  const wasAnswered = props.q_num < props.next_unanswered_q;
  const isInfo = props.Question_Object.type === "info";

  const setAnswerHandler = (event, num) => {
    if (wasAnswered) return;
    setChosenAnswer(num);
  };
  const submitHandler = (event) => {
    const questionNumber = props.q_num;
    const isCorrect = chosenAnswer === +props.Question_Object.solution;
    if (wasAnswered && !isInfo) {
      return;
    } else if (isInfo) {
      props.nextQuestionHandler();
      return;
    } else if (isCorrect) {
      setMarkInAnswer("RIGHT");
      setTimeout(
        () => {
          props.nextQuestionHandler();
          setMarkInAnswer(false);
          setChosenAnswer(false);
        },
        false ? 2 : TIME_AFTER_ANSWER
      );
    } else {
      setMarkInAnswer("WRONG");
      setTimeout(() => {
        setAnswersObject(answersObject.sort(() => Math.random() - 0.5));
        setChosenAnswer(false);
        setMarkInAnswer(false);
      }, TIME_AFTER_ANSWER);
    }
  };
  return (
    <QuestionWrapper>
      <QuestionText q_num={props.q_num} q_text={props.Question_Object.text} />
      {answersObject.map((a) => {
        const key = "Q" + props.q_num + a.number;
        return (
          <Answer
            content={a.content}
            key={key}
            num={a.number}
            isChosen={chosenAnswer === a.number ? true : false}
            chooseAnswerHandler={setAnswerHandler}
            marked_Answer={markInAnswer}
          />
        );
      })}
      <SubmitButton
        disableButton={!(chosenAnswer || isInfo || markInAnswer)}
        submitHandler={submitHandler}
      >
        {isInfo ? "Continue" : "Submit"}
      </SubmitButton>
    </QuestionWrapper>
  );
};
export default Question;
