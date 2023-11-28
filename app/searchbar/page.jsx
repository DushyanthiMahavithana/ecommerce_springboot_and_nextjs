"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import data from '../db/data';
import product from '../products/page';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]); 

  const filterProducts = data.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Update suggestions based on the filtered products
    setSuggestions(
      filterProducts.map((product) => product.name) // Fixed variable name here
    );
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the selected suggestion as the search term
    setSearchTerm(suggestion);
    // Clear suggestions
    setSuggestions([]);
  };

  return (
    <div>
      <div className='flex items-center justify-between p-4 bg-slate-200 text-black ml-40 mb-10'>
        <input
          className='px-2 py-1 mr-2 border rounded focus:outline'
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleInputChange}
        />

        {suggestions.length > 0 && (
          <ul className="absolute left-0 mt-2 w-full bg-white border rounded">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}

        <div className='flex'>
          <Link className="hover:text-gray-400 mr-8" href={"/#"}><FiHeart size={25} /></Link>
          <Link className="hover:text-gray-400 mr-8" href={"/#"}><AiOutlineShoppingCart size={25} /></Link>
        </div>
      </div>
    </div>
  );
}
