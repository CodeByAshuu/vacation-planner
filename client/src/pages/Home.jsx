import Hero from "../components/Hero";
import Logos from "../components/Logos";
import About from "../components/About"; 
import WeddingDestinations from "../components/WeddingDestinations"; 

export default function Home() {
  return (
    <div>
      <Hero 
        title={<>Your destination <br /> for all things travel</>}
      />
      <Logos />
      <About />
      <WeddingDestinations />
    </div>
  );
}
