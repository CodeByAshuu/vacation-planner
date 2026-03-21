export default function About() {
  return (
    <div className="text-center py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif mb-10">
        We’re a family-run company
        <br />
        that’s obsessed with travel.
      </h2>

      <div className="flex justify-center gap-6 mb-10">
        <img src="/img1.jpg" className="w-50 rounded-xl rotate-[-6deg]" />
        <img src="/img2.jpg" className="w-54 rounded-xl scale-110 shadow-lg" />
        <img src="/img3.avif" className="w-50 rounded-xl rotate-6" />
      </div>

      <p className="text-5xl font-serif leading-tight">
        Our concierge-style planning team specializes in niche travel –
        focusing on bespoke planning, destination weddings, group travel,
        and luxury cruises.
      </p>
    </div>
  );
}