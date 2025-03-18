import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus
import { PiFlowerTulipDuotone } from "react-icons/pi"; // fleur tulipe




export default function Prestations () {
    return (
        <div
            className="pt-8 flex flex-col items-center w-full mx-auto">

                <PiFlowerLotusDuotone 
                                className="text-7xl text-rose-950 flex justify-center w-[100px] mx-auto"/>

                <div
                    className="text-center flex flex-col items-center md:w-[75%] xl:w-[60%]">
                    <h2
                        className="font-amatic font-extrabold text-7xl md:text-8xl  text-rose-900 mb-9 w-[95%] md:w-[70%]">
                        Les Prestations d'Angélique: 
                    </h2>

                    
                    <h3
                        className="mt-2 font-beth font-bold text-3xl md:text-4xl text-rose-900 w-[80%] ">
                            <span
                                className="inline-block">
                                    <PiFlowerTulipDuotone 
                                        className="text-rose-900 text-4xl md:text-5xl"/>
                                </span>
                            Les massages :
                    </h3>


                    <div
                        className="font-beth text-lg md:text-[23px] text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto  leading-loose">
                        <p 
                            className="pb-5">
                            Angel a différentes cordes à son arc, <br /> pour pouvoir vous proposer un massage sur mesure <br />en fonction de votre envie ou besoin du moment :
                        </p>
                        <p 
                            className="pb-3 ">
                            Le massage relaxant, parfait pour lâcher-prise
                        </p>
                        <p 
                            className="pb-3">
                            Le massage tonifiant, parfait pour un boost d'énergie
                        </p>
                        <p 
                            className="pb-3">
                            Le massage vivifiant, parfait pour se reconnecter à son corps
                        </p>
                  
                    </div>
                    <div 
                        className="flex justify-center w-[90%] md:w-full mw-auto">
                        <Image
                            src="/images/marguerite.jpg"
                            alt="une bouteille d'huile de massage"
                            width={500}
                            height ={300}
                            className="rounded-xl ml-5 mb-9 "
                        />
                        </div>


                        
                    <h3
                        className="mt-2 font-beth font-bold text-3xl md:text-4xl text-rose-900 w-[80%] ">
                            <span
                                className="inline-block">
                                    <PiFlowerTulipDuotone 
                                    className="text-rose-900 text-4xl md:text-5xl"/>
                            </span>
                        Les consultations Naturos : 
                    </h3>


                    <div
                        className="font-beth text-lg md:text-[23px] text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto leading-loose">
                        <p 
                            className="pb-5">
                            Un entretien complet de 1h30 vous sera proposé où vos habitudes seront analysées de manière holistique, 
                        </p>
                        <p 
                            className="pb-5">
                            Grace à différentes methodes comme le questionnement mais aussi des méthodes qui permettront de connaitre vraiment précisément votre manière subtile de fonctionner, 
                        </p>
                        <p 
                            className="pb-5">
                            Comme la morpho-psychologie notamment
                        </p>
                        <p 
                            className="pb-3 flex items-baseline justify-center">
                            A la suite de cela, un compte-rendu complet vous sera adressé avec des solutions apportées de manière globale 
                        </p>
                        <p 
                            className="pb-3">
                            Et bien sur,  un suivi pourra être mis en place pour vous accompagner vers votre nouvelle et meilleure version de vous-même
                        </p>
                        
                  
                    </div>
                    <div 
                        className="flex justify-center w-[90%] md:w-full mw-auto">
                        <Image
                            src="/images/rivForet.jpg"
                            alt="une bouteille d'huile de massage"
                            width={500}
                            height ={300}
                            className="rounded-xl ml-5 mb-9 "
                        />
                        </div>

                        <h3
                        className="mt-2 font-beth font-bold text-3xl md:text-4xl text-rose-900 w-[80%] ">
                            <span
                                className="inline-block">
                                    <PiFlowerTulipDuotone 
                                    className="text-rose-900 text-4xl md:text-5xl"/>
                            </span>
                        Les Ateliers Cuisine : 
                    </h3>


                    <div
                        className="font-beth text-lg md:text-[23px] text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto leading-loose">
                        <p 
                            className="pb-5">
                            Angel propose des ateliers pour vous apprendre à cuisiner. 
                        </p>
                        <p 
                            className="pb-3 flex items-baseline justify-center">
                            Aussi sainement que gourmandement, c'est la règle !
                        </p>
                        <p 
                            className="pb-3">
                           C'est l'occasion révée pour pouvoir apprendre à manger sainement après un bilan naturo mais pas que !
                        </p>
                        <p 
                            className="pb-3">
                           Rien n'est jamais trop bon pour ses papilles et sa santé ^^
                        </p>
                        
                  
                    </div>
                    <div 
                        className="flex justify-center w-[90%] md:w-full mx-auto">
                        <Image
                            src="/images/gateauFleurs.jpg"
                            alt="une bouteille d'huile de massage"
                            width={500}
                            height ={300}
                            className="rounded-xl ml-5 mb-9 "
                        />
                        </div>








                </div>                
                 

        </div>
    )
}