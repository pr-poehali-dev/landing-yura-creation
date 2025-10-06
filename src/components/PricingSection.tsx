import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [subscriptionType, setSubscriptionType] = useState<"new" | "renewal">("new");
  const [marketSubscriptions, setMarketSubscriptions] = useState<{[key: number]: boolean}>({});
  
  const toggleMarketSubscription = (index: number) => {
    setMarketSubscriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const plans = [
    {
      name: "Базовый",
      priceNew: "1 990",
      priceRenewal: "1 490",
      features: [
        "До 5 пользователей",
        "Базовая CRM",
        "Email поддержка",
        "5 ГБ хранилище"
      ]
    },
    {
      name: "Профессиональный",
      priceNew: "4 990",
      priceRenewal: "3 990",
      popular: true,
      features: [
        "До 50 пользователей",
        "Полная CRM + автоматизация",
        "Приоритетная поддержка",
        "100 ГБ хранилище"
      ]
    },
    {
      name: "Корпоративный",
      priceNew: "9 990",
      priceRenewal: "7 990",
      features: [
        "Неограниченно пользователей",
        "Все возможности + API",
        "Персональный менеджер",
        "1 ТБ хранилище"
      ]
    }
  ];

  return (
    <section ref={ref} id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1460px] mx-auto">
        <h2 className={`font-heading font-bold text-4xl md:text-5xl text-center mb-4 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Тарифы
        </h2>
        <p className={`text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Выберите оптимальный план для вашего бизнеса
        </p>

        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setSubscriptionType("new")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                subscriptionType === "new"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Новая подписка
            </button>
            <button
              onClick={() => setSubscriptionType("renewal")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                subscriptionType === "renewal"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Продление подписки
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'} ${
                plan.popular
                  ? "border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-white shadow-2xl scale-105"
                  : "border border-gray-200 bg-white shadow-lg"
              } hover:shadow-xl transition-all rounded-3xl`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-semibold">
                  Рекомендуем
                </div>
              )}
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    plan.popular ? "bg-blue-500" : "bg-blue-100"
                  }`}>
                    <Icon name={index === 0 ? "User" : index === 1 ? "Rocket" : "Building2"} size={24} className={plan.popular ? "text-white" : "text-blue-600"} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {index === 0 ? "Для одиночных пользователей Битрикс24" : index === 1 ? "Отлично подходит для развивающихся агентств и команд, которым нужны удобные инструменты" : "Индивидуальные решения для больших команд и организаций, использующих Битрикс24"}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-gray-900">
                    ₽{subscriptionType === "new" ? plan.priceNew : plan.priceRenewal}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">/месяц</span>
                </div>
                
                <Button
                  className={`w-full py-4 rounded-xl font-semibold mb-6 ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-50 hover:bg-blue-100 text-gray-800"
                  }`}
                >
                  ВЫБРАТЬ ТАРИФ
                </Button>
                
                {subscriptionType === "renewal" && (
                  <button
                    onClick={() => toggleMarketSubscription(index)}
                    className={`flex items-center gap-3 mb-6 p-3 rounded-lg transition-all w-full ${
                      marketSubscriptions[index]
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      marketSubscriptions[index]
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-300"
                    }`}>
                      {marketSubscriptions[index] && (
                        <Icon name="Check" size={14} className="text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Подписка на Маркет
                    </span>
                  </button>
                )}
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={18}
                        className="text-blue-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;