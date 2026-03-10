import { ArrowRight, MessageCircleHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { storeData } from '../../data/storeData';

export function FinalCTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="mt-10 rounded-[1.8rem] border border-brand-pink/20 bg-white/80 p-6 shadow-premium backdrop-blur"
    >
      <p className="text-sm leading-relaxed text-brand-navy/80">
        Fale com a Tutti Frutti e encontre roupas infantis e juvenis com estilo, qualidade e ótimo atendimento.
      </p>
      <motion.a
        href={storeData.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp da Loja Tutti Frutti"
        whileTap={{ scale: 0.99 }}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-pink px-4 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(235,27,117,0.35)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
      >
        <MessageCircleHeart size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
      </motion.a>
    </motion.section>
  );
}
