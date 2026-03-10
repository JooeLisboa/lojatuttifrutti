import { MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingWhatsAppButtonProps {
  href: string;
}

export function FloatingWhatsAppButton({ href }: FloatingWhatsAppButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp da Loja Tutti Frutti"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand-pink px-4 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(235,27,117,0.35)] ring-1 ring-white/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
    >
      <MessageCircleMore size={18} /> WhatsApp
    </motion.a>
  );
}
