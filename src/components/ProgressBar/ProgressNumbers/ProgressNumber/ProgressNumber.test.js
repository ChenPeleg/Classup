import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProgressNumber from "./ProgressNumber";

const mockClick = vi.fn();
const num = 1;
const current = 3;
const next = 4;

describe("<ProgressNumber>", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ProgressNumber
        currentQusetNumber={current}
        number={num}
        viewAnotherQuestionHandler={mockClick}
        nextUnansweredQ={next}
      />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("should fire viewAnotherQuestionHandler with number as argument", () => {
    const { container } = render(
      <ProgressNumber
        currentQusetNumber={current}
        number={num}
        viewAnotherQuestionHandler={mockClick}
        nextUnansweredQ={next}
      />
    );
    fireEvent.click(container.firstChild);
    expect(mockClick).toHaveBeenCalledWith(num);
  });
});
