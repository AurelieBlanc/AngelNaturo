export default function NavBar() {
    return (
        <div
            className="w-full h-[60px] bg-rose-950 flex justify-center items-center"
            // style={{
            //     backgroundImage: "url('/images/aquaKakiFeuille.avif')", 
            //     backgroundSize: "left", 
            //     backgroundPosition: "bottom", 
            // }} 
            >
               
                    <ul
                        className="w-[75%] flex justify-between text-2xl text-rose-200 font-beth">
                            <li>Accueil</li>
                            <li>Présentation</li>
                            <li>Prestations</li>
                            <li>Contact</li>
                    </ul>
               

        </div>
    )
}