// import { Metadata } from 'next'
import {FC} from 'react'
// import NEWSAPI from 'newsapi'
const NEWSAPI = require('newsapi')
const newsapi = new NEWSAPI(`${process.env.API_KEY}`)

interface pageProps {
  params: {title: string}
}

import type { Metadata } from 'next'


// export async function generateMetadata({params}: pageProps) {

//   const { title } = params;

//   const article = await newsapi.v2.everything({
//     q: title,
//     language: 'en'
//   })
//   return {
//     title: article.title,
//     description: article.description
//   }
// }

const page: FC<pageProps> = async ({params}) => {

  const { title } = params
    console.log(params.title)

    const Title = decodeURIComponent(title).replace(/[^a-zA-Z0-9 ]/g, ' ')
    console.log(Title)
    

    try {
      const article = await newsapi.v2.topHeadlines({
        q: Title,
        language: 'en'
      })
      console.log(article);
      
    } catch (error) {
      console.log(error)
    }
  return (
    <>
      {/* <div className='text-black'>{article.title}</div> */}
      <p className='text-3xl text-black'>hello</p>
    </>
  )
}

export default page