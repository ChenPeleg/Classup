import React from "react";
import ProgressBar from "./ProgressBar";
import { shallow } from "enzyme";

const progbar = shallow(<ProgressBar />);

describe("<ProgressBar>", () => {
  it("renders correctly", () => {
    expect(progbar).toMatchSnapshot();
  });
});
