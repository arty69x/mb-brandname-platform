export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  { id: 'cat-1', name: 'New Arrivals', slug: 'new-arrivals', description: 'Fresh drops curated weekly.' },
  { id: 'cat-2', name: 'Bags', slug: 'bags', description: 'Travel and city essentials.' },
  { id: 'cat-3', name: 'Accessories', slug: 'accessories', description: 'Finishing touches for daily style.' },
  { id: 'cat-4', name: 'Tech Carry', slug: 'tech-carry', description: 'Protection and organization for devices.' },
  { id: 'cat-5', name: 'Lifestyle', slug: 'lifestyle', description: 'Home and comfort goods.' }
];
