import { useEffect } from 'react';
import { Book } from '../types/book';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';


export function useRecentlyViewedBook(book: Book | undefined) {
  const { addToRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    if (book) {
      addToRecentlyViewed(book);
    }
  }, [book?.id]); // Only depend on the book ID to prevent infinite loops
}