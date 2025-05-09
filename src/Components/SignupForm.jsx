import React from "react";
import "../LoginForm.css";
import "./signupForm.css";

const SignupForm = () => {
  return (
    <>
      <div className="signupContainer">
        <form action="@" className="signup-form">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              require
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-num">Reg. Number</label>
            <input
              type="email"
              id="reg-num"
              placeholder="Enter your Reg. number"
              require
            />
          </div>
          <div className="form-group">
            <label htmlFor="set-password">Password</label>
            <input
              type="password"
              id="set-password"
              placeholder="Enter password"
              require
            />
          </div>
          <div className="form-group">
            <label htmlFor="comfirm-password">Comfirm password</label>
            <input
              type="password"
              id="comfirm-password"
              placeholder="comfirm password"
              require
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
          <p className="register-link">
            Alread have an account &nbsp;
            <a href="@" className="register-here">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
