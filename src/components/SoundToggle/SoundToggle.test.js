import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SoundToggle from "./SoundToggle";

const mockClick = vi.fn();

describe("<Sound Toggle>", () => {
  it("renders correctly", () => {
    const { container } = render(<SoundToggle soundOn={true} soundHandler={mockClick} />);
    expect(container.firstChild).toBeTruthy();
  });
  it("fires sound toggle event", () => {
    const { container } = render(<SoundToggle soundOn={true} soundHandler={mockClick} />);
    fireEvent.click(container.firstChild);
    expect(mockClick).toHaveBeenCalled();
  });
  it("contains image", () => {
    const { container } = render(<SoundToggle soundOn={true} soundHandler={mockClick} />);
    expect(container.querySelector('img')).toBeTruthy();
  });
});
