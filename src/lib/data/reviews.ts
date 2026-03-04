export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  { id: 'rev-1', productId: 'p-1', author: 'Amelia R.', rating: 5, comment: 'Premium material and surprisingly light.', date: '2026-01-10' },
  { id: 'rev-2', productId: 'p-2', author: 'Noah T.', rating: 4, comment: 'Great daily carry with practical pockets.', date: '2026-01-13' },
  { id: 'rev-3', productId: 'p-3', author: 'Maya S.', rating: 5, comment: 'Looks clean and fits my laptop perfectly.', date: '2026-01-15' },
  { id: 'rev-4', productId: 'p-4', author: 'Ethan L.', rating: 4, comment: 'Comfortable straps and strong stitching.', date: '2026-01-17' },
  { id: 'rev-5', productId: 'p-5', author: 'Sofia N.', rating: 5, comment: 'Exactly as pictured, very durable finish.', date: '2026-01-20' }
];
