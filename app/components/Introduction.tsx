import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus


export default function Introduction () {
    return (
        <div
            className="pt-8 flex flex-col items-center w-full mx-auto">

                <PiFlowerLotusDuotone 
                                className="text-7xl text-rose-950 flex justify-center w-[100px] mx-auto"/>
                

                <div
                    className="text-center">
                    <h2
                        className="font-amatic text-7xl md:text-8xl font-extrabold text-rose-900  w-[95%] md:w-[70%] mx-auto">
                        Bienvenue dans l'Instant Angélique
                    </h2>
                    <div
                        className="font-beth text-lg md:text-[23px] text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto leading-loose">
                        <p
                            className="pb-3">Une bulle de calme et de volupté</p>
                        <p
                            className="pb-3">Où bien-être et félicité seront conviés</p>
                        <p
                            className="pb-3">Un espace hors du temps où vous retrouverez plaisir et ancrage</p> 
                        <p
                            className="pb-3">Où vous saurez remercier ce corps qui en a tant besoin</p>  
                        <p
                            className="pb-3">Pour finir par une petite flatterie des papilles pour les plus gourmands</p>
                        


                    </div>
                </div>
                
                <div
                    className="flex justify-center w-[90%] md:w-full mx-auto">
                <Image
                    src="/images/infu.jpg"
                    alt="une infusion"
                    width={500}
                    height ={300}
                    className="rounded-xl mb-10"
                />
                </div>
                 

        </div>
    )
}