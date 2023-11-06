import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="login-form" className="login-bg" style={{ height: "100dvh" }}>
      <div className="container">
        <div className="login-form-content">
          <div className="login-form-sentence"></div>
          <div className="login-form">
            <h1>FitSpot</h1>
            <p>logo</p>
            <form className="form-body">
              <div className="input-section">
                <div className="input-section-fields">
                  <label for="uname">
                    <b>User email</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="User@gmail.com"
                    name="uname"
                    required
                  />
                  <br />

                  <label for="psw">
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                  />
                  <br />
                </div>

                <br />
                <Link to="Welcome">
                  <button type="submit" className="loginBtn">
                    Login
                  </button>
                </Link>
                <br />
              </div>

              <div className="forget-pw-section">
                <span className="psw">
                  Forgot{" "}
                  <a href="#" className="forget-pw-link">
                    password?
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

