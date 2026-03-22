import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Destinations() {
  const exploreLocations = [
    {
      name: "Mexico",
      desc: "Experience vibrant culture, stunning cenotes, and world-renowned all-inclusive luxury. The perfect blend of romance and adventure on sun-drenched shores.",
      img: "/destination-mex.jpg",
      tags: ["All-inclusive", "Beachfront", "Luxury resorts"]
    },
    {
      name: "Dominican Republic",
      desc: "Discover pristine, palm-fringed beaches and vibrant turquoise waters. An idyllic haven offering unparalleled beachfront elegance and relaxation.",
      img: "/destination-rep.jpg",
      tags: ["White sands", "Family-friendly", "Tropical"]
    },
    {
      name: "Jamaica",
      desc: "Immerse yourself in lush rainforests, majestic waterfalls, and true Caribbean hospitality. An unforgettable backdrop for your most magical moments.",
      img: "/destination-jam.jpg",
      tags: ["Adults-only", "Scenic views", "Vibrant"]
    }
  ];

  const moreDestinations = [
    { name: "Costa Rica", img: "/destination-costa-rica.avif" },
    { name: "Bahamas", img: "/destination-bahamas.avif" },
    { name: "Hawaii", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" },
    { name: "California", img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=400" }
  ];

  const popularResorts = [
    {
      name: "Ritz-Carlton Reserve",
      loc: "Los Cabos, Mexico",
      desc: "An exclusive hideaway offering dramatic ocean views and bespoke luxury experiences.",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Eden Roc Cap Cana",
      loc: "Punta Cana, Dominican Republic",
      desc: "A stunning Mediterranean-style boutique resort set within a gated beachfront community.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Half Moon",
      loc: "Montego Bay, Jamaica",
      desc: "A legendary resort featuring elegant private villas and two miles of private white sand beach.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
      <div className="bg-white rounded-3xl py-12 px-6 lg:px-8 flex flex-col gap-16 mt-9 mx-auto">
        
        {/* Section 1: Hero Banner */}
        <Hero 
          image="/destination-see.jpg"
          title={<>Find your perfect<br/>wedding destination</>}
          subtitle="We guide you through the world's most breathtaking locations to discover the one that matches your dream celebration."
          height="h-[400px] md:h-[570px]"
          rounded="rounded-2xl"
        />

        {/* Section 2: Partner Logos Row */}
        <div className="text-center pb-8 border-b border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["The Knot", "USA Today", "Vogue Wedding", "Condé Nast", "Travel + Leisure"].map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-serif italic text-gray-600 font-medium">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Section 3: Explore Destinations by Location */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-16">
            Explore wedding destinations <br className="hidden md:block" />by location
          </h2>
          
          <div className="flex flex-col gap-12">
            {exploreLocations.map((loc, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-md group `}
              >
                <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm relative shrink-0">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-2 lg:p-8">
                  <h3 className="text-3xl font-serif text-gray-900 mb-4">{loc.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{loc.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {loc.tags.map((tag, index) => (
                      <span key={index} className="bg-white border text-gray-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <Link to={`/destinations/${loc.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <button className="border-b-2 border-gold-muted text-gray-900 font-semibold pb-1 hover:text-gold-muted transition-colors uppercase tracking-wider text-sm">
                        Discover more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: More Destinations (Circular Icons) */}
        <div className="pt-8">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-16">
            More Destinations
          </h2>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16">
            {moreDestinations.map((dest, i) => (
              <Link key={i} to={`/destinations/${dest.name.toLowerCase()}`} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border-4 border-white">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">{dest.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 5: CTA Banner (Dark Green Strip) */}
        <div className="bg-emerald-900 rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-lg overflow-hidden relative group">
          <div className="absolute -right-20 -top-40 opacity-10">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="white"><path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45L50 0Z"/></svg>
          </div>
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif mb-3 leading-tight">
              Not sure which destination is right for you?
            </h3>
            <p className="text-emerald-100/80 text-lg">
              Take our 2-minute quiz, and our experts will match you with the perfect location.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button className="bg-white text-emerald-950 px-8 py-3.5 rounded-full font-semibold group-hover:scale-105 transition-transform duration-700 will-change-transform hover:bg-emerald-50 shadow-md">
              Get matched
            </button>
          </div>
        </div>

        {/* Section 6: Popular All-Inclusive Resorts */}
        <div className="flex flex-col gap-8 pb-4">
          <div className="flex justify-between items-end">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tighter">Popular all-inclusive wedding resorts</h3>
            <Link to="/destinations" className="text-sm font-semibold text-gray-600 hover:text-gold-muted transition-colors uppercase tracking-wider hidden md:block">
              View all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularResorts.map((resort, i) => (
              <Link key={i} to={`/resorts/${resort.name.toLowerCase().replace(/\s+/g, '-')}`} className="group flex flex-col gap-4 cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img 
                    src={resort.img} 
                    alt={resort.name} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 flex flex-row gap-2">
                    <span className="bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">All-inclusive</span>
                    <span className="bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow w-max">Family-friendly</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{resort.loc}</p>
                  <h4 className="text-xl font-light font-serif text-gray-900 mb-2 leading-tight">{resort.name}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2 md:leading-relaxed">{resort.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/destinations" className="text-sm font-semibold text-gray-600 uppercase tracking-wider text-center mt-2 md:hidden">
            View all
          </Link>
        </div>

      </div>
  );
}
