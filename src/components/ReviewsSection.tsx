import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const reviews = [
    {
      name: "Анна К.",
      role: "Директор по продажам, ООО \"Ромашка\"",
      text: "Битрикс24 полностью изменил нашу работу с клиентами. Воронка продаж стала прозрачной, а анализ эффективности маркетинга - очень наглядным. Рекомендую!",
      avatar: "https://cdn.poehali.dev/files/ca30b87a-badf-46e4-b534-e2cd1da5b845.png",
      featured: false
    },
    {
      name: "Иван П.",
      role: "Руководитель проекта, IT-компания",
      text: "Отличный инструмент для управления командой. Особенно нравятся канбан-доски и интеграция всех процессов. Увеличили скорость выполнения задач на 30%.",
      avatar: "https://cdn.poehali.dev/files/ca30b87a-badf-46e4-b534-e2cd1da5b845.png",
      featured: true
    },
    {
      name: "Елена М.",
      role: "Владелец бизнеса, интернет-магазин",
      text: "CRM Битрикс24 помогла нам систематизировать клиентскую базу и автоматизировала многие рутинные процессы. Теперь у нас больше времени на работу с клиентами!",
      avatar: "https://cdn.poehali.dev/files/ca30b87a-badf-46e4-b534-e2cd1da5b845.png",
      featured: false
    }
  ];

  return (
    <section ref={ref} id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1460px] mx-auto">
        <h2 className={`font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-gray-800 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Отзывы Наших Клиентов
        </h2>
        <p className={`text-center text-gray-600 mb-16 max-w-2xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Узнайте, что говорят о Битрикс24 компании, которые уже используют эту систему
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className={`border-0 rounded-3xl overflow-hidden ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'} ${
                review.featured 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl transform md:scale-105' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-white/20">
                    <Icon 
                      name="User" 
                      size={40} 
                      className={`w-full h-full p-4 ${review.featured ? 'text-white bg-white/20' : 'text-blue-600 bg-blue-100'}`} 
                    />
                  </div>
                  <h3 className={`font-heading font-bold text-xl mb-1 ${review.featured ? 'text-white' : 'text-gray-900'}`}>
                    {review.name}
                  </h3>
                  <p className={`text-sm ${review.featured ? 'text-white/80' : 'text-gray-600'}`}>
                    {review.role}
                  </p>
                </div>
                <p className={`leading-relaxed text-center ${review.featured ? 'text-white/95' : 'text-gray-700'}`}>
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;