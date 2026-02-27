import React from "react";
import { render } from "@testing-library/react";
import SummaryTable from "./SummaryTable";

const summaryObjectMock = {
  mistakesObject: { q0: 4, q1: 1, q23: 0 },
  numOfquestions: 5,
};

describe("<SummaryTable>", () => {
  it("renders correctly", () => {
    const { container } = render(<SummaryTable summaryObject={summaryObjectMock} />);
    expect(container.firstChild).toBeTruthy();
  });
});
