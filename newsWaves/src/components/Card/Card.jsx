import React from "react";
import "./card.css";

const Card = ({ article, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="articleImage">
          <img src={article.urlToImage} alt="" />
        </div>
        <div className="content">
          <h2 className="articleHeading">
            {article.title}
          </h2>
          <p className="articleDescription">
            {article.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
