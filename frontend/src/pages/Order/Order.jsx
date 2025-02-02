import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import "./Order.scss";

function Order() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="order">
      <div className="order-left">
        <h2>Delivery Information</h2>
        <div className="multiple-input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <div></div>
        <input type="text" placeholder="Street" />
        <div></div>
        <div className="multiple-input">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multiple-input">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
        <div></div>
      </div>

      <div className="order-right">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>$2</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount() + 2}</p>
          </div>
          <Link to={"/payment"}>
            <button className="payment-button">Proceed to Payment</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Order;
