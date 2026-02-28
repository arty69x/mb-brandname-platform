"use client";

import React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button, Container, Section } from "@/components/ui/Core";
import { useStore } from "@/context/store";

export default function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { orders } = useStore();
  const [id, setId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then((x) => setId(x.id));
  }, [params]);

  const order = orders.find((o) => o.id === id);

  if (!order) return <Layout><div className="py-32 text-center">ORDER NOT FOUND</div></Layout>;

  return (
    <Layout>
      <Section className="py-32">
        <Container className="max-w-2xl text-center flex flex-col gap-12 items-center">
          <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center text-4xl mb-8">✓</div>
          <h1 className="uppercase font-light tracking-[0.45em] text-2xl md:text-4xl font-serif">THANK YOU</h1>
          <p className="font-medium opacity-80 leading-relaxed">Your order has been successfully placed. It is currently being prepared for dispatch.</p>
          <div className="bg-gray-50 p-8 w-full uppercase font-black tracking-[0.3em] text-[11px] flex flex-col gap-4">
            <div className="flex justify-between"><span>ORDER REF:</span><span>{order.id}</span></div>
            <div className="flex justify-between"><span>STATUS:</span><span className="text-green-600">{order.status}</span></div>
            <div className="flex justify-between border-t border-gray-200 pt-4 mt-4 text-sm"><span>TOTAL:</span><span>${order.total}</span></div>
          </div>
          <Link href="/shop"><Button className="mt-8">CONTINUE SHOPPING</Button></Link>
        </Container>
      </Section>
    </Layout>
  );
}
