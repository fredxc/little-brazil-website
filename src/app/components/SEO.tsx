import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const SITE_URL = "https://littlebrazil.nl";
const OG_IMAGE = `${SITE_URL}/hero-bg.webp`;

function upsertMeta(
  nameOrProp: string,
  content: string,
  type: "name" | "property" = "name",
) {
  const selector = `meta[${type}="${nameOrProp}"]`;
  const existing = document.querySelector(selector);
  if (existing) {
    existing.setAttribute("content", content);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute(type, nameOrProp);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
}

function upsertLink(rel: string, href: string) {
  const existing = document.querySelector(`link[rel="${rel}"]`);
  if (existing) {
    existing.setAttribute("href", href);
  } else {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  }
}

function upsertScript(id: string, content: string) {
  const existing = document.getElementById(id);
  if (existing) {
    existing.textContent = content;
  } else {
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = content;
    document.head.appendChild(script);
  }
}

export function SEO() {
  const { language } = useLanguage();

  useEffect(() => {
    const isPt = language === "pt";

    // ── Basic ─────────────────────────────────────────────────
    document.title = isPt
      ? "Little Brazil Amsterdam | Produtos Brasileiros na Holanda"
      : "Little Brazil Amsterdam | Brazilian Products in the Netherlands";

    document.documentElement.lang = language;

    upsertMeta(
      "description",
      isPt
        ? "Loja de produtos brasileiros autênticos em Amsterdam. Mate a saudade com pão de queijo, guaraná, açaí e muito mais. Visite-nos na Raamsteeg 6."
        : "Authentic Brazilian products store in Amsterdam. Find pão de queijo, guaraná, açaí and more. Visit us at Raamsteeg 6, Amsterdam.",
    );

    upsertMeta(
      "keywords",
      isPt
        ? "produtos brasileiros amsterdam, loja brasileira holanda, comida brasileira amsterdam, pão de queijo amsterdam, açaí amsterdam, guaraná amsterdam, café pilão, feijão preto, salgados brasileiros"
        : "brazilian products amsterdam, brazilian store netherlands, brazilian food amsterdam, pao de queijo amsterdam, acai amsterdam, guarana amsterdam, brazilian grocery amsterdam, little brazil",
    );

    upsertMeta("robots", "index, follow");
    upsertMeta("author", "Little Brazil Amsterdam");

    // ── Canonical ─────────────────────────────────────────────
    upsertLink("canonical", SITE_URL);

    // ── Open Graph ────────────────────────────────────────────
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:url", SITE_URL, "property");
    upsertMeta("og:site_name", "Little Brazil Amsterdam", "property");
    upsertMeta("og:locale", isPt ? "pt_BR" : "en_US", "property");
    upsertMeta(
      "og:title",
      isPt
        ? "Little Brazil Amsterdam | Produtos Brasileiros na Holanda"
        : "Little Brazil Amsterdam | Brazilian Products in the Netherlands",
      "property",
    );
    upsertMeta(
      "og:description",
      isPt
        ? "Loja de produtos brasileiros autênticos em Amsterdam. Pão de queijo, guaraná, açaí e muito mais. Raamsteeg 6."
        : "Authentic Brazilian products store in Amsterdam. Pão de queijo, guaraná, açaí and more. Raamsteeg 6.",
      "property",
    );
    upsertMeta("og:image", OG_IMAGE, "property");
    upsertMeta("og:image:width", "1200", "property");
    upsertMeta("og:image:height", "630", "property");
    upsertMeta(
      "og:image:alt",
      isPt
        ? "Little Brazil Amsterdam - Loja Brasileira"
        : "Little Brazil Amsterdam - Brazilian Store",
      "property",
    );

    // ── Twitter Card ──────────────────────────────────────────
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:site", "@littlebrazilams");
    upsertMeta(
      "twitter:title",
      isPt
        ? "Little Brazil Amsterdam | Produtos Brasileiros"
        : "Little Brazil Amsterdam | Brazilian Products",
    );
    upsertMeta(
      "twitter:description",
      isPt
        ? "Produtos brasileiros autênticos em Amsterdam. Pão de queijo, guaraná, açaí e muito mais."
        : "Authentic Brazilian products in Amsterdam. Pão de queijo, guaraná, açaí and more.",
    );
    upsertMeta("twitter:image", OG_IMAGE);

    // ── Schema.org LocalBusiness ──────────────────────────────
    const schema = {
      "@context": "https://schema.org",
      "@type": "GroceryStore",
      name: "Little Brazil Amsterdam",
      description: isPt
        ? "Loja de produtos brasileiros autênticos em Amsterdam"
        : "Authentic Brazilian products store in Amsterdam",
      url: SITE_URL,
      image: OG_IMAGE,
      telephone: "",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Raamsteeg 6",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.3735,
        longitude: 4.8896,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      servesCuisine: "Brazilian",
      priceRange: "€",
      sameAs: ["https://www.instagram.com/littlebrazilams"],
    };

    upsertScript("schema-local-business", JSON.stringify(schema));
  }, [language]);

  return null;
}
