import Link from 'next/link'
import React from 'react'

const articles = [
    {
        id: 1,
        title: 'All',
        href: '/all'
    },
    {
        id: 1,
        title: 'Business',
        href: '/business'
    },
    {
        id: 1,
        title: 'Entertainment',
        href: '/entertainment'
    },
    {
        id: 1,
        title: 'Sports',
        href: '/sports'
    },
    {
        id: 1,
        title: 'Science',
        href: '/science'
    },
    {
        id: 1,
        title: 'Technology',
        href: '/technology'
    },
    {
        id: 1,
        title: 'Food',
        href: '/food'
    },

]

const Article = ({category, selectedCategory, handleCategoryChange}: any) => {

    // const handleCategoryChange = (category: string) => {
    //     setSelectedCategory(category)
    //   }
    // type TProps = {
    //     id: number,
    //     title: string
    // }
    
  return (
    <Link className={`${ selectedCategory === category && 'text-orange-600'}`} href={`/?category=${category}`} scroll={false} >
    <div className="">
      <p
        className='cursor-pointer font-semibold capitalize'
        onClick={() => handleCategoryChange(category)}
      >
        {category} 
      </p>
    </div>

  </Link>
    // <div className='flex gap-3 pt-6 flex-wrap font-semibold'>
    //     {articles.map((article) => (
    //         <div className="" key={article.id}>
    //             <Link href={article.href}>{article.title}</Link>
    //         </div>
    //     ))}
    // </div>
  )
}

export default Article