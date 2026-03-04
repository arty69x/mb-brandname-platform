export type Review = {
  id: string;
  name: string;
  title: string;
  rating: number;
  comment: string;
};

export const reviews: Review[] = [
  { id: "r1", name: "Alex", title: "Perfect daily bag", rating: 5, comment: "The build quality feels incredible and pockets are practical." },
  { id: "r2", name: "Morgan", title: "Clean and modern", rating: 5, comment: "Exactly what I needed for work travel and weekend trips." },
  { id: "r3", name: "Sam", title: "Fast delivery", rating: 4, comment: "Product arrived quickly and looked even better in person." },
  { id: "r4", name: "Jamie", title: "Great materials", rating: 5, comment: "Fabric and stitching are premium without being overdesigned." },
  { id: "r5", name: "Riley", title: "Reliable fit", rating: 4, comment: "Consistent sizing and very comfortable to wear all day." }
];
