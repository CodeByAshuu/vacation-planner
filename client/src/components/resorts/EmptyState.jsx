import React from 'react';
import { SearchX } from 'lucide-react';
import Button from '../Button';

export default function EmptyState({ clearFilters }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gray-50 rounded-2xl border border-gray-100 border-dashed h-full">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
        <SearchX className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">No resorts found</h3>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        We couldn't find any resorts matching your current filters. Try adjusting your search criteria or removing some filters.
      </p>
      <Button variant="outline" onClick={clearFilters} className="bg-white">
        Reset all filters
      </Button>
    </div>
  );
}
