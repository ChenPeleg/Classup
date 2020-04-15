import React from "react";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";
import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SummaryText from "../../components/SummaryText/SummaryText";
import SummaryTable from "../../components/SummaryTable/SummaryTable";

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
  let numOfquestions = 0;
  let mistakesObject = { q0: 0, q1: 0, q23: 0 };
  for (let i = 0; i < sumArray.length; i++) {
    const wrongs = sumArray[i].filter((e) => e === "WRONG").length;
    const rights = sumArray[i].filter((e) => e === "RIGHT").length;
    let mistakeCound = wrongs < 2 ? "q" + wrongs : "q23";
    mistakesObject[mistakeCound] += 1;
    numOfquestions += rights;
  }

  return { mistakesObject, numOfquestions };
};
const SummaryContainer = (props) => {
  return (
    <QuestionWrapper>
      {" "}
      <QuestionText>
        <SummaryText>
          <SummaryTable summaryObject={summaryObject(test1)} />
        </SummaryText>
      </QuestionText>
      <SubmitButton>Start Again</SubmitButton>
    </QuestionWrapper>
  );
};
export default SummaryContainer;
