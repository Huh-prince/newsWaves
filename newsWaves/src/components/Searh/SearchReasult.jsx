import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./searchreasult.css";
import Card from "../Card/Card";

function SearchResults() {
  const [articles, setArticles] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${"apiKey"}`
      )
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.articles || []);
        });
    }
  }, [query]);

  return (
    <div className="search-results">
      <h2>Search Results for: {query}</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <Card
            key={index}
            article={article}
            index={index}
            articles={articles}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
