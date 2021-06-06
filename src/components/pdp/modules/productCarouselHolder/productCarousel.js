import React from 'react';
import ImageCarousel from '../../../carousel/carousel';
import { StyledAddToCartButton, StyledCard, StyledCardContent, StyledHorizontalBlock, StyledPrice, StyledStickyWrapper } from '../../buildingBlocks/pdpContainer.style';

const ProductCarousel = ({
    emiData = {},
    runningAssetAccessoriesTotal = 0,
    setShowCartWindow
}) => {
    return (
        <StyledStickyWrapper>
            <ImageCarousel />
            <StyledHorizontalBlock>
                <StyledCard variant="outlined">
                    <StyledCardContent>
                        From <StyledPrice> &#8377;{emiData.monthly}/mo. with EMI Or &#8377;{emiData.total.toFixed(2)} </StyledPrice>
                    </StyledCardContent>
                </StyledCard>
            &nbsp; &nbsp;
                <StyledCard variant="outlined" bgAdd onClick={() => setShowCartWindow(true)}>
                    <StyledAddToCartButton variant="primary" zero>
                        <StyledPrice> Add To Bag &#8377;{runningAssetAccessoriesTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StyledPrice>
                    </StyledAddToCartButton>
                </StyledCard>
            </StyledHorizontalBlock>
        </StyledStickyWrapper>
    );
}

export default ProductCarousel;