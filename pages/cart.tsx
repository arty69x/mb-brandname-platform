import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/Layout/Container";
import { products } from "@/lib/data/products";

export default function CartPage() {
  const cartItems = products.slice(0, 3);

  return (
    <Layout>
      <section className="py-10 md:py-16">
        <Container>
          <h1 className="mb-6 text-3xl font-semibold">Cart</h1>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse border border-[#e5e5e5] text-sm">
              <thead><tr className="bg-[#f8f8f8]"><th className="p-3 text-left">Product</th><th className="p-3 text-left">Price</th><th className="p-3 text-left">Quantity</th><th className="p-3 text-left">Subtotal</th></tr></thead>
              <tbody>{cartItems.map((item) => <tr key={item.id} className="border-t border-[#e5e5e5]"><td className="p-3">{item.title}</td><td className="p-3">${item.price.toFixed(2)}</td><td className="p-3">1</td><td className="p-3">${item.price.toFixed(2)}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-6 max-w-sm rounded-lg border border-[#e5e5e5] p-4"><h2 className="mb-3 text-lg font-medium">Cart summary</h2><p>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p></div>
        </Container>
      </section>
    </Layout>
  );
}
