// import { Metadata } from 'next'
import {FC} from 'react'

interface pageProps {
  params: {title: string}
}

import type { Metadata } from 'next'


// export async function generateMetadata({params}: pageProps) {
//   return {
//     title: params.title
//   }
// }

const page: FC<pageProps> = ({params}) => {
    console.log(params)
  return (
    <>
      {/* <div className='text-black'>{params.title}</div> */}
      <p className='text-3xl text-black'>hello</p>
    </>
  )
}

export default page