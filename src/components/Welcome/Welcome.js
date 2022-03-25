import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="welcome-section my-5 container">
      <h1>Welcome to TheFakeDB</h1>
      <p>
        Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
        around the world.
        <br />
        We also offer a free JSON API for anyone wanting to use it, with
        additional features for subscribers.
      </p>
      <button className="btn btn-lg btn-success">Subscribe</button>
    </div>
  );
};

export default Welcome;
