import React from "react";
import { shallow } from "enzyme";
import Answer from "./Answer";
import Mark from "../Mark/Mark";

describe("<Answer>", () => {
  const answer = shallow(<Answer />);
  it("renders correctly", () => {
    expect(answer).toMatchSnapshot();
  });
  describe("<Answer> choosen with marks", () => {
    const answer = shallow(<Answer isChosen={true} marked_Answer={"RIGHT"} />);
    it("should render a check mark", () => {
      expect(answer.contains(<Mark />));
    });
  });
  describe("<Answer> is clicked on", () => {
    const mockChoose = jest.fn();
    const ansNum = 5;
    const answer = shallow(
      <Answer num={ansNum} chooseAnswerHandler={mockChoose} />
    );

    beforeEach(() => {
      answer.simulate("click");
    });
    it("calls a function with the ChooseAnswer callback", () => {
      expect(mockChoose).toHaveBeenCalledWith(undefined, ansNum);
    });
  });
});
