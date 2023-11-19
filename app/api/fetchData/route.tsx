export const getNewsTopHeadLines = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`, { cache: 'no-store'})

    console.log(newsData);
    return newsData.json()

    
}

export const getNewsSearch = async (keyword: string) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_KEY}&q=${keyword}`, { cache: 'no-store'})
    console.log(newsData.json());
    

    return newsData.json()
}


export const news = [
    // const me = 
    {category: 'All', articles: () => getNewsSearch('')},
    {category: 'Business', articles: () => getNewsSearch('business')},
    {category: 'Sports', articles: () => getNewsSearch('sports')},
    {category: 'Entertainment', articles: () => getNewsSearch('entertainment')},
    {category: 'Technology', articles: () => getNewsSearch('technology')},
    {category: 'Science', articles: () => getNewsSearch('science')},
  ];

  console.log(news[1].articles().then((art) => console.log(art)))
