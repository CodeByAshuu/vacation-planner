import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function About() {
  const team = [
    { name: "Sarah Jenkins", role: "Founder & Lead Advisor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" },
    { name: "Michael Chang", role: "Luxury Cruise Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
    { name: "Elena Rodriguez", role: "Destination Weddings", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { name: "David Smith", role: "Custom Itineraries", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-10">
      
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">About Us</h1>
        <p className="text-lg text-gray-500">
          Curating bespoke luxury experiences that go beyond the ordinary, tailored specifically to your desires.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 max-w-6xl mx-auto">
        <div>
          <SectionHeader title="Our Story" subtitle="BEHIND VACATIONEEZE" />
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              What started as a family passion for exploring the world's hidden gems has blossomed into a premier travel concierge service. We believe travel is more than just visiting a place—it's about how that place makes you feel.
            </p>
            <p>
              For over a decade, we have been crafting meticulously planned itineraries, ensuring every detail is perfect so all you have to do is show up and enjoy the moment.
            </p>
            <Button className="mt-4">Read our philosophy</Button>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" 
            alt="Travel view" 
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-lg hidden md:block">
            <p className="font-serif text-3xl text-[#fcd143]">10+</p>
            <p className="text-sm tracking-widest text-gray-400 font-semibold uppercase">Years of joy</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 -mx-6 lg:-mx-10 px-6 lg:px-10 py-24 mb-32 rounded-[3rem]">
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeader title="Why Choose Us" subtitle="OUR PROMISE" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-16">
            {[
              { title: "Personalization", desc: "Every trip is uniquely crafted to match your exact preferences and style." },
              { title: "Luxury Experience", desc: "Access to VIP perks, premium upgrades, and exclusive accommodations." },
              { title: "Trust", desc: "We are with you every step of the way, providing 24/7 support during your travels." },
              { title: "Expertise", desc: "Deep industry connections and inside knowledge of the world's best destinations." }
            ].map((val, i) => (
              <Card key={i} className="bg-white border text-center border-gray-100">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-serif mb-6 mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-xl font-serif mb-3 font-semibold">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <SectionHeader title="Meet The Team" subtitle="YOUR TRAVEL CONCIERGES" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 h-80">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-serif font-semibold">{member.name}</h3>
              <p className="text-sm text-[#d4af37] font-medium tracking-wide uppercase mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
