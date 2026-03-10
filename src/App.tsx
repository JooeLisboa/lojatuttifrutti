import { CTAGroup } from './components/sections/CTAGroup';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightsSection } from './components/sections/HighlightsSection';
import { InfoSection } from './components/sections/InfoSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { FloatingWhatsAppButton } from './components/ui/FloatingWhatsAppButton';
import { Footer } from './components/layout/Footer';
import { storeData } from './data/storeData';

export function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-page-gradient text-brand-navy">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-5%] top-[6%] h-44 w-44 rounded-full bg-brand-pink/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[28%] h-52 w-52 rounded-full bg-brand-blue/18 blur-3xl" />
        <div className="absolute bottom-[8%] left-[38%] h-40 w-40 rounded-full bg-brand-orange/20 blur-3xl" />
      </div>

      <main className="relative mx-auto w-full max-w-3xl px-4 pb-24 pt-6 sm:px-6 lg:pt-8">
        <HeroSection />
        <CTAGroup />
        <InfoSection />
        <ReviewsSection />
        <HighlightsSection />
        <FinalCTASection />
        <Footer />
      </main>

      <FloatingWhatsAppButton href={storeData.whatsappLink} />
    </div>
  );
}
