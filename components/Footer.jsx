import Image from "next/image";
import Link from "next/link";
import FooterL from "../images/logofooter.png";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid grid-cols-4 gap-8 p-8 bg-gray-900 text-white">
      <div className="col-span-1">
        <Image src={FooterL} className="w-24 h-24 mb-4" alt="Footer Logo" />
        <h1 className="ml-4 text-xl font-bold">Contact</h1>
        <p className="ml-4"><b>Location:</b> <Link href="/#">dgfgdgdgdgdfdfd</Link></p>
        <p className="ml-4"><b>Mail:</b> <Link href="/#">dgfgdgdgdgdfdfd</Link></p>
        <p className="ml-4"><b>Phone:</b> <Link href="/#">dgfgdgdgdgdfdfd</Link></p>
      </div>

      <div className="col-span-1 mt-8">
        <h1 className="text-xl font-bold">About</h1>
        <Link href="/#"><p className="ml-4">About Us</p></Link>
        <Link href="/#"><p className="ml-4">Privacy Policy</p></Link>
        <Link href="/#"><p className="ml-4">Terms & Conditions</p></Link>
        <Link href="/#"><p className="ml-4">Contact Us</p></Link>
      </div>

      <div className="col-span-1 mt-8">
        <h1 className="text-xl font-bold">My Account</h1>
        <Link href="/#"><p className="ml-4">Sign In</p></Link>
        <Link href="/#"><p className="ml-4">View Cart</p></Link>
        <Link href="/#"><p className="ml-4">Help</p></Link>
      </div>

      <div className="col-span-1 mt-8">
        <h1 className="text-xl font-bold">Follow Us</h1>
        <div className="flex mb-4">
          <Link href="/#" className=""><CiFacebook size={30} /></Link>
          <Link href="/#" className="ml-2"><CiInstagram size={30} /></Link>
          <Link href="/#" className="ml-2"><CiYoutube size={30} /></Link>
        </div>

        <h1 className="text-xl font-bold">Secured Payment Gateways</h1>
        <div className="flex">
          <Link href="/#" className="ml-2"><FaCcVisa size={30} /></Link>
          <Link href="/#" className="ml-2"><FaCcMastercard size={30} /></Link>
        </div>

        <div className="mt-8">
          <p>&copy; 2023 myecommercesite</p>
        </div>
      </div>
    </div>
  );
}
