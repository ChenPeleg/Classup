import React from "react";
import { render } from "@testing-library/react";
import QuestionText from "./QuestionText";

describe("<QuestionText>", () => {
  it("renders correctly", () => {
    const { container } = render(<QuestionText />);
    expect(container.firstChild).toBeTruthy();
  });
});
