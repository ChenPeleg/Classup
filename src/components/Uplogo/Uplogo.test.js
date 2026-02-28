import React from "react";
import { render } from "@testing-library/react";
import Uplogo from "./Uplogo";

describe("<Uplogo>", () => {
  it("renders correctly", () => {
    const { container } = render(<Uplogo />);
    expect(container.firstChild).toBeTruthy();
  });
});
