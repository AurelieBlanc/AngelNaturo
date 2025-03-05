import { HiH1 } from "react-icons/hi2";
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus


export default function Banner() {
    return (
        <div
            className="w-full h-[400px] flex items-center justify-center font-amatic text-7xl font-extrabold text-rose-950 text-center md:text-9xl"
            style={{
                backgroundImage: "url('/images/aquaTerreCuite.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition:"bottom", 
            }}>

            <div
                className="flex items-center justify-center w-[70%]">

                <PiFlowerLotusDuotone
                    className="relative top-3 text-5xl" />

                <h1 className=" ml-9 mr-9 flex flex-col items-center">
                    
                    L'instant Angélique 
                    <PiFlowerLotusDuotone 
                        className="relative top-6 text-4xl md:hidden"/>
                </h1>   
            
                <PiFlowerLotusDuotone 
                    className="relative top-3 text-5xl"/>
            </div>


        </div>
    )
}