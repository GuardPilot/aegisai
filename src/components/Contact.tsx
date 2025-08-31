import { useState } from 'react';
import { Send, MessageCircle, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    agreed: false
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage(t('toast.fill.required'));
      return;
    }

    if (!formData.agreed) {
      setStatus('error');
      setStatusMessage(t('toast.privacy.required'));
      return;
    }

    setStatus('sending');
    
    // Simulate form submission with mailto
    const subject = 'Запрос с сайта AegisAI';
    const body = `Имя: ${formData.name || 'Не указано'}
Email: ${formData.email}
Сообщение: ${formData.message}`;
    
    const mailtoLink = `mailto:2025pilot.guard@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate success
    setTimeout(() => {
      setStatus('success');
      setStatusMessage(t('toast.message.sent'));
      setFormData({
        email: '',
        name: '',
        message: '',
        agreed: false
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#0B0F1A] to-[#131A2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-[#93A7B3] max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="card-glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E6F1F5] mb-3">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl text-[#E6F1F5] placeholder-[#93A7B3] focus:border-[#00D1C7] focus:outline-none focus:ring-2 focus:ring-[#00D1C7]/20 transition-colors duration-200"
                  placeholder={t('contact.email.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E6F1F5] mb-3">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl text-[#E6F1F5] placeholder-[#93A7B3] focus:border-[#00D1C7] focus:outline-none focus:ring-2 focus:ring-[#00D1C7]/20 transition-colors duration-200"
                  placeholder={t('contact.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E6F1F5] mb-3">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0B0F1A] border border-white/10 rounded-xl text-[#E6F1F5] placeholder-[#93A7B3] focus:border-[#00D1C7] focus:outline-none focus:ring-2 focus:ring-[#00D1C7]/20 transition-colors duration-200 resize-vertical"
                  placeholder={t('contact.message.placeholder')}
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-[#00D1C7] bg-[#0B0F1A] border border-white/10 rounded focus:ring-[#00D1C7] focus:ring-2"
                />
                <label htmlFor="agreed" className="text-sm text-[#93A7B3] leading-relaxed">
                  {t('contact.privacy')}
                </label>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div 
                  className={`flex items-center space-x-2 p-4 rounded-xl ${
                    status === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00D1C7] to-[#FF7A1A] text-white rounded-2xl hover:shadow-lg hover:shadow-[#00D1C7]/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-[#93A7B3] text-center">
                {t('contact.response.time')}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-glass rounded-3xl p-8">
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6">
                {t('contact.our.contacts')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Telegram</div>
                    <a 
                      href="https://t.me/AegisAI_Support" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#00D1C7] hover:text-[#FF7A1A] transition-colors duration-200"
                    >
                      @AegisAI_Support
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D1C7] to-[#FF7A1A] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Email</div>
                    <a 
                      href="mailto:2025pilot.guard@gmail.com"
                      className="text-[#00D1C7] hover:text-[#FF7A1A] transition-colors duration-200"
                    >
                      2025pilot.guard@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card-glass rounded-3xl p-8">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-4">
                {t('contact.why.choose')}
              </h3>
              
              <ul className="space-y-3 text-[#93A7B3]">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00D1C7] rounded-full"></div>
                  <span>{t('contact.individual')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00D1C7] rounded-full"></div>
                  <span>{t('contact.full.support')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00D1C7] rounded-full"></div>
                  <span>{t('contact.training')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00D1C7] rounded-full"></div>
                  <span>{t('contact.quality.warranty')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}