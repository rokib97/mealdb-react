import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Item.css";

const Item = ({ meal, handleAddToCart }) => {
  const { strMealThumb, strMeal, strArea, strCategory } = meal;
  // console.log(meal);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card shadow-lg cart-container">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal.slice(0, 20)}</h5>
          <p className="card-text">Area: {strArea}</p>
          <p className="card-text">Catagory: {strCategory}</p>
          <button
            onClick={() => handleAddToCart(meal)}
            className="btn w-100 btn-success"
          >
            Add to Cart
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
