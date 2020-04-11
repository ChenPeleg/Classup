import React from "react";
import { shallow } from "enzyme";
import LearningContainer from "./LearningContainer";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Question from "../../components/Question/Question";
const mockedQuestionObject = {
  meta: {
    name: "English Colors",
  },
  "1": {
    text: "What is the color of the sand?",
    answers: ["blue", "black", "green", "yellow"],
    solution: "4",
  },
  "2": {
    text: "What is the color of the sand?",
    answers: ["blue", "black", "green", "yellow"],
    solution: "4",
  },
};

describe("<LearningContainer>", () => {
  it("renders without crashing", () => {
    shallow(<LearningContainer />);
  });
  it("renders progress bar", () => {
    const wrapper = shallow(
      <LearningContainer AllQuestions={mockedQuestionObject} />
    );
    expect(wrapper.find(ProgressBar));
  });
  it("renders a question", () => {
    const wrapper = shallow(
      <LearningContainer AllQuestions={mockedQuestionObject} />
    );
    expect(wrapper.find(Question));
  });
});
