"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button, Container, Section } from "@/components/ui/Core";
import { useStore } from "@/context/store";

export default function Dashboard() {
  const { analytics, orders } = useStore();
  const paidOrders = orders.filter((o) => o.status === "PAID");
  const revenue = paidOrders.reduce((sum, o) => sum + o.total, 0);
  const aov = paidOrders.length > 0 ? Math.round(revenue / paidOrders.length) : 0;

  return (
    <Layout>
      <Section className="py-24">
        <Container className="flex flex-col gap-16">
          <h1 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl text-center font-serif">ANALYTICS DASHBOARD</h1>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border border-gray-200 p-8 flex flex-col gap-4 text-center"><span className="uppercase font-black tracking-[0.3em] text-[11px] opacity-50">TOTAL REVENUE</span><span className="text-4xl font-serif">${revenue}</span></div>
            <div className="border border-gray-200 p-8 flex flex-col gap-4 text-center"><span className="uppercase font-black tracking-[0.3em] text-[11px] opacity-50">PAID ORDERS</span><span className="text-4xl font-serif">{paidOrders.length}</span></div>
            <div className="border border-gray-200 p-8 flex flex-col gap-4 text-center"><span className="uppercase font-black tracking-[0.3em] text-[11px] opacity-50">AOV</span><span className="text-4xl font-serif">${aov}</span></div>
            <div className="border border-gray-200 p-8 flex flex-col gap-4 text-center"><span className="uppercase font-black tracking-[0.3em] text-[11px] opacity-50">TOTAL VIEWS</span><span className="text-4xl font-serif">{analytics.views}</span></div>
          </div>
          <div className="mt-16 text-center"><Link href="/"><Button className="mx-auto">BACK TO STORE</Button></Link></div>
        </Container>
      </Section>
    </Layout>
  );
}
