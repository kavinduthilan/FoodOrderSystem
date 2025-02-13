import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.scss";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log(food_list);

  return (
    <div className="food-display">
      <h1 className="food-display-title">Our top dishes</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
