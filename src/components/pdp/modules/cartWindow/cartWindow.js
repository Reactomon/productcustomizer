import React, { useState } from 'react';
import {
    detailedProductDescription
} from '../../buildingBlocks/productConfigs';
import ProductCountKeeper from '../../../productCountKeeper/productCountKeeper';
import {
    StyledCardImageDescription,
    StyledCartWindowWrapper,
    StyledPrice,
    StyledSecondaryHeading,
    StyledProductDescriptionThumbnail,
    StyledDescriptionUnstyledList,
    StyledHorizontalLine
} from '../../buildingBlocks/pdpContainer.style';

import ProductImage from '../../../../resources/images/1.jpeg';

const CartWindow = ({
    qty: productQuantity,
    runningAssetAccessoriesTotal
}) => {
    const [qty, setQty] = useState(productQuantity);
    const abstractDescription = detailedProductDescription.slice(0, 4);
    return (
        <React.Fragment>
            {qty ? (
                <React.Fragment >
                    <StyledCartWindowWrapper>
                        <StyledSecondaryHeading>
                            Cart Details
                        </StyledSecondaryHeading>
                        <StyledHorizontalLine />
                        <StyledCardImageDescription>
                            <img src={ProductImage} width="200" height="200" />
                            <StyledProductDescriptionThumbnail>
                                <StyledPrice>
                                    16‑inch MacBook Pro - Space Grey
                                    </StyledPrice>
                                <StyledDescriptionUnstyledList>
                                    {abstractDescription.map((d, index) => (
                                        <li key={`description detail_${index}`}>
                                            {d}
                                        </li>
                                    ))}
                                </StyledDescriptionUnstyledList>
                            </StyledProductDescriptionThumbnail>
                        </StyledCardImageDescription>
                        <ProductCountKeeper
                            qty={qty}
                            setQty={setQty}
                            runningAssetAccessoriesTotal={runningAssetAccessoriesTotal}
                        />
                    </StyledCartWindowWrapper>
                </React.Fragment >) : (<React.Fragment>
                    Your Cart Is Empty</React.Fragment>)}
        </React.Fragment>

    );
}

export default CartWindow;