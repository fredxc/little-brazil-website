import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const logoGreen = "/logo-green.png";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/[0.06] text-white py-12">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoGreen}
              alt="Little Brazil Logo"
              className="w-10 h-10"
            />
            <h3
              className="text-base"
              style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
            >
              Little Brazil Amsterdam
            </h3>
            <p
              className="text-zinc-500 text-xs"
              style={{ fontFamily: "Copperplate, serif" }}
            >
              {t("footerTagline")}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "Copperplate, serif", fontWeight: 700 }}
            >
              Contato / Contact
            </h4>
            <div className="space-y-3 text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Raamsteeg 6, 1012 VZ Amsterdam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+31612345678"
                  className="text-xs hover:text-white transition-colors"
                >
                  +31 6 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@littlebrazil.nl"
                  className="text-xs hover:text-white transition-colors"
                >
                  info@littlebrazil.nl
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "Copperplate, serif", fontWeight: 700 }}
            >
              Redes Sociais / Social Media
            </h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/littlebrazil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://facebook.com/littlebrazil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 text-center text-zinc-600 text-xs">
          <p>
            © {currentYear} Little Brazil Amsterdam. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
