export const getNewsTopHeadLines = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`, { cache: 'no-store'})

    return newsData.json()
}

export const getNewsSearch = async (keyword: string) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_KEY}&q=${keyword}&pageSize=10`, { cache: 'no-store'})

    return newsData.json()
}

