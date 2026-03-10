import { Star } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
}

export function ReviewCard({ quote }: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
      <div className="mb-2 flex gap-1 text-brand.pink">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm font-semibold text-brand.deep/85">“{quote}”</p>
    </article>
  );
}
