import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl text-emerald-700 mb-8"
            style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('aboutTitle')}
          </motion.h2>

          {/* Content */}
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl leading-relaxed">{t('aboutText1')}</p>
            <p className="text-xl leading-relaxed">{t('aboutText2')}</p>
            <p className="text-xl leading-relaxed">{t('aboutText3')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}