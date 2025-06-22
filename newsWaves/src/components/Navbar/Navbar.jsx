import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>NewsWaves</h1>
        </div>

        <div className="nav-items">
          <div className="search-box">
            <input type="text" placeholder="Search" className="input-box"/>
            <button className="search-btn">
                Search
            </button>
          </div>
          <div className="link">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;







