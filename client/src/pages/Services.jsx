import React from "react";
import { 
  Globe, 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  Plane, 
  Map, 
  MapPin,
  Utensils,
  Star,
  ArrowRight
} from "lucide-react";
import Button from "../components/Button";
import TravelCard from "../components/TravelCard";
import Hero from "../components/Hero";

export default function Services() {
  const featuredTravel = [
    { 
      title: "New York", 
      subtitle: "Economy", 
      price: "$120", 
      airport: "JFK", 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Paris", 
      subtitle: "First Class", 
      price: "$850", 
      airport: "CDG", 
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Tokyo", 
      subtitle: "Business", 
      price: "$540", 
      airport: "NRT", 
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "London", 
      subtitle: "Economy", 
      price: "$110", 
      airport: "LHR", 
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const services = [
    { 
      title: "Destination Weddings", 
      desc: "Seamlessly orchestrated celebrations in the world's most romantic locations.", 
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      tag: "Signature"
    },
    { 
      title: "Luxury Cruises", 
      desc: "Sail the seas in unparalleled comfort with elite cruise lines and private yachts.", 
      img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800",
      tag: "Popular"
    },
    { 
      title: "Group Travel", 
      desc: "Curated itineraries for families, corporate retreats, and friend escapes.", 
      img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Custom Trips", 
      desc: "Your dream vacation built from scratch, ensuring total personalization.", 
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const whyChooseUs = [
    {
      title: "Tailored Planning",
      desc: "Every journey is uniquely crafted to match your personal style and preferences.",
      icon: <Calendar className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
    },
    {
      title: "Global Network",
      desc: "Access exclusive perks and partnerships with the world's finest hotels and resorts.",
      icon: <Globe className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
    },
    {
      title: "Stress-Free Experience",
      desc: "From first contact to return flight, we handle every detail so you can focus on the journey.",
      icon: <ShieldCheck className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
    }
  ];

  const process = [
    { name: "Consultation", desc: "We discuss your vision, preferences, and travel dreams.", icon: <MessageSquare className="w-6 h-6" strokeWidth={1.5} /> },
    { name: "Planning", desc: "Our experts craft a bespoke itinerary customized for you.", icon: <Map className="w-6 h-6" strokeWidth={1.5} /> },
    { name: "Booking", desc: "We handle all logistics: flights, stays, and exclusive perks.", icon: <Plane className="w-6 h-6" strokeWidth={1.5} /> },
    { name: "Experience", desc: "You embark on a seamless journey with our 24/7 support.", icon: <Star className="w-6 h-6" strokeWidth={1.5} /> }
  ];

  return (
    <div className="bg-white rounded-3xl py-12 px-6 lg:px-8 flex flex-col gap-16 mt-9 mx-auto">
      
      {/* Section 1: Hero Refactored */}
      <Hero 
        image="/Nepal.jpg"
        title={<>Bespoke travel experiences,<br />crafted for you.</>}
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

      <div className="px-6 md:px-10 py-20 space-y-32">
        
        {/* Section 2: Featured Travel Cards */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase mb-4 block">Recommended</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-semibold leading-tight">Popular Destinations</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <Button variant="outline" className="rounded-full px-6 py-2">View All</Button>
            </div>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory">
            {featuredTravel.map((item, i) => (
              <div key={i} className="snap-center first:pl-2">
                <TravelCard 
                  {...item} 
                  onSearch={() => console.log(`Searching for ${item.title}`)} 
                />
              </div>
            ))}
          </div>
        </div>

        

        {/* Section 3: Services (Redesigned Premium Z-Pattern) */}
        <section id="services-expertise" className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center mb-28 max-w-3xl mx-auto">
            <span className="text-[#d4af37] font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block drop-shadow-sm">
              Tailored Boutique Travel
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 font-semibold leading-[1.1]">
              Unparalleled Expertise
            </h2>
            <div className="w-16 h-px bg-[#d4af37] mx-auto mb-8 opacity-40"></div>
            <p className="max-w-2xl mx-auto text-gray-500 text-xl font-light leading-relaxed">
              We curate a collection of boutique travel services, each masterfully designed to elevate your journey into an extraordinary narrative.
            </p>
          </div>
          
          <div className="space-y-40">
            {services.map((svc, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 group`}>
                
                {/* Visual Canvas Side */}
                <div className="w-full lg:w-[60%] relative">
                  {/* Decorative faint number in background */}
                  <div className={`absolute -top-20 ${i % 2 === 0 ? '-left-12' : '-right-12'} text-[18rem] md:text-[22rem] font-serif font-black text-gray-50 pointer-events-none select-none -z-10 leading-none transition-all duration-1000 group-hover:text-gray-100 group-hover:scale-105`}>
                    0{i + 1}
                  </div>
                  
                  {/* Main Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_50px_100px_-20px_rgba(212,175,55,0.15)] transition-all duration-1000">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    {/* Artistic Overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    {/* Premium Tag */}
                    {svc.tag && (
                      <div className="absolute top-8 left-8 px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[9px] font-bold tracking-[0.2em] text-white uppercase shadow-lg">
                        {svc.tag}
                      </div>
                    )}
                  </div>
                  
                  {/* Floating Accent Element */}
                  <div className={`absolute -bottom-8 ${i % 2 === 0 ? '-right-8' : '-left-8'} hidden xl:flex w-40 h-40 bg-white shadow-2xl rounded-3xl items-center justify-center p-8 backdrop-blur-sm bg-white/90 border border-gray-50 transform group-hover:translate-y-2 transition-transform duration-700`}>
                    <div className="text-center">
                      <div className="text-[#d4af37] font-serif italic text-3xl mb-1">Luxury</div>
                      <div className="text-[8px] tracking-widest text-gray-400 uppercase font-bold">Standard</div>
                    </div>
                  </div>
                </div>
                
                {/* Narrative Content Side */}
                <div className="w-full lg:w-[40%] space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.2] tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-gray-500 text-xl leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2 space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      {["Hand-picked locales", "Private concierge", "Seamless logistics", "Elite partnerships"].map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 group-hover:bg-[#d4af37] transition-colors"></div>
                          <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 transition-colors uppercase tracking-widest">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex pt-6">
                      <button className="flex items-center gap-5 group/cta text-gray-900">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-transparent group-hover/cta:border-[#d4af37] transition-all pb-1 translate-y-0.5">
                          Discover Experience
                        </span>
                        <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 transition-all duration-500 group-hover/cta:bg-gray-900 group-hover/cta:text-white group-hover/cta:border-gray-900 group-hover/cta:shadow-xl group-hover/cta:-rotate-45">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Why Choose Us (Trust Builder) */}
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-10 transition-all duration-500 hover:rotate-10 hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Subtle design polish */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Section 5: Process (Refined) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase mb-4 block">Workflow</span>
            <h2 className="text-5xl font-serif text-gray-900 mb-6 font-semibold">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gray-100"></div>
            
            {process.map((step, i) => (
              <div key={i} className="group text-center relative z-10 px-4">
                <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex justify-center items-center shadow-sm mx-auto mb-10 transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:border-white">
                  <div className="text-gray-400 transition-colors duration-500 group-hover:text-gray-900">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">{step.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Testimonial / Social Proof */}
        <div className="max-w-4xl mx-auto text-center py-10 px-6">
          <div className="flex justify-center gap-1.5 mb-10">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className="w-5 h-5 fill-gray-900 text-gray-900" />
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-[1.3] mb-12 drop-shadow-sm">
            "Everything was seamless. It felt like a dream. The attention to detail and personalized itinerary made our honeymoon absolutely unforgettable."
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="text-gray-900 font-bold text-xl mb-2">Alexandra & James</p>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold">Aman Venice, Italy</p>
          </div>
        </div>

        {/* Section 7: Final CTA (Conversion Focus) */}
        <div className="bg-gray-900 rounded-[3.5rem] text-white py-24 px-10 text-center max-w-6xl mx-auto relative overflow-hidden shadow-2xl border border-white/5 group">
          
          {/* Floating Icons Background Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Top Left: Plane */}
            <div className="absolute top-12 left-12 opacity-0 group-hover:opacity-20 group-hover:-translate-y-6 group-hover:translate-x-4 transition-all duration-[1500ms] ease-out delay-75">
               <Plane className="w-10 h-10 rotate-[-15deg] text-white" strokeWidth={1} />
            </div>
            
            {/* Top Right: MapPin */}
            <div className="absolute top-20 right-32 opacity-0 group-hover:opacity-20 group-hover:translate-x-8 group-hover:-translate-y-2 transition-all duration-[2000ms] ease-out delay-300">
               <MapPin className="w-8 h-8 rotate-15 text-white" strokeWidth={1} />
            </div>
            
            {/* Bottom Left: Map */}
            <div className="absolute bottom-20 left-48 opacity-0 group-hover:opacity-20 group-hover:translate-y-6 group-hover:-translate-x-2 transition-all duration-[1800ms] ease-out delay-500">
               <Map className="w-9 h-9 rotate-[-10deg] text-white" strokeWidth={1} />
            </div>
            
            {/* Bottom Right: Utensils (Cuisine) */}
            <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-20 group-hover:-translate-x-6 group-hover:-translate-y-4 transition-all duration-[1600ms] ease-out delay-150">
               <Utensils className="w-10 h-10 rotate-25 text-white" strokeWidth={1} />
            </div>
            
            {/* Inner Floating Elements: Globe */}
            <div className="absolute top-1/2 -translate-y-1/2 left-10 opacity-0 group-hover:opacity-10 group-hover:scale-125 transition-all duration-[2500ms] ease-out delay-700">
               <Globe className="w-14 h-14 text-white" strokeWidth={1} />
            </div>

            {/* Subtle extra: Star */}
            <div className="absolute top-3/5 right-50 opacity-0 group-hover:opacity-15 group-hover:rotate-45 transition-all duration-[3000ms] delay-[1000ms]">
               <Star className="w-6 h-6 text-gold-muted" />
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] max-w-4xl mx-auto font-semibold">
              Let’s design something unforgettable.
            </h2>
            <p className="text-xl text-white/40 font-light mb-14 max-w-xl mx-auto leading-relaxed">
              Tell us your vision. We’ll handle the rest. Your extraordinary journey starts with a single conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* <Button variant="primary" className="text-lg px-12 py-5 rounded-full bg-white text-emerald-950 hover:bg-gray-100 w-full sm:w-auto border-none shadow-2xl transition-all active:scale-95">
                Start Planning
              </Button> */}
              <button className="bg-white text-emerald-950 text-lg px-8 py-5 rounded-full hover:bg-gray-100 w-full sm:w-auto border-none shadow-2xl transition-all active:scale-95">
                Start Planning
              </button>
              <Button variant="outline" className="text-lg px-12 py-5 rounded-full border-white/20 text-white hover:bg-white/10 w-full sm:w-auto transition-all backdrop-blur-md active:scale-95">
                View Destinations
              </Button>
            </div>
          </div>
          
          {/* Subtle design polish for luxury depth */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-white/3 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-100 h-100 bg-white/3 rounded-full -ml-48 -mb-48 blur-[100px]"></div>
        </div>

      </div>

    </div>
  );
}
