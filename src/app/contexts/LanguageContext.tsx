import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Hero Section
    heroTitle: "Seu pedacinho do Brasil em Amsterdam",
    heroSubtitle:
      "Seu espaço brasileiro no coração da Holanda. Mate a saudade de casa.",
    ctaLocation: "Ver localização",
    ctaWhatsApp: "Falar no WhatsApp",

    // Products Section
    productsTitle: "Nossos Produtos",
    productsSubtitle: "Os sabores que você ama, pertinho de você",

    // Store Info Section
    storeTitle: "Visite Nossa Loja",
    storeSubtitle: "Estamos esperando por você!",
    storeAddress: "Endereço",
    storeAddressLine: "Raamsteeg 6, 1012 VZ Amsterdam",
    storeHours: "Horário de Funcionamento",
    monday: "Segunda",
    tuesday: "Terça",
    wednesday: "Quarta",
    thursday: "Quinta",
    friday: "Sexta",
    saturday: "Sábado",
    sunday: "Domingo",
    closed: "Fechado",
    ctaDirections: "Como chegar",

    // About Section
    ourStoryTitle: "Nossa História",
    aboutTitle: "Sobre Nós",
    aboutText1:
      "Somos mais que uma loja. Somos um pedacinho do Brasil em Amsterdam.",
    aboutText2:
      "Nascemos da saudade e do desejo de conectar brasileiros que vivem longe de casa com os sabores autênticos da nossa terra.",
    aboutText3:
      "Cada produto é escolhido com carinho, pensando em trazer aquele gostinho de Brasil que aquece o coração.",

    // Lanchonete / Menu Section
    pdqEyebrow: "Nosso Café",
    pdqTitle: "Vamos tomar um café?",
    pdqSubtitle:
      "Salgados quentinhos e doces brasileiros feitos todo dia. Uma pausa com gosto de casa no coração de Amsterdam.",
    menuLabel: "Cardápio",
    menuSalgados: "Salgados",
    menuDoces: "Doces",

    menuSalgadosList: [
      "Pão de queijo",
      "Coxinha de frango com catupiry",
      "Coxinha de costela com catupiry",
      "Esfiha de frango",
      "Esfiha de costela",
      "Enroladinho de salsicha",
      "Risoles de carne",
      "Torta de frango com requeijão",
      "Empada de palmito",
      "Kibe frito",
      "Café brasileiro",
    ],
    menuDocesList: [
      "Pudim de leite condensado",
      "Brigadeiro",
      "Bolo de cenoura com chocolate",
      "Bolos gelados diversos",
      "Açaí no copo",
    ],

    // Acai Section
    acaiTitle: "Conheça Nosso Açaí",
    acaiSubtitle: "Açaí autêntico, fresquinho e delicioso",
    acaiText:
      "Experimente o melhor açaí de Amsterdam! Feito com polpa brasileira 100% natural, do jeito que você lembra.",
    ctaAcai: "Visitar Açaí Amsterdam",

    // Restaurant Section
    restaurantTitle: "O sabor do Brasil no nosso restaurante",
    restaurantText:
      "Experimente pratos icônicos como feijoada, strogonoff e muito mais, preparados com ingredientes autênticos e aquele toque caseiro brasileiro. Nosso espaço é perfeito para almoços, jantares e também para celebrar momentos especiais com quem você ama.\n\nQuer fazer seu evento aqui? Agende sua festa, confraternização ou reunião e viva uma experiência inesquecível no coração de Amsterdam!",
    restaurantBtnEvent: "Agendar Evento",
    restaurantBtnDirections: "Como Chegar",

    // Footer
    footerTagline: "Matando a saudade, um produto de cada vez.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    // Hero Section
    heroTitle: "Your piece of Brazil in Amsterdam",
    heroSubtitle:
      "Your Brazilian space in the heart of the Netherlands. Feel at home again.",
    ctaLocation: "View location",
    ctaWhatsApp: "Chat on WhatsApp",

    // Products Section
    productsTitle: "Our Products",
    productsSubtitle: "The flavors you love, close to you",

    // Store Info Section
    storeTitle: "Visit Our Store",
    storeSubtitle: "We are waiting for you!",
    storeAddress: "Address",
    storeAddressLine: "Raamsteeg 6, 1012 VZ Amsterdam",
    storeHours: "Opening Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    ctaDirections: "Get directions",

    // About Section
    ourStoryTitle: "Our Story",
    aboutTitle: "About Us",
    aboutText1:
      "We are more than a store. We are a piece of Brazil in Amsterdam.",
    aboutText2:
      "Born from homesickness and the desire to connect Brazilians living far from home with the authentic flavors of our land.",
    aboutText3:
      "Each product is chosen with care, aiming to bring that taste of Brazil that warms the heart.",

    // Lanchonete / Menu Section
    pdqEyebrow: "Our Café",
    pdqTitle: "Let's have a coffee?",
    pdqSubtitle:
      "Warm salgados and Brazilian sweets made fresh every day. A taste-of-home break in the heart of Amsterdam.",
    menuLabel: "Menu",
    menuSalgados: "Savory",
    menuDoces: "Sweet",

    menuSalgadosList: [
      "Cheese bread",
      "Chicken coxinha with catupiry",
      "Beef coxinha with catupiry",
      "Chicken esfiha",
      "Beef esfiha",
      "Sausage roll",
      "Beef rissole",
      "Chicken pie with requeijão",
      "Hearts of palm empada",
      "Fried kibbeh",
      "Brazilian coffee",
    ],
    menuDocesList: [
      "Condensed milk flan",
      "Brigadeiro",
      "Carrot cake with chocolate",
      "Assorted chilled cakes",
      "Açaí cup",
    ],

    // Acai Section
    acaiTitle: "Discover Our Açaí",
    acaiSubtitle: "Authentic, fresh and delicious açaí",
    acaiText:
      "Try the best açaí in Amsterdam! Made with 100% natural Brazilian pulp, just the way you remember.",
    ctaAcai: "Visit Açaí Amsterdam",

    // Restaurant Section
    restaurantTitle: "The taste of Brazil in our restaurant",
    restaurantText:
      "Try iconic dishes like feijoada, strogonoff and more, prepared with authentic ingredients and that homemade Brazilian touch. Our space is perfect for lunch, dinner, and also to celebrate special moments with your loved ones.\n\nWant to host your event here? Book your party, gathering or meeting and enjoy an unforgettable experience in the heart of Amsterdam!",
    restaurantBtnEvent: "Book Event",
    restaurantBtnDirections: "Get Directions",

    // Footer
    footerTagline: "Curing homesickness, one product at a time.",
    footerRights: "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string | string[]): string => {
    if (Array.isArray(key)) {
      return key
        .map((k) => {
          const value =
            translations[language][k as keyof typeof translations.pt];
          if (Array.isArray(value)) {
            return value.join(", ");
          }
          return value || k;
        })
        .join(" ");
    }

    const value = translations[language][key as keyof typeof translations.pt];
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
