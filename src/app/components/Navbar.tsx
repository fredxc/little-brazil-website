import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import logoGreen from 'figma:asset/387449d40355e61aeb4d46f11348e1cc55b8ff95.png';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img 
            src={logoGreen} 
            alt="Little Brazil Amsterdam" 
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 
            className="text-lg md:text-2xl text-emerald-700"
            style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
          >
            <span className="hidden sm:inline">Little Brazil Amsterdam</span>
            <span className="sm:hidden">Little Brazil</span>
          </h1>
        </div>

        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
          style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-4 h-4" />
          <span className="uppercase text-sm">{language === 'pt' ? 'EN' : 'PT'}</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}