import { Link, useLoaderData } from "react-router-dom";
import { getArticle } from "../utils/utils";
// import './Details.css';

export async function loader({ params }) {
  return getArticle(params.articleId);
}

function Article() {
  const article = useLoaderData();

  return (
    <article className="details-section">
      <dl>
        <dt>Title:</dt>
        <dd>{article.title}</dd>

        <dt>By:</dt>
        <dd>{article.byline}</dd>

        <dt>Published Date:</dt>
        <dd>
          {new Date(article.published_date)
            .toLocaleString()
            .split(",")
            .join(" ---")}
        </dd>

        <dt>Last Updated:</dt>
        <dd>
          {new Date(article.updated_date)
            .toLocaleString()
            .split(",")
            .join(" ---")}
        </dd>

        <dt>Section:</dt>
        <dd>{article.section}</dd>

        <dt>URL:</dt>
        <dd>
          <a href={article.short_url} target="_blank" rel="noreferrer">
            {article.short_url}
          </a>
        </dd>

        <dt>Picture:</dt>
        <dd>
          <a href={article.multimedia[0].url} target="_blank" rel="noreferrer">
            {article.multimedia[0].url}
          </a>
        </dd>

        <dt>Abstract:</dt>
        <dd>{article.abstract}</dd>
      </dl>
      <Link to="/">
        <button>Back</button>
      </Link>
    </article>
  );
}

export default Article;
