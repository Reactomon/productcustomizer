import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../modal';

describe('Modal', () => {
    const component = shallow(
        <Modal
            handleClose={jest.fn()}
        >
            <div>Modal Component</div>
        </Modal>);

    it('should render Modal component', () => {
        expect(component).toBeDefined();
    });
});

