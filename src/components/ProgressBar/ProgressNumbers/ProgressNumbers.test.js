import React from "react"
import { shallow } from "enzyme"
import ProgressNumbers from "./ProgressNumbers"
import ProgressNumber from "./ProgressNumber/ProgressNumber"

const totalQuestions = 7;
const mockq_counter = {
    qNumber: 3,
    q_total: totalQuestions,
    qNext: 4,
    info_questions: [2, 1],
}
const wrap = shallow(<ProgressNumbers q_counter={mockq_counter} />)


describe("<ProgressNumber>", () => {
    it("renders correctly", () => {
        expect(wrap).toMatchSnapshot()
    })
    it("renders the proper number of numbers", () => {
        expect(wrap.length).toBe(totalQuestions)
    })

})