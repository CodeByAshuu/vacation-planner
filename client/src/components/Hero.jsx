import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative rounded-3xl overflow-hidden">

      <Navbar />

      {/* Hero Image */}
      <div className="h-150 relative">
        <img
          src="/hero.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Heading */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="text-5xl font-serif leading-tight">
            Your destination <br /> for all things travel
          </h1>
        </div>
      </div>

      {/* Overlapping badge */}
      <div className="absolute left-1/2 bottom-3 -translate-x-1/2 translate-y-1/2">
        {/* <div style={{ clipPath: "polygon(5% 0%, 95% 0, 100% 100%, 0% 100%)" }}> */}
          <div className="bg-white px-24 py-4 rounded-xl shadow text-sm tracking-widest text-gray-500">
            FEATURED AND AWARDED
          </div>
        {/* </div> */}
      </div>

    </div>
  );
}