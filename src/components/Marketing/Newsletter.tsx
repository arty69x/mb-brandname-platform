import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Container } from "../Layout/Container";

export function Newsletter() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="rounded-lg border border-[#e5e5e5] p-6 md:p-8">
          <h3 className="mb-2 text-xl font-semibold text-[#111111]">Join our newsletter</h3>
          <p className="mb-4 text-sm text-[#666666]">Get weekly product drops and editorial stories.</p>
          <form className="flex flex-col gap-3 md:flex-row" aria-label="Newsletter form">
            <Input type="email" placeholder="Email address" aria-label="Email address" required />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
