import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function AccountPage() {
  const sections = ["Orders", "Profile", "Addresses", "Wishlist"];

  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-6 text-3xl font-semibold">Account</h1><div className="grid gap-4 md:grid-cols-2">{sections.map((section) => <div className="rounded-lg border border-[#e5e5e5] p-4" key={section}><h2 className="text-lg font-medium">{section}</h2><p className="text-sm text-[#666666]">Manage your {section.toLowerCase()} settings.</p></div>)}</div></Container></section>
    </Layout>
  );
}
