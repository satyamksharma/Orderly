import React from "react";
import foodImage from "../../assets/food.jpg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Orderly</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-img"]}>
                <img
                    src={foodImage}
                    alt='food-img'
                />
            </div>
        </>
    );
};

export default Header;
