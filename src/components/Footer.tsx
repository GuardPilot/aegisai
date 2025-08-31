import { MessageCircle, Mail } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import logoImage from 'figma:asset/94bc71c4574fbf571a985c58d375a0920539431a.png';

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-[#0B0F1A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Company */}
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="AegisAI Logo" 
                className="w-8 h-8"
              />
              <div>
                <div className="font-rajdhani text-xl font-bold text-white">AegisAI</div>
                <div className="text-sm text-[#93A7B3]">{t('footer.tagline')}</div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://t.me/AegisAI_Support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:2025pilot.guard@gmail.com"
                className="flex items-center space-x-2 text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-sm text-[#93A7B3] hover:text-[#00D1C7] transition-colors duration-200"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Copyright and Disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-[#93A7B3]">
                © {currentYear} AegisAI. {t('footer.copyright')}
              </div>
              <div className="text-xs text-[#93A7B3] text-center md:text-right max-w-md">
                AegisAI is not affiliated with DJI. Features subject to local regulations.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPrivacyModal(false)}
          ></div>
          
          <div className="relative bg-[#131A2C] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-rajdhani font-bold text-white">
                Политика конфиденциальности
              </h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-[#93A7B3] hover:text-white transition-colors duration-200 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 text-[#E6F1F5] text-sm leading-relaxed">
              <p>
                <strong className="text-[#00D1C7]">1. Сбор информации</strong><br />
                Мы собираем только необходимую информацию для связи с вами: email, имя (опционально) и сообщение.
              </p>

              <p>
                <strong className="text-[#00D1C7]">2. Использование данных</strong><br />
                Ваши данные используются исключительно для ответа на ваши запросы и предоставления информации о наших услугах.
              </p>

              <p>
                <strong className="text-[#00D1C7]">3. Защита данных</strong><br />
                Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа.
              </p>

              <p>
                <strong className="text-[#00D1C7]">4. Передача третьим лицам</strong><br />
                Мы не передаем ваши персональные данные третьим лицам без вашего согласия.
              </p>

              <p>
                <strong className="text-[#00D1C7]">5. Контакты</strong><br />
                По вопросам обработки персональных данных обращайтесь: 2025pilot.guard@gmail.com
              </p>

              <p className="text-[#93A7B3] text-xs">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-6 py-2 bg-[#00D1C7] text-white rounded-lg hover:bg-[#00B8B0] transition-colors duration-200"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}