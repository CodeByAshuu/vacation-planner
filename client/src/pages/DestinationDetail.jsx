import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { 
  Globe,
  Check,
  Plane, 
  Map, 
  MapPin,
  Utensils,
  Star,
  ArrowLeft
} from "lucide-react";

export default function DestinationDetail() {
  const { id } = useParams();
  
  // Dummy data for example
  const data = {
    name: id ? id.charAt(0).toUpperCase() + id.slice(1) : "Mexico",
    img: "/mexico.jpg",
    description: "Whether you're looking for an over-the-top luxury resort in Los Cabos or a charming boutique hotel in the Riviera Maya, Mexico offers an incredible variety of settings for your dream wedding.",
    highlights: ["Over 6,000 miles of coastline", "World-class gourmet dining", "Vibrant local culture", "Seamless flight connections"],
    features: [
      { title: "Planning Excellence", desc: "Our on-site partners handle every detail from legal requirements to floral arrangements." },
      { title: "Diverse Settings", desc: "Choose from white-sand beaches, lush jungle gardens, or historic haciendas." },
      { title: "Unbeatable Value", desc: "Premium luxury at a fraction of the cost of domestic continental options." }
    ]
  };

  return (
    <div className="pt-24 pb-20 px-6 lg:px-10 mx-auto">
      <Link to="/destinations" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-muted transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Destinations
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div className="rounded-3xl overflow-hidden h-100 lg:h-full shadow-lg">
          <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className="text-gold-muted text-xs font-bold uppercase tracking-widest mb-4">Destination Spotlight</span>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">{data.name}</h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">{data.description}</p>
          
          <div className="space-y-4 mb-10">
            {data.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gold-muted/10 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-gold-muted" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <Button className="w-max">Start Planning in {data.name}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {data.features.map((feature, i) => (
          <Card key={i} className="bg-gray-50 border-none shadow-none">
            <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
          </Card>
        ))}
      </div>

      <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden group">
        {/* Floating Icons Background Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Top Left: Plane */}
            <div className="absolute top-12 left-12 opacity-0 group-hover:opacity-20 group-hover:-translate-y-6 group-hover:translate-x-4 transition-all duration-1500 ease-out delay-75">
               <Plane className="w-10 h-10 rotate-[-15deg] text-white" strokeWidth={1} />
            </div>
            
            {/* Top Right: MapPin */}
            <div className="absolute top-20 right-32 opacity-0 group-hover:opacity-20 group-hover:translate-x-8 group-hover:-translate-y-2 transition-all duration-2000 ease-out delay-300">
               <MapPin className="w-8 h-8 rotate-15 text-white" strokeWidth={1} />
            </div>
            
            {/* Bottom Left: Map */}
            <div className="absolute bottom-20 left-48 opacity-0 group-hover:opacity-20 group-hover:translate-y-6 group-hover:-translate-x-2 transition-all duration-1800 ease-out delay-500">
               <Map className="w-9 h-9 rotate-[-10deg] text-white" strokeWidth={1} />
            </div>
            
            {/* Bottom Right: Utensils (Cuisine) */}
            <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-20 group-hover:-translate-x-6 group-hover:-translate-y-4 transition-all duration-1600 ease-out delay-150">
               <Utensils className="w-10 h-10 rotate-25 text-white" strokeWidth={1} />
            </div>
            
            {/* Inner Floating Elements: Globe */}
            <div className="absolute top-1/2 -translate-y-1/2 left-10 opacity-0 group-hover:opacity-10 group-hover:scale-125 transition-all duration-2500 ease-out delay-700">
               <Globe className="w-14 h-14 text-white" strokeWidth={1} />
            </div>

            {/* Subtle extra: Star */}
            <div className="absolute top-3/5 right-50 opacity-0 group-hover:opacity-15 group-hover:rotate-45 transition-all duration-3000 delay-1000">
               <Star className="w-6 h-6 text-gold-muted" />
            </div>
          </div>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to find your resort?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">We've hand-selected over 50 premier resorts in {data.name} that specialize in luxury destination weddings.</p>
        <Button variant="primary">View Resorts in {data.name}</Button>
      </div>
    </div>
  );
}
