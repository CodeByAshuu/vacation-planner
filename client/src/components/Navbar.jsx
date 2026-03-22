import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const textClass = isHome ? "text-white" : "text-gray-900";

  const navLinks = [
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className={`flex justify-between items-center px-6 lg:px-10 py-6 absolute w-full z-50 ${textClass}`}>
      
      <Link to="/" className="flex gap-2 items-center" onClick={() => setIsOpen(false)}>
        <img
          src="/breezee.png"
          className="w-12 h-12"
          alt="Logo"
        />
        <h1 className="text-xl font-semibold">Vacationeeze</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center text-sm">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact">
          <button className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${isHome ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
            Get in touch
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-gray-900 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-2xl font-serif hover:text-gold-muted"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium">
              Get in touch
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}