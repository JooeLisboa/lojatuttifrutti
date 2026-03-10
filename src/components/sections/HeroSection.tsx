import { BadgeCheck, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { storeData } from "../../data/storeData";

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-premium backdrop-blur-xl sm:p-7"
    >
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-orange/20 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-brand-blue/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-start">
        <div className="flex w-full justify-start">
          <div className="flex h-24 w-full max-w-[320px] items-center justify-center rounded-2xl border border-white/80 bg-white px-3 shadow-md sm:h-32 sm:max-w-[420px]">
            <img
              src="/logo-tutti-frutti.png"
              alt="Logo da Loja Tutti Frutti"
              className="max-h-full max-w-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        <p className="mt-4 inline-flex items-center gap-1 rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold text-brand-navy sm:text-xs">
          <BadgeCheck size={13} className="text-brand-green" />
          Bem avaliada no Google
        </p>

        <h1 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">
          {storeData.name}
        </h1>

        <p className="mt-1 text-base font-semibold text-brand-navy/80 sm:text-lg">
          {storeData.specialty}
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-navy/75 sm:text-base">
          {storeData.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-yellow/45 bg-brand-yellow/35 px-3 py-1 text-xs font-semibold text-brand-navy">
            <Star size={12} fill="currentColor" />
            {storeData.rating} no Google
          </span>

          <span className="rounded-full border border-brand-blue/35 bg-brand-blue/18 px-3 py-1 text-xs font-semibold text-brand-navy">
            {storeData.reviewsCount} avaliações
          </span>

          <span className="inline-flex items-center gap-1 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-3 py-1 text-xs font-semibold text-brand-navy">
            <MapPin size={12} />
            {storeData.city}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
