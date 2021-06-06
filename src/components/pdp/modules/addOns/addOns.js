import React from 'react';
import { StyledCard, StyledCardContent, StyledHorizontalBlock, StyledPrice, StyledSecondaryHeading, StyledSecondarySubHeading } from '../../buildingBlocks/pdpContainer.style';

const AddOns = ({
    primaryHeading = '',
    data = [],
    handleChange = () => { }
}) => (
    <React.Fragment>
        <StyledHorizontalBlock />
        <React.Fragment>
            <StyledSecondarySubHeading>
                {primaryHeading}
            </StyledSecondarySubHeading>
            {
                data.map(d => (
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            {d.heading}
                        </StyledSecondaryHeading>
                        <StyledHorizontalBlock>
                            {d?.accessoryDetails?.map((variant, index) => {
                                return (
                                    <StyledCard key={`${primaryHeading}_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(index, d.setDefault, d.defaultConfig)}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </StyledHorizontalBlock>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    </React.Fragment>
);

export default AddOns;