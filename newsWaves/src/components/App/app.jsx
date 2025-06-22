import React from "react";
import "./app.css";
import Card from "../Card/Card.jsx";


const App = () => {
  return (
    <div className="app">
      <h1 className="pageHeading">Latest News</h1>
      <div className="articles">
        <a href="https://www.google.com"><Card article = {{urlToImage: "https://images.unsplash.com/photo-1735585142563-1fea15aba663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZ"}} /></a>
        <a href="https://www.google.com"><Card article = {{urlToImage: "https://images.unsplash.com/photo-1735585142563-1fea15aba663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZ"}} /></a>
        <a href="https://www.google.com"><Card article = {{urlToImage: "https://images.unsplash.com/photo-1735585142563-1fea15aba663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZ"}} /></a>
        <Card article = {{urlToImage: "https://plus.unsplash.com/premium_photo-1749723954202-234f17ffb9ca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
        <Card article = {{urlToImage: "https://plus.unsplash.com/premium_photo-1721076216277-22de7111cd06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"}} />
        <Card article = {{urlToImage: "https://images.unsplash.com/photo-1749741355867-8d40976f2bfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"}} />
        <Card article = {{urlToImage: "https://plus.unsplash.com/premium_photo-1749984933574-caa98e06a9d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"}} />
        <Card article = {{urlToImage: "https://plus.unsplash.com/premium_photo-1748521184707-41ce4196cc0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"}} />
      </div>
    </div>
  );
};

export default App;
