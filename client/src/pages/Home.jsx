import Hero from "../components/Hero";
import Logos from "../components/Logos";
import About from "../components/About"; // The original About component that was on the index page

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <About />
    </div>
  );
}
