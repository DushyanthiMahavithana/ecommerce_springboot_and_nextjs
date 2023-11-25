import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FiHeart} from "react-icons/fi";
import data from '../db/data';

export default function searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
    <div className='flex items-center justify-between p-4 bg-slate-200 text-black ml-40 mb-10'>
      <input 
      className='px-2 py-1 mr-2 border rounded focus:outline' 
      type='text'
      placeholder='Search'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}>
      
      </input>
    
      <div className='flex'>
      <Link className="hover:text-gray-400 mr-8"  href={"/#"}><FiHeart size={25}/></Link>
      <Link className="hover:text-gray-400 mr-8"  href={"/#"}><AiOutlineShoppingCart  size={25}/></Link>
      
      </div>
        

    </div>
    </div>
  )
}
