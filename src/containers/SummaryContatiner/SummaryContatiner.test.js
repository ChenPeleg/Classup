import React from "react";
import { shallow } from "enzyme";
import SummaryContatiner from "./SummaryContatiner";

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
const wrap = shallow(<SummaryContatiner {...props} />)

describe("<SummaryContatiner>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})