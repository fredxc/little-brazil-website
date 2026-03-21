import { MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function StoreInfoSection() {
  const { t } = useLanguage();
  const mapsUrl = "https://maps.app.goo.gl/YqccDKh4ALPA3g4D9";
  const directionsUrl = "https://maps.app.goo.gl/YqccDKh4ALPA3g4D9";

  const schedule = [
    { day: t("monday"), hours: "12:00 - 17:00" },
    { day: t("tuesday"), hours: "11:00 - 18:00" },
    { day: t("wednesday"), hours: "11:00 - 18:00" },
    { day: t("thursday"), hours: "11:00 - 18:00" },
    { day: t("friday"), hours: "11:00 - 18:00" },
    { day: t("saturday"), hours: "11:00 - 18:00" },
    { day: t("sunday"), hours: "12:00 - 17:00" },
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-emerald-600 text-xs tracking-[0.25em] uppercase mb-3">
            {t("storeSubtitle")}
          </p>
          <h2
            className="text-3xl md:text-4xl text-zinc-900"
            style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
          >
            {t("storeTitle")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Address & Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-2">
              <div className="bg-emerald-50 p-2.5 rounded-xl flex-shrink-0">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold mb-1 text-zinc-800"
                  style={{ fontFamily: "Copperplate, serif" }}
                >
                  {t("storeAddress")}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  {t("storeAddressLine")}
                </p>
                <motion.a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors"
                  style={{ fontFamily: "Copperplate, serif" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Navigation className="w-4 h-4" />
                  {t("ctaDirections")}
                </motion.a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.485996615022!2d4.893133815692139!3d52.37532027978802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609be8c2e5235%3A0x3b0c71c96bb39b92!2sRaamsteeg%206%2C%201012%20VZ%20Amsterdam!5e0!3m2!1sen!2snl!4v1700000000000"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-2">
              <div className="bg-yellow-50 p-2.5 rounded-xl flex-shrink-0">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3
                  className="text-sm font-semibold mb-4 text-zinc-800"
                  style={{ fontFamily: "Copperplate, serif" }}
                >
                  {t("storeHours")}
                </h3>
                <div className="space-y-1.5">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-zinc-100 last:border-0"
                    >
                      <span
                        className="text-zinc-700 text-sm"
                        style={{
                          fontFamily: "Copperplate, serif",
                          fontWeight: 700,
                        }}
                      >
                        {item.day}
                      </span>
                      <span className="text-zinc-500 text-sm">
                        {item.hours}
                      </span>
                    </div>
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
