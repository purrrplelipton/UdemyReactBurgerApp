import React from "react";

import classes from "./Burger.css";
import BurgerContents from "./BurgerContents/BurgerContents";

const Burger = (props) => {
    let trnsfrmdContents = Object.keys(props.contents)
        .map(cntntKey => (
            [...Array(props.contents[cntntKey])].map((_,i) => (
                    <BurgerContents key={cntntKey + i} type={cntntKey}/>
            ))
        )).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(trnsfrmdContents.length === 0) {
        trnsfrmdContents = <p>Add content(s)!</p>
    };

    return (
        <div className={classes.Burger}>
            <BurgerContents type="bread-top"/>
            {trnsfrmdContents}
            <BurgerContents type="bread-bottom"/>
        </div>
    );
};

export default Burger;