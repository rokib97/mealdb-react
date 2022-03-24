import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="cart-details">
      <img src={cart.strMealThumb} alt="" />
      <div className="details">
        <h3>{cart.strMeal}</h3>
        <p>{cart.strInstructions.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default Cart;
