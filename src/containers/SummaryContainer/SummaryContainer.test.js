import React from "react";
import { render } from "@testing-library/react";
import SummaryContainer from "./SummaryContainer";

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
  ],
};

describe("<SummaryContainer>", () => {
  it("renders correctly", () => {
    const { container } = render(<SummaryContainer {...props} />);
    expect(container.firstChild).toBeTruthy();
  });
});
