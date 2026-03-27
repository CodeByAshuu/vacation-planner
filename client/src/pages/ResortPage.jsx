import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockResorts } from '../data/mockResorts';
import ResortCard from '../components/resorts/ResortCard';
import FilterSidebar from '../components/resorts/FilterSidebar';
import SortDropdown from '../components/resorts/SortDropdown';
import EmptyState from '../components/resorts/EmptyState';

export default function ResortPage() {
  const [searchParams] = useSearchParams();
  const initialLocation = searchParams.get('location') || '';

  const initialFilters = {
    location: initialLocation,
    price: { min: '', max: '' },
    type: [],
    rating: 0,
  };

  const [filters, setFilters] = useState(initialFilters);
  const [sortOption, setSortOption] = useState('recommended');

  const clearFilters = () => setFilters({
    location: '',
    price: { min: '', max: '' },
    type: [],
    rating: 0,
  });

  // Filtering Logic
  const filteredResorts = useMemo(() => {
    return mockResorts.filter(resort => {
      // Location
      if (filters.location && filters.location !== 'All') {
        const isMatch = resort.location.toLowerCase().includes(filters.location.toLowerCase()) || 
                        resort.country.toLowerCase() === filters.location.toLowerCase();
        if (!isMatch) return false;
      }
      
      // Price
      if (filters.price.min !== '' && resort.price < filters.price.min) return false;
      if (filters.price.max !== '' && resort.price > filters.price.max) return false;

      // Type (Match ANY selected type)
      if (filters.type.length > 0) {
        const hasMatchingType = filters.type.some(t => resort.type.includes(t));
        if (!hasMatchingType) return false;
      }

      // Rating
      if (filters.rating > 0 && resort.rating < filters.rating) return false;

      return true;
    });
  }, [filters]);

  // Sorting Logic
  const sortedResorts = useMemo(() => {
    const list = [...filteredResorts];
    switch (sortOption) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return list.sort((a, b) => b.rating - a.rating);
      case 'recommended':
      default:
        return list; 
    }
  }, [filteredResorts, sortOption]);

  const subtitle = filters.location && filters.location !== 'All' 
    ? `Showing ${sortedResorts.length} resorts in ${filters.location}` 
    : `Showing all ${sortedResorts.length} resorts`;

  return (
    <div className="bg-white rounded-3xl mt-9 py-10 px-6 md:px-10 mx-auto max-w-[1400px]">
      {/* Section 1: Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
           <span className="text-[#d4af37] font-medium tracking-[0.2em] uppercase text-xs mb-3 block">Curated Collection</span>
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Explore Resorts</h1>
           <p className="text-gray-500">{subtitle}</p>
        </div>
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      {/* Main Layout Split */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Sidebar */}
        <div className="w-full lg:w-64 shrink-0 mt-2">
           <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              clearFilters={clearFilters} 
           />
        </div>

        {/* Right Grid */}
        <div className="flex-1 w-full">
           {sortedResorts.length === 0 ? (
             <EmptyState clearFilters={clearFilters} />
           ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {sortedResorts.map(resort => (
                 <ResortCard key={resort.id} resort={resort} />
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
