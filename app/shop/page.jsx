import { Inter } from 'next/font/google';
import Searchbar from '../searchbar/page';
import Products from '../products/page';
import Recommended from '../recommended/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
  <div className='max-w-8xl mx-auto'>
    <Searchbar/>
    <Recommended />
    <Products />
    {children}
  </div>

  )
}
