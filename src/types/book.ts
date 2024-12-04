export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  category: string;
  description: string;
  publishedYear: number;
}