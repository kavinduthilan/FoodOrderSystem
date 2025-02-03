import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.scss";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = ({ setShowSignIn }) => {
  const [state, setState] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

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
        {!token ? (
          <button className="sign-in-btn" onClick={() => setShowSignIn(true)}>
            Sign in
          </button>
        ) : (
          <div className="navbar-right-profile">
            <img id="profile" src={assets.profile} alt="" />

            <ul className="navbar-right-profile-dropdown">
              <li onClick={logOut}>
                <img src={assets.logOut} alt="" />
                <p>LogOut</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
