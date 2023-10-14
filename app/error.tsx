"use client"

import { useEffect } from 'react'

export default function Error ({error, reset}: {error: Error & { digest?: string}, reset: () => void}) {
    useEffect(() => {
        console.log(error);
        
    }, [error])

    return (
        <div className="text-black h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl">Something went wrong</h2>
            <button className='bg-blue-500 px-6 rounded-lg text-white py-2 mt-4 hover:bg-blue-600' onClick={() => reset()}>Try again</button>
        </div>
    )
}

