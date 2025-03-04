import Introduction from "./components/Introduction";
import Presentation from "./components/Presentation";
import Prestations from "./components/Prestations";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="w-full h-full"
    style={{
      backgroundImage: "url('/images/aquaTerreCuite.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition:"center", 
  }}>
      
    <div
      className="flex flex-col w-[90%] mx-auto">


   
      <Introduction />
      <Presentation />
      <Prestations />
      <Contact />

      </div>

    </div>
  );
}
