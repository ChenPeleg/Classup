import React from "react";
import { shallow } from "enzyme";
import LoaderAnimation from "./LoaderAnimation";

const loader = shallow(<LoaderAnimation />);
describe("<LoaderAnimation>", () => {
  it("renders correctly", () => {
    expect(loader).toMatchSnapshot();
  });
});
