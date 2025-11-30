import React from "react";
import { useState } from "react";
const MedicineLogin = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  return (
    <>
      <div
        className={`container ${rightPanelActive ? "right-panel-active" : ""}`}
        id="container"
      >
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <button type="button" className="social">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social">
                <i className="fab fa-google-plus-g"></i>
              </button>
              <button type="button" className="social">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <button type="button" className="social">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
            <a href="/">Forgot your password?</a>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <footer>
          <p></p>
        </footer>
      </div>
    </>
  );
};

export default MedicineLogin;
