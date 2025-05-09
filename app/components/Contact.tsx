"use client"; 

import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus
import { GrInstagram } from "react-icons/gr"; // icone insta
import { IoIosEye } from "react-icons/io"; // icone eye <IoIosEye />
import Link from "next/link";
import { useState } from "react"; // import de useState pour gerer les states locaux

export default function Contact () {

    const [ displayContact, setDisplayContact ] = useState<boolean>(false); 
    
    function  switchDisplay () {
        setDisplayContact ((prevState) => !prevState)
    }

    return (
        <div
            className="pt-8 flex flex-col w-full mx-auto">

                <PiFlowerLotusDuotone 
                                className="text-7xl text-rose-950 flex justify-center w-[100px] mx-auto"/>
                
                
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
                        className="font-amatic text-7xl md:text-8xl font-extrabold text-rose-900  w-[95%] md:w-[70%] mx-auto">
                        Pour Contacter Angel: 
                    </h2>
                    <p
                        className="font-beth text-lg md:text-[23px] text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto leading-loose">
                        <p
                            className="pb-1"> Via son adresse mail: 
                            <IoIosEye 
                                className="text-4xl inline-block ml-3"
                                onClick={switchDisplay}/>

                        </p>

                        {displayContact &&
                            (<p
                                className="pb-5 underline"> 
                                    <a href="mailto:contact@exemple.com">
                                    test@mail.com
                                    </a>
                            </p>)
                        }

                        <p
                            className="pb-1"> Via son téléphone :
                            <IoIosEye 
                                className="text-4xl inline-block ml-3"
                                onClick={switchDisplay}/>
                        </p>
                        
                        {displayContact &&
                            (<p
                                className="pb-5"> 06 60 00 00 00
                            </p>)
                        }
                        

                        <p
                            className="pb-1"> Via ses réseaux sociaux:
                        </p>
                        <p
                            className="pb-1"> 
                            Instagram 
                                <Link 
                                    href="https://www.instagram.com/bewildbeweirdbewhite/">
                                        <span 
                                            className="ml-2">
                                            <GrInstagram 
                                            className="inline"/>
                                        <span
                                            className="underline">
                                            : @bewildbeweirdbewhite
                                        </span>
                                            
                                    
                                        </span> 
                                </Link>
                            </p>
                       </p>
                </div>
                
                <div
                    className="flex justify-center w-[90%] md:w-full mx-auto mb-9">
                <Image
                    src="/images/margEnv.jpg"
                    alt="une bouteille d'huile de massage"
                    width={500}
                    height ={300}
                    className="rounded-xl mb-10"
                />
                </div>

                <p
                    className="font-amatic text-5xl font-extrabold text-rose-950 text-center mb-2">
                        *IMPORTANT: Ce site est une maquette réalisée pour un projet de portfolio, les informations affichées sont fictives. 
                </p>
                 

        </div>
    )
}