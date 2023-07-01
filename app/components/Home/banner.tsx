
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Banners from './Banners'



const Banner = async () => {
  // const apiKey = 'ee1d85cdcfd24430b4d538ad67aea83'
  // '73e579b21d061ad2fe3ca76db81e48b8'

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`

    // , {
    //     params: {
    //         apiKey,
    //         // lang: 'en',
    //         // topic: 'technology'
    //     }
    // }
  )
  const item = response.data.articles.slice(0, 5)
  // console.log(result);

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