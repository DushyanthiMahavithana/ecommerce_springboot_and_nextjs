  import React from 'react';
  import AboutBanner from '../../images/aboutpg.jpg';
  import AboutSide from '../../images/aboutside.jpg';
  import VissionImage from '../../images/visionpic.jpg';
  import MissionImage from '../../images/missionpic.jpg';
  import AboutImage from '../../images/aboutpage.jpg';

  import Image from 'next/image';



  export default function About() {
    return (
      <div>

      <div className='relative max-w-full overflow-x-hidden'>
        <Image src={AboutBanner} alt='about banner' width={1600} ></Image>
        <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='mb-10 text-6xl italic font-bold'>About Us</h1>
          <p className='text-lg max-w-3xl mx-auto mb-12'>We're delighted to present a revolutionary pet food experience designed to elevate your furry friend's well-being. Our commitment to excellence is embedded in every kibble, promising a feast of flavors and nourishment that goes beyond the bowl.</p>
        </div>
      </div>

      <div className='flex'>
        <div className='flex-none' style={{ flex: '1' }}>
          <Image src={AboutSide} alt='about side' width={800}></Image>
        </div>
        <div className='flex-auto p-8' style={{ flex: '1' }}>
          <p className='m-10 text-2xl italic font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
      
      <div className='text-center h-64 bg-yellow-100 p-8 m-20'>
        <h1 className='text-4xl font-bold m-4'>Our Vision</h1>
        <p className='text-lg mx-auto'>We envision a world where every furry companion receives not just a meal, but a culinary experience that mirrors the love and joy they bring into our lives. Our dedication to excellence drives us to craft premium pet food that not only meets nutritional needs but also indulges pets in a symphony of flavors and textures. </p>
      </div>  
      <div className='text-center h-64 bg-yellow-100 p-8 m-20'>
        <h1 className='text-4xl font-bold m-4'>Our Mission</h1>
        <p className='text-lg mx-auto'>Through innovation and passion, we strive to create a bond between pets and their owners that goes beyond the bowl, fostering a healthier, happier, and more vibrant life for every four-legged family member.  </p>
      </div>  

      <div className='flex justify-around'>
        <Image src={VissionImage} alt='vision image' width={500}></Image>
        <Image src={MissionImage} alt='mission image' width={500}></Image>
        <Image src={AboutImage} alt='side image' width={500}></Image>
        
      </div>
      </div>
    )
  }
