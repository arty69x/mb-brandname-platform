export type ProductReview = {
  author: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  comparePrice: number;
  images: string[];
  description: string;
  inventory: number;
  rating: number;
  reviews: ProductReview[];
};

const productImagePool = [
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506629905607-d405b7a30db9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1593032465171-8bd9f045f6f6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80",
  "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://cdn.pixabay.com/photo/2017/08/06/11/38/people-2590092_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/06/11/39/woman-2590194_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/27/14/56/eyeglasses-2178788_1280.jpg",
  "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80",
  "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

const productSeed = [
  ["structured-carry-tote", "Structured Carry Tote", "Bags"],
  ["metro-crossbody", "Metro Crossbody", "Bags"],
  ["heritage-weekender", "Heritage Weekender", "Bags"],
  ["studio-backpack", "Studio Backpack", "Bags"],
  ["minimal-card-wallet", "Minimal Card Wallet", "Accessories"],
  ["artisan-belt", "Artisan Belt", "Accessories"],
  ["aero-sneaker", "Aero Sneaker", "New Arrivals"],
  ["linen-overshirt", "Linen Overshirt", "New Arrivals"],
  ["slim-chino", "Slim Chino", "New Arrivals"],
  ["merino-knit", "Merino Knit", "New Arrivals"],
  ["field-jacket", "Field Jacket", "New Arrivals"],
  ["commuter-duffel", "Commuter Duffel", "Bags"],
  ["essentials-cap", "Essentials Cap", "Accessories"],
  ["classic-watch", "Classic Watch", "Accessories"],
  ["traveler-pouch", "Traveler Pouch", "Bags"],
  ["island-sandal", "Island Sandal", "New Arrivals"],
  ["city-sunglasses", "City Sunglasses", "Accessories"],
  ["performance-tee", "Performance Tee", "New Arrivals"],
  ["cotton-shorts", "Cotton Shorts", "New Arrivals"],
  ["canvas-tote", "Canvas Tote", "Bags"]
] as const;

export const products: Product[] = productSeed.map((seed, index) => {
  const [slug, title, category] = seed;
  const imageIndex = index % productImagePool.length;

  return {
    id: `prod-${index + 1}`,
    slug,
    title,
    category,
    price: 49 + index * 7,
    comparePrice: 69 + index * 7,
    images: [
      productImagePool[imageIndex],
      productImagePool[(imageIndex + 3) % productImagePool.length],
      productImagePool[(imageIndex + 7) % productImagePool.length]
    ],
    description:
      "Designed for everyday versatility with premium finishes, durable materials, and thoughtful organization details.",
    inventory: 5 + (index % 11),
    rating: Number((4 + (index % 10) * 0.08).toFixed(1)),
    reviews: [
      {
        author: "Jordan P.",
        rating: 5,
        comment: "Excellent quality and fit. It feels premium in hand."
      },
      {
        author: "Taylor R.",
        rating: 4,
        comment: "Great value and fast shipping. Would buy again."
      }
    ]
  };
});

export const heroImages = [
  "https://images.unsplash.com/photo-1548036654-3d94448aba32?auto=format&fit=crop&w=2200&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2200&q=80"
];
