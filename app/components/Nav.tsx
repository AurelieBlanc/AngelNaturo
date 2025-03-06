export default function NavBar() {
    return (
        <div
            className="w-full h-[130px] bg-rose-950 flex justify-center items-center md:h-[50px]"
            // style={{
            //     backgroundImage: "url('/images/aquaKakiFeuille.avif')", 
            //     backgroundSize: "left", 
            //     backgroundPosition: "bottom", 
            // }} 
            >
               
                    <ul
                        className="w-[75%] flex flex-col items-center text-sm text-rose-200 font-beth gap-y-2 md:flex md:flex-row md:justify-around md:text-lg ">
                            <li>
                                <a
                                    className=""
                                    href="#Introduction">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="#Présentation">
                                    Présentation
                                </a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="#Prestations">
                                    Prestations
                                </a>
                            </li>
                            <li>
                                <a
                                    className=""
                                    href="#Contact">
                                    Contact
                                </a>
                            </li>
                            
                    </ul>
               

        </div>
    )
}