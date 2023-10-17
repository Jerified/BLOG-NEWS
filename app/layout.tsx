// import { Header } from './components'
// impo
import Header from './components/Home/header'
import "../styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'News for you where you can find what you need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Header />
        {children}
        </body>
    </html>
  )
}
