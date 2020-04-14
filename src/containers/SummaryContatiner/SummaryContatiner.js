import React from "react";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const SummaryContainer = (props) => {
  return (
    <QuestionWrapper>
      {" "}
      <QuestionText>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "Bold" }}> Very Good! </span>
          <br></br>
          <br></br> You've answered all the questions and completed this lesson.
        </div>
      </QuestionText>
      <SubmitButton>Start Again</SubmitButton>
    </QuestionWrapper>
  );
};
export default SummaryContainer;
