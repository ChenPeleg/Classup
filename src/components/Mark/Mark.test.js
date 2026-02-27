import React from "react";
import { render } from "@testing-library/react";
import Mark from "./Mark";

describe("<Mark>", () => {
  it("renders correctly", () => {
    const { container } = render(<Mark />);
    expect(container.firstChild).toBeTruthy();
  });
});
