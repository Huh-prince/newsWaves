import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

// import Navbar from "./components/Navbar/Navbar.jsx";
import Articles from "./components/Articles/Articles.jsx"; 
import Article from "./components/Article/Article.jsx";
import SearchResults from "./components/Searh/SearchReasult.jsx";
import Bookmarks from "./components/Bookmark/Bookmarks.jsx";

createRoot(document.getElementById("root")).render(
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:index" element={<Article />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
      </Routes>
    </Router>
);

