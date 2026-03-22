export default function Logos() {
  return (
    <div className="text-center py-10">
      {/* <p className="text-xs tracking-widest mb-6 text-gray-500">
        FEATURED AND AWARDED
      </p> */}

        <div className="text-center pb-8 border-b border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["The Knot", "USA Today", "Vogue Wedding", "Condé Nast", "Travel + Leisure"].map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-serif italic text-gray-600 font-medium">
                {logo}
              </span>
            ))}
          </div>
        </div>
    </div>
  );
}