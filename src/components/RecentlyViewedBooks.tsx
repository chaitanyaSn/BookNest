import React from 'react';
import { X } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

export function RecentlyViewedBooks() {
  const { recentlyViewed, removeFromRecentlyViewed } = useRecentlyViewed();
  const navigate = useNavigate();

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="absolute right-0 top-16 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
      <h3 className="font-semibold mb-3">Recently Viewed</h3>
      <div className="space-y-3">
        {recentlyViewed.map(book => (
          <div key={book.id} className="flex items-center gap-3 group">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-12 h-16 object-cover rounded cursor-pointer"
              onClick={() => navigate(`/book/${book.id}`)}
            />
            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => navigate(`/book/${book.id}`)}>
              <h4 className="font-medium truncate">{book.title}</h4>
              <p className="text-sm text-gray-600">₹{book.price}</p>
            </div>
            <button
              onClick={() => removeFromRecentlyViewed(book.id)}
              className="p-1 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}