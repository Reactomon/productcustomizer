import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import {
    StyledAddToCartButton,
    StyledHorizontalBlock,
    StyledMinusButton,
    StyledPlusButton,
    StyledPrice,
    StyledHorizontalButtonWrapper,
    StyledProductCount
} from '../pdp/buildingBlocks/pdpContainer.style';

const ProductCountKeeper = ({
    runningAssetAccessoriesTotal,
    qty,
    setQty
}) => {
    const [totalAmount, setTotalAmount] = useState(runningAssetAccessoriesTotal);

    return (
        <React.Fragment>
            <React.Fragment>
                <StyledHorizontalButtonWrapper>
                    <StyledHorizontalBlock spaced>
                        <StyledMinusButton onClick={() => {
                            if (qty >= 1) {
                                setQty(qty - 1);
                                setTotalAmount(totalAmount-runningAssetAccessoriesTotal)
                            }
                        }} />
                        <StyledProductCount defaultValue={qty} value={qty} onChange={event => setQty(event?.target?.value)} id="outlined-basic" label="Qty" variant="outlined" />
                        <StyledPlusButton onClick={() => {
                            setQty(qty + 1)
                            setTotalAmount(runningAssetAccessoriesTotal * (qty + 1))
                        }} />
                    </StyledHorizontalBlock>
                    <StyledHorizontalBlock>
                        <StyledAddToCartButton variant="contained" color="secondary">
                            <StyledPrice> Checkout &#8377;{totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StyledPrice>
                        </StyledAddToCartButton>
                    </StyledHorizontalBlock>

                </StyledHorizontalButtonWrapper>
            </React.Fragment>
        </React.Fragment>
    );
}

export default ProductCountKeeper;