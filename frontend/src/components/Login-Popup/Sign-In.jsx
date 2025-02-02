import React, { useState } from "react";
import "./Sign-In.scss";

function SignIn() {
  const [currState, setCurrState] = useState("SignIn");
  return (
    <div className="sign-in">
      <form className="sign-in-container">
        <h2>{currState === "SignIn" ? "Sign In" : "Sign Up"}</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {currState === "SignUp" ? (
          <input type="password" placeholder="Confirm Password" />
        ) : null}

        <button className="login-in-btn">
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
}

export default SignIn;
