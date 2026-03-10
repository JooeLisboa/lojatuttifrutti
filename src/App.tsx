import {
  BadgeCheck,
  Clock3,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Shirt,
  Sparkles,
  Star,
  Store,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CTAButton } from './components/CTAButton';
import { InfoCard } from './components/InfoCard';
import { ReviewCard } from './components/ReviewCard';

const whatsappUrl = 'https://wa.me/5514998172418';
const phoneUrl = 'tel:+551432651473';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Jos%C3%A9+Lisboa+J%C3%BAnior,+138,+Piratininga+-+SP,+17490-000';

const quickInfo = [
  { icon: Phone, label: 'Telefone', value: '(14) 3265-1473' },
  { icon: MessageCircle, label: 'WhatsApp', value: '(14) 99817-2418' },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Dr. José Lisboa Júnior, 138',
  },
  { icon: Store, label: 'Cidade', value: 'Piratininga - SP' },
  { icon: Clock3, label: 'Status', value: 'Fechado · Abre terça às 09:00' },
  { icon: Shirt, label: 'Segmento', value: 'Roupas Infantil e Juvenil' },
];

const highlights = [
  'Moda Infantil',
  'Moda Juvenil',
  'Atendimento de Qualidade',
  'Variedade de Peças',
  'Loja Bem Avaliada',
];

const reviews = [
  'Roupas lindas',
  'Muitas opções',
  'Atendimento top',
  'Loja completa',
  'Atendentes ótimas',
];

const riseIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5 },
};

export function App() {
  return (
    <div className="min-h-screen bg-hero-gradient text-brand.deep">
      <main className="mx-auto w-full max-w-xl px-4 pb-28 pt-6 sm:px-6">
        <motion.section {...riseIn} className="rounded-3xl border border-white/70 bg-white/65 p-6 shadow-soft backdrop-blur-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3 py-1 text-xs font-semibold">
            <Sparkles size={14} className="text-brand.pink" /> Bem avaliada no Google
          </div>
          <h1 className="text-3xl font-black leading-tight">Loja Tutti Frutti</h1>
          <p className="mt-2 text-base font-semibold text-brand.deep/80">Roupas Infantil e Juvenil</p>
          <p className="mt-3 text-sm leading-relaxed text-brand.deep/75">
            Moda infantil e juvenil com muito estilo, variedade e atendimento que encanta.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand.yellow/50 px-3 py-1 text-xs font-semibold">
              <Star size={13} className="fill-brand.deep" /> ⭐ 4,5 no Google
            </span>
            <span className="rounded-full bg-brand.blue/35 px-3 py-1 text-xs font-semibold">15 avaliações</span>
            <span className="rounded-full bg-brand.orange/35 px-3 py-1 text-xs font-semibold">Piratininga - SP</span>
          </div>
        </motion.section>

        <motion.section {...riseIn} transition={{ delay: 0.05, duration: 0.5 }} className="mt-5 grid gap-3">
          <CTAButton href={whatsappUrl} label="Comprar pelo WhatsApp" icon={MessageCircle} primary ariaLabel="Comprar pelo WhatsApp da Loja Tutti Frutti" />
          <CTAButton href={phoneUrl} label="Ligar para a Loja" icon={Phone} ariaLabel="Ligar para a Loja Tutti Frutti" />
          <CTAButton href={mapsUrl} label="Ver Localização" icon={MapPin} ariaLabel="Abrir localização da Loja Tutti Frutti no mapa" />
          <CTAButton href="#avaliacoes" label="Avaliações / Prova Social" icon={Star} ariaLabel="Ir para avaliações da loja" />
          <CTAButton href="#horario" label="Horário de Atendimento" icon={Clock3} ariaLabel="Ir para seção com horário de atendimento" />
        </motion.section>

        <motion.section {...riseIn} className="mt-8" id="horario">
          <h2 className="mb-3 text-lg font-bold">Informações rápidas</h2>
          <div className="grid gap-3">
            {quickInfo.map((item) => (
              <InfoCard key={item.label} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
        </motion.section>

        <motion.section {...riseIn} className="mt-8" id="avaliacoes">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">Prova social</h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold shadow-sm">
              <BadgeCheck size={14} className="text-brand.pink" /> Confiança local
            </span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review} quote={review} />
            ))}
          </div>
        </motion.section>

        <motion.section {...riseIn} className="mt-8">
          <h2 className="mb-3 text-lg font-bold">Destaques da loja</h2>
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/70 bg-white/75 p-3 text-sm font-semibold shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...riseIn} className="mt-8 rounded-3xl border border-brand.pink/25 bg-white/80 p-5 shadow-soft backdrop-blur">
          <div className="flex items-start gap-3">
            <HeartHandshake className="mt-1 text-brand.pink" />
            <p className="text-sm leading-relaxed text-brand.deep/80">
              Fale com a Tutti Frutti e encontre roupas infantis e juvenis com estilo, qualidade e ótimo atendimento.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chamar no WhatsApp"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand.pink px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand.pink/35 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand.deep"
          >
            Chamar no WhatsApp <ExternalLink size={16} />
          </a>
        </motion.section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed inset-x-4 bottom-4 z-20 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand.pink px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-brand.pink/40 md:hidden"
      >
        <MessageCircle size={18} /> Compre pelo WhatsApp
      </a>

      <footer className="pb-5 text-center text-xs text-brand.deep/65">
        Loja Tutti Frutti • Piratininga - SP
      </footer>
    </div>
  );
}
