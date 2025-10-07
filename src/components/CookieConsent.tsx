import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    window.location.href = 'https://ya.ru';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-1 space-y-2">
            <div className="flex items-start gap-3">
              <Icon name="Cookie" className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Обработка персональных данных</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Мы используем cookies и обрабатываем ваши персональные данные для улучшения работы сайта, 
                  анализа посещаемости и предоставления персонализированного контента в соответствии 
                  с требованиями законодательства РФ (152-ФЗ). Продолжая использовать сайт, вы 
                  соглашаетесь с условиями{' '}
                  <a 
                    href="https://disk.360.yandex.ru/i/0Ul7s4KQuf-TsA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Политики конфиденциальности
                  </a>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button 
              onClick={handleAccept}
              className="w-full sm:w-auto min-w-[140px]"
            >
              Принять
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="w-full sm:w-auto min-w-[140px]"
            >
              Отклонить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;