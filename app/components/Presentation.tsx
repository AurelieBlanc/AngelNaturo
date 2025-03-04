import Image from "next/image"; 
import { PiFlowerLotusDuotone } from "react-icons/pi"; // fleur de lotus

export default function Presentation () {
    return (
        <div
            className="flex flex-col items-center w-full mx-auto">
           
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
                                className="font-amatic text-7xl font-extrabold text-rose-900 w-[95%] mx-auto">
                                Mais qui est Angélique ?
                            </h2>
                            <p
                                className="font-beth text-[27px]  text-rose-950 mt-6 text-center mb-10 w-[85%] mx-auto">
                                Angélique est une naturopathe certifiée et diplomée en 2024, qui saura vous ravir tant par ses conseils avisés que par ses recettes bien-être: Effectivement Angélique est aussi un chef naturo hors-pair et terriblement imaginative qui saura vous régaler les papilles en toute légalité ! Ici la culpavilité ne sera pas de mise ! 
        
        
                            </p>
                        </div>
                            
                    <div
                        className="flex justify-center w-full">
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