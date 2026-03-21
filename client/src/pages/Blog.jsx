import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Blog() {
  const posts = [
    { title: "10 Hidden Gems in the Mediterranean", category: "Guides", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", date: "Oct 12, 2026" },
    { title: "How to Pack for a Two-Week Safari", category: "Tips", img: "https://images.unsplash.com/photo-1547471080-7cb2ac64cedc?auto=format&fit=crop&q=80&w=800", date: "Oct 05, 2026" },
    { title: "The Rise of Slow Travel in Europe", category: "Trends", img: "https://images.unsplash.com/photo-1513581166391-887a96dde8dc?auto=format&fit=crop&q=80&w=800", date: "Sep 28, 2026" },
    { title: "Best Luxury Lodges in Patagonia", category: "Reviews", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", date: "Sep 15, 2026" },
    { title: "A Culinary Tour of Tokyo", category: "Food", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800", date: "Sep 02, 2026" },
    { title: "Wellness Retreats to Reset Your Mind", category: "Wellness", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", date: "Aug 20, 2026" }
  ];

  return (
    <div className="pt-24 pb-20 px-6 lg:px-10">
      
      {/* Hero */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">Travel insights<br/>& inspiration.</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Featured Article */}
        <div className="mb-20">
          <Card noPadding className="flex flex-col md:flex-row group cursor-pointer bg-white rounded-[3rem] overflow-hidden">
            <div className="md:w-1/2 h-80 md:h-96 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000" 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-4">Featured Guide</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-snug">The Ultimate Guide to Island Hopping in the Maldives</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Discover pristine atolls, vibrant coral reefs, and unparalleled luxury resorts spread across the Indian Ocean.</p>
              <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-[#d4af37] transition-colors">
                Read Article <span className="ml-2">→</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} noPadding className="group cursor-pointer flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif mb-4 leading-snug group-hover:text-[#d4af37] transition-colors">{post.title}</h3>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-gray-900">
                  Read more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>

    </div>
  );
}
