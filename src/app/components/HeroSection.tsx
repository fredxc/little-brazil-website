import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  const whatsappNumber = "+31612345678";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;
  const mapsUrl = "https://maps.app.goo.gl/YqccDKh4ALPA3g4D9";

  return (
    <section className="relative min-h-screen flex items-center mt-8 overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img-1.jpeg"
          alt="Little Brazil Amsterdam store"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        />
        {/* Gradient: strong at bottom so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content – vertically centered */}
      <div className="relative z-10 w-full container max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <motion.p
          className="text-emerald-400 text-sm tracking-[0.25em] uppercase mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Amsterdam · Raamsteeg 6
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl text-white leading-none mb-6"
          style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Little Brazil
          <br />
          <span className="text-yellow-400">Amsterdam</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/70 max-w-md mb-10"
          style={{ fontFamily: "Copperplate, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-[#1fb154] transition-colors"
            style={{ fontFamily: "Copperplate, serif" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-4 h-4" />
            {t("ctaWhatsApp")}
          </motion.a>

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors"
            style={{ fontFamily: "Copperplate, serif" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <MapPin className="w-4 h-4" />
            {t("ctaLocation")}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-px h-16 bg-white/30"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
