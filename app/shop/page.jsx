import { Inter } from 'next/font/google';
import Searchbar from '../searchbar/page';
import Products from '../products/page';
import Recommended from '../recommended/page';
import Sidebar from '../sidebar/page';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
  <div className='max-w-8xl mx-auto'>
    <div>
      <Searchbar/>
      <Sidebar />
    </div>
    <div className="flex-1">
      <Recommended />
      <Products />
      {children}
    </div>
  </div>

  )
}
