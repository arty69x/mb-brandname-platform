
import { reviews } from './reviews';

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
  reviews: string[];
};

export const heroImages: string[] = [
  'https://images.unsplash.com/photo-1548036654-3d94448aba32',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b'
];

export const products: Product[] = [
  {
    "id": "p-1",
    "slug": "product-1",
    "title": "Essential Item 1",
    "category": "bags",
    "price": 82,
    "comparePrice": 102,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    ],
    "description": "Essential Item 1 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 26,
    "rating": 4.2,
    "reviews": [
      "rev-1",
      "rev-2"
    ]
  },
  {
    "id": "p-2",
    "slug": "product-2",
    "title": "Essential Item 2",
    "category": "accessories",
    "price": 85,
    "comparePrice": 105,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ],
    "description": "Essential Item 2 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 27,
    "rating": 4.4,
    "reviews": [
      "rev-1",
      "rev-2"
    ]
  },
  {
    "id": "p-3",
    "slug": "product-3",
    "title": "Essential Item 3",
    "category": "tech-carry",
    "price": 88,
    "comparePrice": 108,
    "images": [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    ],
    "description": "Essential Item 3 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 28,
    "rating": 4.6,
    "reviews": [
      "rev-1",
      "rev-2"
    ]
  },
  {
    "id": "p-4",
    "slug": "product-4",
    "title": "Essential Item 4",
    "category": "lifestyle",
    "price": 91,
    "comparePrice": 111,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1548036654-3d94448aba32"
    ],
    "description": "Essential Item 4 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 29,
    "rating": 4.8,
    "reviews": [
      "rev-1",
      "rev-2"
    ]
  },
  {
    "id": "p-5",
    "slug": "product-5",
    "title": "Essential Item 5",
    "category": "new-arrivals",
    "price": 94,
    "comparePrice": 114,
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1548036654-3d94448aba32",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e"
    ],
    "description": "Essential Item 5 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 30,
    "rating": 4.0,
    "reviews": [
      "rev-1",
      "rev-2"
    ]
  },
  {
    "id": "p-6",
    "slug": "product-6",
    "title": "Essential Item 6",
    "category": "bags",
    "price": 97,
    "comparePrice": 117,
    "images": [
      "https://images.unsplash.com/photo-1548036654-3d94448aba32",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b"
    ],
    "description": "Essential Item 6 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 31,
    "rating": 4.2,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-7",
    "slug": "product-7",
    "title": "Essential Item 7",
    "category": "accessories",
    "price": 100,
    "comparePrice": 120,
    "images": [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    ],
    "description": "Essential Item 7 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 32,
    "rating": 4.4,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-8",
    "slug": "product-8",
    "title": "Essential Item 8",
    "category": "tech-carry",
    "price": 103,
    "comparePrice": 123,
    "images": [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    ],
    "description": "Essential Item 8 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 33,
    "rating": 4.6,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-9",
    "slug": "product-9",
    "title": "Essential Item 9",
    "category": "lifestyle",
    "price": 106,
    "comparePrice": 126,
    "images": [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
    ],
    "description": "Essential Item 9 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 34,
    "rating": 4.8,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-10",
    "slug": "product-10",
    "title": "Essential Item 10",
    "category": "new-arrivals",
    "price": 109,
    "comparePrice": 129,
    "images": [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
    ],
    "description": "Essential Item 10 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 35,
    "rating": 4.0,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-11",
    "slug": "product-11",
    "title": "Essential Item 11",
    "category": "bags",
    "price": 112,
    "comparePrice": 132,
    "images": [
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg"
    ],
    "description": "Essential Item 11 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 36,
    "rating": 4.2,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-12",
    "slug": "product-12",
    "title": "Essential Item 12",
    "category": "accessories",
    "price": 115,
    "comparePrice": 135,
    "images": [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg"
    ],
    "description": "Essential Item 12 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 37,
    "rating": 4.4,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-13",
    "slug": "product-13",
    "title": "Essential Item 13",
    "category": "tech-carry",
    "price": 118,
    "comparePrice": 138,
    "images": [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
    ],
    "description": "Essential Item 13 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 38,
    "rating": 4.6,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-14",
    "slug": "product-14",
    "title": "Essential Item 14",
    "category": "lifestyle",
    "price": 121,
    "comparePrice": 141,
    "images": [
      "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/06/00/40/people-2581913_1280.jpg"
    ],
    "description": "Essential Item 14 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 39,
    "rating": 4.8,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-15",
    "slug": "product-15",
    "title": "Essential Item 15",
    "category": "new-arrivals",
    "price": 124,
    "comparePrice": 144,
    "images": [
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/06/00/40/people-2581913_1280.jpg",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
    ],
    "description": "Essential Item 15 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 40,
    "rating": 4.0,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-16",
    "slug": "product-16",
    "title": "Essential Item 16",
    "category": "bags",
    "price": 127,
    "comparePrice": 147,
    "images": [
      "https://cdn.pixabay.com/photo/2017/08/06/00/40/people-2581913_1280.jpg",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
    ],
    "description": "Essential Item 16 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 41,
    "rating": 4.2,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-17",
    "slug": "product-17",
    "title": "Essential Item 17",
    "category": "accessories",
    "price": 130,
    "comparePrice": 150,
    "images": [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb"
    ],
    "description": "Essential Item 17 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 42,
    "rating": 4.4,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-18",
    "slug": "product-18",
    "title": "Essential Item 18",
    "category": "tech-carry",
    "price": 133,
    "comparePrice": 153,
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
    ],
    "description": "Essential Item 18 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 43,
    "rating": 4.6,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-19",
    "slug": "product-19",
    "title": "Essential Item 19",
    "category": "lifestyle",
    "price": 136,
    "comparePrice": 156,
    "images": [
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    ],
    "description": "Essential Item 19 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 44,
    "rating": 4.8,
    "reviews": [
      "rev-3"
    ]
  },
  {
    "id": "p-20",
    "slug": "product-20",
    "title": "Essential Item 20",
    "category": "new-arrivals",
    "price": 139,
    "comparePrice": 159,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ],
    "description": "Essential Item 20 delivers refined utility with modern design and durable construction for everyday use.",
    "inventory": 45,
    "rating": 4.0,
    "reviews": [
      "rev-3"
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const getRelatedProducts = (category: string, excludeId: string): Product[] =>
  products.filter((product) => product.category === category && product.id !== excludeId).slice(0, 4);

export const getProductReviews = (product: Product) =>
  reviews.filter((review) => product.reviews.includes(review.id));
