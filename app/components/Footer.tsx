import { GrInstagram } from "react-icons/gr"; // icone insta
import { FaFacebook } from "react-icons/fa"; // icone facebook
import { BsTwitter } from "react-icons/bs"; // icone twitter
import Link from "next/link"; // import de l'outil lien
 

export default function Footer() {
    return (
        <div
            className="w-full h-[100px] bg-rose-950 text-rose-200 font-beth flex items-center justify-center">

                <div>
                    <p
                        className="ml-6 text-sm md:text-lg w-[80%] md:w-full text-left"> 
                        Pour découvrir un florilège d'astuces bien-être :  
                    </p>
                </div>


                <div
                    className="md:ml-5 flex relative top-1 gap-x-3 mr-9">
                
                <Link
                    className=""
                    href="https://www.instagram.com/bewildbeweirdbewhite/">
                
                    <GrInstagram />
                </Link>

                <FaFacebook />
                <BsTwitter />
                </div>




        </div>
    )
}