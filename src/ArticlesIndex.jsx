export function ArticlesIndex(props) {
  return (
    <div>
      <h2>All Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {props.articles.map((article) => (
          <div className="rounded mb-4 shadow-md border-2 p-4" key={article.title}>
            <img className="aspect-[4/3] object-cover" src={article.urlToImage} />
            <h3 className="font-bold text-xl mb-3">{article.title}</h3>
            <p className="mb-3 italic">Author: {article.author}</p>
            {/* <p>Description: {article.description}</p> */}
            <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: article.description }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
