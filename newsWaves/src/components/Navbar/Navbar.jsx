import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [query, setQuery] = useState("");
  // const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // const handleVoiceSearch = () => {
  //   const SpeechRecognition =
  //     window.SpeechRecognition || window.webkitSpeechRecognition;

  //   if (!SpeechRecognition) {
  //     alert("Voice search is not supported in this browser.");
  //     return;
  //   }

  //   const recognition = new SpeechRecognition();
  //   recognition.lang = "en-US";
  //   recognition.interimResults = false;

  //   recognition.start();
  //   setListening(true);

  //   recognition.onresult = (event) => {
  //     const spokenQuery = event.results[0][0].transcript;
  //     setQuery(spokenQuery);
  //     setListening(false);
  //     navigate(`/search?q=${encodeURIComponent(spokenQuery)}`);
  //   };

  //   recognition.onerror = () => {
  //     setListening(false);
  //     alert("Voice recognition failed.");
  //   };

  //   recognition.onend = () => setListening(false);
  // };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>NewsWaves</h1>
        </div>

        <div className="nav-items">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              className="input-box"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
            {/* <button className="voice-btn" onClick={handleVoiceSearch}>
              🎤 {listening ? "Listening..." : ""}
            </button> */}
            {/* <button onClick={() => navigate("/bookmarks")}>Bookmarks</button> */}

          </div>
          <div className="link">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
