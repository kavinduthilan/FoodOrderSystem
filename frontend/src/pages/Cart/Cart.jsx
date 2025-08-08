import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/CartSlice";

const Cart = () => {
  const food_list = useSelector((state) => state.cart.food_list);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const quantity  = useSelector((state)=> state.cart.quantity);

  const dispatch = useDispatch();
  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> 
        <br />
        <hr />

        {
          food_list.map((item, index) => {
            if (quantity[item._id] > 0) {
              return (
                <div className="cart-items-list" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{quantity[item._id]}</p>
                  <p>{item.price * quantity[item._id]}</p>
                  <p className="remove" onClick={() => dispatch(removeFromCart({ _id: item._id }))}>X</p>
                </div>
              );
            }
            return null;
          })
        }
      </div>
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>$ {totalAmount}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>$2</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${totalAmount + 2}</p>
          </div>
          <Link to={"/order"}>
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
