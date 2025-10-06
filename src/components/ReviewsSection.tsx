import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Александр Иванов",
      role: "CEO, Tech Solutions",
      text: "Битрикс24 полностью изменил наш подход к работе с клиентами. Продажи выросли на 40% за первые 3 месяца.",
      rating: 5
    },
    {
      name: "Мария Петрова",
      role: "Директор по маркетингу",
      text: "Отличная система для автоматизации. Особенно нравится аналитика и интеграции с другими сервисами.",
      rating: 5
    },
    {
      name: "Дмитрий Смирнов",
      role: "Владелец бизнеса",
      text: "Удобный интерфейс, быстрая поддержка. Рекомендую всем, кто хочет масштабировать бизнес.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Отзывы
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;