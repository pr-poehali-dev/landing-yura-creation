import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Скорость",
      description: "Быстрая обработка заявок и автоматизация процессов"
    },
    {
      icon: "TrendingUp",
      title: "Аналитика",
      description: "Детальная статистика и отчеты по всем направлениям"
    },
    {
      icon: "Settings",
      title: "Настройка",
      description: "Гибкая кастомизация под ваши бизнес-процессы"
    },
    {
      icon: "Users",
      title: "Команда",
      description: "Эффективная коммуникация и совместная работа"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
          Возможности
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Всё необходимое для эффективного управления бизнесом
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon} size={32} className="text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;