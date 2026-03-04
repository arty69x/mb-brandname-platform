import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";

export default function ContactPage() {
  return (
    <Layout>
      <section className="py-10 md:py-16"><Container><h1 className="mb-4 text-3xl font-semibold">Contact</h1><form className="grid max-w-xl gap-3"><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="Name" /><input className="rounded-md border border-[#e5e5e5] p-2" placeholder="Email" /><textarea rows={5} className="rounded-md border border-[#e5e5e5] p-2" placeholder="Message" /><button className="rounded-md bg-[#111111] px-4 py-2 text-white">Send message</button></form></Container></section>
    </Layout>
  );
}
