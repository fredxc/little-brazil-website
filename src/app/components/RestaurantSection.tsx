import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function RestaurantSection() {
  const { t, language } = useLanguage();
  const whatsappNumber = "+31634142080";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;
  const mapsUrl = "https://maps.app.goo.gl/YqccDKh4ALPA3g4D9";

  return (
    <section
      className="w-full py-16"
      style={{
        background: "linear-gradient(180deg, #fff 0%, #fff 60%, #09090b 100%)",
      }}
    >
      <div className="container max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
        {/* Left: Title, text, buttons */}
        <div className="flex flex-col gap-4 md:gap-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight"
            style={{
              fontFamily: "Gardein, sans-serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.10)",
            }}
          >
            {t("restaurantTitle")}
          </h2>
          <p
            className="text-zinc-700 text-base leading-relaxed whitespace-pre-line"
            style={{ fontFamily: "Copperplate, serif" }}
          >
            {t("restaurantText")}
          </p>
          <div className="flex flex-wrap gap-4 my-8">
            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FCC800]/90 text-black text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-[#FCC800] transition-colors w-full sm:w-auto"
                style={{ fontFamily: "Copperplate, serif" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MapPin className="w-4 h-4" />
                {t("restaurantBtnDirections")}
              </motion.a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#B7B7B8] backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors w-full sm:w-auto"
                style={{ fontFamily: "Copperplate, serif" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                {t("restaurantBtnEvent")}
              </motion.a>
            </motion.div>
          </div>
        </div>
        {/* Right: Images */}
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="w-full flex pr-5">
            <img
              src="/restaurant/restaurant-1.jpg"
              alt="Feijoada e pratos brasileiros"
              className="rounded-xl shadow-lg w-1/2 object-cover aspect-[4/3]"
            />
            <img
              src="/restaurant/restaurant-2.jpg"
              alt="Ambiente do restaurante"
              className="rounded-xl shadow-lg w-1/2 object-cover aspect-[4/3] ml-5"
            />
          </div>
          <img
            src="/restaurant/restaurant-3.jpg"
            alt="Evento no restaurante"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{
              height: "min(320px,32vw)",
              minHeight: 180,
              maxHeight: 400,
            }}
          />
        </div>
      </div>
    </section>
  );
}
