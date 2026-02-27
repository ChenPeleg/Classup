import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) throw new Error("test error");
  return <div>OK</div>;
};

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(getByText("OK")).toBeTruthy();
  });

  it("should display an error message if wrapped component throws", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    expect(getByText("Something went wrong.")).toBeTruthy();
    consoleSpy.mockRestore();
  });
});
