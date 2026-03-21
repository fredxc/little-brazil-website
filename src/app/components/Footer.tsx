import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const logoGreen = "/logo-green.png";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoGreen}
              alt="Little Brazil Logo"
              className="w-16 h-16"
            />
            <h3
              className="text-2xl"
              style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
            >
              Little Brazil Amsterdam
            </h3>
            <p
              className="text-emerald-200 text-sm"
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
            <div className="space-y-3 text-emerald-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Spuistraat 282, 1012 VX Amsterdam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+31612345678"
                  className="text-sm hover:text-white transition-colors"
                >
                  +31 6 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@littlebrazil.nl"
                  className="text-sm hover:text-white transition-colors"
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
                className="bg-emerald-800 p-3 rounded-full hover:bg-emerald-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/littlebrazil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 p-3 rounded-full hover:bg-emerald-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-300 text-sm">
          <p>
            © {currentYear} Little Brazil Amsterdam. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
