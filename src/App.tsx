import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechnologySection } from './components/TechnologySection';
import { WorkflowSection } from './components/WorkflowSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { CTASection } from './components/CTASection';
import { FloatingOrbs } from './components/FloatingOrbs';
import aegisLogo from 'figma:asset/94bc71c4574fbf571a985c58d375a0920539431a.png';

// Style objects for reusability
const navStyles = {
  link: "text-gray-300 hover:text-[var(--aegis-cyan)] transition-colors duration-300",
  button: "bg-[var(--aegis-cyan)] hover:bg-[var(--aegis-cyan)]/90 text-[var(--aegis-dark)] px-6 py-2 rounded-lg font-semibold transition-all duration-300",
  mobileMenuButton: "text-gray-300 hover:text-[var(--aegis-cyan)] transition-colors duration-300 p-2",
  floatingButton: "w-14 h-14 bg-[var(--aegis-cyan)] hover:bg-[var(--aegis-cyan)]/90 text-[var(--aegis-dark)] rounded-full flex items-center justify-center shadow-lg animate-pulse-glow transition-all duration-300 hover:scale-110"
};

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scrolling handler
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  const handleBackdropClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
        role="navigation"
        aria-label={t('aria.mainNavigation')}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src={aegisLogo} 
                  alt="AegisAI Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">AegisAI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('features');
                }}
                className={navStyles.link}
              >
                {t('nav.features')}
              </a>
              <a 
                href="#technology"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('technology');
                }}
                className={navStyles.link}
              >
                {t('nav.technology')}
              </a>
              <a 
                href="#applications"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('applications');
                }}
                className={navStyles.link}
              >
                {t('nav.applications')}
              </a>
              <LanguageSwitcher />
              <button 
                className={navStyles.button}
                aria-label={t('aria.demoRequest')}
              >
                {t('nav.demo')}
              </button>
            </div>

            {/* Mobile menu button and language switcher */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={navStyles.mobileMenuButton}
                aria-label={t('aria.toggleMobileMenu')}
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 mobile-menu-backdrop z-40"
              onClick={handleBackdropClick}
              aria-hidden="true"
            />
            
            {/* Menu Content */}
            <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-white/10 z-50 animate-slide-in-top">
              <div className="flex flex-col items-center gap-6 py-6">
                <a 
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('features');
                  }}
                  className={navStyles.link}
                >
                  {t('nav.features')}
                </a>
                <a 
                  href="#technology"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('technology');
                  }}
                  className={navStyles.link}
                >
                  {t('nav.technology')}
                </a>
                <a 
                  href="#applications"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('applications');
                  }}
                  className={navStyles.link}
                >
                  {t('nav.applications')}
                </a>
                <button 
                  className={navStyles.button}
                  aria-label={t('aria.demoRequest')}
                >
                  {t('nav.demo')}
                </button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Main content */}
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="technology">
          <TechnologySection />
        </div>
        <WorkflowSection />
        <div id="applications">
          <ApplicationsSection />
        </div>
        <CTASection />
      </main>

      {/* Floating demo button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          className={navStyles.floatingButton}
          aria-label={t('aria.demoRequest')}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </button>
      </div>

      {/* Background decorative elements */}
      <FloatingOrbs />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}