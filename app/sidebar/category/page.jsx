import React from 'react';



export default function category() {
  return (
    
    <div className='ml-8'>
      <h2 className='text-lg font-bold mb-4'>Category</h2>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>All</span>
      </div>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>Dry</span>
      </div>
      <div>
        <input className='mr-2 appearance-none bg-gray-400 border-2 border-gray-600 rounded-full w-5 h-5 checked:bg-black checked:border-transparent' type='radio' name='text'></input>
        <span>Wet</span>
      </div>
      
      
      
     
      
    </div>
  )
}
