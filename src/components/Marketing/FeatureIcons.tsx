import { ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Container } from "../Layout/Container";

export function FeatureIcons() {
  const items = [
    { icon: Truck, title: "Fast Shipping", description: "Complimentary shipping over $99." },
    { icon: ShieldCheck, title: "Quality Guarantee", description: "Made with tested premium materials." },
    { icon: RefreshCw, title: "Easy Returns", description: "30-day return window on all items." }
  ];

  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-lg border border-[#e5e5e5] p-6">
              <item.icon size={20} className="mb-3 text-[#111111]" />
              <h3 className="mb-2 text-base font-medium text-[#111111]">{item.title}</h3>
              <p className="text-sm text-[#666666]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
