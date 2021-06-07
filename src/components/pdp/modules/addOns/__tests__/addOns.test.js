import React from 'react';
import { shallow } from 'enzyme';
import AddOns from '../addOns';
import { StyledCard } from '../../../buildingBlocks/pdpContainer.style';

describe('AddOns', () => {
    const component = shallow(
        <AddOns
            data={[
                {
                    heading: 'heading',
                    accessoryDetails: [
                        {
                            selected: true,
                            setDefault: jest.fn(),
                            defaultConfig: [],
                            description: 'description',
                            additionalAmountRequired: 200
                        },
                        {
                            setDefault: jest.fn(),
                            defaultConfig: [],
                            description: 'second description',
                            additionalAmountRequired: 0
                        }
                    ]
                }
            ]}
            handleChange={jest.fn()}
            primaryHeading='primary heading'
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