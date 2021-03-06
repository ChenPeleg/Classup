import React from "react"
import { shallow } from "enzyme"
import ProgressNumber from "./ProgressNumber"
const mockClick = jest.fn()
const num = 1;
const currnet = 3;
const next = 4;

const comp = shallow(<ProgressNumber key={"key1"}
    currentQusetNumber={currnet}
    number={num}
    viewAnotherQuestionHandler={mockClick}
    nextUnansweredQ={next}
/>)
const shouldUpdate = comp.instance().shouldComponentUpdate({ currentQusetNumber: next }, false);

describe("<ProgressNumber>", () => {
    it("renders correctly", () => {
        expect(comp).toMatchSnapshot()
    })
    it("shouldComponentupdates updates when question number change", () => {
        expect(shouldUpdate).toBe(true)
    })
    it("shouldComponentupdates shoul not update when question number doesn't change", () => {
        const shouldUpdate2 = comp.instance().shouldComponentUpdate({ currentQusetNumber: currnet }, false);
        expect(shouldUpdate2).toBe(false)
    });
    it("should fire view anither question with number as argument", () => {
        comp.simulate('click')
        expect(mockClick).toHaveBeenLastCalledWith(num)
    })
})
