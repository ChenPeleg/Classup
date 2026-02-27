import React from "react";
import { render } from "@testing-library/react";
import LoaderAnimation from "./LoaderAnimation";

describe("<LoaderAnimation>", () => {
  it("renders correctly", () => {
    const { container } = render(<LoaderAnimation />);
    expect(container.firstChild).toBeTruthy();
  });
});
