export default function Logos() {
  const logos = ["the knot", "USA Today", "Joy", "Karisma", "AMR", "Palace"];

  return (
    <div className="text-center py-10">
      {/* <p className="text-xs tracking-widest mb-6 text-gray-500">
        FEATURED AND AWARDED
      </p> */}

      <div className="flex justify-center gap-4 lg:gap-24 text-gray-400 text-xs lg:text-3xl italic">
        {logos.map((logo, i) => (
          <span key={i}>{logo}</span>
        ))}
      </div>
    </div>
  );
}