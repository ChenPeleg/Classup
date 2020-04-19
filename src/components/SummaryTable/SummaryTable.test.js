
import React from "react";
import { shallow } from "enzyme";
import SummaryTable from "./SummaryTable";
const summaryObjectMock = {
  mistakesObject : { q0: 4, q1: 1, q23: 0 },
  numOfquestions: 5,
}
const wrap = shallow(<SummaryTable summaryObject={summaryObjectMock} />)
describe("<SummaryTable>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})