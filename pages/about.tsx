import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-4 text-3xl font-semibold">About</h1><p className="max-w-3xl text-sm leading-7 text-[#666666]">Brandname creates elevated everyday products guided by modern utility, refined materials, and responsible craftsmanship.</p></Container></section>
    </Layout>
  );
}
