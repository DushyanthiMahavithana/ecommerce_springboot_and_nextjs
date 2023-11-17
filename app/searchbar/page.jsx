import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FiHeart} from "react-icons/fi";

export default function searchbar() {
  return (
    <div>
    <div className='flex items-center justify-between p-4 bg-slate-200 text-black'>
      <input 
      className='px-2 py-1 mr-2 border rounded focus:outline' 
      type='text'
      placeholder='Search'>
      </input>
    
      <div className='flex'>
      <Link className="hover:text-gray-400 mr-8"  href={"/#"}><FiHeart size={25}/></Link>
      <Link className="hover:text-gray-400 mr-8"  href={"/#"}><AiOutlineShoppingCart  size={25}/></Link>
      
      </div>
        

    </div>
    </div>
  )
}
