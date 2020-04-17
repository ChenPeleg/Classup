import React from "react";
import Mark from "./Mark";
import { shallow } from "enzyme";

const mark = shallow(<Mark />);

describe("<Mark>", () => {
  it("renders correctly", () => {
    expect(mark).toMatchSnapshot();
  });
});
