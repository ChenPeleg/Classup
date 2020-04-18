import React from "react"
import { shallow } from "enzyme"
import QuestionText from "./QuestionText"

const wrap = shallow(<QuestionText />)

describe("<QuestionText>", () => {
    it("renders correctly", () => {
        expect(wrap).toMatchSnapshot()
    })
})