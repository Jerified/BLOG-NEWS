/* eslint-disable @next/next/no-img-element */
import { convertTimestamp } from '@/lib/dateFormat'
import React from 'react'
import { news } from '../../../lib/fetchingData';
import Link from 'next/link';

const TopicList = ({result, category}: any) => {
    console.log(result)

    const filteredResult = result.filter((article: any) => article.urlToImage !== null)
  return (
    <>
         <div className='pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredResult.map((article: any) => (
          <div className="text-black pb-2" key={article.title}>
            <Link href={`[title]`} as={`/category/${encodeURIComponent(article.title)}`} className='relative'>
              <img src={article?.urlToImage} alt={article.title} className="rounded-md h-[30vh] w-full"/>
              <h1 className='absolute top-2 left-2'>{category}</h1>
            </Link>
           <p className="pt-3 pb-4">{convertTimestamp(article.publishedAt)}</p>
           <h1 className='font-semibold'>{article.title}</h1>
           <h1 className='pt-4 line-clamp-3 text-base'>{article.description}</h1>
               
          </div>
        ))}
        {/* {news.map(({ category }) => (
          <div className="" key={category}>
            p. 
          </div>
        ))} */}
      </div>
    </>
  )
}

export default TopicList