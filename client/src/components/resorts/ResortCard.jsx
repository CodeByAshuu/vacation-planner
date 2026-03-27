import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Heart } from 'lucide-react';
import Button from '../Button';

export default function ResortCard({ resort }) {
  const { id, name, location, price, rating, image, badges } = resort;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 w-9 h-9 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 transition-colors hover:bg-white hover:text-red-500 hover:scale-105 active:scale-95 shadow-sm">
          <Heart className="w-5 h-5" />
        </button>

        {/* Badges Array */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
           {badges?.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                {badge}
              </span>
           ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight">
            {name}
          </h3>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md shrink-0">
             <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
             <span className="text-sm font-semibold text-gray-900">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Push button to bottom */}
        <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-5">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">Starting from</span>
            <span className="text-2xl font-bold text-gray-900">${price} <span className="text-sm font-normal text-gray-500">/ night</span></span>
          </div>
          
          <Link to={`/resorts/${id}`}>
            <Button variant="outline" className="px-5 py-2 text-sm rounded-full bg-white">
               View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
