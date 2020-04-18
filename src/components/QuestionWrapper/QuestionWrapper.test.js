import React from "react"
import { shallow } from 'enzyme'
import QuestionWrapper from './QuestionWrapper'

const wrap = shallow(<QuestionWrapper />)

it("QuestionWrapper renders correctly", () => {
    expect(wrap).toMatchSnapshot()
})