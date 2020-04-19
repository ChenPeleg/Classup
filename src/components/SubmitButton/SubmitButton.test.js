import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "./SubmitButton";
const mockClick = jest.fn();
const wrap = shallow(<SubmitButton submitHandler={mockClick} disableButton={false} />)

describe("<SubmitButton>", () => {
    it("renders correctly", () => { expect(wrap).toMatchSnapshot() });
    it("fires submit event", () => {
        wrap.simulate('click')
        expect(mockClick).toHaveBeenCalled()
    });
})