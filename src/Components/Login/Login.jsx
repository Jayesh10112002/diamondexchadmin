import React from "react";
import "./Login.css";
import { IoLogInOutline } from "react-icons/io5";
const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img
          src="https://sitethemedata.com/sitethemes/d247.com/front/logo.png" /* Replace this with the actual path to the logo */
          alt="Diamond Exchange Logo"
          className="logo-image"
        />
      </div>
      <div className="login-box">
        {/* Logo */}

        {/* Sign-in Title */}
        <h3 className="sign-in-title">Sign In</h3>

        {/* Login Form */}
        <form className="login-form">
          <input type="text" placeholder="Admin ID" className="login-input" />
          <input
            type="password"
            placeholder="********"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login <span className="login-icon"><IoLogInOutline/></span>
          </button>
        </form>

        {/* Footer */}
      </div>
      <div className="footer">
        <p>
          © ADMINDIAMOND &nbsp;{""}
         info@admindiamond.com
        </p>
      </div>
    </div>
  );
};

export default Login;
