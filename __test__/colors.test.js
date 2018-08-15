import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Colors from '../src/docs/sections/colors.jsx';

Enzyme.configure({ adapter: new Adapter() });

const colorWrapperShallow = shallow(<Colors />);
const colorWrapperFull = mount(<Colors />);

describe('Colors component loading?', () => {
    it('Renders w/o errors', () => {
        expect(colorWrapperShallow.exists()).toBe(true);
    })
});

describe('Content for "Lime" color loading?', () => {
    it('Renders shows the color box', () => {
        expect(colorWrapperShallow.find('.lime .def').text()).toEqual('#92C746');
    })
});

describe('Code example for colors loading?', () => {
    it('Renders the code example for colors', () => {
        expect(colorWrapperFull.find('.test-comp-colors-code').exists()).toBe(true);
    })
});
