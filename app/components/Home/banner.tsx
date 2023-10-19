
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Banners from './Banners'
import { getNewsTopHeadLines } from '@/app/api/fetchData/route'
import { TNews, removeDuplicate } from '@/lib/fetchingData'



const Banner = async () => {

  const news = await getNewsTopHeadLines()
  const filteredArticle = removeDuplicate(news)

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  )
  const item = response.data.articles.slice(0, 5)
  console.log(item[0]);

  return (
    <div className='relative'>
      {/* {result.map((item: any) => { */}
        {/* return ( */}
          {/* <img className='w-full h-[60vh] md:h-[80vh]' src={item[0]?.urlToImage} alt={item.title} loading='lazy' /> */}
         <Banners item={item} />
         {/* <bannerDisplay item={item} /> */}
    </div>
  )
}

export default Banner