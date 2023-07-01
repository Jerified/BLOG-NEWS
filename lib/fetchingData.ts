import axios from "axios"

const getArticles = async (category: string) => {
  const articlesResponse = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ee1d85cdcfd24430b4d538ad678aea83`);
  return articlesResponse.data.articles;
}

export const news = [
  {category: 'All', articles: () => getArticles('')},
  {category: 'Business', articles: () => getArticles('business')},
  {category: 'Sports', articles: () => getArticles('sports')},
  {category: 'Entertainment', articles: () => getArticles('entertainment')},
  {category: 'Technology', articles: () => getArticles('technology')},
  {category: 'Science', articles: () => getArticles('science')},
];