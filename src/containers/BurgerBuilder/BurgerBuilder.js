import React, { useEffect } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { useState } from "react";

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
        purchasable: true
    });

    // useEffect(() => {
    //     let totalCount = Object.values(
    //             state.contents
    //         ).reduce((acc, curr) => (acc + curr), 0);

    //     setState(prevState => ({
    //         ...prevState,
    //         purchasable: !totalCount > 0 
    //     }));
    //     return () => {
            
    //     };
    // }, [state.contents]);

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

    const disabledInfo = {...state.contents};
    for(const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
        <Aux>
            <Burger contents={state.contents} />
            <BuildControls
                contentAdded={addContentHndlr}
                contentRemoved={removeContentHndlr}
                disabled={disabledInfo}
                price={state.totalPrice}
                purchasable={state.purchasable}
            />
        </Aux>
    );
};

export default BurgerBuilder
