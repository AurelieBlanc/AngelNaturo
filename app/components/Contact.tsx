import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus
import { GrInstagram } from "react-icons/gr"; // icone insta


export default function Contact () {
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
                        className="font-amatic text-7xl font-extrabold text-rose-900  w-[95%] mx-auto">
                        Pour Me Contacter: 
                    </h2>
                    <p
                        className="font-beth text-[27px] text-rose-950 mt-6 text-center mb-10 w-[85%] mx-auto">
                     Via mon adresse mail: angelNaturo@mail.com <br />
                        Via mon téléphone: 06 60 50 50 50 <br />
                        Via mes reseaux sociaux: 
                        <ul>
                            <li><GrInstagram 
                                className="inline"/> @angelNaturo</li>
                        </ul>
                        



                    </p>
                </div>
                
                <div
                    className="flex justify-center w-full">
                <Image
                    src="/images/margEnv.jpg"
                    alt="une bouteille d'huile de massage"
                    width={500}
                    height ={300}
                    className="rounded-xl mb-10"
                />
                </div>
                 

        </div>
    )
}