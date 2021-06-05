import React, { useState } from 'react';
import HeroImageCarousel from '../carousel/carousel';
import Modal from '../Modal/modal';
import {
    StyledContainer,
    StyledColumn,
    StyledHorizontalBlock,
    StyledProductHeading,
    StyledDescriptionUnstyledList,
    StyledHorizontalLine,
    StyledSecondaryHeading,
    StyledPrice,
    StyledLink,
    StyledCard,
    StyledCardContent,
    StyledSecondarySubHeading,
    StyledStickyWrapper,
    StyledAddToCartButton
} from '../pdp/buildingBlocks/pdpContainer.style';

import {
    detailedProductDescription,
    processorVariants,
    memoryVariants,
    graphicsVariants,
    storageVariants,
    finalCutOptions,
    logicProOptions,
    modalData
} from '../pdp/buildingBlocks/productConfigs';

const ProductCustomizerView = () => {
    const [defaultProcessorConfig] = useState(processorVariants);
    const [defaultMemoryConfig] = useState(memoryVariants);
    const [defaultGraphicsConfig] = useState(graphicsVariants);
    const [defaultStorageConfig] = useState(storageVariants);
    const [defaultFinalCutConfig] = useState(finalCutOptions);
    const [defaultLogicProConfig] = useState(logicProOptions);
    const [runningAssetAccessoriesTotal, setRunningAssetAccessoriesTotal] = useState(239000);
    const [modalInfo, setModalInfo] = useState({ show: false });
    const [processors, setProcessors] = useState(processorVariants);
    const [memory, setMemory] = useState(memoryVariants);
    const [graphics, setGraphics] = useState(graphicsVariants);
    const [storage, setStorage] = useState(storageVariants);
    const [finalCut, setFinalCut] = useState(finalCutOptions);
    const [logicPro, setLogicPro] = useState(logicProOptions);

    const handleShowModal = data => {
        setModalInfo({ ...data, show: true });
    }

    const handleChange = (customization, index, setValue, defaultValue = []) => {
        const selectedData = Object.assign({}, defaultValue[index], {});
        setValue(defaultValue.map((variant, i) => {
            if (i !== index) {
                variant.selected = false;
                const deltaAmount = variant.additionalAmountRequired - selectedData.additionalAmountRequired;
                if (deltaAmount < 0) {
                    variant.sign = '-';
                }
                else {
                    variant.sign = '+';
                }
                variant.additionalAmountRequired = deltaAmount;
            }
            else {
                variant.selected = true;
                setRunningAssetAccessoriesTotal(
                    runningAssetAccessoriesTotal + variant.additionalAmountRequired
                );
                variant.additionalAmountRequired = 0;
            }
            return variant;
        }));
    }

    const emiCalculator = (amount, years, interest) => {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        // Computed Monthly payment
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        return {
            monthly: monthly.toFixed(2),
            total: monthly * calculatedPayments.toFixed(2),
            totalInterests: (monthly * calculatedPayments - principal).toFixed(2)
        };
    }

    const emiData = emiCalculator(runningAssetAccessoriesTotal, 1, 13);

    return (
        <StyledContainer>
            {modalInfo?.show ? (
                <Modal handleClose={() => {
                    setModalInfo(false);
                }}>
                    <StyledProductHeading>
                        {modalInfo.heading}
                    </StyledProductHeading>
                    <StyledDescriptionUnstyledList>
                        {modalInfo.description}
                    </StyledDescriptionUnstyledList>
                </Modal>
            ) : null}
            <StyledStickyWrapper>
                <HeroImageCarousel />
                <StyledHorizontalBlock>
                    <StyledCard variant="outlined">
                        <StyledCardContent>
                            From <StyledPrice> &#8377;{emiData.monthly}/mo. with EMI Or &#8377;{emiData.total.toFixed(2)} </StyledPrice>
                        </StyledCardContent>
                    </StyledCard>
                    &nbsp; &nbsp;
                    <StyledCard variant="outlined" bgAdd>
                        <StyledAddToCartButton variant="primary">
                            <StyledPrice> Add To Bag &#8377;{runningAssetAccessoriesTotal}</StyledPrice>
                        </StyledAddToCartButton>
                    </StyledCard>
                </StyledHorizontalBlock>
            </StyledStickyWrapper>
            <StyledColumn>
                <React.Fragment>
                    <StyledProductHeading>
                        Customise your 16‑inch MacBook Pro - Space Grey
                    </StyledProductHeading>
                    <StyledDescriptionUnstyledList>
                        {detailedProductDescription.map((d, index) => (
                            <li key={`description detail_${index}`}>
                                {d}
                            </li>
                        ))}
                    </StyledDescriptionUnstyledList>
                    <StyledHorizontalLine />
                </React.Fragment>
                <React.Fragment>
                    <StyledSecondaryHeading>
                        Processor
                    </StyledSecondaryHeading>
                    <StyledLink display="block" onClick={() => handleShowModal(modalData["processors"])}>
                        Which processor is right for you?
                    </StyledLink>
                    <React.Fragment>
                        {processors.map((variant, index) => {
                            return (
                                <StyledCard key={`processorType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(processors, index, setProcessors, defaultProcessorConfig, 'processor')}>
                                    <StyledCardContent>
                                        {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                    </StyledCardContent>
                                </StyledCard>)
                        })}
                    </React.Fragment>

                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Memory
                    </StyledSecondaryHeading>
                        <StyledLink display="block" onClick={() => handleShowModal(modalData.memory)}>
                            How much memory is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {memory.map((variant, index) => {
                                return (
                                    <StyledCard key={`memoryType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(memory, index, setMemory, defaultMemoryConfig, 'memory')}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>)
                            })}
                        </React.Fragment>

                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Graphics
                    </StyledSecondaryHeading>
                        <StyledLink display="block" onClick={() => handleShowModal(modalData.graphics)}>
                            Which graphics option is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {graphics.map((variant, index) => {
                                return (
                                    <StyledCard key={`graphicsType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(graphics, index, setGraphics, defaultGraphicsConfig, 'graphics')}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(variant.additionalAmountRequired)}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>)
                            })}
                        </React.Fragment>
                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondaryHeading>
                            Storage
                    </StyledSecondaryHeading>
                        <StyledLink display="block" onClick={() => handleShowModal(modalData.storage)}>
                            How much storage is right for you?
                    </StyledLink>
                        <React.Fragment>
                            {storage.map((variant, index) => {
                                return (
                                    <StyledCard key={`storageType_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(storage, index, setStorage, defaultStorageConfig, 'storage')}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </React.Fragment>
                    </React.Fragment>
                </React.Fragment>
                <React.Fragment>
                    <StyledHorizontalLine />
                    <React.Fragment>
                        <StyledSecondarySubHeading>
                            Pre-installed Software
                         </StyledSecondarySubHeading>
                        <StyledSecondaryHeading>
                            Final Cut Pro
                         </StyledSecondaryHeading>
                        <StyledHorizontalBlock>
                            {finalCut.map((variant, index) => {
                                return (
                                    <StyledCard key={`firstCutPro_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(finalCut, index, setFinalCut, defaultFinalCutConfig, 'finalCut')}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </StyledHorizontalBlock>
                        <StyledSecondaryHeading>
                            Logic Pro
                         </StyledSecondaryHeading>
                        <StyledHorizontalBlock>
                            {logicPro.map((variant, index) => {
                                return (
                                    <StyledCard key={`firstCutPro_${index}`} selected={variant.selected} variant="outlined" onClick={() => handleChange(logicPro, index, setLogicPro, defaultLogicProConfig, 'logicPro')}>
                                        <StyledCardContent>
                                            {variant.description} {Math.abs(variant.additionalAmountRequired) ? (<StyledPrice> &nbsp; {variant.sign}&#8377;{Math.abs(Math.abs(variant.additionalAmountRequired))}</StyledPrice>) : null}
                                        </StyledCardContent>
                                    </StyledCard>
                                )
                            })}
                        </StyledHorizontalBlock>
                    </React.Fragment>
                </React.Fragment>
            </StyledColumn>
        </StyledContainer>
    );
};

export default ProductCustomizerView;
