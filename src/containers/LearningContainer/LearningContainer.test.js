import React from "react";
import { render, act } from "@testing-library/react";
import LearningContainer from "./LearningContainer";

const mockedQuestionObject = {
  meta: {
    name: "English Colors",
  },
  questions: {
    "1": {
      text: "What is the color of the sand?",
      answers: ["blue", "black", "green", "yellow"],
      solution: "4",
    },
    "2": {
      text: "What is the color of the sky?",
      answers: ["blue", "black", "green", "yellow"],
      solution: "1",
    },
  },
};

describe("<LearningContainer>", () => {
  it("renders correctly", () => {
    const { container } = render(<LearningContainer AllQuestions={mockedQuestionObject} />);
    expect(container.firstChild).toBeTruthy();
  });
});
