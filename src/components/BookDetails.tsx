import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Heart } from 'lucide-react';
import { books } from '../data/books';

export function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === Number(id));

  if (!book) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Books
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] relative">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{book.author}</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold">₹{book.price}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {book.condition}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Category</p>
                  <p className="font-medium">{book.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Published Year</p>
                  <p className="font-medium">{book.publishedYear}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Seller
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}