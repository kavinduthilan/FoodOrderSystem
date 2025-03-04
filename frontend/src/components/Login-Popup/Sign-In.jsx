import React, { useContext, useState } from "react";
import "./Sign-In.scss";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const SignIn = ({ setShowSignIn }) => {
  const [currState, setCurrState] = useState("SignIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { url, setToken } = useContext(StoreContext);

  const login = async () => {
    let newUrl = url;
    try {
      if (currState === "SignIn") {
        newUrl += "/login";
      } else {
        newUrl += "/signUp";
      }

      const res = await axios.post(newUrl, {
        email,
        password,
      });

      console.log(res);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setShowSignIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <form className="sign-in-container">
        <h2>{currState === "SignIn" ? "Sign In" : "Sign Up"}</h2>

        <img src={assets.close} alt="" onClick={() => setShowSignIn(false)} />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {currState === "SignUp" ? (
          <input type="password" placeholder="Confirm Password" />
        ) : null}

        <button type="button" className="login-in-btn" onClick={login}>
          {currState === "SignIn" ? "Sign In" : "Sign Up"}
        </button>
        {currState === "SignIn" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrState("SignUp")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("SignIn")}>click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
