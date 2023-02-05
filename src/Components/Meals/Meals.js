import React, { useState } from "react";
import Meal from "./Meal";

import classes from "./Meals.module.css";

const meals = [
  {
    id: 1,
    mealName: "Sushi",
    mealExp: "Finest fish and veggies",
    mealPrice: "22.99",
    total: +0,
    totalAmount: +0,
    isAdded: false,
  },
  {
    id: 2,
    mealName: "Schnitzel",
    mealExp: "A german speciality",
    mealPrice: "16.50",
    total: +0,
    totalAmount: +0,
    isAdded: false,
  },
  {
    id: 3,
    mealName: "Barbecue Burger",
    mealExp: "American, raw, meaty",
    mealPrice: "12.99",
    total: +0,
    totalAmount: +0,
    isAdded: false,
  },
  {
    id: 4,
    mealName: "Green Bowl",
    mealExp: "Healthy...and gree...",
    mealPrice: "18.99",
    total: +0,
    totalAmount: +0,
    isAdded: false,
  },
];

const Meals = (props) => {
  const [newMeal, setNewMeal] = useState(meals);

  return (
    <div className={classes["meals-container"]}>
      {newMeal.map((meal) => {
        return (
          <Meal
            id={meal.id}
            title={meal.mealName}
            information={meal.mealExp}
            price={meal.mealPrice}
            isAdded={meal.isAdded}
            key={meal.id}
            item={newMeal}
          />
        );
      })}
    </div>
  );
};

export default Meals;
