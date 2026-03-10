import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <article className="rounded-2xl border border-white/70 bg-white/78 p-3 shadow-sm backdrop-blur">
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand.deep/65">
        <Icon size={15} /> {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-brand.deep/90">{value}</p>
    </article>
  );
}
