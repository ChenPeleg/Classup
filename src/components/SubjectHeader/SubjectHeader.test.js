import React from "react";
import { shallow } from "enzyme";
import SubjectHeader from "./SubjectHeader";
const wrap = shallow(<SubjectHeader />)

describe("SubjectHeader", () => {
    it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})