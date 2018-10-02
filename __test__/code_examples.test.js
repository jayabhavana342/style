import React from 'react';
import { shallow, mount } from 'enzyme';
import Contents from '../src/docs/components/contents.jsx';

const contentsWrapperShallow = shallow(<Contents />);
const contentsWrapperFull = mount(<Contents />);

describe('Block code highlighting renders properly?', () => {
    it('Renders with all inside elements', () => {
        expect(contentsWrapperFull.find('.test-block-code').exists()).toBe(true);
    })
});

describe('Inline code highlighting renders properly?', () => {
    it('Renders with all inside elements', () => {
        expect(contentsWrapperFull.find('.test-inline-code').exists()).toBe(true);
    })
});
