import React from 'react';
import { shallow } from 'enzyme';
import CartWindow from '../cartWindow';

describe('CartWindow in absence of qty', () => {
    const component = shallow(
        <CartWindow qty={0} handleClose={jest.fn()} />
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });
});

describe('CartWindow in presence of qty', () => {
    const component = shallow(
        <CartWindow qty={1} handleClose={jest.fn()} />
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });
});
