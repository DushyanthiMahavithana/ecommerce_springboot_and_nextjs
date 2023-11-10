import Image from "next/image";
import FooterL from "../images/logofooter.png";

export default function Footer() {
    return(
        <div>
            <div>
                <Image src={FooterL}></Image>
                <h1 className="ml-20">Contact   </h1><br></br>
                <p className="ml-20"><b>Location:</b> dggdhhjashtghde</p> 
                <p className="ml-20"><b>Mail:</b> dggdhhjashtghde</p> 
                <p className="ml-20"><b>Phone:</b> dggdhhjashtghde</p> 
            <div></div>
            </div>
        </div>
        
    );
}