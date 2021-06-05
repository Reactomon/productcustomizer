import React from 'react';
import {
    StyledModalBase,
    StyledModalBaseContent,
    StyledCrossButton
} from './modal.style';

const Modal = ({
    handleClose,
    children
}) => {
    return (
        <StyledModalBase>
            <StyledModalBaseContent>
                <StyledCrossButton onClick={handleClose}>&times;</StyledCrossButton>
                {children}
            </StyledModalBaseContent>
        </StyledModalBase>
    );
}

export default Modal;