import React from 'react';
import { shallow, mount } from 'enzyme';
import Cards from '../src/docs/sections/cards.jsx';

const cardsWrapperShallow = shallow(<Cards />);
const cardsWrapperFull = mount(<Cards />);

describe('Cards properly render?', () => {
    it('Exists', () => {
        expect(cardsWrapperShallow.find('#test-card1').exists()).toBe(true);
    });
    // it('Hides and re-appears', async () => {
    //     cardsWrapperShallow.find('#test-card2').simulate('click');
    //     expect(cardsWrapperShallow.find('#test-card3').hasClass('dismissed')).toBe(true);
    // });
});

