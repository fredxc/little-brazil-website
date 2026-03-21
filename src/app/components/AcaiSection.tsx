import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AcaiSection() {
  const { t } = useLanguage();
  const acaiUrl = 'https://acaiamsterdam.nl/';
  const acaiImage = 'https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FpJTIwYm93bCUyMGZyZXNoJTIwYmVycmllc3xlbnwxfHx8fDE3NzQwODk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            className="text-white space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
            >
              {t('acaiTitle')}
            </h2>
            <p
              className="text-xl mb-2"
              style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
            >
              {t('acaiSubtitle')}
            </p>
            <p className="text-lg leading-relaxed text-white/95">
              {t('acaiText')}
            </p>

            <motion.a
              href={acaiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all mt-6"
              style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ctaAcai')}
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={acaiImage}
                alt="Açaí Bowl"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}