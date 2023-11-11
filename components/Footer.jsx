import Image from "next/image";
import Link from "next/link";
import FooterL from "../images/logofooter.png";
import {CiFacebook} from "react-icons/ci";
import {CiInstagram} from "react-icons/ci";
import {CiYoutube} from "react-icons/ci";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
export default function Footer() {
    return(
        <div className="grid grid-cols-4 gap-8 p-8 bg-gray-900 text-white">
            <div className="col-span-1">
                <Image src={FooterL} className="w-30 h-30 mb-4"></Image>
                <h1 className="ml-4 text-xl font-bold"><b>Contact</b></h1><br></br>
                <p className="ml-4 hover:text-gray-400"><b>Location: </b><Link href={"/#"}> dgfgdgdgdgdfdfd</Link></p> 
                <p className="ml-4 hover:text-gray-400"><b>Mail: </b><Link href={"/#"}>dgfgdgdgdgdfdfd</Link></p> 
                <p className="ml-4 hover:text-gray-400"><b>Phone: </b><Link href={"/#"}>dgfgdgdgdgdfdfd</Link></p> 
            </div>
            <div className="col-span-1 mt-8">
                <h1 className="text-xl font-bold ml-4">About</h1><br></br>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">About Us</p></Link>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">Privacy Policy</p></Link>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">Terms & Conditions</p></Link>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">Contact Us</p></Link>
                <p></p>
            </div>
            <div className="col-span-1 mt-8 ">
            <h1 className="text-xl font-bold ml-4">My Account</h1><br></br>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">Sign In</p></Link>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">View Cart</p></Link>
                <Link href={"/#"}><p className="ml-4 hover:text-gray-400">Help</p></Link>   
            </div>
            <div className="col-span-1 mt-8" >
            <h1 className="text-xl font-bold ml-4">Follow Us</h1><br></br>
                <div className="flex mb-5 ml-4">
                <Link className="hover:text-gray-400"  href={"/#"}><CiFacebook size={30}/></Link>
                <Link  className="hover:text-gray-400"   href={"/#"}><CiInstagram size={30}/></Link>
                <Link  className="hover:text-gray-400"   href={"/#"}><CiYoutube size={30}/></Link>
                </div>
                
                <h1 className="text-xl font-bold ml-4">Secured Payment Gateways</h1><br></br>
                <div className="flex mb-5 ml-4">
                <Link className="ml-2 hover:text-gray-400" href={"/#"}><FaCcVisa size={30}/></Link>
                <Link className="ml-2 hover:text-gray-400" href={"/#"}><FaCcMastercard size={30}/></Link>
                </div>
                <div className="ml-4">
                    <p>&copy; 2023 myecommercesite</p>
                </div>
            </div>
        </div>
        
    );
}