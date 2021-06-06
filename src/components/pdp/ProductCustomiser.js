import React, { useState } from 'react';
import Modal from '../Modal/modal';
import ProductCarousel from '../pdp/modules/productCarouselHolder/productCarousel';
import ProductDescription from '../pdp/modules/productDescription/productDescription';
import {
    StyledContainer,
    StyledColumn,
    StyledProductHeading,
    StyledDescriptionUnstyledList,
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
import AccessoryHolder from './modules/accessoryHolder/accessoryHolder';
import AddOns from './modules/addOns/addOns';

const ProductCustomizerView = () => {
    const [defaultProcessorConfig] = useState(processorVariants);
    const [defaultMemoryConfig] = useState(memoryVariants);
    const [defaultGraphicsConfig] = useState(graphicsVariants);
    const [defaultStorageConfig] = useState(storageVariants);
    const [defaultFinalCutConfig] = useState(finalCutOptions);
    const [defaultLogicProConfig] = useState(logicProOptions);
    const [description, setDescription] = useState(detailedProductDescription);
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

    const handleChange = (index, setValue, defaultValue = [], descIndex = undefined) => {
        const selectedData = Object.assign({}, defaultValue[index], {});
        if (descIndex >= 0) {
            const descArray = [...description];
            descArray[descIndex] = selectedData.description;
            setDescription(descArray);
        }

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

            <ProductCarousel
                emiData={emiData}
                runningAssetAccessoriesTotal={runningAssetAccessoriesTotal}
            />

            <StyledColumn>
                <ProductDescription
                    description={description}
                />

                <AccessoryHolder
                    title="Processors"
                    accessorySuggestion="Which processor is right for you?"
                    data={processors}
                    handleShowModal={handleShowModal}
                    setDefault={setProcessors}
                    defaultConfig={defaultProcessorConfig}
                    descriptionIndex={0}
                    handleChange={handleChange}
                    modalData={modalData}
                />

                <AccessoryHolder
                    title="Memory"
                    accessorySuggestion="How much memory is right for you?"
                    data={memory}
                    handleShowModal={handleShowModal}
                    setDefault={setMemory}
                    defaultConfig={defaultMemoryConfig}
                    descriptionIndex={1}
                    handleChange={handleChange}
                    modalData={modalData}
                />

                <AccessoryHolder
                    title="Graphics"
                    accessorySuggestion="Which graphics option is right for you?"
                    data={graphics}
                    handleShowModal={handleShowModal}
                    setDefault={setGraphics}
                    defaultConfig={defaultGraphicsConfig}
                    descriptionIndex={2}
                    handleChange={handleChange}
                    modalData={modalData}
                />

                <AccessoryHolder
                    title="Storage"
                    accessorySuggestion="How much storage is right for you??"
                    data={storage}
                    handleShowModal={handleShowModal}
                    setDefault={setStorage}
                    defaultConfig={defaultStorageConfig}
                    descriptionIndex={3}
                    handleChange={handleChange}
                    modalData={modalData}
                />

                <AddOns
                    primaryHeading="Pre-installed Software"
                    data={[
                        {
                            heading: 'Final Cut Pro',
                            accessoryDetails: finalCut,
                            defaultConfig: defaultFinalCutConfig,
                            setDefault: setFinalCut
                        },
                        {
                            heading: 'Logic Pro',
                            accessoryDetails: logicPro,
                            defaultConfig: defaultLogicProConfig,
                            setDefault: setLogicPro
                        }
                    ]}
                    handleChange={handleChange}
                />
            </StyledColumn>
        </StyledContainer>
    );
};

export default ProductCustomizerView;
