import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus


export default function Prestations () {
    return (
        <div
            className="pt-8 flex flex-col w-full mx-auto">

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
                    className="text-center flex flex-col items-center">
                    <h2
                        className="font-amatic font-extrabold text-8xl text-rose-900 mb-9 ">
                        Les Prestations d'Angélique: 
                    </h2>
                    <h3
                        className="mt-2 font-beth font-bold text-4xl text-rose-900 ">
                        Le massage: 
                    </h3>

                    <p
                        className="font-beth text-[27px] text-rose-950 mt-6 text-center mb-10 w-[85%] mx-auto">
                        Une bulle de calme et de volupté où bien-être et félicité seront conviés <br />
                        Un espace hors du temps où vous retrouverez plaisir et ancrage <br />
                        Où vous serez remerciez ce corps qui en a tant besoin <br />
                        Pour finir par une petite dégustation pour les plus gourmands

                  
                    </p>
                    <div 
                        className="flex justify-center w-full">
                        <Image
                            src="/images/massOrchi.jpg"
                            alt="une bouteille d'huile de massage"
                            width={500}
                            height ={300}
                            className="rounded-xl ml-5 mb-9 "
                        />
                        </div>

                    <h3
                        className="font-beth text-4xl font-bold text-rose-900 mt-2 ">
                        Les consultations naturo: 
                    </h3>
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
                    src="/images/rivForet.jpg"
                    alt="une bouteille d'huile de massage"
                    width={500}
                    height ={300}
                    className="rounded-xl ml-5 mb-9"
                />
                </div>
                
                 

        </div>
    )
}