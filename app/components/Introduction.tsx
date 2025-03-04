import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus


export default function Introduction () {
    return (
        <div
            className="pt-8 flex flex-col items-center w-full mx-auto">

                <PiFlowerLotusDuotone 
                                className="text-9xl text-rose-950 flex justify-center w-[100px] mx-auto"/>
                
                
                {/* <Image
                    src="/images/lotusSpa.avif"
                    alt="une bouteille d'huile de massage"
                    width={250}
                    height ={300}
                    className="rounded-xl mr-5"
                /> */}

                <div
                    className="text-center">
                    <h2
                        className="font-amatic text-8xl font-extrabold text-rose-900  w-[95%] mx-auto">
                        Bienvenue dans l'Instant Angélique
                    </h2>
                    <p
                        className="font-beth text-[27px] text-rose-950 mt-6 text-center mb-10 w-[85%] mx-auto">
                        Une bulle de calme et de volupté où bien-être et félicité seront conviés <br />
                        Un espace hors du temps où vous retrouverez plaisir et ancrage <br />
                        Où vous serez remerciez ce corps qui en a tant besoin <br />
                        Pour finir par une petite dégustation pour les plus gourmands


                    </p>
                </div>
                
                <div
                    className="flex justify-center w-full">
                <Image
                    src="/images/infu.jpg"
                    alt="une bouteille d'huile de massage"
                    width={500}
                    height ={300}
                    className="rounded-xl mb-10"
                />
                </div>
                 

        </div>
    )
}