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
              className={`relative border-2 ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'} ${
                plan.popular
                  ? "border-blue-600 shadow-2xl scale-105"
                  : "border-gray-200 shadow-lg"
              } hover:shadow-xl transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-heading font-bold">
                    {subscriptionType === "new" ? plan.priceNew : plan.priceRenewal}
                  </span>
                  <span className="text-gray-600 ml-2">₽/мес</span>
                </div>
                
                {subscriptionType === "renewal" && (
                  <button
                    onClick={() => toggleMarketSubscription(index)}
                    className={`flex items-center gap-3 mb-4 p-3 rounded-lg border-2 transition-all w-full ${
                      marketSubscriptions[index]
                        ? "bg-blue-50 border-blue-600"
                        : "bg-gray-50 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      marketSubscriptions[index]
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-400"
                    }`}>
                      {marketSubscriptions[index] && (
                        <Icon name="Check" size={14} className="text-white" />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      marketSubscriptions[index] ? "text-blue-700" : "text-gray-700"
                    }`}>
                      Подписка на Маркет
                    </span>
                  </button>
                )}
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-6 rounded-full font-semibold ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;