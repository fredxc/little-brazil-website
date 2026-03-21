import { motion } from "motion/react";

const storeImages = [
  { src: "/img-2.jpeg", alt: "Little Brazil Amsterdam – store interior" },
  { src: "/img-3.jpeg", alt: "Little Brazil Amsterdam – Brazilian products" },
  { src: "/img-4.jpeg", alt: "Little Brazil Amsterdam – fresh goods" },
];

export function HeroImageSection() {
  return (
    <section className="w-full">
      {/* Full-bleed photo strip — stacks vertically on mobile, 3-column on sm+ */}
      <div className="flex flex-col sm:flex-row gap-0.5 bg-zinc-950">
        {storeImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden h-64 sm:flex-1 sm:h-52 md:h-72 lg:h-80"
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: index * 0.12 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 md:hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
