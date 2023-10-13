// 'use server'

import axios from "axios"

const getArticles = async (category: string) => {
  try {
    const articlesResponse = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ee1d85cdcfd24430b4d538ad678aea83`);
    return articlesResponse.data.articles;
  } catch (error) {
    console.log(error);
    return []
  }
}

const categories = ["business", "sports", "entertainment", "technology", "science"]

const randomCategory = () => categories[Math.floor(Math.random() * categories.length)]

const randomCat = randomCategory()

export const news = [
  // const me = 
  {category: 'All', articles: () => getArticles(randomCat), cat: randomCat},
  {category: 'Business', articles: () => getArticles('business')},
  {category: 'Sports', articles: () => getArticles('sports')},
  {category: 'Entertainment', articles: () => getArticles('entertainment')},
  {category: 'Technology', articles: () => getArticles('technology')},
  {category: 'Science', articles: () => getArticles('science')},
];