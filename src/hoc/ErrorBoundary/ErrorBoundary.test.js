import React from "react";
import { shallow, mount } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

const Something = () => null;
const wrapper = mount(
  <ErrorBoundary>
    <Something />
  </ErrorBoundary>
);
describe('ErrorBoundary', () => {
  beforeEach(() => {
    wrapper.setState({ hasError: false })
  });

  it('should display an ErrorMessage if wrapped component throws', () => {
    const error = new Error('test');
    wrapper.find(Something).simulateError(error);
    expect(wrapper.state().hasError).toBe(true);

  });
  it("should render beacause of error", () => {
    wrapper.setState({ hasError: true });
    expect(wrapper).toMatchSnapshot()
  })
})