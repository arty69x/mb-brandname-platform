export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  { id: "cat-1", name: "New Arrivals", slug: "new-arrivals", description: "Fresh edits released this week." },
  { id: "cat-2", name: "Bags", slug: "bags", description: "Refined carry pieces built for daily movement." },
  { id: "cat-3", name: "Accessories", slug: "accessories", description: "Finish every look with practical details." },
  { id: "cat-4", name: "Travel", slug: "travel", description: "Functional essentials for short and long trips." },
  { id: "cat-5", name: "Lifestyle", slug: "lifestyle", description: "Home and leisure products with a clean profile." }
];
