import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  primary?: boolean;
  ariaLabel: string;
}

export function CTAButton({ href, label, icon: Icon, primary = false, ariaLabel }: CTAButtonProps) {
  const isInternal = href.startsWith('#');
  const baseClass =
    'inline-flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.deep';

  return (
    <motion.a
      whileTap={{ scale: 0.98 }}
      href={href}
      aria-label={ariaLabel}
      {...(!isInternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`${baseClass} ${
        primary
          ? 'animate-softpulse border-brand.pink bg-brand.pink text-white shadow-lg shadow-brand.pink/30'
          : 'border-white/70 bg-white/78 text-brand.deep backdrop-blur'
      }`}
    >
      <span className="inline-flex items-center gap-2">
        <Icon size={17} /> {label}
      </span>
      <span aria-hidden="true">→</span>
    </motion.a>
  );
}
