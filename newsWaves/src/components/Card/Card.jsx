import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ article, onClick, index, articles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // 👈 use parent's onClick if passed
    } else {
      // fallback to internal navigation if onClick not provided
      navigate(`/article/${index}`, {
        state: { articles },
      });
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="articleImage">
        <img src={article.urlToImage} alt="" />
      </div>
      <div className="content">
        <h2 className="articleHeading">{article.title}</h2>
        {/* <p className="articleDescription">{article.description}</p> */}
      </div>
    </div>
  );
};

export default Card;
