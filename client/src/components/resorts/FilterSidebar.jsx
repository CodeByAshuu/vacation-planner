import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, clearFilters }) {
  const locations = ["All", "Mexico", "Jamaica", "Dominican Republic"];
  const types = ["All-inclusive", "Luxury", "Budget", "Wedding-friendly", "Adults-only", "Family-friendly"];
  const ratings = [3, 4, 5];

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const currentList = prev[category] || [];
      if (currentList.includes(value)) {
        return { ...prev, [category]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...currentList, value] };
      }
    });
  };

  const handleLocationChange = (val) => {
    setFilters(prev => ({ ...prev, location: val }));
  };

  const handlePriceChange = (e, type) => {
    const val = e.target.value === '' ? '' : Number(e.target.value);
    setFilters(prev => ({
      ...prev,
      price: { ...prev.price, [type]: val }
    }));
  };

  const handleRatingChange = (val) => {
    setFilters(prev => ({ ...prev, rating: val }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col gap-8 sticky top-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-900 font-bold">
          <SlidersHorizontal className="w-5 h-5" />
          <h3 className="text-lg">Filters</h3>
        </div>
        <button 
          onClick={clearFilters}
          className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Location</h4>
        <div className="flex flex-col gap-2">
          {locations.map(loc => (
            <label key={loc} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="location" 
                value={loc}
                checked={filters.location === loc || (loc === "All" && !filters.location)}
                onChange={() => handleLocationChange(loc === "All" ? "" : loc)}
                className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Price Range */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Price Range</h4>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
            <input 
              type="number" 
              placeholder="Min"
              value={filters.price.min}
              onChange={(e) => handlePriceChange(e, 'min')}
              className="w-full pl-7 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-hidden focus:ring-1 focus:ring-gray-900"
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
            <input 
              type="number" 
              placeholder="Max"
              value={filters.price.max}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full pl-7 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-hidden focus:ring-1 focus:ring-gray-900"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Resort Type */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Resort Type</h4>
        <div className="flex flex-col gap-2">
          {types.map(type => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.type?.includes(type)}
                onChange={() => handleCheckboxChange('type', type)}
                className="w-4 h-4 text-[#d4af37] border-gray-300 rounded focus:ring-[#d4af37]"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Minimum Rating */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Min. Rating</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="radio" 
              name="rating" 
              checked={filters.rating === 0}
              onChange={() => handleRatingChange(0)}
              className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900"
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Any Rating</span>
          </label>
          {ratings.map(rating => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="rating" 
                checked={filters.rating === rating}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{rating}★ & above</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
