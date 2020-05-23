import React from "react";
import { shallow, mount, render } from "enzyme";
import AdvanceContext from "./advance-context";
const dummyContext = (<><AdvanceContext.Consumer>
  {(context) => (
    <p>{context.qNumber}</p>)} </AdvanceContext.Consumer></>)
describe("<advance-context >", () => {
  it("renders correctly", () => { expect(dummyContext).toMatchSnapshot() });

})