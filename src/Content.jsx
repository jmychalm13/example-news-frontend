import { useState, useEffect } from "react";
import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  return (
    <div>
      <ArticlesIndex />
    </div>
  );

  function handleArticlesIndex() {
    axios.get();
  }
}
