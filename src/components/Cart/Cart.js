import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes["card-items"]}>
            {[{ id: "c1", name: "Butter CHicken", amount: 3, price: 300.0 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>330</span>
            </div>
            <div className={classes.action}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;
