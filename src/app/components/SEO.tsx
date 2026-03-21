import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function SEO() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title =
      language === 'pt'
        ? 'Little Brazil Amsterdam - Produtos Brasileiros na Holanda'
        : 'Little Brazil Amsterdam - Brazilian Products in the Netherlands';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        language === 'pt'
          ? 'Loja de produtos brasileiros autênticos em Amsterdam. Mate a saudade de casa com nossos produtos selecionados. Visite nossa loja na Spuistraat 282.'
          : 'Authentic Brazilian products store in Amsterdam. Feel at home with our carefully selected products. Visit our store at Spuistraat 282.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        language === 'pt'
          ? 'Loja de produtos brasileiros autênticos em Amsterdam. Mate a saudade de casa com nossos produtos selecionados. Visite nossa loja na Spuistraat 282.'
          : 'Authentic Brazilian products store in Amsterdam. Feel at home with our carefully selected products. Visit our store at Spuistraat 282.';
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords =
      language === 'pt'
        ? 'produtos brasileiros amsterdam, loja brasileira holanda, comida brasileira amsterdam, pão de queijo amsterdam, açaí amsterdam, guaraná amsterdam, brazilian products amsterdam'
        : 'brazilian products amsterdam, brazilian store netherlands, brazilian food amsterdam, pao de queijo amsterdam, acai amsterdam, guarana amsterdam, brazilian grocery amsterdam';
    
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Update lang attribute
    document.documentElement.lang = language;

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        language === 'pt'
          ? 'Little Brazil Amsterdam - Produtos Brasileiros'
          : 'Little Brazil Amsterdam - Brazilian Products'
      );
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content =
        language === 'pt'
          ? 'Little Brazil Amsterdam - Produtos Brasileiros'
          : 'Little Brazil Amsterdam - Brazilian Products';
      document.head.appendChild(meta);
    }
  }, [language]);

  return null;
}
