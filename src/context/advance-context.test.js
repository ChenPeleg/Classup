import React from "react";
import { render } from "@testing-library/react";
import AdvanceContext from "./advance-context";

describe("<advance-context>", () => {
  it("renders correctly", () => {
    const { container } = render(
      <AdvanceContext.Consumer>
        {(context) => <p>{context.qNumber}</p>}
      </AdvanceContext.Consumer>
    );
    expect(container).toBeTruthy();
  });
});
