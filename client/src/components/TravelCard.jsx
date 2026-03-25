import React from "react";
import { Heart, Tag, PlaneTakeoff } from "lucide-react";

const TravelCard = ({ image, title, subtitle, price, airport, onSearch }) => {
  return (
    <div className="relative group w-72 h-120 rounded-4xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

      {/* Frosted glass panel behind bottom content */}
        <div className="absolute bottom-0 left-0 right-0 h-48 backdrop-blur-md opacity-[0.7] bg-linear-to-t from-white/40 to-transparent rounded-b-4xl" />

      {/* Wishlist Icon */}
      <button className="absolute top-5 right-5 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors duration-300">
        <Heart className="w-5 h-5" fill="none" stroke="currentColor" />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3 z-10">
        {/* Title + Subtitle */}
        <div>
          <h3 className="text-white text-3xl font-bold leading-tight">{title}</h3>
          <p className="text-white/70 text-sm mt-0.5">{subtitle}</p>
        </div>

        {/* Price + Airport row — plain text on gradient */}
        <div className="flex items-center gap-5 text-white text-sm">
          <div className="flex items-center gap-1.5">
            <Tag className="w-4 h-4 opacity-70" />
            <span>from <span className="font-semibold">{price}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <PlaneTakeoff className="w-4 h-4 opacity-70" />
            <span className="font-semibold">{airport}</span>
          </div>
        </div>

        {/* Search Button — solid white */}
        <button
          onClick={onSearch}
          className="w-full py-3.5 bg-white text-gray-900 rounded-full font-semibold text-sm transition-all duration-300 active:scale-95 hover:bg-gray-100"
        >
          Search flight
        </button>
      </div>
    </div>
  );
};

export default TravelCard;