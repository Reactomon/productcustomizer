import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../theme/customTheme';
import PdpContainer from '../pdpContainer';

describe('PdpContainer', () => {
    const component = shallow(
        <ThemeProvider theme={theme}>
            <PdpContainer handleClose={jest.fn()} />
        </ThemeProvider>
    );

    it('should render', () => {
        expect(component).toBeDefined();
    });
});

