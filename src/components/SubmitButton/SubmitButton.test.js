import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

const mockClick = vi.fn();

describe("<SubmitButton>", () => {
  it("renders correctly", () => {
    const { container } = render(<SubmitButton submitHandler={mockClick} disableButton={false} />);
    expect(container.firstChild).toBeTruthy();
  });
  it("fires submit event", () => {
    const { container } = render(<SubmitButton submitHandler={mockClick} disableButton={false} />);
    fireEvent.click(container.firstChild);
    expect(mockClick).toHaveBeenCalled();
  });
});
