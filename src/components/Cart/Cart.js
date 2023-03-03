import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Butter Chicken", amount: 3, price: 300.0 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>330</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["btn--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                <button className={classes.btn}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
