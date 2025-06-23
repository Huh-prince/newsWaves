import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./articles.css";
import Card from "../Card/Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${'apikey'}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  function openArticle(index) {
    navigate(`/article/${index}`, { state: { articles } }); // 👈 optional state
  }

  return (
    <>
      <Navbar />
      <div className="app">
        <h1 className="pageHeading">Latest News</h1>
        <div className="articles">
          {articles.map((article, index) => (
            <Card
              key={index}
              article={article}
              onClick={() => openArticle(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
