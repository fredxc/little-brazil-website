import { MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const whatsappNumber = '+31612345678';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
  const mapsUrl = 'https://maps.google.com/?q=Spuistraat+282+Amsterdam';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-yellow-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Brand Name - Large and Prominent */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-emerald-700 mb-8"
          style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Little Brazil
          <br />
          <span className="text-yellow-500">Amsterdam</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-3xl text-gray-700 max-w-3xl mx-auto mb-12 px-4"
          style={{ fontFamily: 'Copperplate, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
            style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin className="w-5 h-5" />
            {t('ctaLocation')}
          </motion.a>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
            style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            {t('ctaWhatsApp')}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="w-6 h-10 border-2 border-emerald-700/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-emerald-700 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}