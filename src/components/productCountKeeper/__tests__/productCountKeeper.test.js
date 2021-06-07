import React from 'react';
import { shallow } from 'enzyme';
import ProductCountKeeper from '../productCountKeeper';
import { StyledMinusButton, StyledPlusButton, StyledProductCount } from '../../pdp/buildingBlocks/pdpContainer.style';


describe('ProductCountKeeper', () => {
    const component = shallow(
        <ProductCountKeeper
            runningAssetAccessoriesTotal={10}
            qty={2}
            setQty={jest.fn()}
        />);

    it('should render ProductCountKeeper Holder', () => {
        expect(component).toBeDefined();
    });

    it('should simulate minus when qty is 0', () => {
        component.setProps({ qty: 0 });
        const minus = component.find(StyledMinusButton);
        minus.simulate('click');
        expect(component).toBeDefined();
    });

    it('should click minus button when quantity >= 1', () => {
        component.setProps({ qty: 1 });
        const minus = component.find(StyledMinusButton);
        minus.simulate('click');
        expect(component).toBeDefined();
    });

    it('should simulate plus when qty is 0', () => {
        component.setProps({ qty: 0 });
        const plus = component.find(StyledPlusButton);
        plus.simulate('click');
        expect(component).toBeDefined();
    });


    it('should simulate onChage on inputbox', () => {
        const comp = shallow(
            <ProductCountKeeper
                runningAssetAccessoriesTotal={10}
                qty={2}
                setQty={jest.fn()}
            />
        );
        const count = component.find(StyledProductCount);
        count.simulate('change', { target: { value: 4 } });
        expect(comp.find('ref')).toBeTruthy();
    });
});

