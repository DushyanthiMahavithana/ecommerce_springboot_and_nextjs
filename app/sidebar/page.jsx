import React from 'react';
import Category from './category/page';
import Price from './price/page';



export default function sidebar() {
  return (
    <div className='mt-10'>
      <div>
      <Category />
      <Price />
      </div>
    </div>
  )
}
