import React from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredients.css";

const BurgerIngredient = ({type}) => {
    let ingredient = null;

    type == "bread-bottom" ?
        ingredient = <div className={classes.BreadBottom}></div> :
    type == "bread-top" ?
        ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        ) :
    type == "meat" ?
        ingredient = <div className={classes.Meat}></div> :
    type == "cheese" ? 
        ingredient = <div className={classes.Cheese}></div> :
    type =="salad" ?
        ingredient = <div className={classes.Salad}></div> :
    type = "bacon" ?
        ingredient = <div className={classes.Bacon}></div> :
    ingredient = null;

    return ingredient;
};

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;