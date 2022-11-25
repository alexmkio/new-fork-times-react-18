let articles;

export const getData = async (section) => {
  let url = `https://api.nytimes.com/svc/topstories/v2/`;
  let apiKey = `nsUlzDJpStL8BIifzQPAK0B8SGZP9gO3`;
  let response = await fetch(`${url}${section}.json?api-key=${apiKey}`);
  articles = await checkForError(response);
  sortByPublishedDesc();
  return articles;
};

export const getArticle = async (id) => {
  if (!articles) await getData("home");
  let article = articles.find(
    (article) => article.short_url.split("/")[3] === id
  );
  if (!article) throw new Error("Not Found");
  return article;
};

const checkForError = async (response) => {
  if (!response.ok) {
    throw new Error(response);
  } else {
    let data = await response.json();
    articles = data.results;
    return data.results;
  }
};

export const sortByPublishedAsc = () => {
  articles.sort((a, b) => {
    return new Date(a.published_date) - new Date(b.published_date);
  });
};

export const sortByPublishedDesc = () => {
  articles.sort((a, b) => {
    return new Date(b.published_date) - new Date(a.published_date);
  });
};

export const sortByUpdatedAsc = () => {
  articles.sort((a, b) => {
    return new Date(a.updated_date) - new Date(b.updated_date);
  });
};

export const sortByUpdatedDesc = () => {
  articles.sort((a, b) => {
    return new Date(b.updated_date) - new Date(a.updated_date);
  });
};
