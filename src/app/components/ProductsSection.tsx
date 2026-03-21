import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const products = [
  {
    name: 'Pão de Queijo',
    nameEn: 'Cheese Bread',
    image: 'https://images.unsplash.com/photo-1773399159457-b8e8ccdc980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW8lMjBkZSUyMHF1ZWlqbyUyMGNoZWVzZSUyMGJyZWFkfGVufDF8fHx8MTc3NDAwMzA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Açaí',
    nameEn: 'Açaí Bowl',
    image: 'https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FpJTIwYm93bCUyMGZyZXNoJTIwYmVycmllc3xlbnwxfHx8fDE3NzQwODk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Brigadeiro',
    nameEn: 'Chocolate Brigadeiro',
    image: 'https://images.unsplash.com/photo-1767396867485-7e41ee6fec97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnYWRlaXJvJTIwY2hvY29sYXRlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzQwMDc1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Café Brasileiro',
    nameEn: 'Brazilian Coffee',
    image: 'https://images.unsplash.com/photo-1626379907480-29d844d603ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NzQwODU3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Guaraná',
    nameEn: 'Guaraná Soda',
    image: 'https://images.unsplash.com/photo-1680737562705-3cdc1ddfaf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWFyYW5hJTIwc29kYSUyMGRyaW5rfGVufDF8fHx8MTc3NDA4OTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Farofa',
    nameEn: 'Toasted Cassava Flour',
    image: 'https://images.unsplash.com/photo-1671452443552-3ed5548b71a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJvZmElMjBicmF6aWxpYW4lMjBzZWFzb25pbmd8ZW58MXx8fHwxNzc0MDg5NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Maracujá',
    nameEn: 'Passion Fruit',
    image: 'https://images.unsplash.com/photo-1664993119473-013502f1e3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzaW9uJTIwZnJ1aXQlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzQwODk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Mandioca',
    nameEn: 'Cassava Root',
    image: 'https://images.unsplash.com/photo-1757283961570-682154747d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIwbWFuaW9jJTIwcm9vdHxlbnwxfHx8fDE3NzQwODk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Feijoada',
    nameEn: 'Black Bean Stew',
    image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWlqb2FkYSUyMGJyYXppbGlhbiUyMGJlYW5zfGVufDF8fHx8MTc3NDA4OTkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Coxinha',
    nameEn: 'Chicken Croquette',
    image: 'https://images.unsplash.com/photo-1600767355936-73bef411285c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3hpbmhhJTIwYnJhemlsaWFuJTIwc25hY2t8ZW58MXx8fHwxNzc0MDAzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Picanha',
    nameEn: 'Top Sirloin Cap',
    image: 'https://images.unsplash.com/photo-1702288824191-3003d32484b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNhbmhhJTIwc3RlYWslMjBtZWF0fGVufDF8fHx8MTc3NDA4OTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Doce de Leite',
    nameEn: 'Caramel Spread',
    image: 'https://images.unsplash.com/photo-1547047803-fa4a5f94ffd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWxjZSUyMGRlJTIwbGVjaGUlMjBjYXJhbWVsfGVufDF8fHx8MTc3NDA4OTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Água de Coco',
    nameEn: 'Coconut Water',
    image: 'https://images.unsplash.com/photo-1588413336022-43f5326d33b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBmcmVzaHxlbnwxfHx8fDE3NzQwMTYwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Queijo Minas',
    nameEn: 'Minas Cheese',
    image: 'https://images.unsplash.com/photo-1654513547430-973fe7570159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBjaGVlc2V8ZW58MXx8fHwxNzc0MDg5OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Produtos Brasileiros',
    nameEn: 'Brazilian Products',
    image: 'https://images.unsplash.com/photo-1592973379832-7cb6feae2b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBncm9jZXJ5JTIwc3RvcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzQwODk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ProductsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl text-emerald-700 mb-4"
            style={{ fontFamily: 'Gardein, sans-serif', fontWeight: 700 }}
          >
            {t('productsTitle')}
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: 'Copperplate, serif' }}
          >
            {t('productsSubtitle')}
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={language === 'pt' ? product.name : product.nameEn}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Product Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="text-center"
                  style={{ fontFamily: 'Copperplate, serif', fontWeight: 700 }}
                >
                  {language === 'pt' ? product.name : product.nameEn}
                </p>
              </div>

              {/* Hover Shadow Effect */}
              <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}