import { useContext } from "react";
import "./FoodItem.scss";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, description, image, price }) => {
  const { amount, addToCart, removeFromCart } = useContext(StoreContext);

  if (!amount) {
    // console.error("amount is undefined");
    return null; 
  }

  return (
    <div className="food-item">
      <img src={image} alt="" />
      <div className="food-item-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        {!amount[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-amount">
            <button className="remove-btn" onClick={() => removeFromCart(id)}>
              -
            </button>
            <p>{amount[id]}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
