# Little Brazil Amsterdam - Landing Page

A modern, high-conversion landing page for Little Brazil Amsterdam, a Brazilian grocery store located in Amsterdam, Netherlands.

## 🎯 Business Goals

The main objectives of this website are:

1. **Increase physical store visits** - Drive foot traffic to the physical location
2. **Generate WhatsApp conversations** - Enable direct customer communication
3. **Build brand awareness** - Connect with Brazilian community in the Netherlands

## ✨ Key Features

### 🌐 Bilingual Support (PT/EN)

- Primary language: Portuguese (targeting Brazilian expats)
- Secondary language: English (for accessibility)
- Easy toggle between languages with persistent floating button

### 🎨 Modern Design & Animations

- **Hero Section**: Animated gradient background with rotating brand logos
- **Infinite Scrolling Products**: Three marquee rows with alternating directions
- **Smooth Animations**: Motion/Framer Motion for microinteractions
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes

### 📍 Store Information

- Full address with embedded Google Maps
- Weekly schedule with opening hours
- Direct "Get Directions" button to Google Maps
- One-click WhatsApp contact button (floating)

### 🛍️ Product Showcase

- Visual display of Brazilian products using dynamic marquee
- Authentic product imagery from Unsplash
- Three horizontal scrolling rows moving in alternating directions

### 💚 Trust Building

- About section highlighting Brazilian roots and authenticity
- Brand imagery showcasing the store
- Community-focused messaging

### 🍇 Cross-Promotion

- Dedicated section for Açaí Amsterdam business
- Link to https://acaiamsterdam.nl/
- Branded section with product imagery

## 🎨 Brand Assets

### Typography

- **Primary Font**: Gardein (headings, display text)
- **Secondary Font**: Copperplate (body text, buttons)

### Colors

- **Primary**: Emerald Green (#059669) - represents Brazil's nature
- **Secondary**: Yellow (#fbbf24) - from Brazilian flag
- **Accent**: Purple (açaí section) and Pink (highlights)

### Logos

- Green Toucan Logo (brand identity)
- Yellow Toucan Logo (alternative)
- Coffee Cup with Branding
- Store Signage

## 📱 Conversion Features

### Persistent CTAs

1. **Floating WhatsApp Button**: Always visible, animated bounce effect
2. **Hero CTAs**: "View Location" and "Chat on WhatsApp"
3. **Store Section**: "Get Directions" button with direct Google Maps link
4. **Footer**: Complete contact information

### Strategic Placement

- Above-the-fold CTAs in hero section
- Repeated CTAs throughout the page
- Visual hierarchy guiding users to conversion points
- Reduced friction for both primary actions (visit + contact)

## 🚀 Performance Optimizations

- Lazy loading for images
- Smooth scroll behavior
- Optimized animations (GPU-accelerated transforms)
- Font display swap for faster initial load
- Responsive images with proper sizing

## 📊 SEO Optimization

### Keywords (PT)

- produtos brasileiros amsterdam
- loja brasileira holanda
- comida brasileira amsterdam
- pão de queijo amsterdam
- açaí amsterdam

### Keywords (EN)

- brazilian products amsterdam
- brazilian store netherlands
- brazilian food amsterdam
- brazilian grocery amsterdam

### Meta Tags

- Dynamic title and description based on language
- Open Graph tags for social sharing
- Proper language attribute switching

## 🗺️ Store Details

**Address**: Raamsteeg 6, 1012 VZ Amsterdam

**Opening Hours**:

- Monday - Friday: 10:00 - 19:00
- Saturday: 10:00 - 18:00
- Sunday: Closed

**Contact**:

- WhatsApp: +31 6 1234 5678
- Email: info@littlebrazil.nl

## 🛠️ Technology Stack

- **Framework**: React 18.3.1
- **Animation**: Motion (Framer Motion) 12.23.24
- **Styling**: Tailwind CSS 4.1.12
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5
- **Language**: TypeScript

## 📦 Structure

```
src/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StoreInfoSection.tsx
│   │   ├── AcaiSection.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   └── SEO.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   └── App.tsx
└── styles/
    ├── fonts.css
    ├── theme.css
    └── index.css
```

## 🎯 Target Audience

**Primary**: Brazilian residents in the Netherlands

- Language: Portuguese
- Emotional trigger: Nostalgia, connection to Brazil
- Need: Authentic Brazilian products
- Location: Amsterdam and surrounding areas

**Secondary**: English-speaking users

- Language: English
- Interest: Brazilian culture, international food
- Need: Access to Brazilian products

## 🌟 User Journey

1. **Landing**: Hero section immediately communicates Brazilian grocery store
2. **Discovery**: Infinite scroll showcases abundant, colorful products
3. **Connection**: About section builds emotional connection
4. **Action**: Store info with clear directions and contact options
5. **Extension**: Açaí business cross-promotion
6. **Conversion**: Multiple CTAs for visit or WhatsApp contact

## 📞 Contact & Support

For business inquiries or technical support regarding this landing page, please contact through the provided channels in the footer section.

## 📄 License

© 2026 Little Brazil Amsterdam. All rights reserved.
