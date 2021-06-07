import React from 'react';
import { shallow } from 'enzyme';
import { StyledCartWindowWrapper, StyledHorizontalBlock } from '../pdpContainer.style';

describe('PdpContainer.style'.style, () => {
    const component = shallow(
        <StyledCartWindowWrapper
            theme={{
                palette: {
                    info: {
                        alt: {
                            fontSize: '16px'
                        }
                    }
                }
            }}
        />
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });
});

describe('PdpContainer.style'.style, () => {
    const component = shallow(
        <StyledHorizontalBlock spaced/>
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });
});