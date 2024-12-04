import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book } from '../types/book';

interface RecentlyViewedContextType {
  recentlyViewed: Book[];
  addToRecentlyViewed: (book: Book) => void;
  removeFromRecentlyViewed: (bookId: number) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [recentlyViewed, setRecentlyViewed] = useState<Book[]>(() => {
    const saved = localStorage.getItem('recentlyViewedBooks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recentlyViewedBooks', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (book: Book) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(b => b.id !== book.id);
      return [book, ...filtered].slice(0, 5); // Keep only last 5 books
    });
  };

  const removeFromRecentlyViewed = (bookId: number) => {
    setRecentlyViewed(prev => prev.filter(book => book.id !== bookId));
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed, removeFromRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (context === undefined) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
}