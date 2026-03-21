import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  // On home page, we overlay on the hero image (text white). On others, we could use dark text.
  // We'll stick to a consistent text style or dynamic based on page. Let's make it dark text by default for standard pages, and white for Home if we use absolute.
  const textClass = isHome ? "text-white" : "text-gray-900";

  return (
    <div className={`flex justify-between items-center px-6 lg:px-10 py-6 absolute w-full z-20 ${textClass}`}>
      
      <Link to="/" className="flex gap-2 items-center">
        <img
          src="/breezee.png"
          className="w-12 h-12"
          alt="Logo"
        />
        <h1 className="text-xl font-semibold">Vacationeeze</h1>
      </Link>

      <div className="hidden md:flex gap-8 items-center text-sm">
        <Link to="/about" className="hover:opacity-70 transition-opacity">About us</Link>
        <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        <Link to="/destinations" className="hover:opacity-70 transition-opacity">Destinations</Link>
        <Link to="/resources" className="hover:opacity-70 transition-opacity">Resources</Link>
        <Link to="/contact">
          <button className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${isHome ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
}