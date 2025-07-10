
# 📰 NewsWaves – All Your News in One Place

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg?logo=node.js)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

> **newsWaves** offers a single platform to access articles from multiple sources, eliminating the need to visit individual news sites. Read any news article, get clean summaries, bookmark favorites, and even search using your voice!

---

##  Features

-  Unified platform for multiple news sources
-  Clean, readable article parsing using readability
-  Bookmark & store articles locally
-  Voice search integrated with microphone input
-  Infinite scroll for latest headlines
-  Fully responsive design
-  Share article links with one click

---

##  Screenshots

| Homepage | Article Page | Bookmarks |
|---------|---------------|------------|
| ![Home](./screenshots/home.png) | ![Article](./screenshots/article.png) | ![Bookmark](./screenshots/bookmark.png) |

---

##  Tech Stack

- **Frontend:** React, React Router, Vanilla CSS
- **Backend:** Node.js, Express, JSDOM, Readability
- **API:** [NewsAPI.org](https://newsapi.org/)

---

##  Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/newswaves.git
cd newswaves
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_NEWS_API_KEY=your_newsapi_key_here
```

### 4. Start the client & server

In one terminal:

```bash
npm run dev
```

In another (for parser server):

```bash
cd server
npm install
node index.js
```

---

## 🌐 API Usage

This project uses:

- **NewsAPI** for fetching articles
- **Local Server (Express + JSDOM)** for parsing readable article content

> Make sure the `apiKey` from [NewsAPI](https://newsapi.org) is added to `.env`.

---

##  Project Structure

```
newsWaves
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ Navbar.jsx with css
 ┃ ┃ ┣ Card.jsx with css
 ┃ ┃ ┣ Article.jsx with css
 ┃ ┃ ┣ Articles.jsx with css
 ┃ ┃ ┣ Search.jsx with css
 ┃ ┃ ┗ Bookmarks.jsx with css
 ┃ ┣ index.css
 ┃ ┗ main.jsx
 ┣ index.html
 ┣ eslint.config.js
 ┣ package.json 
backend
 ┃ ┗ parser.js
 ┃ ┗ package.json
 ┣ .env
 ┣ README.md
 ┗ package.json
 ┗ vite.config.js
```

---

##  Voice Search Integration

Implemented using:

```js
const recognition = new window.webkitSpeechRecognition();
```

- Accessible via search bar in the Navbar
- Press (mic)🎤 to start speaking and search articles directly

---

##  Bookmarks

- Bookmarked articles stored in `localStorage`
- Accessible at `/bookmarks`
- Automatically fetched using article titles as search queries

---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

---

##  Server Side (Article Parser)

This server extracts readable content from news article URLs.

### Setup

```bash
cd server
npm install
node index.js
```

### Dependencies

- `express`
- `axios`
- `jsdom`
- `@mozilla/readability`
- `cors`

### Sample Route

```http
GET /api/parse?url=https://example.com/article
```

---

## Author

-  **Prince Chaudhary**
- [GitHub](https://github.com/Huh-prince)

---

##  Show your support 

Give a ⭐️ if this project helped you!
