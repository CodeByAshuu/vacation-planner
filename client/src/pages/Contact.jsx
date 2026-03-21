import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 px-6 lg:px-10 max-w-6xl mx-auto">
      
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">Let’s plan your<br/>next journey.</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Consult with our luxury travel advisors to begin crafting an itinerary that matches your wildest dreams.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <Card className="bg-white p-10 lg:p-14 border border-gray-100">
          <h2 className="text-3xl font-serif mb-8">Send an Inquiry</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Destination Interest</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all appearance-none">
                <option>Select a region</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Americas</option>
                <option>Africa & Middle East</option>
                <option>Oceania</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all" placeholder="Tell us about your ideal trip..."></textarea>
            </div>

            <Button className="w-full">Submit Inquiry</Button>
          </form>
        </Card>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-12 lg:pl-10">
          <div>
            <h3 className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-4">Contact Details</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-xl font-serif text-gray-900">hello@vacationeeze.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-xl font-serif text-gray-900">+1 (800) 123-4567</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Headquarters</p>
                <p className="text-xl font-serif text-gray-900 leading-relaxed">120 Travel Blvd, Suite 400<br/>New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="h-64 rounded-[2rem] overflow-hidden relative">
            {/* Map Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/20"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
