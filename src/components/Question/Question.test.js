import React from "react";
import { shallow } from "enzyme";
import Question from "./Question";
import Answer from "./Answer/Answer";
it("renders Question without crashing", () => {
  const question = shallow(
    <Question
      q_num={1}
      q_ask={"current_question_ask"}
      q_Ans_obj={["a", "b", "v"]}
      answerHandler={() => {}}
      submitHandler={() => {}}
      chosenAnswer={1}
      marked_Answer={true}
    />
  );
});

it("render answers inside a question", () => {
  const question = shallow(
    <Question
      q_num={1}
      q_ask={"current_question_ask"}
      q_Ans_obj={["a", "b", "v"]}
      answerHandler={() => {}}
      submitHandler={() => {}}
      chosenAnswer={1}
      marked_Answer={true}
    />
  );
  expect(question.find(Answer));
});
