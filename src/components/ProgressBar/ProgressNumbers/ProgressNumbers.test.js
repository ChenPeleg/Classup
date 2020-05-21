import React from "react"
import { shallow } from "enzyme"
import ProgressNumbers from "./ProgressNumbers"
import ProgressNumber from "./ProgressNumber/ProgressNumber"

const totalQuestionsuestions = 7;
const mockquestionCounter = {
    questionNumber: 3,
    q_total: totalQuestionsuestions,
    questionNext: 4,
    info_questions: [2, 1],
}
const wrap = shallow(<ProgressNumbers questionCounter={mockquestionCounter} />)


describe("<ProgressNumber>", () => {
    it("renders correctly", () => {
        expect(wrap).toMatchSnapshot()
    })
    it("renders the proper number of numbers", () => {
        expect(wrap.length).toBe(totalQuestionsuestions)
    })

})