import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { Star, MapPin, Users, Utensils, Waves, ArrowLeft } from "lucide-react";

export default function ResortDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);
  
  // Dummy data
  const data = {
    name: id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Secrets Maroma Beach",
    location: "Riviera Cancun, Mexico",
    rating: 5,
    img: "https://images.unsplash.com/photo-1543489822-c49534f3271f?auto=format&fit=crop&q=80&w=1200",
    description: "Tucked away on one of the most pristine beaches in all of Mexico, this AAA Five Diamond resort is a secluded paradise for adults only. Offering the ultimate in Unlimited-Luxury®, every amenity is included.",
    amenities: [
      { icon: Waves, label: "Private White Sand Beach" },
      { icon: Utensils, label: "9 Gourmet Dining Options" },
      { icon: Users, label: "Dedicated Wedding Coordinators" },
      { icon: Star, label: "World-Class Pevonia® Spa" }
    ],
    weddingPackages: [
      { name: "Beyond Memorable", price: "$7,500", features: ["Private dinner for up to 50 guests", "Professional hair and makeup", "Personalized cake and sparkling wine"] },
      { name: "Wedding in Paradise", price: "Complimentary*", features: ["Symbolic ceremony", "Wedding organization and personal coordinator", "Bouquet and boutonniere"] }
    ]
  };

  return (
    <div className="pt-24 px-6 lg:px-10 mx-auto">
      <Link to="/destinations" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-muted transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Resorts
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        <div className="lg:w-2/3">
          <div className="rounded-3xl overflow-hidden h-120 mb-8 shadow-md">
            <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex text-gold-muted">
              {[...Array(data.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Luxury All-Inclusive</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">{data.name}</h1>
          <div className="flex items-center gap-2 text-gray-500 mb-8 font-medium">
            <MapPin className="w-4 h-4 text-gold-muted" /> {data.location}
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>

        <div className="lg:w-1/3 flex flex-col gap-6">
          <Card className="bg-gray-900 p-10 h-max">
            <h3 className="text-2xl font-serif mb-6">Expert Planning</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">Let our certified specialists handle your booking at {data.name} to ensure exclusive perks and seamless coordination.</p>
            <Button variant="primary" className="w-full">Book This Resort</Button>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
             {data.amenities.map((item, i) => (
               <div key={i} className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center text-center gap-3">
                 <item.icon className="w-6 h-6 text-gold-muted" />
                 <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{item.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-serif mb-12 text-center">Wedding Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.weddingPackages.map((pkg, i) => (
            <Card key={i} className="border border-gray-100 p-12">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-serif">{pkg.name}</h3>
                <span className="text-xl font-bold text-gold-muted">{pkg.price}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((f, j) => (
                   <li key={j} className="flex items-start gap-3 text-gray-600 text-sm">
                     <Check className="w-4 h-4 text-gold-muted mt-0.5 shrink-0" /> {f}
                   </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Package Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Check({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
