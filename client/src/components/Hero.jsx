export default function Hero({ 
  image = "/hero.jpg", 
  title, 
  subtitle, 
  height = "h-150", 
  rounded = "rounded-3xl",
  contentPosition = "bottom", // 'bottom' or 'center'
  overlayOpacity = "bg-black/40",
  topNav,
  children
}) {
  const positionClasses = contentPosition === "center" 
    ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center" 
    : "bottom-24 left-1/2 -translate-x-1/2 text-center";

  return (
    <div className={`relative ${rounded} overflow-hidden ${height}`}>
      {/* Background Image */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
        alt={title || "Hero image"}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Top Navigation / Elements (Optional) */}
      {topNav && (
        <div className="absolute top-8 left-0 w-full z-10">
          {topNav}
        </div>
      )}

      {/* Main Content */}
      <div className={`absolute z-10 px-6 w-full ${positionClasses} text-white`}>
        {title && (
          <h1 className="text-2xl lg:text-6xl font-serif leading-tight mb-4 drop-shadow-md">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-md lg:text-md text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Overlapping Badge (Optional) */}
      <div className="absolute left-1/2 bottom-3 -translate-x-1/2 translate-y-1/2">
        {/* <div style={{ clipPath: "polygon(5% 0%, 95% 0, 100% 100%, 0% 100%)" }}> */}
          <div className="bg-white px-4 lg:px-24 py-4 lg:py-4 rounded-xl shadow text-[8px] lg:text-sm font-semibold tracking-widest text-gray-400 uppercase">
            FEATURED AND AWARDED
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}