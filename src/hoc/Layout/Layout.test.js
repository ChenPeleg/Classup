import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";
import renderer from 'react-test-renderer';
const wrap = shallow(<Layout />)

describe("<Layout>", () => {
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
  it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
})