import Hero from "./components/Hero";
import Logos from "./components/Logos";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-white p-10">
      <div className="bg-white rounded-3xl overflow-hidden">
        <Hero />
        <Logos />
        <About />
      </div>
    </div>
  );
}