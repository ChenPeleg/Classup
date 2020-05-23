import React from "react"
import { shallow } from "enzyme"
import ProgressNumbers from "./ProgressNumbers"
import ProgressNumber from "./ProgressNumber/ProgressNumber"

const totalQuestions = 7;
const mockqusetionCounter = {
    qNumber: 3,
    qTotal: totalQuestions,
    qNext: 4,
    infoQuestions: [2, 1],
}
const wrap = shallow(<ProgressNumbers qusetionCounter={mockqusetionCounter} />)


describe("<ProgressNumber>", () => {
    it("renders correctly", () => {
        expect(wrap).toMatchSnapshot()
    })
    it("renders the proper number of numbers", () => {
        expect(wrap.length).toBe(totalQuestions)
    })

})