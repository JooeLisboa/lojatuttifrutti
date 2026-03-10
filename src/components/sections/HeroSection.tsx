import { BadgeCheck, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { storeData } from '../../data/storeData';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-premium backdrop-blur-xl sm:p-7"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-orange/20 blur-2xl" aria-hidden="true" />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-brand-blue/20 blur-2xl" aria-hidden="true" />

      <div className="relative flex items-start gap-4">
        <img
          src="/logo-tutti-frutti.svg"
          alt="Logo da Loja Tutti Frutti"
          className="h-16 w-16 rounded-2xl border border-white/80 bg-white object-cover p-1 shadow-md sm:h-20 sm:w-20"
          loading="eager"
        />
        <div>
          <p className="inline-flex items-center gap-1 rounded-full bg-brand-green/15 px-2.5 py-1 text-[11px] font-bold text-brand-navy">
            <BadgeCheck size={13} className="text-brand-green" /> Bem avaliada no Google
          </p>
          <h1 className="mt-2 text-2xl font-black leading-tight text-brand-navy sm:text-3xl">{storeData.name}</h1>
          <p className="text-sm font-semibold text-brand-navy/80 sm:text-base">{storeData.specialty}</p>
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-brand-navy/75">{storeData.description}</p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full border border-brand-yellow/45 bg-brand-yellow/35 px-3 py-1 text-xs font-semibold text-brand-navy">
          <Star size={12} fill="currentColor" /> {storeData.rating} no Google
        </span>
        <span className="rounded-full border border-brand-blue/35 bg-brand-blue/18 px-3 py-1 text-xs font-semibold text-brand-navy">
          {storeData.reviewsCount} avaliações
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-3 py-1 text-xs font-semibold text-brand-navy">
          <MapPin size={12} /> {storeData.city}
        </span>
      </div>
    </motion.section>
  );
}
