/* eslint-disable @next/next/no-img-element */
import { convertTimestamp } from '@/lib/dateFormat'
import React from 'react'
import { news } from '../../../lib/fetchingData';
import Link from 'next/link';

const TopicList = ({result, cat}: any) => {
    console.log(cat)
  return (
    <div>
         <div className='pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {result.map((article: any) => (
          <div className="text-black pb-4" key={article.title}>
            <Link href={`/category/${article.title}`}>
            <img src={article?.urlToImage} alt={article.title} className="rounded-md h-[30vh] w-full" />
            </Link>
            <p className="pt-3 pb-4">{convertTimestamp(article.publishedAt)}</p>
            <h1 className='font-semibold'>{article.title}</h1>
            <h1 className='pt-4 line-clamp-3'>{article.description}</h1>
            {/* <h1 className='pt-4 line-clamp-3'>{cat}</h1> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicList