import React from "react";
import { render } from "@testing-library/react";
import QuestionContainer from "./QuestionContainer";

const mockedQuestionObject = {
  text: "What is the color of the sand?",
  answers: ["blue", "black", "green", "yellow"],
  solution: "4",
};
const mockHandler = vi.fn();
const mockProps = {
  QuestionObject: mockedQuestionObject,
  qNumber: 1,
  answeringHandler: mockHandler,
  nextUnansweredQ: 1,
};

describe("<QuestionContainer>", () => {
  it("renders correctly", () => {
    const { container } = render(<QuestionContainer {...mockProps} />);
    expect(container.firstChild).toBeTruthy();
  });
});
