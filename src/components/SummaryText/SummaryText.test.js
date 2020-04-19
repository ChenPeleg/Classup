import React from "react";
import { shallow } from "enzyme";
import SummaryText from "./SummaryText";
const wrap = shallow(<SummaryText />)

describe("<SummaryText>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})