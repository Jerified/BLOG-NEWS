"use client"

import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { BsTwitter, BsFacebook, BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from "react-icons/rx"

const Header = () => {

    const TOP_OFFSET = 66
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const handleScroll= () => {
            if (window.scrollY > TOP_OFFSET) {
                setShowBackground(true)
              } else {
                setShowBackground(false)
              }
        } 
      

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
    return (
        <main className='w-full fixed z-50'>
            <section className={`px-5 ${showBackground ? 'bg-[rgba(39,24,24,0.2)]' : ""}`}>
                <div className="h-[5rem] flex items-center justify-between">
                    <div className="">
                        <h1 className="font-medium text-xl">JERRIFIED</h1>
                    </div>
                    <div className="">
                        <nav className="hidden md:block">
                            <ul className="flex gap-[2rem]">
                                <li className="cursor-pointer ">
                                    <Link href='/'>Home</Link>
                                </li>
                                <li className="cursor-pointer ">
                                    <Link href='/'>About</Link>
                                </li>
                                <li className="cursor-pointer ">
                                    <Link href='/'>Articles</Link>
                                </li>
                                <li className="cursor-pointer ">
                                    <Link href='/'>Contact Us</Link>
                                </li>
                                <div className="flex gap-[1.5rem] items-center">
                                    <div className="h-[1.5rem] w-[0.1rem] bg-white" />
                                    {/* <ul className="flex gap-[2rem]"> */}
                                    <li className="cursor-pointer ">
                                        <Link href='/'>
                                            <BsTwitter />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer ">
                                        <Link href='/'>
                                            <BsFacebook />
                                        </Link>
                                    </li>
                                    <li className="cursor-pointer ">
                                        <Link href='/'></Link>
                                    </li>
                                    <li className="cursor-pointer ">
                                        <Link href='/'></Link>
                                    </li>
                                    <div className="h-[1.5rem] w-[0.1rem] bg-white" />
                                    <BsSearch/>
                                </div>
                            </ul>

                        </nav>
                        <button className="md:hidden">
                            <RxHamburgerMenu className='text-xl' />
                        </button>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Header