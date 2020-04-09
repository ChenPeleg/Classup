import React from "react";
import { shallow } from "enzyme";
import Question from "./Question";
it("renders Question without crashing", () => {
  shallow(
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
