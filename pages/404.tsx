import Link from "next/link";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="py-20"><Container><h1 className="mb-3 text-3xl font-semibold">Page not found</h1><p className="mb-4 text-sm text-[#666666]">The page you are looking for does not exist.</p><Link href="/" className="text-sm text-[#d40000]">Return home</Link></Container></section>
    </Layout>
  );
}
