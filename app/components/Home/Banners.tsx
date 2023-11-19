/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { convertTimestamp } from '@/lib/dateFormat'
import { RxDotFilled } from 'react-icons/rx'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Link from 'next/link'

const Banners = ({ item }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const filteredResult = item.filter((article: any) => article.urlToImage !== null)

  const prevSlide = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? item.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const firstSlide = currentIndex === item.length - 1
    const newIndex = firstSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div>
      <div key={item.publishedAt} className=" h-full  relative group">
        <img className='w-full text-black h-[60vh] md:h-[80vh] bg-cover transition-all  duration-500' src={filteredResult[currentIndex]?.urlToImage || 'unable to load mage'} alt={filteredResult[currentIndex].title} loading='lazy' />
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="absolute bottom-20 md:bottom-[6rem] text-white px-5 max-w-s md:max-w-[50rem] ">
          <Link href={filteredResult[currentIndex].url} target='_blank' className="text-2xl font-semibold md:text-3xl lg:text-4xl">{filteredResult[currentIndex].title}
          <main className="flex items-start gap-3 pt-5">
            <div className="flex gap-3 items-center">
              <p className="">{convertTimestamp(filteredResult[0].publishedAt)}</p>
              <div className='w-[2.5rem] h-[0.11rem] bg-white' />
            </div>
            <p className="line-clamp-3">{filteredResult[currentIndex].description}</p>
          </main>
          </Link>
          <div className="flex pt-3">
            {filteredResult.map((slide: any, slideIndex: any) => (
              <div className="cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                <RxDotFilled className={`text-2xl text-white ${ slideIndex === currentIndex  ? 'text-green-500' : ''}`} />
              </div>
            )
            )}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Banners