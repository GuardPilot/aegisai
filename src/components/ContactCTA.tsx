import { Download, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function ContactCTA() {
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
    <section className="section-padding bg-gradient-to-br from-[#131A2C] to-[#0B0F1A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D1C7]/5 via-transparent to-[#FF7A1A]/5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00D1C7]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
          {t('cta.title')}
        </h2>
        
        <p className="text-lg text-[#93A7B3] mb-12 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={handleDownloadPitchDeck}
            className="btn-download-deck inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00D1C7] to-[#FF7A1A] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#00D1C7]/20 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            {t('hero.cta.download')}
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 border border-[#00D1C7] text-[#00D1C7] rounded-2xl hover:bg-[#00D1C7] hover:text-white transition-all duration-300"
          >
            {t('cta.contact')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
            <div className="text-white font-medium mb-1">{t('cta.fast.launch')}</div>
            <div className="text-[#93A7B3] text-sm">{t('cta.fast.launch.desc')}</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <div className="text-white font-medium mb-1">{t('cta.support')}</div>
            <div className="text-[#93A7B3] text-sm">{t('cta.support.desc')}</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🛡️</span>
            </div>
            <div className="text-white font-medium mb-1">{t('cta.warranty')}</div>
            <div className="text-[#93A7B3] text-sm">{t('cta.warranty.desc')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}