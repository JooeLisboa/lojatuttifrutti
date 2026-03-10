import { Clock3, MapPinned, MessageCircleHeart, PhoneCall, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { storeData } from '../../data/storeData';

const secondaryBtnClass =
  'group inline-flex w-full items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-4 py-3.5 text-sm font-semibold text-brand-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy';

export function CTAGroup() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="mt-5 grid gap-3"
    >
      <motion.a
        href={storeData.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Loja no WhatsApp"
        whileTap={{ scale: 0.985 }}
        className="cta-primary group relative inline-flex w-full items-center justify-between overflow-hidden rounded-2xl bg-brand-pink px-5 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_35px_rgba(235,27,117,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
      >
        <span className="absolute inset-y-0 -right-16 w-32 rotate-12 bg-white/25 blur-2xl transition group-hover:translate-x-8" aria-hidden="true" />
        <span className="inline-flex items-center gap-2">
          <MessageCircleHeart size={18} /> Falar com a Loja no WhatsApp
        </span>
        <Sparkles size={17} />
      </motion.a>

      <a href={storeData.phoneLink} aria-label="Ligar para a Loja Tutti Frutti" className={secondaryBtnClass}>
        <span className="inline-flex items-center gap-2">
          <PhoneCall size={17} /> Ligar para a Loja
        </span>
        <span aria-hidden="true">→</span>
      </a>
      <a
        href={storeData.mapsLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Ver localização da Loja Tutti Frutti no Google Maps"
        className={secondaryBtnClass}
      >
        <span className="inline-flex items-center gap-2">
          <MapPinned size={17} /> Ver Localização
        </span>
        <span aria-hidden="true">→</span>
      </a>
      <a href="#avaliacoes" aria-label="Ir para Avaliações / Prova Social" className={secondaryBtnClass}>
        <span className="inline-flex items-center gap-2">
          <Star size={17} /> Avaliações / Prova Social
        </span>
        <span aria-hidden="true">→</span>
      </a>
      <a href="#informacoes" aria-label="Ir para Horário de Atendimento" className={secondaryBtnClass}>
        <span className="inline-flex items-center gap-2">
          <Clock3 size={17} /> Horário de Atendimento
        </span>
        <span aria-hidden="true">→</span>
      </a>
    </motion.section>
  );
}
