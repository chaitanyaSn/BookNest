import React from 'react';
import { BookCard } from './BookCard';
import { books } from '../data/books';
import { Link } from 'react-router-dom'; // If using React Router
// import Link from 'next/link'; // Uncomment this if using Next.js

export function BookGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {books.map((book) => (
        
          <BookCard {...book} />
     
      ))}
    </div>
  );
}
