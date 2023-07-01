import {FC} from 'react'

interface pageProps {
    params: {title: string}
}

const page: FC<pageProps> = ({params}) => {
    console.log(params)
  return (
    <div className='text-black'>page</div>
  )
}

export default page