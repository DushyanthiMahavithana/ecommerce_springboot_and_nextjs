import React from 'react';
import AboutBanner from '../../images/aboutpg.jpg';
import Image from 'next/image';


export default function About() {
  return (
    <div className='relative max-w-full overflow-x-hidden'>
            <Image src={AboutBanner} alt='about banner' width={1600} ></Image>
            <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <p className='mt-20 text-4xl font-medium'>Welcome to the</p>
            <h1 className='mb-10 text-6xl italic font-bold'>Animal Kingdom</h1>
            <p className='text-lg max-w-3xl mx-auto mb-12'>We're delighted to present a revolutionary pet food experience designed to elevate your furry friend's well-being. Our commitment to excellence is embedded in every kibble, promising a feast of flavors and nourishment that goes beyond the bowl.</p>
            
            </div>
        </div>
  )
}
