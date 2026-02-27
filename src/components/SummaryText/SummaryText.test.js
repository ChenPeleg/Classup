import React from "react";
import { render } from "@testing-library/react";
import SummaryText from "./SummaryText";

describe("<SummaryText>", () => {
  it("renders correctly", () => {
    const { container } = render(<SummaryText />);
    expect(container.firstChild).toBeTruthy();
  });
});
