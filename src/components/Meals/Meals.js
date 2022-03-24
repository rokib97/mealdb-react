import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Meals = ({ searchValue, handleAddToCart }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchValue]);
  // console.log(meals);
  return (
    <div className="container">
      <div className="row g-4 ">
        {meals &&
          meals.map((meal) => (
            <Item
              key={meal.idMeal}
              meal={meal}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Meals;
