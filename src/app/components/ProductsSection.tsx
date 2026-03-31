import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const products = [
  {
    name: "Sagu Yoki",
    nameEn: "Tapioca Pearl Dessert",
    image: "/products/prod-1.png",
  },
  {
    name: "Suco Maguary",
    nameEn: "Maguary Tropical Juice",
    image: "/products/prod-3.png",
  },
  {
    name: "Sazón Tempero",
    nameEn: "Sazón All-in-One Seasoning",
    image: "/products/prod-4.png",
  },
  {
    name: "Extrato Tomate Elefante",
    nameEn: "Elephant Tomato Paste",
    image: "/products/prod-5.png",
  },
  {
    name: "Palmito Pupunha",
    nameEn: "Peach Palm Hearts",
    image: "/products/prod-7.png",
  },
  {
    name: "Guaraná Antarctica Zero",
    nameEn: "Guaraná Antarctica Zero (diet)",
    image: "/products/prod-10.png",
  },
  {
    name: "Guaraná Antarctica",
    nameEn: "Guaraná Antarctica Soda",
    image: "/products/prod-11.png",
  },
  {
    name: "Molho de Alho",
    nameEn: "Garlic Sauce",
    image: "/products/prod-12.png",
  },
  {
    name: "Massa de Bolo Dona Benta",
    nameEn: "Dona Benta Cake Mix",
    image: "/products/prod-13.png",
  },
  {
    name: "Leite Moça Nestle",
    nameEn: "Nestlé Condensed Milk",
    image: "/products/prod-14.png",
  },
  {
    name: "Fuba Mimoso Yoki",
    nameEn: "Yoki Fine Cornmeal",
    image: "/products/prod-15.png",
  },
  {
    name: "Feijão Preto Camil",
    nameEn: "Camil Black Beans",
    image: "/products/prod-16.png",
  },
  {
    name: "Feijão Carioca Camil",
    nameEn: "Camil Pinto Beans",
    image: "/products/prod-17.png",
  },
  {
    name: "Farinha de Mandioca",
    nameEn: "Cassava Flour",
    image: "/products/prod-18.png",
  },
  {
    name: "Ecobag Copacabana",
    nameEn: "Copacabana Tote Bag",
    image: "/products/prod-19.png",
  },
  {
    name: "Passatempo Recheado",
    nameEn: "Passatempo Filled Cookies",
    image: "/products/prod-20.png",
  },
  {
    name: "Bis Lacta",
    nameEn: "Bis Chocolate Wafer",
    image: "/products/prod-21.png",
  },
  { name: "Boné Brasil", nameEn: "Brazil Cap", image: "/products/prod-22.png" },
  {
    name: "Bis Branco Lacta",
    nameEn: "Bis White Chocolate Wafer",
    image: "/products/prod-23.png",
  },
  {
    name: "Creme de Leite Nestle",
    nameEn: "Nestlé Heavy Cream",
    image: "/products/prod-24.png",
  },
  {
    name: "Café Pilão",
    nameEn: "Pilão Brazilian Coffee",
    image: "/products/prod-25.png",
  },
  {
    name: "Chapéu Brasil",
    nameEn: "Brazil Hat",
    image: "/products/prod-26.png",
  },
  {
    name: "Chá Matte Leão",
    nameEn: "Leão Mate Tea",
    image: "/products/prod-27.png",
  },
  {
    name: "Suco Goiaba Compal",
    nameEn: "Compal Guava Juice",
    image: "/products/prod-28.png",
  },
  {
    name: "Chá Matte Leão",
    nameEn: "Leão Iced Mate Tea",
    image: "/products/prod-30.png",
  },
  {
    name: "Biscoito Nesfit",
    nameEn: "Nesfit Whole Grain Biscuits",
    image: "/products/prod-32.png",
  },
  {
    name: "Boné Brasil",
    nameEn: "Brazil Baseball Cap",
    image: "/products/prod-33.png",
  },
  {
    name: "Arroz Camil",
    nameEn: "Camil White Rice",
    image: "/products/prod-34.png",
  },
  {
    name: "Suco Laranja Compal",
    nameEn: "Compal Orange Juice",
    image: "/products/prod-35.png",
  },
  {
    name: "Suco Manga Compal",
    nameEn: "Compal Mango Juice",
    image: "/products/prod-36.png",
  },
  {
    name: "Suco Abacaxi Compal",
    nameEn: "Compal Pineapple Juice",
    image: "/products/prod-37.png",
  },
];

// Split into 3 non-overlapping groups so each row shows unique products
const row1 = products.slice(0, 11); // 11 items
const row2 = products.slice(11, 21); // 10 items
const row3 = products.slice(21); // 10 items

interface MarqueeRowProps {
  items: typeof products;
  direction: "left" | "right";
  speed: "normal" | "fast" | "slow";
}

interface ProductCardProps {
  product: (typeof products)[0];
  language: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProductCard({
  product,
  language,
  onMouseEnter,
  onMouseLeave,
}: ProductCardProps) {
  const [tapped, setTapped] = useState(false);
  const name = language === "pt" ? product.name : product.nameEn;

  const handleClick = () => {
    setTapped((prev) => {
      if (!prev) {
        setTimeout(() => {
          setTapped(false);
          onMouseLeave();
        }, 3000);
        return true;
      }
      return false;
    });
  };

  return (
    <div
      className="relative flex-shrink-0 w-[90px] h-[90px] md:w-[128px] md:h-[128px] rounded-xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => {
        onMouseEnter();
        setTapped(false);
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setTapped(false);
      }}
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          tapped ? "bg-black/60" : "bg-black/0 group-hover:bg-black/50"
        }`}
      />
      {/* Name label */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 px-2 ${
          tapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <span
          className="text-white text-[10px] md:text-xs font-semibold text-center leading-tight drop-shadow-lg"
          style={{ fontFamily: "Copperplate, serif" }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction, speed }: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);
  const { language } = useLanguage();

  const animClass =
    direction === "right"
      ? "animate-marquee-right"
      : speed === "fast"
        ? "animate-marquee-left-fast"
        : "animate-marquee-left";

  // Duplicate items for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden touch-pan-y"
      style={{ touchAction: "pan-y" }}
    >
      <div
        className={`flex gap-2 md:gap-2.5 ${animClass} ${paused ? "marquee-paused" : ""}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            language={language}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-zinc-950 overflow-hidden">
      <motion.div
        className="container max-w-5xl mx-auto px-6 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-emerald-400 text-xs tracking-[0.25em] uppercase mb-3">
          {t("productsSubtitle")}
        </p>
        <h2
          className="text-3xl md:text-4xl text-white"
          style={{ fontFamily: "Gardein, sans-serif", fontWeight: 700 }}
        >
          {t("productsTitle")}
        </h2>
      </motion.div>

      {/* 3 marquee rows */}
      <div className="flex flex-col gap-2.5">
        <MarqueeRow items={row1} direction="left" speed="normal" />
        <MarqueeRow items={row2} direction="right" speed="fast" />
        <MarqueeRow items={row3} direction="left" speed="slow" />
      </div>
    </section>
  );
}
