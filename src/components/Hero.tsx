import { Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const handleDownloadPitchDeck = () => {
    // Simulate PDF download - in real implementation, this would be a real PDF
    const link = document.createElement('a');
    link.href = '/assets/GuardPilot_PitchDeck.pdf';
    link.download = 'GuardPilot_PitchDeck.pdf';
    link.target = '_blank';
    link.rel = 'noopener';
    
    // Fallback if file doesn't exist
    setTimeout(() => {
      const toast = document.createElement('div');
      toast.className = 'fixed top-4 right-4 bg-[#131A2C] text-[#E6F1F5] px-4 py-2 rounded-lg shadow-lg z-50';
      toast.textContent = t('toast.file.unavailable');
      document.body.appendChild(toast);
      
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 5000);
    }, 100);
    
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1689916342167-cff2c335fbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGRyb25lJTIwc3VydmVpbGxhbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY2MzI2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Security drone technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-rajdhani font-bold text-white mb-6">
          {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-gradient">{t('hero.title').split(' ').slice(-1)[0]}</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-[#93A7B3] max-w-4xl mx-auto mb-8 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={handleDownloadPitchDeck}
            className="btn-download-deck inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00D1C7] to-[#FF7A1A] text-white rounded-2xl hover:shadow-lg hover:shadow-[#00D1C7]/20 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            {t('hero.cta.download')}
          </button>
          
          <button
            onClick={() => scrollToSection('technology')}
            className="inline-flex items-center px-8 py-4 border border-[#00D1C7] text-[#00D1C7] rounded-2xl hover:bg-[#00D1C7] hover:text-white transition-all duration-300"
          >
            {t('hero.cta.explore')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* About Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-[#E6F1F5] text-lg leading-relaxed">
            {t('hero.about')}
          </p>
        </div>
      </div>
    </section>
  );
}