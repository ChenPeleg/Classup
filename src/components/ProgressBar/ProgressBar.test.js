import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("<ProgressBar>", () => {
  it("renders correctly", () => {
    const { container } = render(<ProgressBar />);
    expect(container.firstChild).toBeTruthy();
  });
});
