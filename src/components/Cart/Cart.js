import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length;

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["btn--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                {hasItems > 0 && <button className={classes.btn}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
