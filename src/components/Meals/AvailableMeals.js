import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Butter Chicken",
        description: "Finest chicken with mouth watering gravy",
        price: 300.0,
    },
    {
        id: "m2",
        name: "Masala Dosa",
        description: "A South Indian signature dish",
        price: 150.0,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "Fully loaded burger with multiple options",
        price: 120.0,
    },
    {
        id: "m4",
        name: "Garlic Naan",
        description: "Classic Indian bread with garlic butter and herbs",
        price: 66.0,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <ul>{mealsList}</ul>
        </section>
    );
};

export default AvailableMeals;
