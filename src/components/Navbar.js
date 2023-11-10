import React from "react";

const Navbar = () =>{
  return (
    <div className="topNavbar">
      <ul>
        <li>
          <span className="current">
            Home
          </span>
        </li>
        <li>
          <span>News</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
        <li>
          <span>About</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

