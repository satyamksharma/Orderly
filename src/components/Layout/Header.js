import React from "react";
import foodImage from "../../assets/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>Orderly</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img
                    src={foodImage}
                    alt='food-img'
                />
            </div>
        </>
    );
};

export default Header;
