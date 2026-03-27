import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DestinationDetail from "./pages/DestinationDetail";
import ResortDetail from "./pages/ResortDetail";
import ResortPage from "./pages/ResortPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="bg-white p-6 lg:p-10 min-h-screen">
      <div className="bg-white rounded-4xl overflow-hidden relative min-h-[calc(100vh-5rem)] flex flex-col">
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/resorts/:id" element={<ResortDetail />} />
            <Route path="/resorts" element={<ResortPage />} />
            <Route path="/resources" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}