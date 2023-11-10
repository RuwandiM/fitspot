import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login= () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // conect with the API and do authentication  
  const handleLogin = async(e) =>{
    try{
      const response = await axios.post("http://localhost:5000/api/login",{
        username,
        password,
      },{
        headers:{
          "Content-type":"application/json",
        },
      });
      const data = response.data;
      if(data.success){
        navigate("/Welcome", {state:{name:username}});
      }else{
        console.log("come")
        setErrorMessage("Invalid username or password");
      }
    }catch(error){
      setErrorMessage("Invalid username or password");
    }
  }


  return (
    <div id="login-form" className="login-bg" style={{ height: "100dvh" }}>
      <div className="container">
        <div className="login-form-content">
          <div className="login-form-sentence"></div>
          <div className="login-form">
            <h1>FitSpot</h1>
            <p>logo</p>
            <div className="form-body" >
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
                <button onClick={handleLogin} className="loginBtn">
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
                  <span href="" className="forget-pw-link">
                    password?
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
