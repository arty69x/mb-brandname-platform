import { useRouter } from "next/router";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function BlogDetailPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";

  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-4 text-3xl font-semibold capitalize">{slug.replace(/-/g, " ") || "Article"}</h1><p className="max-w-3xl text-sm leading-7 text-[#666666]">Editorial insights on design, travel, and wardrobe essentials that support daily life with a calm aesthetic.</p></Container></section>
    </Layout>
  );
}
