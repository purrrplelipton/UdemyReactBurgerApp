import React from "react";
import { useState, useEffect } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const CONTENT_PRICES = {
    salad: 2.15,
    cheese: 3.25,
    meat: 3.75,
    bacon: 2.05
};

const BurgerBuilder = (props) => {
    const [state, setState] = useState({
        contents: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.65,
        purchasable: true,
        purchasing: false
    });

    const updatePurchaseState = (contents) => {
        const sum = Object.values(
                contents
            ).reduce((acc, curr) => (acc + curr), 0);
        
        setState(prevState => ({
            ...prevState,
            purchasable: !sum > 0
        }));
    };

    const addContentHndlr = (type) => {
        const oldCount = state.contents[type];
        const updatedCount = oldCount + 1;
        const updatedContents = {...state.contents};
        updatedContents[type] = updatedCount;
        const priceAddition = CONTENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        setState(state => ({
            ...state,
            totalPrice: newPrice,
            contents: updatedContents
        }));
        updatePurchaseState(updatedContents);
    };

    const removeContentHndlr = (type) => {
        const oldCount = state.contents[type];
        const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
        const updatedContents = {...state.contents};
        updatedContents[type] = updatedCount;
        const priceDeduction = CONTENT_PRICES[type];
        const oldPrice = state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setState(state => ({
            ...state,
            totalPrice: newPrice,
            contents: updatedContents
        }));
        updatePurchaseState(updatedContents);
    };

    const purchaseHandler = () => {
        setState(prevState => ({
            ...prevState,
            purchasing: !prevState.purchasing
        }));
    };

    const closeModal = () => {
        setState(prevState => ({
            ...prevState,
            purchasing: !prevState.purchasing
        }))
    };

    const cancelPurchase = () => {
        setState(prevState => ({
            ...prevState,
            purchasing: false
        }));
    };

    const continuePurchase = () => {
        alert("You Opted To Continue Purchase");
    };

    const disabledInfo = {...state.contents};
    for(const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
        <Aux>
            <Modal
                show={state.purchasing}
                closeModal={closeModal}
            >
                <OrderSummary
                    contents={state.contents}
                    price={state.totalPrice}
                    cancelPurchase={cancelPurchase}
                    continuePurchase={continuePurchase}
                />
            </Modal>
            <Burger contents={state.contents} />
            <BuildControls
                contentAdded={addContentHndlr}
                contentRemoved={removeContentHndlr}
                disabled={disabledInfo}
                purchasable={state.purchasable}
                ordered={purchaseHandler}
                price={state.totalPrice}
            />
        </Aux>
    );
};

export default BurgerBuilder
