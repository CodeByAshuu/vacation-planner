import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Destinations() {
  const destinations = [
    { name: "Amalfi Coast, Italy", img: "https://images.unsplash.com/photo-1533681436303-01a5806e232b?auto=format&fit=crop&q=80&w=800" },
    { name: "Santorini, Greece", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800" },
    { name: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" },
    { name: "Banff, Canada", img: "https://images.unsplash.com/photo-1549419163-d1df5d45d378?auto=format&fit=crop&q=80&w=800" },
    { name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d1531a7fb783?auto=format&fit=crop&q=80&w=800" },
    { name: "Paris, France", img: "https://images.unsplash.com/photo-1502602898657-3e907a5ea020?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-10">
      
      {/* Hero */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">Explore the<br/>world</h1>
        <p className="text-lg text-gray-500">From sun-kissed beaches to historic cityscapes, discover your next memorable getaway.</p>
      </div>

      {/* Featured Destinations / Filters */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Beach", "Mountains", "Cities", "Luxury"].map(filter => (
            <button key={filter} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === "All" ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Big Card */}
        <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200" 
            alt="Featured Destination" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="bg-[#d4af37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Featured</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-2">Bali, Indonesia</h2>
            <p className="text-lg text-gray-200">The ultimate tropical sanctuary for the soul.</p>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer">
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-serif font-medium drop-shadow-md">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
