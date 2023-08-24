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

  useEffect(handleArticlesIndex, []);

  return (
    <div>
      <h1>Welcome to my News Page</h1>
      <div>
        Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button onClick={handleArticlesIndex}>Search</button>
      </div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
