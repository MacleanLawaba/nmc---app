import React from "react";

const SignupForm = () => {
  return (
    <>
      <div className="signupContainer">
        <h2>Sign Up</h2>
        <form action="@" className="signup-form">
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
        </form>
      </div>
    </>
  );
};

export default SignupForm;
