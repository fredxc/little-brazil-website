import { MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function StoreInfoSection() {
  const { t } = useLanguage();
  const mapsUrl = 'https://maps.google.com/?q=Spuistraat+282+Amsterdam';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Spuistraat+282+Amsterdam';

  const schedule = [
    { day: t('monday'), hours: '10:00 - 19:00' },
    { day: t('tuesday'), hours: '10:00 - 19:00' },
    { day: t('wednesday'), hours: '10:00 - 19:00' },
    { day: t('thursday'), hours: '10:00 - 19:00' },
    { day: t('friday'), hours: '10:00 - 19:00' },
    { day: t('saturday'), hours: '10:00 - 18:00' },
    { day: t('sunday'), hours: t('closed') },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl text-emerald-700 mb-4"
            style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
          >
            {t('storeTitle')}
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Copperplate, serif' }}
          >
            {t('storeSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Address & Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3
                  className="text-xl mb-2 text-gray-800"
                  style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
                >
                  {t('storeAddress')}
                </h3>
                <p className="text-gray-600 mb-4">{t('storeAddressLine')}</p>
                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Navigation className="w-5 h-5" />
                  {t('ctaDirections')}
                </motion.a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8594871945846!2d4.887999715706994!3d52.37446597978866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3c9c6d1d7%3A0x3d6d0d0d0d0d0d0d!2sSpuistraat%20282%2C%201012%20VX%20Amsterdam!5e0!3m2!1sen!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Brazil Amsterdam Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-yellow-700" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-xl mb-4 text-gray-800"
                  style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
                >
                  {t('storeHours')}
                </h3>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span
                        className="text-gray-700"
                        style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
                      >
                        {item.day}
                      </span>
                      <span className="text-gray-600">{item.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}