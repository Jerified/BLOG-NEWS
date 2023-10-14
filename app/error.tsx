"use client"

import { useEffect } from 'react'

export default function Error ({error, reset}: {error: Error & { digest?: string}, reset: () => void}) {
    useEffect(() => {
        console.log(error);
        
    }, [error])

    return (
        <div className="">
            <h2 className="">Something went wrong</h2>
        </div>
    )
}

