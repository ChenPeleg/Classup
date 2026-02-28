import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("<Layout>", () => {
  it("renders correctly", () => {
    const { container } = render(<Layout />);
    expect(container.firstChild).toBeTruthy();
  });
});
