import React from 'react';
import Image from 'next/image';
import updata from '../upcommingdb/updata';
import { AiFillStar } from "react-icons/ai";
import Link from 'next/link';


export default function Upcommingproducts() {
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-1 ml-10 mr-10 mt-10 mb-20'>
        {updata.map(products =>(
            <div key={products.id} className="bg-white shadow-lg p-6 rounded-md">
                <Image src={products.image} alt={products} width={300} height={200} className="mb-4 rounded-md"></Image>
                <Link className='text-xl font-semibold mb-2' href={"/#"}>{products.name}</Link>
                <div className="flex mb-2">
                    {Array.from({ length: products.star }).map((_, index) => (
                    <AiFillStar key={index} className="text-yellow-500" />
                    ))}
                </div>
                <div className='flex items-center'>
                <h1 className=' text-gray-600'>{products.price}</h1>
                <Link className='ml-2' href={"/#"}>{products.icon}</Link>
                </div>
            </div>
        ))}
    </div>

  )
}
