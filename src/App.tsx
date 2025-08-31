import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { Benefits } from './components/Benefits';
import { Industries } from './components/Industries';
import { ContactCTA } from './components/ContactCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function AppContent() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    
    // Set document title and meta description based on language
    const title = language === 'ru' ? 'AegisAI — охранные дроны будущего' : 'AegisAI — Security Drones of the Future';
    const description = language === 'ru' 
      ? 'Автономные дроны для круглосуточной охраны с ИИ-обнаружением, беспроводной зарядкой и не летальным перцовым воздействием' 
      : 'Autonomous drones with AI patrol, wireless charging, and a non-lethal pepper payload. 24/7 perimeter security built on DJI Matrice 30T.';
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add theme color
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', '#0B0F1A');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#0B0F1A';
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1689916342167-cff2c335fbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY2MzI2OTd8MA&ixlib=rb-4.1.0&q=80&w=1200&h=630&utm_source=figma&utm_medium=referral' }
    ];

    ogTags.forEach(({ property, content }) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Optimize for Core Web Vitals
    const preloadFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Rajdhani:wght@600;700&display=swap'
    ];

    preloadFonts.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
        
        // Load the actual stylesheet
        setTimeout(() => {
          const linkElement = document.createElement('link');
          linkElement.rel = 'stylesheet';
          linkElement.href = href;
          document.head.appendChild(linkElement);
        }, 100);
      }
    });

  }, [language, t]);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-[#E6F1F5] overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <Technology />
        <Benefits />
        <Industries />
        <ContactCTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}