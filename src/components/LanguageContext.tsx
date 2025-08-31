import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    ru: 'Главная',
    en: 'Home'
  },
  'nav.technology': {
    ru: 'Технология',
    en: 'Technology'
  },
  'nav.benefits': {
    ru: 'Преимущества',
    en: 'Benefits'
  },
  'nav.industries': {
    ru: 'Отрасли',
    en: 'Industries'
  },
  'nav.contact': {
    ru: 'Контакты',
    en: 'Contact'
  },

  // Hero Section
  'hero.title': {
    ru: 'AegisAI — охранные дроны будущего',
    en: 'AegisAI — Security Drones of the Future'
  },
  'hero.subtitle': {
    ru: 'Автономные дроны для круглосуточной охраны с ИИ-обнаружением, беспроводной зарядкой и не летальным перцовым воздействием',
    en: 'Autonomous drones for 24/7 security with AI detection, wireless charging, and non-lethal pepper payload'
  },
  'hero.cta.download': {
    ru: 'Download Pitch Deck (PDF)',
    en: 'Download Pitch Deck (PDF)'
  },
  'hero.cta.explore': {
    ru: 'Узнать больше',
    en: 'Explore Technology'
  },
  'hero.about': {
    ru: 'AegisAI — «охранники будущего» для 24/7 патрулирования территории. Беспроводная док-станция обеспечивает непрерывную работу, перцовые снаряды — безопасную дезориентацию нарушителей. На базе DJI Enterprise Matrice 30T с тепловизором и ночным видением, интеграция с VMS и системами сигнализации.',
    en: 'AegisAI — "guards of the future" for 24/7 territory patrolling. Wireless docking station ensures continuous operation, pepper projectiles provide safe disorientation of intruders. Based on DJI Enterprise Matrice 30T with thermal vision and night vision, integration with VMS and alarm systems.'
  },

  // Technology Section
  'tech.title': {
    ru: 'Технология следующего поколения',
    en: 'Next Generation Technology'
  },
  'tech.subtitle': {
    ru: 'Инновационное решение на базе лучших технологий для максимальной эффективности охраны',
    en: 'Innovative solution based on the best technologies for maximum security efficiency'
  },
  'tech.platform': {
    ru: 'Платформа DJI Enterprise Matrice 30T',
    en: 'DJI Enterprise Matrice 30T Platform'
  },
  'tech.platform.desc': {
    ru: 'Профессиональный дрон с тепловизором и системой ночного видения для всепогодного патрулирования',
    en: 'Professional drone with thermal imaging and night vision system for all-weather patrolling'
  },
  'tech.ai': {
    ru: 'ИИ-автономность',
    en: 'AI Autonomy'
  },
  'tech.ai.desc': {
    ru: 'Умные маршруты патрулирования, автоматическое обнаружение угроз и запись инцидентов',
    en: 'Smart patrol routes, automatic threat detection and incident recording'
  },
  'tech.charging': {
    ru: 'Беспроводная зарядка',
    en: 'Wireless Charging'
  },
  'tech.charging.desc': {
    ru: 'Автоматическая док-станция обеспечивает непрерывную работу без участия человека',
    en: 'Automatic docking station ensures continuous operation without human intervention'
  },
  'tech.payload': {
    ru: 'Не летальное воздействие',
    en: 'Non-lethal Impact'
  },
  'tech.payload.desc': {
    ru: 'Контролируемый перцовый payload для безопасной дезориентации нарушителей',
    en: 'Controlled pepper payload for safe disorientation of intruders'
  },
  'tech.integration': {
    ru: 'Интеграция систем',
    en: 'System Integration'
  },
  'tech.integration.desc': {
    ru: 'Полная совместимость с VMS, системами сигнализации через API и Webhooks',
    en: 'Full compatibility with VMS, alarm systems via API and Webhooks'
  },
  'tech.continuous': {
    ru: 'Непрерывная работа',
    en: 'Continuous Operation'
  },

  // Benefits Section
  'benefits.title': {
    ru: 'Преимущества AegisAI',
    en: 'AegisAI Benefits'
  },
  'benefits.subtitle': {
    ru: 'Революционный подход к периметральной безопасности с измеримыми результатами',
    en: 'Revolutionary approach to perimeter security with measurable results'
  },
  'benefits.247': {
    ru: '24/7 защита',
    en: '24/7 Protection'
  },
  'benefits.247.desc': {
    ru: 'Непрерывное патрулирование без простоев и человеческого фактора',
    en: 'Continuous patrolling without downtime and human factor'
  },
  'benefits.response': {
    ru: 'Быстрое реагирование',
    en: 'Rapid Response'
  },
  'benefits.response.desc': {
    ru: 'Автоматические тревоги и мгновенные действия при обнаружении угроз',
    en: 'Automatic alerts and instant actions when threats are detected'
  },
  'benefits.tco': {
    ru: 'Ниже TCO',
    en: 'Lower TCO'
  },
  'benefits.tco.desc': {
    ru: 'Значительное сокращение расходов на постовую охрану и персонал',
    en: 'Significant reduction in security guard and personnel costs'
  },
  'benefits.safety': {
    ru: 'Безопасность',
    en: 'Safety'
  },
  'benefits.safety.desc': {
    ru: 'Контролируемое не летальное воздействие без причинения вреда',
    en: 'Controlled non-lethal impact without causing harm'
  },
  'benefits.weather': {
    ru: 'Погода не помеха',
    en: 'Weather Resistant'
  },
  'benefits.weather.desc': {
    ru: 'Всепогодная работа в сложных условиях благодаря защищенной конструкции',
    en: 'All-weather operation in harsh conditions thanks to rugged design'
  },
  'benefits.cost.reduction': {
    ru: 'Снижение затрат',
    en: 'Cost Reduction'
  },
  'benefits.faster.response': {
    ru: 'Быстрее реагирование',
    en: 'Faster Response'
  },
  'benefits.uptime': {
    ru: 'Время работы',
    en: 'Uptime'
  },
  'benefits.false.alarms': {
    ru: 'Ложных тревог',
    en: 'False Alarms'
  },

  // Industries Section
  'industries.title': {
    ru: 'Отрасли применения',
    en: 'Industries'
  },
  'industries.subtitle': {
    ru: 'AegisAI подходит для любых объектов, требующих надежной периметральной охраны',
    en: 'AegisAI is suitable for any facilities requiring reliable perimeter security'
  },
  'industries.manufacturing': {
    ru: 'Промзоны и склады',
    en: 'Manufacturing & Warehouses'
  },
  'industries.manufacturing.desc': {
    ru: 'Охрана производственных объектов и складских комплексов',
    en: 'Security for industrial facilities and warehouse complexes'
  },
  'industries.logistics': {
    ru: 'Логистические хабы',
    en: 'Logistics Hubs'
  },
  'industries.logistics.desc': {
    ru: 'Контроль больших территорий транспортно-логистических центров',
    en: 'Control of large territories of transport and logistics centers'
  },
  'industries.business': {
    ru: 'Бизнес-центры',
    en: 'Business Centers'
  },
  'industries.business.desc': {
    ru: 'Современная охрана офисных и деловых комплексов',
    en: 'Modern security for office and business complexes'
  },
  'industries.retail': {
    ru: 'Торговые площади',
    en: 'Retail Areas'
  },
  'industries.retail.desc': {
    ru: 'Безопасность торговых центров и retail-объектов',
    en: 'Security for shopping centers and retail facilities'
  },
  'industries.residential': {
    ru: 'Коттеджные посёлки',
    en: 'Residential Communities'
  },
  'industries.residential.desc': {
    ru: 'Элитная охрана жилых комплексов премиум-класса',
    en: 'Elite security for premium residential complexes'
  },
  'industries.datacenter': {
    ru: 'Дата-центры',
    en: 'Data Centers'
  },
  'industries.datacenter.desc': {
    ru: 'Критически важная защита IT-инфраструктуры',
    en: 'Mission-critical protection of IT infrastructure'
  },
  'industries.count': {
    ru: 'Отраслей',
    en: 'Industries'
  },
  'industries.objects': {
    ru: 'Объектов',
    en: 'Objects'
  },
  'industries.compatibility': {
    ru: 'Совместимость',
    en: 'Compatibility'
  },

  // Contact CTA
  'cta.title': {
    ru: 'Готовы усилить периметральную охрану',
    en: 'Ready to Enhance Perimeter Security'
  },
  'cta.subtitle': {
    ru: 'Узнайте больше о возможностях AegisAI и получите персональную консультацию по внедрению автономных охранных дронов на вашем объекте',
    en: 'Learn more about AegisAI capabilities and get personalized consultation on implementing autonomous security drones at your facility'
  },
  'cta.contact': {
    ru: 'Связаться с нами',
    en: 'Contact Us'
  },
  'cta.fast.launch': {
    ru: 'Быстрый запуск',
    en: 'Fast Launch'
  },
  'cta.fast.launch.desc': {
    ru: 'Внедрение за 2-4 недели',
    en: 'Implementation in 2-4 weeks'
  },
  'cta.support': {
    ru: 'Поддержка 24/7',
    en: '24/7 Support'
  },
  'cta.support.desc': {
    ru: 'Техническая поддержка',
    en: 'Technical support'
  },
  'cta.warranty': {
    ru: 'Гарантия качества',
    en: 'Quality Guarantee'
  },
  'cta.warranty.desc': {
    ru: '2 года гарантии',
    en: '2 years warranty'
  },

  // Contact Section
  'contact.title': {
    ru: 'Свяжитесь с нами',
    en: 'Contact Us'
  },
  'contact.subtitle': {
    ru: 'Готовы обсудить внедрение AegisAI на вашем объекте? Оставьте заявку, и мы свяжемся с вами',
    en: 'Ready to discuss AegisAI implementation at your facility? Leave a request and we will contact you'
  },
  'contact.email': {
    ru: 'Email *',
    en: 'Email *'
  },
  'contact.name': {
    ru: 'Имя',
    en: 'Name'
  },
  'contact.message': {
    ru: 'Сообщение *',
    en: 'Message *'
  },
  'contact.email.placeholder': {
    ru: 'ваш@email.com',
    en: 'your@email.com'
  },
  'contact.name.placeholder': {
    ru: 'Как к вам обращаться',
    en: 'How should we address you'
  },
  'contact.message.placeholder': {
    ru: 'Расскажите о вашем объекте и требованиях к охране...',
    en: 'Tell us about your facility and security requirements...'
  },
  'contact.privacy': {
    ru: 'Согласен с политикой конфиденциальности',
    en: 'I agree with the privacy policy'
  },
  'contact.send': {
    ru: 'Отправить сообщение',
    en: 'Send Message'
  },
  'contact.sending': {
    ru: 'Отправка...',
    en: 'Sending...'
  },
  'contact.response.time': {
    ru: 'Отвечаем в течение 1 рабочего дня',
    en: 'We respond within 1 business day'
  },
  'contact.our.contacts': {
    ru: 'Наши контакты',
    en: 'Our Contacts'
  },
  'contact.why.choose': {
    ru: 'Почему выбирают нас?',
    en: 'Why Choose Us?'
  },
  'contact.individual': {
    ru: 'Индивидуальный подход к каждому объекту',
    en: 'Individual approach to each facility'
  },
  'contact.full.support': {
    ru: 'Полная техническая поддержка',
    en: 'Full technical support'
  },
  'contact.training': {
    ru: 'Обучение персонала включено',
    en: 'Staff training included'
  },
  'contact.quality.warranty': {
    ru: 'Гарантия качества 24 месяца',
    en: '24-month quality warranty'
  },

  // Footer
  'footer.tagline': {
    ru: 'Охранные дроны будущего',
    en: 'Security Drones of the Future'
  },
  'footer.copyright': {
    ru: 'Все права защищены.',
    en: 'All rights reserved.'
  },

  // Toast Messages
  'toast.file.unavailable': {
    ru: 'File temporarily unavailable. Please contact us via Telegram or Email.',
    en: 'File temporarily unavailable. Please contact us via Telegram or Email.'
  },
  'toast.fill.required': {
    ru: 'Пожалуйста, заполните обязательные поля',
    en: 'Please fill in the required fields'
  },
  'toast.privacy.required': {
    ru: 'Необходимо согласие с политикой конфиденциальности',
    en: 'Privacy policy agreement is required'
  },
  'toast.message.sent': {
    ru: 'Спасибо! Ваше сообщение отправлено. Мы ответим в течение 1 рабочего дня.',
    en: 'Thank you! Your message has been sent. We will respond within 1 business day.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}