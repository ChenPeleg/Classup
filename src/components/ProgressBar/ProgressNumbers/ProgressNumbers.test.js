import React from "react";
import { render } from "@testing-library/react";
import ProgressNumbers from "./ProgressNumbers";

const totalQuestions = 7;
const mockQuestionCounter = {
  qNumber: 3,
  qTotal: totalQuestions,
  qNext: 4,
  infoQuestions: [2, 1],
};

describe("<ProgressNumbers>", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ProgressNumbers
        qusetionCounter={mockQuestionCounter}
        viewAnotherQuestionHandler={() => {}}
        lineWidthHandler={() => {}}
        nextUnansweredQ={4}
      />
    );
    expect(container).toBeTruthy();
  });

  it("renders the proper number of progress numbers", () => {
    const { container } = render(
      <ProgressNumbers
        qusetionCounter={mockQuestionCounter}
        viewAnotherQuestionHandler={() => {}}
        lineWidthHandler={() => {}}
        nextUnansweredQ={4}
      />
    );
    expect(container.children.length).toBe(totalQuestions);
  });
});
