import { Factory, Truck, Building2, ShoppingBag, Home, Server } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Industries() {
  const { t } = useLanguage();
  
  const industries = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: t('industries.manufacturing'),
      description: t('industries.manufacturing.desc')
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: t('industries.logistics'),
      description: t('industries.logistics.desc')
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: t('industries.business'),
      description: t('industries.business.desc')
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: t('industries.retail'),
      description: t('industries.retail.desc')
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: t('industries.residential'),
      description: t('industries.residential.desc')
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: t('industries.datacenter'),
      description: t('industries.datacenter.desc')
    }
  ];

  return (
    <section id="industries" className="section-padding bg-[#0B0F1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
            {t('industries.title')}
          </h2>
          <p className="text-lg text-[#93A7B3] max-w-3xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="card-glass rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D1C7]/10 hover:border-[#00D1C7]/30 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-rajdhani font-bold text-white mb-2 group-hover:text-[#00D1C7] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-[#93A7B3] text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-[#131A2C] rounded-2xl px-8 py-6 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00D1C7] mb-1">6+</div>
              <div className="text-sm text-[#93A7B3]">{t('industries.count')}</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF7A1A] mb-1">50+</div>
              <div className="text-sm text-[#93A7B3]">{t('industries.objects')}</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient mb-1">100%</div>
              <div className="text-sm text-[#93A7B3]">{t('industries.compatibility')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}