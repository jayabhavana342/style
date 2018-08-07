import React from 'react';
import { shallow, mounta, render } from 'enzyme';

import Colors from 'colors';

describe('Test colors layout', () => {
    it('Renders w/o errors', () => {
        expect(shallow(<Colors />).contains('Colors')).toBe(true);
    })
});
