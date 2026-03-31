import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function AcaiSection() {
  const { t } = useLanguage();
  const acaiUrl = "https://acaiamsterdam.nl/";
  const acaiImage = "/acai.webp";

  return (
    <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      {/* Subtle purple glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image – fixed size, left aligned on desktop */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-[320px] h-52 md:h-60 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={acaiImage}
                alt="Açaí Bowl"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-2 md:order-1 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo + title */}
            <div className="flex items-center gap-3">
              <img
                src="/logos/acai-logo.webp"
                alt="Açaí Amsterdam"
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <h2
                className="text-2xl md:text-3xl text-white leading-tight"
                style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
              >
                {t("acaiTitle")}
              </h2>
            </div>

            <p
              className="text-purple-300 text-sm font-semibold tracking-wide uppercase"
              style={{ fontFamily: "Copperplate, serif" }}
            >
              {t("acaiSubtitle")}
            </p>

            <p className="text-white/65 text-sm leading-relaxed">
              {t("acaiText")}
            </p>

            <motion.a
              href={acaiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-purple-900/30"
              style={{ fontFamily: "Copperplate, serif" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("ctaAcai")}
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
