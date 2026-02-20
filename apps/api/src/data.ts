export type Product = {
  id: string;
  name: string;
  category: string;
  priceTHB: number;
  tone: 'gold' | 'silver' | 'charcoal';
};

export const featuredProducts: Product[] = [
  {
    id: 'fl-001',
    name: 'Monogram Leather Weekender',
    category: 'Travel',
    priceTHB: 89900,
    tone: 'gold'
  },
  {
    id: 'fl-002',
    name: 'Sapphire Dial Chronograph',
    category: 'Watches',
    priceTHB: 145000,
    tone: 'silver'
  },
  {
    id: 'fl-003',
    name: 'Cashmere Signature Coat',
    category: 'Apparel',
    priceTHB: 62900,
    tone: 'charcoal'
  }
];
