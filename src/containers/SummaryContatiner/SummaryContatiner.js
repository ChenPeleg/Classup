import React from "react";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
const test1 = [
  [],
  ["INFO"],
  ["WRONG", "RIGHT"],
  ["RIGHT"],
  ["WRONG", "WRONG", "WRONG", "RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["WRONG", "WRONG", "RIGHT"],
  ["WRONG", "RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["WRONG", "RIGHT"],
];
const summaryObject = (sumArray) => {
  const MAX_MISTAKES = 4;
  let numOfquestions = 0;
  let mistakesObject = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  for (let i = 0; i < sumArray.length; i++) {
    const wrongs = sumArray[i].filter((e) => e === "WRONG").length;
    const rights = sumArray[i].filter((e) => e === "RIGHT").length;
    let mistakeCound = wrongs < MAX_MISTAKES ? wrongs : MAX_MISTAKES;
    mistakesObject[mistakeCound] += 1;
    numOfquestions += rights;
  }

  return { mistakesObject, numOfquestions, MAX_MISTAKES };
};
const SummaryContainer = (props) => {
  return (
    <QuestionWrapper>
      {" "}
      <QuestionText>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontWeight: "Bold" }}> Very Good! </span>
          <br></br>
          <br></br> You've answered all the questions and completed this lesson.
          <br></br>
          {JSON.stringify(summaryObject(test1))}
        </div>
      </QuestionText>
      <SubmitButton>Start Again</SubmitButton>
    </QuestionWrapper>
  );
};
export default SummaryContainer;
