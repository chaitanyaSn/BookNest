import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export function SellBookForm({ onClose }: { onClose: () => void }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="title" className="block text-sm font-medium">
          Book Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
              <label className="block text-sm font-medium mb-1">Branch</label>
              <select
              id='branch'
               className="w-full px-3 py-2 border rounded-lg"
               required>
                <option>All Branch</option>
                <option>Computer</option>
                <option>Electrical</option>
                <option>Mechanical</option>
                <option>Civil</option>
                <option>Chemical</option>
                <option>ENTC</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <select 
              id="year"
              className="w-full px-3 py-2 border rounded-lg"
              required>
                <option>Year</option>
                <option>1st year</option>
                <option>2nd year</option>
                <option>3rd year</option>
                <option>4th year</option>
              </select>
            </div>

      <div className="space-y-1">
        <label htmlFor="price" className="block text-sm font-medium">
          Price
        </label>
        <input
          type="number"
          id="price"
          min="0"
          step="1"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>


      <div className="space-y-1">
        <label htmlFor="condition" className="block text-sm font-medium">
          Condition
        </label>
        <select
          id="condition"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select condition</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium">Book Image</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg">
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 rounded"
              />
              <button
                type="button"
                onClick={() => setImagePreview(null)}
                className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 text-xs"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="image" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload a file</span>
                  <input
                    id="image"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          List Book
        </button>
      </div>
    </form>
  );
}