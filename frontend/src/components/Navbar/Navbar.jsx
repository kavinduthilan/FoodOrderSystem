import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.scss";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="" />
      </div>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setState("home")}
          className={state === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setState("menu")}
          className={state === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#contact"
          onClick={() => setState("contact")}
          className={state === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <div className="cart">
          <Link to="/cart">
            <img src={assets.cart} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
