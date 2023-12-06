"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import data from '../db/data';
import product from '../products/page';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  
  
  const onSearch = (event) => {
    event.preventDefault();


    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    console.log("current query", encodedSearchQuery);
  

  };

  return (
    <div>
      <div className='flex items-center justify-between p-4 bg-slate-200 text-black ml-40 mb-10'>
        <form onSubmit={onSearch}>
        <input
        value={searchQuery}
        onChange={(event) => searchQuery(event.target.value)}
        className='px-2 py-1 mr-2 border rounded focus:outline'
        type='text'
        placeholder='Search'
        />

       
        <div className='flex'>
          <Link className="hover:text-gray-400 mr-8" href={"/#"}><FiHeart size={25} /></Link>
          <Link className="hover:text-gray-400 mr-8" href={"/#"}><AiOutlineShoppingCart size={25} /></Link>
        </div>
        </form>
      </div>
    </div>
  );
};

