import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  getData,
  sortByPublishedAsc,
  sortByPublishedDesc,
  sortByUpdatedAsc,
  sortByUpdatedDesc,
} from "../../utils/utils";
import Card from "../card/card";
import "./list.css";

export async function loader() {
  const articles = await getData("home");
  return { articles };
}

function List() {
  const { articles } = useLoaderData();
  const [sorted, setSorted] = useState("pubDesc");

  const sortArticles = (event) => {
    if (event === "pubAsc") {
      sortByPublishedAsc(articles);
      setSorted("pubAsc");
    }
    if (event === "pubDesc") {
      sortByPublishedDesc(articles);
      setSorted("pubDesc");
    }
    if (event === "upAsc") {
      sortByUpdatedAsc(articles);
      setSorted("upAsc");
    }
    if (event === "upDesc") {
      sortByUpdatedDesc(articles);
      setSorted("upDesc");
    }
  };

  return (
    <>
      <h2>Articles</h2>

      <label>
        Sort By
        <select
          onChange={(event) => sortArticles(event.target.value)}
          defaultValue={{ sorted }}
        >
          <option value={"pubDesc"}>Published - descending</option>
          <option value={"pubAsc"}>Published - ascending</option>
          <option value={"upDesc"}>Updated - descending</option>
          <option value={"upAsc"}>Updated - ascending</option>
        </select>
      </label>

      {articles.length ? (
        <ul className="cards">
          {articles.map((article) => {
            let unique = article.short_url.split("/")[3];
            return (
              <li key={unique}>
                <Link to={`article/${unique}`}>
                  <Card key={`${unique}`} article={article} />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Articles</p>
      )}
    </>
  );
}

export default List;
