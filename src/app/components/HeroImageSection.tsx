import { motion } from 'motion/react';

export function HeroImageSection() {
  const heroImages = [
    'https://images.unsplash.com/photo-1654508590628-21c717998f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBmb29kJTIwc3RvcmUlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzQwODk4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1592973379832-7cb6feae2b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBncm9jZXJ5JTIwc3RvcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzQwODk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1542379312-d69a543e004a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBzdG9yZSUyMGFtc3RlcmRhbXxlbnwxfHx8fDE3NzQwODk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-video shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <img
                src={image}
                alt={`Little Brazil Amsterdam ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
