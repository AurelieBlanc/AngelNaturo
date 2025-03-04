import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus


export default function Banner() {
    return (
        <div
            className="w-full h-[400px] flex items-center justify-center font-amatic text-9xl font-extrabold text-rose-950 text-center"
            style={{
                backgroundImage: "url('/images/aquaTerreCuite.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition:"bottom", 
            }}>

            <div
                className="flex items-end ">

            <PiFlowerLotusDuotone
                className="relative top-3 text-5xl" />

             <span className="inline-block ml-9 mr-9">L'instant Angélique </span>   
            
            <PiFlowerLotusDuotone 
                className="relative top-3 text-5xl"/>
            </div>


        </div>
    )
}