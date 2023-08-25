import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleArticlesIndex() {
    axios.get(`http://localhost:3000/articles.json?search=${searchTerm}`).then((response) => {
      setArticles(response.data.articles);
    });
  }

  useEffect(handleArticlesIndex, [searchTerm]);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Welcome to my News Page</h1>
      <div>
        Search:{" "}
        <input
          className="border-4 border-sky-500 border-solid rounded-md hover:border-double border-violet-700 bg-violet-200"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
