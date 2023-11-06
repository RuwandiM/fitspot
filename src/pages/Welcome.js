import React from "react";
import Navbar from "../components/Navbar.js";

function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="welcome-page-content">
        <div className="welcome-bg" style={{ height: "100dvh" }}>
          <div className="welcome-page-content-text">
            <div className=""></div>
            <div className="container">
              <h2 className="memeber-name">Hi! <span className="name">Ruwandi</span></h2>
              <br/>
              <h2>Welcome to FitSpot</h2>
              <p>
                At FitSpot, we believe that fitness is not just a destination;
                it's a way of life. We are dedicated to helping you achieve your
                fitness goals, whether you're a beginner or a seasoned athlete.
                Our state-of-the-art facilities, experienced trainers, and
                motivating community are here to support you every step of the
                way.
              </p>
              <br/>
              <h2>Our mission</h2>
              <p>
                our mission is to inspire and
                empower individuals to lead healthier lives. We strive to create
                a positive and inclusive fitness environment where everyone
                feels welcome and motivated to achieve their fitness
                aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
