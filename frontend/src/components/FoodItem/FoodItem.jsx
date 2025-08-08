import { useState } from "react";
import "./FoodItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";

const FoodItem = ({ id, name, description, image, price }) => {
  const [quantity, setQuantity] = useState(1);
  // const [isShow, setIsShow] = useState(false);

  const nb = useSelector((state)=> state.cart.quantity[id] || 0);
  

  const dispatch = useDispatch();

  const handleAddToCart = () =>  {
    dispatch(addToCart({
      id,
      price,
      quantity
    }));
    // setIsShow(true);
  }

  



  const decrement = () => {
    const newQuantity =  quantity - 1;
    setQuantity(newQuantity);
    dispatch(addToCart({id, price, quantity: newQuantity}))
  };

  const increment =  () => {
    const newQuantity = quantity+1;
    setQuantity(newQuantity);
    dispatch(dispatch(addToCart({
      id,
      price,
      quantity: newQuantity
    })))
  };

  return (
    <div className="food-item">
      <img src={image} alt="" />
      <div className="food-item-content">
        <h2>{name}</h2>
        <div className="description">{description}</div>
        {/* <div className="price">${price}</div> */}

        <div className="food-item-amount">
        <div className="price">${price}</div>
          

          <div className="add-to-cart-btn" hidden={nb > 0}>
            <button className="add-btn" onClick={handleAddToCart}> 
              Add to Cart
            </button>
          </div>

          {nb > 0  && (
            <div className="food-item-amount-controls">
              <button
                className="decrement-btn"
                onClick={decrement}
              >
                -
              </button>

              <span className="quantity">{quantity}</span>
              <button
                className="increment-btn"
                onClick={increment}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
