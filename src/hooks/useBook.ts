import { useParams } from 'react-router-dom';
import { books } from '../data/books';

export function useBook() {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));
  return { book };
}