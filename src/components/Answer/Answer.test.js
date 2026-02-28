import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Answer from "./Answer";

const mockChoose = vi.fn();
const ansNum = 5;

describe("<Answer>", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Answer isChosen={true} markedAnswer={"RIGHT"} num={ansNum} chooseAnswerHandler={mockChoose} />
    );
    expect(container.firstChild).toBeTruthy();
  });

  describe("<Answer> is clicked on", () => {
    it("calls a function with the ChooseAnswer callback", () => {
      const { container } = render(
        <Answer isChosen={false} markedAnswer={null} num={ansNum} chooseAnswerHandler={mockChoose} />
      );
      fireEvent.click(container.firstChild);
      expect(mockChoose).toHaveBeenCalledWith(expect.anything(), ansNum);
    });
  });
});
