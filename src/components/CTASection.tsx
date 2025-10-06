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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 hidden lg:block">
        <img 
          src="https://cdn.poehali.dev/files/780a02b9-b2aa-4acc-b75b-2f5d08268075.png" 
          alt="CRM Illustration" 
          className="w-full h-auto opacity-90"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:w-1/2">
          <h2 className={`font-heading font-bold text-4xl md:text-5xl mb-4 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
            Есть Вопросы? Напишите Нам!
          </h2>
          <p className={`text-lg mb-8 opacity-90 ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
            Наши специалисты помогут подобрать оптимальное решение для вашего бизнеса и ответят на все вопросы
          </p>

          <form onSubmit={handleSubmit} className={`space-y-4 ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-white/95 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500"
              />
              <Input
                placeholder="Компания"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="bg-white/95 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Почта"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-white/95 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="bg-white/95 border-0 rounded-full px-6 py-6 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <Textarea
              placeholder="Ваш вопрос или сообщение"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-white/95 border-0 rounded-3xl px-6 py-6 text-gray-900 placeholder:text-gray-500 min-h-[120px] resize-none"
            />

            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                className="bg-white/95 border-0 mt-1"
              />
              <label htmlFor="consent" className="text-sm text-white/90 cursor-pointer">
                Я даю согласие на обработку персональных данных
              </label>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-6 rounded-full font-semibold text-base shadow-xl"
              >
                ОТПРАВИТЬ СООБЩЕНИЕ
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;