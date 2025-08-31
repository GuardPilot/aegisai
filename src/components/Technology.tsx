import { Cpu, Battery, Shield, Zap, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

export function Technology() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('tech.platform'),
      description: t('tech.platform.desc')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('tech.ai'),
      description: t('tech.ai.desc')
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: t('tech.charging'),
      description: t('tech.charging.desc')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('tech.payload'),
      description: t('tech.payload.desc')
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('tech.integration'),
      description: t('tech.integration.desc')
    }
  ];

  return (
    <section id="technology" className="section-padding bg-[#0B0F1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D1C7] via-transparent to-[#FF7A1A]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
            {t('tech.title').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-gradient">{t('tech.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-lg text-[#93A7B3] max-w-3xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Technology Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651964178942-ccecb82a18be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzU2NjMyNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Advanced drone technology"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-[#131A2C] rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00D1C7] mb-1">24/7</div>
                <div className="text-sm text-[#93A7B3]">{t('tech.continuous')}</div>
              </div>
            </div>
          </div>

          {/* Technology Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-rajdhani font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#93A7B3] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}