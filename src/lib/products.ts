export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  grade: string;
  origin: string;
  tags: string[];
  images: string[];
  description: string;
  story: string;
  details: string[];
  isNew?: boolean;
}

const CATS = ["Bags", "Accessories", "Ready To Wear", "Watches"];
const TAGS = ["vintage", "rare", "leather", "classic", "monogram"];
const IMAGES = [
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
  "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
];

export const PRODUCTS: Product[] = Array.from({ length: 32 }).map((_, i) => ({
  id: `mb-item-${i + 1}`,
  title: `Luxury Archive Item ${i + 1}`,
  category: CATS[i % CATS.length],
  price: 1500 + i * 250,
  stock: i % 5 === 0 ? 0 : 3 + (i % 4),
  sku: `SKU-${1000 + i}`,
  grade: i % 3 === 0 ? "S (Like New)" : "A (Excellent)",
  origin: "Tokyo, Japan",
  tags: [TAGS[i % TAGS.length], TAGS[(i + 1) % TAGS.length]],
  images: [IMAGES[i % IMAGES.length], IMAGES[(i + 1) % IMAGES.length]],
  description: "Meticulously inspected archive piece, embodying timeless elegance.",
  story:
    "Sourced directly from exclusive Japanese auctions, this piece carries a legacy of impeccable care.",
  details: ["100% Authentic Guaranteed", "Original Dustbag Included", "Professional verification passed"],
  isNew: i < 8,
}));

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id) || null;
