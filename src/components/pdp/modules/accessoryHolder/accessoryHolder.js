import React from 'react';
import { StyledCard, StyledCardContent, StyledLink, StyledPrice, StyledSecondaryHeading } from '../../buildingBlocks/pdpContainer.style';

const AccessoryHolder = ({
    title = '',
    accessorySuggestion = '',
    data = [],
    setDefault,
    defaultConfig = [],
    handleShowModal,
    descriptionIndex = 0,
    handleChange,
    modalData = {}
}) => (
    <React.Fragment>
        <StyledSecondaryHeading>
            {title}
        </StyledSecondaryHeading>
        <StyledLink display="block" onClick={() => handleShowModal(modalData[title.toLowerCase()])}>
            {accessorySuggestion}
        </StyledLink>
        <React.Fragment>
            {data.map((variant, index) => {
                return (
                    <StyledCard key={`title_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(index, setDefault, defaultConfig, descriptionIndex)}>
                        <StyledCardContent>
                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                        </StyledCardContent>
                    </StyledCard>)
            })}
        </React.Fragment>
    </React.Fragment>
);

export default AccessoryHolder;