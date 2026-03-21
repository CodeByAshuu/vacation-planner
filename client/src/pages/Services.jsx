import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Services() {
  const services = [
    { title: "Destination Weddings", desc: "Seamlessly orchestrated celebrations in the world's most romantic locations.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { title: "Luxury Cruises", desc: "Sail the seas in unparalleled comfort with elite cruise lines and private yachts.", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800" },
    { title: "Group Travel", desc: "Curated itineraries for families, corporate retreats, and friend escapes.", img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800" },
    { title: "Custom Trips", desc: "Your dream vacation built from scratch, ensuring total personalization.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" }
  ];

  const process = [
    { name: "Consultation", desc: "We discuss your vision, preferences, and travel dreams." },
    { name: "Planning", desc: "Our experts craft a bespoke itinerary customized for you." },
    { name: "Booking", desc: "We handle all logistics: flights, stays, and exclusive perks." },
    { name: "Experience", desc: "You embark on a seamless journey with our 24/7 support." }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-10">
      
      {/* Hero Section */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">Travel, tailored<br/>to you.</h1>
        <p className="text-lg text-gray-500">Discover our expert concierge services designed to make every journey extraordinary, effortless, and entirely yours.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
        {services.map((svc, i) => (
          <Card key={i} noPadding className="group overflow-hidden rounded-[2.5rem]">
            <div className="relative h-72">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
              <img 
                src={svc.img} 
                alt={svc.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-10 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-3">{svc.title}</h3>
              <p className="text-gray-500 leading-relaxed">{svc.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto mb-32">
        <SectionHeader title="How it Works" subtitle="OUR PROCESS" centered />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>
          
          {process.map((step, i) => (
            <div key={i} className="text-center relative z-10">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex justify-center items-center text-xl font-serif font-semibold shadow-sm mx-auto mb-6 text-gray-900 relative">
                {i + 1}
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">{step.name}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 rounded-[3rem] text-white py-24 px-6 md:px-20 text-center max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready for your<br/>next adventure?</h2>
        <Button variant="primary" className="text-lg px-8 py-4">Start Planning</Button>
      </div>

    </div>
  );
}
