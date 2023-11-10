import Image from "next/image";
import Link from "next/link";
import FooterL from "../images/logofooter.png";
import {CiFacebook} from "react-icons/ci";
import {CiInstagram} from "react-icons/ci";
import {CiYoutube} from "react-icons/ci";
export default function Footer() {
    return(
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
            <div>
                <Image src={FooterL}></Image>
                <h1 className="ml-20">Contact   </h1><br></br>
                <p className="ml-20"><b>Location:</b> dggdhhjashtghasafhde</p> 
                <p className="ml-20"><b>Mail:</b> dggdhhjashtghde</p> 
                <p className="ml-20"><b>Phone:</b> dggdhhjashtghde</p> 
            </div>
            <div className="mt-20" >
                <h1>About</h1><br></br>
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
                <p></p>
            </div>
            <div className="mt-20" >
                <h1>My Account</h1><br></br>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>Help</p>
            </div>
            <div className="mt-20" >
                <h1>Follow Us</h1><br></br>
                <div className="flex">
                <Link className="" href={"/cart"}><CiFacebook size={30}/></Link>
                <Link className="ml-2" href={"/cart"}><CiInstagram size={30}/></Link>
                <Link className="ml-2" href={"/cart"}><CiYoutube size={30}/></Link>
                </div>
                
                <h1>Secured Payment Gateways</h1><br></br>
            </div>
        </div>
        
    );
}