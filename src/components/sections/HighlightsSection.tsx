import { motion } from 'framer-motion';
import { highlights } from '../../data/storeData';
import { SectionHeading } from '../ui/SectionHeading';

export function HighlightsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mt-10"
    >
      <SectionHeading
        eyebrow="Diferenciais"
        title="Destaques da loja"
        subtitle="Uma loja completa para vestir crianças e jovens com estilo."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/75 bg-gradient-to-br from-white/90 to-white/70 p-4 text-sm font-bold text-brand-navy shadow-sm backdrop-blur"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
