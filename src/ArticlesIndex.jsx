export function ArticlesIndex(props) {
  return (
    <div>
      <h1>The News!!!!</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>Author: {article.author}</p>
          <p>Description: {article.description}</p>
          <p>Content: {article.content}</p>
        </div>
      ))}
    </div>
  );
}
