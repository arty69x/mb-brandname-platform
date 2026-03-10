import Link from 'next/link';

const companyLinks = ['About Us', 'Careers', 'Affiliates', 'Blog', 'Contact Us'];
const shopLinks = ['New Arrivals', 'Accessories', 'Bags'];
const helpLinks = ['Customer Service', 'My Account', 'Find a Store', 'Legal & Privacy', 'Contact', 'Gift Card'];

export default function Footer() {
  return (
    <footer className="bg-[var(--footer)] py-12 text-[var(--footerText)] lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="mb-6 text-[36px] leading-none">m3</p>
            <p className="text-[12px] leading-[1.8] text-[var(--footerMuted)]">1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
            <p className="mt-4 text-[12px] text-[var(--footerMuted)]">sale@uomo.com</p>
            <p className="text-[12px] text-[var(--footerMuted)]">+1 246-345-0695</p>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.12em]">Company</p>
            <ul className="space-y-2 text-[12px] text-[var(--footerMuted)]">
              {companyLinks.map((item) => <li key={item}><Link href="/about">{item}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.12em]">Shop</p>
            <ul className="space-y-2 text-[12px] text-[var(--footerMuted)]">
              {shopLinks.map((item) => <li key={item}><Link href="/shop">{item}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.12em]">Help</p>
            <ul className="space-y-2 text-[12px] text-[var(--footerMuted)]">
              {helpLinks.map((item) => <li key={item}><Link href="/customer-service">{item}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] uppercase tracking-[0.12em]">Opening time</p>
            <p className="text-[12px] leading-[1.8] text-[var(--footerMuted)]">Mon - Fri: 8AM - 9PM</p>
            <p className="text-[12px] leading-[1.8] text-[var(--footerMuted)]">Sat: 9 AM - 8 PM</p>
            <p className="text-[12px] leading-[1.8] text-[var(--footerMuted)]">Sun: Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
