'use client'

import { useEffect, useState } from 'react';
import { news } from '../../../lib/fetchingData';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import TopicList from './TopicList';

const Topic =  () => {

  // const data = {
  //   news: new.category,
  //   res: [] 
  // }
  const [result, setResult] = useState([])
  const [cat, setCat] = useState('')
  const searchParams = useSearchParams()
  const genre = searchParams ? searchParams.get('category') : null

  const getCategoryArticles = async (category: string) => {
    const selectedNews: any = news.find((item) => item.category === category);
    // setCat(selectedNews)
    console.log(selectedNews);
    if (selectedNews) {
      const articles = await selectedNews.articles();
      console.log(articles);
      setResult(articles); // Add the selectedNews articles to the result
    }
    console.log(result)
  };

  useEffect(() => {
    getCategoryArticles(genre) 
  },[genre])

  return (
    <div className='text-black px-5 md:mx-auto py-24'>
      <h1 className="text-2xl font-semibold">Popular topics</h1>
      <div className='flex gap-4 pt-6'>
        {news.map(({ category }) => (
          <div className="" key={category}>
           <Link className={`${genre && genre === category && 'text-orange-600'}`} href={`/?category=${category}`} scroll={false} >
            <div className="">
              <p
                className='cursor-pointer font-semibold capitalize'
                onClick={() => getCategoryArticles(category)}
              >
                {category} 
              </p>
            </div>
          </Link>
          </div>
        ))}
      </div>
      <TopicList result={result} cat={cat} />

      
    </div>
  );
};

export default Topic;