import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { HeroSection } from './components/HeroSection';
import { HeroImageSection } from './components/HeroImageSection';
import { ProductsSection } from './components/ProductsSection';
import { StoreInfoSection } from './components/StoreInfoSection';
import { AboutSection } from './components/AboutSection';
import { AcaiSection } from './components/AcaiSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-white scroll-smooth" style={{ fontFamily: 'Copperplate, serif' }}>
        {/* Fixed Elements */}
        <Navbar />
        <FloatingWhatsAppButton />

        {/* Main Content */}
        <main>
          <HeroSection />
          <HeroImageSection />
          <ProductsSection />
          <AboutSection />
          <StoreInfoSection />
          <AcaiSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}