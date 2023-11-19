'use client'

import { useEffect, useState } from 'react';
import { news } from '@/lib/fetchingData';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import TopicList from './TopicList';
import { Suspense } from 'react';
import Article from './Article';
const Topic =  () => {

  // const data = {
  //   news: new.category,
  //   res: [] 
  // }
  const [result, setResult] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const searchParams = useSearchParams()
  const genre: string | null = searchParams ? searchParams.get('category') : null

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }


  // useEffect(() => {
  //   const selectedNews = news.find((item) => item.category === selectedCategory);

  //   if (selectedNews) {
  //         selectedNews.articles().then((articles) => {
  //           setResult(articles)
  //         })
  //         // console.log(articles);
  //         // setResult([articles, selectedNews]); // Add the selectedNews articles to the result
  //       }
  //   // getCategoryArticles(genre) 
  // },[selectedCategory])

  return (
    <div className='text-black px-5 md:mx-auto lg:py-24 py-12'>
      <h1 className="text-2xl font-semibold md:text-4xl">Popular topics</h1>
      <div className='flex gap-4 pt-6'>
        {news.map(({ category }) => (
          <div className="" key={category}>
            <Article selectedCategory={selectedCategory} category={category} handleCategoryChange={handleCategoryChange} />

          
          </div>
        ))}
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <TopicList result={result} category={selectedCategory} />
      </Suspense>

      
    </div>
  );
};

export default Topic;