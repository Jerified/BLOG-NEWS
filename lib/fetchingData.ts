export type TNews = {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export const removeDuplicate = (articles: TNews[]) => {
  const randomArticle: TNews[] = articles?.articles
  const filteredArtcles = randomArticle.filter(article => article?.source.id !== null)
  return filteredArtcles

}