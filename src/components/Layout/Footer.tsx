import Link from 'next/link';

const columns = {
  company: ['About Us', 'Careers', 'Affiliates', 'Blog', 'Contact Us'],
  shop: ['New Arrivals', 'Accessories', 'Bags'],
  help: ['Customer Service', 'My Account', 'Find a Store', 'Legal & Privacy', 'Contact', 'Gift Card']
};

export default function Footer() {
  return (
    <footer className="mt-16 bg-black text-white">
      <section className="border-b border-white/15 py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <p className="text-[46px] font-semibold tracking-[0.08em]">m3</p>
              <p className="mt-8 max-w-[230px] text-[13px] leading-6 text-white/70">1418 River Drive, Suite 35 Cottonhall, CA 9622 United States</p>
              <p className="mt-5 text-[13px] leading-6 text-white/70">sale@uomo.com<br />+1 246-345-0695</p>
            </div>
            <FooterColumn title="Company" items={columns.company} />
            <FooterColumn title="Shop" items={columns.shop} />
            <FooterColumn title="Help" items={columns.help} />
            <div>
              <h2 className="text-[15px] font-semibold uppercase tracking-[0.02em]">Opening Time</h2>
              <ul className="mt-8 space-y-3 text-[13px] text-white/70">
                <li>Mon - Fri: 8AM — 9PM</li>
                <li>Sat: 9 AM — 8 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-4 text-[12px] text-white/60 md:flex-row md:items-center">
            <p>©2020 Uomo</p>
            <p>United Kingdom &nbsp;|&nbsp; English &nbsp;^ &nbsp;|&nbsp; $ USD &nbsp;^</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[15px] font-semibold uppercase tracking-[0.02em]">{title}</h2>
      <ul className="mt-8 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="text-[13px] text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
