import React from "react";
import { render } from "@testing-library/react";
import SubjectHeader from "./SubjectHeader";

describe("SubjectHeader", () => {
  it("renders correctly", () => {
    const { container } = render(<SubjectHeader />);
    expect(container.firstChild).toBeTruthy();
  });
});
