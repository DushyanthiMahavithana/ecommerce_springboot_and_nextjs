import { Inter } from 'next/font/google';
import Searchbar from '../searchbar/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
  <div className='max-w-8xl mx-auto'>
    <Searchbar/>
    {children}
  </div>

  )
}
