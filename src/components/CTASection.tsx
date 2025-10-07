import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/95830b61-9b82-45e6-b96c-bcb5ef3bbf7b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", company: "", email: "", phone: "", message: "", consent: false });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <section 
      ref={ref} 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/42b639d9-499c-4f06-b119-ceca950b43b0.png)'
      }}
    >
      <div className="absolute inset-0 bg-[#3D77FD]/70"></div>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className={`font-heading font-bold text-4xl md:text-5xl mb-4 text-center text-white ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
            Есть Вопросы? Напишите Нам!
          </h2>
          <p className={`text-lg mb-8 text-center text-white/95 ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
            Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса и ответят на все вопросы
          </p>

          <form onSubmit={handleSubmit} className={`space-y-4 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-white/90 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:bg-white transition-colors"
              />
              <Input
                placeholder="Компания"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="bg-white/90 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:bg-white transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Почта"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-white/90 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:bg-white transition-colors"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-white/90 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500 focus:bg-white transition-colors"
              />
            </div>

            <Textarea
              placeholder="Ваш вопрос или сообщение"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-white/90 border-0 rounded-3xl px-6 py-6 text-gray-900 placeholder:text-gray-500 min-h-[120px] resize-none focus:bg-white transition-colors"
            />

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                className="bg-white/90 border-0 mt-1"
              />
              <label htmlFor="consent" className="text-sm text-white cursor-pointer">
                Я даю согласие на обработку персональных данных
              </label>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-500 text-white p-4 rounded-2xl text-center font-semibold">
                ✓ Сообщение успешно отправлено!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500 text-white p-4 rounded-2xl text-center font-semibold">
                ✗ Ошибка отправки. Попробуйте позже.
              </div>
            )}

            <div className="pt-4 text-center">
              <Button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-6 rounded-full font-semibold text-sm sm:text-base shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ СООБЩЕНИЕ'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;