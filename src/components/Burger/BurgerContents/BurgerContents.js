import React from "react";
import PropTypes from "prop-types";

import classes from "./BurgerContents.css";

const BurgerContent = props => {
    let content = null;

    switch (props.type) {
        case ("bread-bottom"):
            content = <div className={classes.BreadBottom}></div>;
            break;
        case ("bread-top"):
            content = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ("meat"):
            content = <div className={classes.Meat}></div>
            break;
        case ("cheese"):
            content = <div className={classes.Cheese}></div>
            break;
        case ("salad"):
            content = <div className={classes.Salad}></div>
            break;
        case ("bacon"):
            content = <div className={classes.Bacon}></div>
            break;
        default:
            content = null;
            // break;
    }
    return content;
};

BurgerContent.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerContent;