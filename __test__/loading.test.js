import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from '../src/docs/sections/loading.jsx';
import $ from 'jquery';

const loadingWrapperShallow = shallow(<Loading />);
const loadingWrapperFull = mount(<Loading />);

describe('Buttons clicks show loader?', () => {
    it('Exists', () => {
        expect(loadingWrapperShallow.find('#test-loading1').exists()).toBe(true);
    });
});

