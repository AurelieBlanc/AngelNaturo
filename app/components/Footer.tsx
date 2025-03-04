import { GrInstagram } from "react-icons/gr"; // icone insta
import { FaFacebook } from "react-icons/fa"; // icone facebook
import { BsTwitter } from "react-icons/bs"; // icone twitter



export default function Footer() {
    return (
        <div
            className="w-full h-[60px] bg-rose-950 text-rose-200 font-beth flex justify-center gap-4 items-center text-xl">
                Pour découvrir mon florilège d'astuces bien-être :  
                <GrInstagram />
                <FaFacebook />
                <BsTwitter />




        </div>
    )
}