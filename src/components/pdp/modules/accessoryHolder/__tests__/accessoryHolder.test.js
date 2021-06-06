import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '@material-ui/core';
import AccessoryHolder from '../accessoryHolder';


describe('AccessoryHolder', () => {
    const testFunction = jest.fn();
    const component = shallow(
        <AccessoryHolder
            title="Primary Heading"
            accessorySuggestion='Suggestions Data'
            data={[
                {
                    selected: true,
                    additionalAmountRequired: 200,
                    sign: '+'
                }
            ]}
            setDefault={testFunction}
            defaultConfig={[]}
            handleShowModal={testFunction}
            descriptionIndex={0}
            handleChange={testFunction}
            modalData={{}}
        />);

    it('should render Accessory Holder', () => {
        expect(component).toBeDefined();
    });

    it('should render Accessory Holder', () => {
        const comp = shallow(
            <AccessoryHolder handleShowModal={null} />
        );
        console.log(comp.find(Link));
        expect(comp).toBeDefined();
    });
});

