import React from 'react';
import { Heart } from 'lucide-react';
import { Book } from '../types/book';
import { useNavigate } from 'react-router-dom';

type BookCardProps = Book;

export function BookCard({ id,title, author, price, imageUrl, condition, description }: BookCardProps) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() =>navigate (`/book/${id}`)}>
      <div className="relative aspect-[3/4]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        onClick={(e) => {
          e.stopPropagation();
          // Handle wishlist logic here
        }}>
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{title}</h3>
        <p className="text-gray-600 mb-2">{author}</p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {condition}
          </span>
        </div>
      </div>
    </div>
  );
}