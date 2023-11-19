import React from 'react'

export default function recommended() {
  return (
    <div>
        <h1 className='text-2xl font-bold m-6'>Recommended</h1>
        <div className='m-4'>
            <button className='px-8 py-2 m-2 bg-green-500 text-white rounded hover:bg-green-700'>All</button>
            <button className='px-8 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Puppy</button>
            <button className='px-8 py-2 m-2 bg-purple-500 text-white rounded hover:bg-purple-700'>Mother</button>
            <button className='px-8 py-2 m-2 bg-indigo-500 text-white rounded hover:bg-indigo-700'>Adult</button>
            <button className='px-8 py-2 m-2 bg-pink-500 text-white rounded hover:bg-pink-700' >Kitten</button>
            <button className='px-8 py-2 m-2 bg-yellow-500 text-white rounded  hover:bg-yellow-700'>+1 Years Cat</button>
           
        </div>
      
    </div>
  )
}
