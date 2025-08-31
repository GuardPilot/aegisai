import { Clock, Zap, DollarSign, Shield, CloudRain } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Benefits() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 защита",
      description: "Непрерывное патрулирование без простоев и человеческого фактора"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрое реагирование",
      description: "Автоматические тревоги и мгновенные действия при обнаружении угроз"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Ниже TCO",
      description: "Значительное сокращение расходов на постовую охрану и персонал"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Безопасность",
      description: "Контролируемое не летальное воздействие без причинения вреда"
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: "Погода не помеха",
      description: "Всепогодная работа в сложных условиях благодаря защищенной конструкции"
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-[#0B0F1A] to-[#131A2C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D1C7] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A1A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
            Преимущества <span className="text-gradient">AegisAI</span>
          </h2>
          <p className="text-lg text-[#93A7B3] max-w-3xl mx-auto">
            Революционный подход к периметральной безопасности с измеримыми результатами
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="card-glass rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#00D1C7]/10 hover:border-[#00D1C7]/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-rajdhani font-bold text-white">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#93A7B3] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">85%</div>
            <div className="text-[#93A7B3]">Снижение затрат</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3x</div>
            <div className="text-[#93A7B3]">Быстрее реагирование</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-[#93A7B3]">Время работы</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">0</div>
            <div className="text-[#93A7B3]">Ложных тревог</div>
          </div>
        </div>
      </div>
    </section>
  );
}