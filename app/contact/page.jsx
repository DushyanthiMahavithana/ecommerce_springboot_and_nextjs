import React from 'react';
import ContactBanner from '../../images/contactbanner.jpg';
import Image from 'next/image';
import Link from 'next/link';
import {CiFacebook} from "react-icons/ci";
import {CiInstagram} from "react-icons/ci";
import {CiYoutube} from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

export default function contact() {
  return (
    <div>
        <div className='relative max-w-full overflow-x-hidden'>
        <Image src={ContactBanner} alt='about banner' width={1600} ></Image>
        <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='mb-10 text-6xl italic font-bold'>Contact Us</h1>
          <p className='text-lg max-w-3xl mx-auto mb-12'>We're delighted to  present a revolutionary pet food experience designed to elevate your furry friend's well-being. Our commitment to excellence is embedded in every kibble, promising a feast of flavors and nourishment that goes beyond the bowl.</p>
        </div>
      </div>
      <div className='flex'>
        <div>
        <h1 className='text-4xl font-bold m-20'>
          Reaching Out to Us
        </h1>
        <div className='m-20'>
        <Link className="hover:text-gray-400"  href={"/#"}><FaLocationDot size={40}/></Link><br></br>
        <Link  className="hover:text-gray-400"   href={"/#"}><BiLogoGmail size={40}/></Link><br></br>
        <Link  className="hover:text-gray-400"   href={"/#"}><FaPhone size={31}/></Link><br></br>
        <div className='flex mt-10'>
        <Link className="hover:text-gray-400 mr-4"  href={"/#"}><CiFacebook size={40}/></Link>
        <Link  className="hover:text-gray-400 mr-4"   href={"/#"}><CiInstagram size={40}/></Link>
        <Link  className="hover:text-gray-400 mr-4"   href={"/#"}><CiYoutube size={40}/></Link>
        </div>
        </div>
        </div>

      </div>
      
    </div>
  )
}
