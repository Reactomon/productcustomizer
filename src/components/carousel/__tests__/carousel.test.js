import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../carousel';

describe('Carousel', () => {
    const component = shallow(
        <Carousel
            handleClose={jest.fn()}
        />);

    it('should render', () => {
        expect(component).toBeDefined();
    });
});

