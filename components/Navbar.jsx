import Link from "next/link";
import Image from "next/image";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Logo from "../images/logo1.jpg";

export default function Navbar() {
    
    return(
        <nav className="w-full shadow-xl bg-white">
            <div className="flex items-center">
            <Image 
            src={Logo}
            alt="Logo"
            width="100"
            height="100"
            className="cursor-pointer"
            priority/>

            <Link className="ml-80" href={"/"}>Home</Link>
            <Link className="ml-20" href={"/shop"}>Shop</Link>
            <Link className="ml-20" href={"/product-page"}>Product Page</Link>
            <Link className="ml-20" href={"/about"}>About Us</Link>
            <Link className="ml-20" href={"/contact"}>Contact Us</Link>
            <Link className="ml-20" href={"/cart"}><AiOutlineShoppingCart size={20}/></Link>
            </div>   
        </nav>
    );
}
  