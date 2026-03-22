import { Link } from "react-router-dom";

export default function WeddingDestinations() {
  const resorts = [
    {
      name: "Secrets Maroma Beach Riviera Cancun",
      loc: "Cancun, Mexico",
      desc: "An exclusive adults-only sanctuary featuring pristine beaches and world-class spa facilities.",
      img: "https://images.unsplash.com/photo-1543489822-c49534f3271f?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Dreams Royal Beach Punta Cana",
      loc: "Punta Cana, Dominican Republic",
      desc: "A luxurious family-friendly retreat offering boundless entertainment and pristine Caribbean shores.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Hyatt Ziva Rose Hall",
      loc: "Montego Bay, Jamaica",
      desc: "Spectacular ocean views and stunning wedding gazebos set against dramatic mountains and sea.",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
      <div className="bg-white rounded-3xl py-4 lg:py-12 flex flex-col gap-4 lg:gap-16 mx-auto">
        
        {/* Section 1: Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden h-125 md:h-160 flex flex-col justify-center items-center text-center group cursor-pointer">
          <img 
            src="/mexico.jpg" 
            alt="Mexico Wedding Destination"
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute top-8 left-0 w-full justify-center gap-2 lg:gap-4 text-[8px] lg:text-xs md:text-sm font-medium tracking-widest text-white uppercase opacity-90 hidden sm:flex">
            <span className="relative cursor-pointer hover:text-gold-muted transition-colors 
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 
            after:bg-gold-muted after:transition-all after:duration-300 hover:after:w-full">
              Mexico
            </span>
            <span className="opacity-50">|</span>

            <span className="relative cursor-pointer hover:text-gold-muted transition-colors 
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 
            after:bg-gold-muted after:transition-all after:duration-300 hover:after:w-full">
              Domincan Republic
            </span>
            <span className="opacity-50">|</span>

            <span className="relative cursor-pointer hover:text-gold-muted transition-colors 
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 
            after:bg-gold-muted after:transition-all after:duration-300 hover:after:w-full">
              Jamaica
            </span>
            <span className="opacity-50">|</span>

            <span className="relative cursor-pointer hover:text-gold-muted transition-colors 
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 
            after:bg-gold-muted after:transition-all after:duration-300 hover:after:w-full">
              Caribbean
            </span>
          </div>

          <div className="absolute w-full bottom-24 lg:bottom-6 left-1/2 -translate-x-1/2 text-white px-1 lg:px-6 mt-2 lg:mt-10">
            <h2 className="text-xl md:text-5xl font-serif text-white mb-4 lg:mb-6 leading-tight drop-shadow-md">
              Your dream destination<br />wedding in Mexico
            </h2>
            <p className="text-xs lg:text-md text-gray-200 mb-6 lg:mb-10 max-w-xl mx-auto drop-shadow text-balance">
              Exchange vows on sun-drenched shores with seamless planning and unparalleled luxury accommodations.
            </p>
            <button className="bg-white text-xs text-gray-900 px-4 lg:px-8 py-2 lg:py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
              Get in touch
            </button>
          </div>
        </div>

        {/* Section 2: Popular Wedding Resorts */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 tracking-tighter">Popular wedding resorts</h3>
            <button className="text-sm font-semibold text-gray-600 hover:text-gold-muted transition-colors uppercase tracking-wider hidden md:block">
              View all resorts
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resorts.map((resort, i) => (
              <Link key={i} to={`/resorts/${resort.name.toLowerCase().replace(/\s+/g, '-')}`} className="group flex flex-col gap-4 cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img 
                    src={resort.img} 
                    alt={resort.name} 
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
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
          <button className="text-sm font-semibold text-gray-600 uppercase tracking-wider text-center mt-2 md:hidden">
            View all resorts
          </button>
        </div>

        {/* Section 3: Featured Article Banner */}
        <div className="relative rounded-2xl overflow-hidden h-100 flex items-end group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-500">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200" 
            alt="Wedding Article"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10"></div>
          
          <div className="relative z-10 p-8 md:p-12 w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Wedding Advice</span>
                <span className="text-gray-300 text-sm font-medium">October 24, 2026</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight drop-shadow-md">
                Explore the top wedding destinations
              </h3>
              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                  alt="Author" 
                  className="w-10 h-10 rounded-full border-2 border-white/50 object-cover shadow"
                />
                <span className="text-white text-sm font-medium drop-shadow">By Sarah Jenkins</span>
              </div>
            </div>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 shrink-0">
              View all articles
            </button>
          </div>
        </div>

      </div>
  );
}
