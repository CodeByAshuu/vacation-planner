import React from 'react';

export default function SortDropdown({ sortOption, setSortOption }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500 font-medium">Sort by:</span>
      <select 
        value={sortOption} 
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block p-2.5 cursor-pointer outline-hidden"
      >
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: Highest First</option>
      </select>
    </div>
  );
}
