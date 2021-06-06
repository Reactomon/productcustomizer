import React from 'react';
import { StyledDescriptionUnstyledList, StyledHorizontalLine, StyledProductHeading } from '../../buildingBlocks/pdpContainer.style';

const ProductDescription = ({
    description = []
}) => (
    <React.Fragment>
        <StyledProductHeading>
            Customise your 16‑inch MacBook Pro - Space Grey
        </StyledProductHeading>
        <StyledDescriptionUnstyledList>
            {description.map((d, index) => (
                <li key={`description detail_${index}`}>
                    {d}
                </li>
            ))}
        </StyledDescriptionUnstyledList>
        <StyledHorizontalLine />
    </React.Fragment>
);

export default ProductDescription;