import React from 'react'
import { getNewsSearch } from '../api/fetchData/route'
import { removeDuplicate } from '@/lib/fetchingData'
import TopicList from '../components/Home/TopicList'

const page = async () => {
    const allNews = await getNewsSearch('world')
    const filteredArticles = removeDuplicate(allNews)
  return (
    <TopicList result={filteredArticles} />
  )
}

export default page