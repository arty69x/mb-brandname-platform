import Link from "next/link";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

const posts = [
  { slug: "packing-light-for-weekend-city-breaks", title: "Packing Light for Weekend City Breaks" },
  { slug: "how-to-style-minimal-accessories", title: "How to Style Minimal Accessories" },
  { slug: "materials-that-last-in-daily-use", title: "Materials That Last in Daily Use" }
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-6 text-3xl font-semibold">Blog</h1><div className="space-y-3">{posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-md border border-[#e5e5e5] p-4 hover:border-[#111111]">{post.title}</Link>)}</div></Container></section>
    </Layout>
  );
}
