import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

const logoWhite = "/logos/logo-white.png";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/15"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img
            src={logoWhite}
            alt="Little Brazil Amsterdam"
            className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0"
          />
          <h1
            className="text-[13px] sm:text-sm md:text-base text-white leading-none"
            style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
          >
            <span>
              Little <span className="text-emerald-400">Brazil</span>
            </span>
            <br />
            <span className="text-yellow-400">Amsterdam</span>
          </h1>
        </div>

        {/* Language Toggle */}
        <motion.button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xs"
          style={{ fontFamily: "Copperplate, serif", fontWeight: 700 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-3.5 h-3.5" />
          <span className="uppercase">{language === "pt" ? "EN" : "PT"}</span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
