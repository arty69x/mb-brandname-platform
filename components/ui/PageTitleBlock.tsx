export default function PageTitleBlock({ title, description }: { title: string; description?: string }) {
  return <div className="pt-6 pb-10 text-center lg:pt-10 lg:pb-12"><h1 className="text-[20px] lg:text-[22px] font-medium uppercase tracking-[0.22em]">{title}</h1>{description ? <p className="mt-4 mx-auto max-w-[720px] text-[14px] lg:text-[15px] leading-[1.7] text-[var(--muted)]">{description}</p> : null}</div>;
}
