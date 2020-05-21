import React from "react";
import { shallow } from "enzyme";
import SummaryContainer from "./SummaryContainer";

// const test1 = 

const props = {
  sumData: [
    [],
    ["INFO"],
    ["WRONG", "RIGHT"],
    ["RIGHT"],
    ["WRONG", "WRONG", "WRONG", "RIGHT"],
    ["RIGHT"],
    ["RIGHT"],
    ["WRONG", "WRONG", "RIGHT"],
    ["WRONG", "RIGHT"],
    ["RIGHT"],
    ["RIGHT"],
    ["RIGHT"],
    ["WRONG", "RIGHT"],
  ]
};
const wrap = shallow(<SummaryContainer {...props} />)

describe("<SummaryContainer>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})