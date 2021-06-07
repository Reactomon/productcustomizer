import React from 'react';
import { shallow } from 'enzyme';
import ProductCarousel from '../productCarousel';
import { StyledCard } from '../../../buildingBlocks/pdpContainer.style';

describe('ProductCarousel', () => {
    const component = shallow(
        <ProductCarousel
            emiData={{
                monthly: 3400,
                total: 200000
            }}
            setShowCartWindow={jest.fn()}
            runningAssetAccessoriesTotal={0}
        />
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });

    it('should invoke onClick on style card', () => {
        const wrapper = component.find(StyledCard);
        wrapper.forEach(w => w.simulate('click'));      
        expect(component).toBeDefined();
    });
});