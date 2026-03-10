import { BadgeCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialProof } from '../../data/storeData';
import { SectionHeading } from '../ui/SectionHeading';

export function ReviewsSection() {
  return (
    <motion.section
      id="avaliacoes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mt-9"
    >
      <div className="flex items-center justify-between gap-3">
        <SectionHeading
          eyebrow="Credibilidade"
          title="Prova social"
          subtitle="Avaliações de clientes sobre a experiência na loja."
        />
        <span className="hidden shrink-0 items-center gap-1 rounded-full border border-brand-green/35 bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-navy sm:inline-flex">
          <BadgeCheck size={14} className="text-brand-green" /> Confiança local
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {socialProof.map((review, index) => (
          <article
            key={review}
            className="rounded-2xl border border-white/80 bg-white/84 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={`${review}-${starIndex}`} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="rounded-full bg-brand-blue/15 px-2 py-0.5 text-[11px] font-bold text-brand-navy/70">
                Avaliação {index + 1}
              </span>
            </div>
            <p className="text-sm font-bold text-brand-navy/85">“{review}”</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
