import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'p_001',
    slug: 'noir-leather-tote',
    title: 'Noir Leather Tote',
    category: 'bags',
    price: 420,
    compareAtPrice: 540,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Structured tote in pebbled leather.',
    description: 'Crafted from premium leather with reinforced handles and suede lining.',
    tags: ['leather', 'tote'],
    additionalInfo: [
      { label: 'Material', value: 'Pebbled leather' },
      { label: 'Origin', value: 'Japan' }
    ],
    inventory: 8,
    createdAtISO: '2025-01-01T00:00:00.000Z'
  },
  {
    id: 'p_002',
    slug: 'amber-mini-crossbody',
    title: 'Amber Mini Crossbody',
    category: 'new-arrivals',
    price: 280,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Compact crossbody for essentials.',
    description: 'Lightweight silhouette with detachable strap and polished hardware.',
    tags: ['crossbody'],
    additionalInfo: [{ label: 'Closure', value: 'Magnetic flap' }],
    inventory: 20,
    createdAtISO: '2025-01-02T00:00:00.000Z'
  },
  {
    id: 'p_003',
    slug: 'ivory-silk-scarf',
    title: 'Ivory Silk Scarf',
    category: 'accessories',
    price: 120,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1520903074185-8eca362b3dce?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Printed silk scarf with hand-rolled edge.',
    description: 'Wear as neck scarf, bag charm, or head wrap for refined styling.',
    tags: ['silk', 'scarf'],
    additionalInfo: [{ label: 'Size', value: '90 x 90 cm' }],
    inventory: 15,
    createdAtISO: '2025-01-03T00:00:00.000Z'
  },
  {
    id: 'p_004',
    slug: 'onyx-card-holder',
    title: 'Onyx Card Holder',
    category: 'new-arrivals',
    price: 95,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Slim card holder with six slots.',
    description: 'Minimal profile in textured leather with center cash pocket.',
    tags: ['wallet'],
    additionalInfo: [{ label: 'Slots', value: '6' }],
    inventory: 50,
    createdAtISO: '2025-01-04T00:00:00.000Z'
  }
];
