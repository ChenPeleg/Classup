import React from "react";
import { shallow } from "enzyme";
import Uplogo from "./Uplogo";
const wrap = shallow(<Uplogo />)

describe("<Uplogo>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})