import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../images/logo1.jpg";

export default function Navbar() {
  return (
    <nav className="w-full shadow-xl bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width="100"
            height="100"
            className="cursor-pointer"
            priority
          />
        </div>

        <div className="flex items-center space-x-8">
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">Home</Link>
          <Link href={"/shop"} className="text-gray-800 hover:text-gray-600">Shop</Link>
          <Link href={"/product-page"} className="text-gray-800 hover:text-gray-600">Product Page</Link>
          <Link href={"/about"} className="text-gray-800 hover:text-gray-600">About Us</Link>
          <Link href={"/contact"} className="text-gray-800 hover:text-gray-600">Contact Us</Link>
          <Link href={"/cart"} className="text-gray-800 hover:text-gray-600 flex items-center">
            <AiOutlineShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
