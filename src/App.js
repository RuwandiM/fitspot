import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
