interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-4">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/55">{eyebrow}</p> : null}
      <h2 className="mt-1 text-xl font-black text-brand-navy sm:text-2xl">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-brand-navy/70">{subtitle}</p> : null}
    </header>
  );
}
