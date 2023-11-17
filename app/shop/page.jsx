import { Inter } from 'next/font/google';
import Searchbar from '../searchbar/page';
import Products from '../products/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
  <div className='max-w-8xl mx-auto'>
    <Searchbar/>
    <Products />
    {children}
  </div>

  )
}
