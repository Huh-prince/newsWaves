import React from "react";
import "./card.css";

const Card = ({ article }) => {
  return (
    <>
      <div className="card">
        <div className="articleImage">
          <img src={article.urlToImage} alt="" />
        </div>
        <div className="content">
          <h2 className="articleHeading">
            Article Heading which is about 20 chars long...
          </h2>
          <p className="articleDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem
            cupiditate consequatur? Adipisci, debitis omnis! ...{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
