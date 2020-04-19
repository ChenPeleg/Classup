import React from "react"
import { shallow } from "enzyme"
import SoundToggle from "./SoundToggle"
const mockClick = jest.fn();
const soundtog = shallow(<SoundToggle soundOn={true} soundHandler={mockClick} />)
 
describe("<Sound Toggle>", () => {
    it('renders correctly', () => {
        expect(soundtog).toMatchSnapshot()
    })
    it("fires sound toggle event", () => {
        soundtog.simulate('click')
        expect(mockClick).toHaveBeenCalled()
    });
    it("contains image", () => {
        expect(soundtog.contains('img')).toEqual(false);
    })
})