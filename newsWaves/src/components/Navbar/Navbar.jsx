import React, { useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };


  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>NewsWaves</h1>
        </div>

        <div className="nav-items">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              className="input-box"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>

          </div>
          <Link to="/bookmarks" className="bookmarkBtn">
            <IoBookmark />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
