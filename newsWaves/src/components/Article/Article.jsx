import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

import "./article.css";
import Navbar from "../Navbar/Navbar.jsx";

function Article() {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (location.state?.articles) {
      setArticle(location.state.articles[parseInt(index)]);
    } else {
      // fallback: fetch and pick one by index
      fetch("http://localhost:2020/api/parse")
        .then((res) => res.json())
        .then((data) => {
          setArticle(data.articles[parseInt(index)]);
        });
    }
  }, [index, location.state]);

  // const articleUrl = window.location.href; // or use article ID/slug
  // const articleUrl = article?.url;
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  const isBookmarked = saved.some(item => item.url === article?.url);
  setBookmarked(isBookmarked);
}, [article]);



  const [parsedContent, setParsedContent] = useState("");
  useEffect(() => {
    if (!article?.url) return;

    fetch(
      `http://localhost:2020/api/parse?url=${encodeURIComponent(article.url)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setParsedContent(data.content);
      })
      .catch((err) => console.error("Failed to fetch parsed content:", err));
  }, [article?.url]);
  // console.log(parsedContent);

 const articleKey = "bookmarks";

function toggleBookmark() {
  const saved = JSON.parse(localStorage.getItem(articleKey) || "[]");

  const exists = saved.find((a) => a.url === article.url);

  let updated;
  if (exists) {
    updated = saved.filter((a) => a.url !== article.url);
  } else {
    updated = [...saved, article]; // 🟢 Save full article object
  }

  localStorage.setItem(articleKey, JSON.stringify(updated));
  setBookmarked(!exists);
}


  function share() {
    const linkToShare = window.location.href;

    navigator.clipboard
      .writeText(linkToShare)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy the link");
        console.error(err);
      });
  }

  if (!article) return <p>Loading...</p>;
  return (
    <>
      <Navbar />
      <div className="article">
        <img src={article.urlToImage} alt="" />

        <div className="articleDescription">
          <h1>{article.title}</h1> <br />
          <p className="content"
            dangerouslySetInnerHTML={{
              __html: parsedContent || article.content,
            }}
          ></p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="articleDetails">
          <p>Author : &nbsp; &nbsp; &nbsp; {article.author}</p>
          <p>Date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {article.publishedAt}</p>
          <p>Source : &nbsp; &nbsp; &nbsp; {article.source.name}</p>
        </div>
        <br />
        <br />

        <div className="comments"></div>
        <div className="bottomBar">
          <div className="author">
            <p>Source : &nbsp; &nbsp; {article.source.name}</p>
          </div>
          <div className="buttons">
            <button onClick={share}>
              <IoShareSocialOutline />
            </button>
            <button onClick={toggleBookmark}>
              {bookmarked ? <IoBookmark /> : <IoBookmarkOutline />}
            </button>
            <button onClick={() => navigate(-1)}>
              <MdNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
