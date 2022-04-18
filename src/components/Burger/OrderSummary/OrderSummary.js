import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const contentsSummary = Object.keys(props.contents)
        .map(cntntKey => (
            <li key={cntntKey}>
                <span style={{textTransform: "capitalize"}}>{cntntKey}</span>: {props.contents[cntntKey]}
            </li>
        ));


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following contents:</p>
            <ul>
                {contentsSummary}
            </ul>
            <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.cancelPurchase}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.continuePurchase}
            >CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;