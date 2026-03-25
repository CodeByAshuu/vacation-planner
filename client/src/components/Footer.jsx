import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white rounded-4xl mt-8 p-10 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex gap-2 items-center mb-6">
            <img src="/breezee.png" className="w-10 h-10 brightness-0 invert" alt="Logo" />
            <h2 className="text-2xl font-serif">Vacationeeze</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your destination for bespoke travel planning, luxury cruises, and unforgettable experiences.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-6">Company</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Press</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Explore</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Travel Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li>hello@vacationeeze.com</li>
            <li>+1 (555) 123-4567</li>
            <li><Link to="/contact" className="text-white underline underline-offset-4 hover:text-gold-muted transition-colors mt-2 inline-block">Plan your trip</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vacationeeze. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
