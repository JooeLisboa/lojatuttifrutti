import { Building2, Clock3, MapPin, MessageCircle, Phone, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';
import { quickInfo } from '../../data/storeData';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  phone: Phone,
  'message-circle': MessageCircle,
  'map-pin': MapPin,
  'building-2': Building2,
  'clock-3': Clock3,
  shirt: Shirt,
};

export function InfoSection() {
  return (
    <motion.section
      id="informacoes"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mt-9"
    >
      <SectionHeading
        eyebrow="Atendimento"
        title="Informações rápidas"
        subtitle="Tudo o que você precisa para falar com a loja em segundos."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {quickInfo.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <article
              key={item.label}
              className="rounded-2xl border border-white/75 bg-white/76 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-navy/55">
                <Icon size={15} className="text-brand-pink" />
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-navy/90">{item.value}</p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}
