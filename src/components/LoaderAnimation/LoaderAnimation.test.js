import React from "react";
import { shallow } from "enzyme";
import Loader from "./LoaderAnimation";

const loader = shallow(<Loader />);
describe("<Loader anination>", () => {
  it("renders correctly", () => {
    expect(loader).toMatchSnapshot();
  });
});
