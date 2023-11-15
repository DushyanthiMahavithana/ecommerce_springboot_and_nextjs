import React from 'react';
import Image from 'next/image';
import CartBanner from '../../images/cartbanner.jpg';

export default function Cart() {
  return (
    <div>
        <div className='relative max-w-full overflow-x-hidden'>
        <Image src={CartBanner} alt='about banner' width={1600} ></Image>
        </div>
      
    </div>
  )
}
