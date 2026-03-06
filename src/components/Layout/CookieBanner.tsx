import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <aside className="fixed bottom-0 left-0 z-40 w-full border-t border-[#d4d4d4] bg-[#f3f3f3]">
      <section>
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="max-w-[640px] text-[20px] leading-[1.3] tracking-[-0.02em] text-black">
                WE USE COOKIES TO ENHANCE YOUR EXPERIENCE WHILE NAVIGATE OUR SITE, ANALYZE SITE USAGE, AND ASSIST IN OUR MARKETING EFFORTS.
              </p>
              <button className="mt-4 text-[17px] text-black/50 underline underline-offset-4 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                PRIVACY POLICY {'>'}
              </button>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <button
                onClick={() => setVisible(false)}
                className="h-[72px] w-full bg-black px-8 text-[16px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:w-[264px]"
              >
                Accept all
              </button>
              <button className="mt-5 block text-[17px] uppercase tracking-[-0.01em] text-black transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
                Personalize my choices {'>'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
