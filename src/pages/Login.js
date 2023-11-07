import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    
    e.preventDefault();
    if (username === "" || password === "") {
      setErrorMessage("Username and password are required");
    } else if (username !== "testUser" || password !== "abc123") {
      setErrorMessage("Invalid username or password");
    } else {
       window.location.href = "/Welcome";
      console.log("Welcome!");
    }
  };

  return (
    <div id="login-form" className="login-bg" style={{ height: "100dvh" }}>
      <div className="container">
        <div className="login-form-content">
          <div className="login-form-sentence"></div>
          <div className="login-form">
            <h1>FitSpot</h1>
            <p>logo</p>
            <form className="form-body" onSubmit={handleLogin}>
              <div className="input-section">
                <div className="input-section-fields">
                  <label htmlFor="uname">
                    <b>User email</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="User@gmail.com"
                    name="uname"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <br />

                  <label htmlFor="psw">
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                </div>

                <br />
                <button type="submit" className="loginBtn">
                  Login
                </button>
                <br />
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
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
