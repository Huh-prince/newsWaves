import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import "./bookmarks.css"; // optional styling
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
setArticles(saved);

}, []);


  function openArticle(index) {
    navigate(`/article/${index}`, { state: { articles } });
  }

  return (
    <>
      <Navbar />
      <div className="app">
        <h1 className="pageHeading">Bookmarked Articles</h1>
        <div className="articles">
          {articles.length === 0 ? (
            <p>No bookmarks yet!</p>
          ) : (
            articles.map((article, index) => (
              <Card key={index} article={article} onClick={() => openArticle(index)} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
