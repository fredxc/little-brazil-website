import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsAppButton() {
  const whatsappNumber = '+31612345678'; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      
      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}