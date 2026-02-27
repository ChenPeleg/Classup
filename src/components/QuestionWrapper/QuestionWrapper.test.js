import React from "react";
import { render } from "@testing-library/react";
import QuestionWrapper from "./QuestionWrapper";

it("QuestionWrapper renders correctly", () => {
  const { container } = render(<QuestionWrapper />);
  expect(container.firstChild).toBeTruthy();
});
