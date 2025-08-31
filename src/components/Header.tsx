import { useState, useEffect } from 'react';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import logoImage from 'figma:asset/94bc71c4574fbf571a985c58d375a0920539431a.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0F1A]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="AegisAI Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="font-rajdhani text-xl font-bold text-white">AegisAI</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200"
            >
              {t('nav.technology')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200"
            >
              {t('nav.benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200"
            >
              {t('nav.industries')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Contact Links & Language Switcher */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="flex items-center space-x-2 p-2 text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200 rounded-lg hover:bg-white/5"
                aria-label="Switch Language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
            
            <div className="w-px h-6 bg-white/20"></div>
            
            <a
              href="https://t.me/AegisAI_Support"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200"
              aria-label="Telegram Support"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:2025pilot.guard@gmail.com"
              className="p-2 text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200"
              aria-label="Email Support"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200 whitespace-nowrap"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-sm text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200 whitespace-nowrap"
            >
              {t('nav.technology')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-sm text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200 whitespace-nowrap"
            >
              {t('nav.benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-sm text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200 whitespace-nowrap"
            >
              {t('nav.industries')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-[#E6F1F5] hover:text-[#00D1C7] transition-colors duration-200 whitespace-nowrap"
            >
              {t('nav.contact')}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}