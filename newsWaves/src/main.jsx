import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

// import Navbar from "./components/Navbar/Navbar.jsx";
import Articles from "./components/articles/Articles.jsx"; 
import Article from "./components/Article/Article.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Navbar /> */}
    {/* <Articles /> */}
    {/* <Article /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:index" element={<Article />} />
      </Routes>
    </Router>
  </StrictMode>
);

