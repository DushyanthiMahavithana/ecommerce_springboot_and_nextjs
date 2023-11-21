import React from 'react'

export default function price() {
  return (
    <div className='ml-8'>
      <h2 className='text-lg font-bold mb-4 mt-4'>Price</h2>
      <p className='font-bold mb-2'>Up to $</p>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>50</span>
      </div>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>100</span>
      </div>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>1000</span>
      </div>
    </div>
  )
}
