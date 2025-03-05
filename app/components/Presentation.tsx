import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus

export default function Presentation () {
    return (
        <div
            className="flex flex-col items-center w-full mx-auto">
           
           <PiFlowerLotusDuotone 
                className="text-7xl text-rose-950 flex justify-center w-[100px] mx-auto"/>

            
                        <div
                            className="text-center">
                            <h2
                                className="font-amatic text-7xl md:text-8xl font-extrabold text-rose-900 w-[95%] md:w-[70%] mx-auto">
                                Mais qui est Angel ?
                            </h2>
                            <div
                                className="font-beth text-lg md:text-[23px]  text-rose-950 mt-6 text-center mb-6 md:mb-10 w-[85%] md:w-[75%] mx-auto leading-loose">
                                <p
                                    className="pb-3">
                                    Angélique est une naturopathe certifiée et diplomée en 2024,
                                </p>
                                <p
                                    className="pb-3">
                                    Qui saura vous ravir tant par ses conseils avisés , son professionalisme, 
                                </p>
                                <p
                                    className="pb-3">
                                    Que par ses recettes bien-être.
                                </p>
                                <p
                                    className="pb-3">
                                    Effectivement Angélique est aussi une cheffe naturo hors-pair et terriblement imaginative
                                </p>
                                <p
                                    className="pb-3">
                                    Qui saura vous régaler les papilles en toute légalité ! Ici la culpabilité ne sera pas de mise ! 
                                </p>
                                 
        
        
                            </div>
                        </div>
                            
                    <div
                        className="flex justify-center w-[90%] md:w-full mx-auto">
                        <Image
                            src="/images/chinoise.jpg"
                            alt="photo d'Angélique qui croise les doigts"
                            width={500}
                            height ={300}
                            className="rounded-xl ml-5 mb-8"
                        />
                    </div>
                         
        
               


        </div>
        
    )
}