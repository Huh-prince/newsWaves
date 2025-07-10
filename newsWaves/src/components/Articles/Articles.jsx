import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./articles.css";
import Card from "../Card/Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  console.log(import.meta.env);
  

  const fetchArticles = useCallback(async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${page}&apiKey=${apiKey}`
      );
      const data = await res.json();
      if (data.articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prev) => [...prev, ...data.articles]);
      }
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  }, [page,apiKey]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Intersection Observer to trigger loading
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [hasMore]);

  function openArticle(index) {
    navigate(`/article/${index}`, { state: { articles } });
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

        {hasMore && (
          <div className="loading" ref={loaderRef}>
            <p>Loading more articles...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Articles;
