import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
    return (
        <form
            action=''
            className={classes.form}
        >
            <Input
                label='Qty.'
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "7",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
