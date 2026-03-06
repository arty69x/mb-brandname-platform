import { reviews } from './reviews';

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: 'new-arrivals' | 'bags' | 'accessories';
  type: string;
  price: number;
  comparePrice?: number;
  images: string[];
  description: string;
  inventory: number;
  rating: number;
  reviews: string[];
};

export const heroImages: string[] = ['/design/home.png', '/design/highlight.png', '/design/header.png'];

const imagePool = ['/design/highlight.png', '/design/detail.png', '/design/page-for-newarrivals-bags-accessories.png', '/design/home.png', '/design/header.png'];
const img = (index: number) => imagePool[index % imagePool.length];

export const products: Product[] = [
  { id: 'p-1', slug: 'cropped-faux-leather-jacket', title: 'Cropped Faux Leather Jacket', type: 'Dresses', category: 'new-arrivals', price: 29, images: [img(0), img(1)], description: 'A sculpted evening top with statement chain detail and soft drape for elegant styling.', inventory: 11, rating: 4.8, reviews: ['rev-1', 'rev-3'] },
  { id: 'p-2', slug: 'calvin-shorts', title: 'Calvin Shorts', type: 'Dresses', category: 'bags', price: 62, images: [img(1), img(2)], description: 'Textured woven handbag with generous interior and soft shoulder profile.', inventory: 7, rating: 4.6, reviews: ['rev-2', 'rev-4'] },
  { id: 'p-3', slug: 'kirby-tshirt', title: 'Kirby T-Shirt', type: 'Dresses', category: 'accessories', price: 17, images: [img(2), img(3)], description: 'Lightweight cotton blend top with a slim fit and polished finish.', inventory: 20, rating: 4.4, reviews: ['rev-3'] },
  { id: 'p-4', slug: 'cableknit-shawl', title: 'Cableknit Shawl', type: 'Dresses', category: 'new-arrivals', price: 129, comparePrice: 99, images: [img(3), img(4)], description: 'Refined leather ankle boots with pointed toe and elevated stiletto silhouette.', inventory: 3, rating: 4.7, reviews: ['rev-5'] },
  { id: 'p-5', slug: 'zessi-dress', title: 'Zessi Dresses', type: 'Dresses', category: 'accessories', price: 129, comparePrice: 99, images: [img(4), img(0)], description: 'Ornamental chain belt with polished clasp and premium textured links.', inventory: 4, rating: 4.5, reviews: ['rev-2'] },
  { id: 'p-6', slug: 'kirby-handbag', title: 'Kirby Handbag', type: 'Dresses', category: 'bags', price: 87, images: [img(0), img(3)], description: 'Compact shoulder bag crafted for daily wear with secure zip closure.', inventory: 6, rating: 4.3, reviews: ['rev-1'] },
  { id: 'p-7', slug: 'double-g-earrings', title: 'Double G Earrings', type: 'Dresses', category: 'accessories', price: 62, images: [img(2), img(4)], description: 'Signature monogram earrings designed with lightweight comfort in mind.', inventory: 15, rating: 4.9, reviews: ['rev-3'] },
  { id: 'p-8', slug: 'lv-charm-necklace', title: 'LV Charm Necklace', type: 'Dresses', category: 'new-arrivals', price: 117, images: [img(1), img(0)], description: 'Delicate charm necklace with mixed motif pendants and adjustable clasp.', inventory: 8, rating: 4.1, reviews: ['rev-4'] },
  { id: 'p-9', slug: 'cat-eye-sunglasses', title: 'Cat Eye Sunglasses', type: 'Dresses', category: 'accessories', price: 74, images: [img(4), img(2)], description: 'Slim cat-eye frame with tinted lenses and gold-tone temple arms.', inventory: 12, rating: 4.5, reviews: ['rev-5'] },
  { id: 'p-10', slug: 'small-frame-shoulder-bag', title: 'Small Frame Shoulder Bag', type: 'Dresses', category: 'bags', price: 129, images: [img(3), img(1)], description: 'Structured mini shoulder bag with magnetic top flap and polished trim.', inventory: 5, rating: 4.6, reviews: ['rev-1'] },
  { id: 'p-11', slug: 'minimal-heels', title: 'Minimal Heels', type: 'Dresses', category: 'new-arrivals', price: 59, images: [img(1), img(2)], description: 'Elegant open-toe heels with clear strap and glossy black insole.', inventory: 10, rating: 4.2, reviews: ['rev-3'] },
  { id: 'p-12', slug: 'dior-necklace', title: 'Dior Necklace', type: 'Dresses', category: 'accessories', price: 92, images: [img(0), img(4)], description: 'Minimal silver-tone pendant necklace featuring iconic DIOR charm.', inventory: 13, rating: 4.7, reviews: ['rev-2'] },
  { id: 'p-13', slug: 'gold-rim-glasses', title: 'Gold Rim Glasses', type: 'Dresses', category: 'accessories', price: 39, images: [img(3), img(2)], description: 'Rounded optical frame in warm gold finish with light acetate tips.', inventory: 14, rating: 4.1, reviews: ['rev-4'] },
  { id: 'p-14', slug: 'medallion-chain-necklace', title: 'Medallion Chain Necklace', type: 'Dresses', category: 'new-arrivals', price: 129, comparePrice: 99, images: [img(2), img(1)], description: 'Statement medallion chain with textured links and adjustable drop length.', inventory: 5, rating: 4.8, reviews: ['rev-5'] },
  { id: 'p-15', slug: 'chanel-coin-pendant', title: 'Chanel Coin Pendant', type: 'Dresses', category: 'accessories', price: 129, comparePrice: 99, images: [img(4), img(0)], description: 'Round pendant necklace featuring crystal-embellished coin centerpiece.', inventory: 5, rating: 4.4, reviews: ['rev-2'] }
];

export const getProductBySlug = (slug: string): Product | undefined => products.find((product) => product.slug === slug);

export const getRelatedProducts = (category: string, excludeId: string): Product[] => products.filter((product) => product.category === category && product.id !== excludeId).slice(0, 4);

export const getProductReviews = (product: Product) => reviews.filter((review) => product.reviews.includes(review.id));
