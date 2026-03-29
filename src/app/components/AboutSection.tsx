import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.p
            className="text-emerald-600 text-xs tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("ourStoryTitle")}
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl text-zinc-900 mb-6"
            style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("aboutTitle")}
          </motion.h2>

          <motion.div
            className="space-y-4 text-zinc-500 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
            <p>{t("aboutText3")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
