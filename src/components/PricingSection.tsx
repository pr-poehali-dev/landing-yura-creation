import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");
  
  const plans = [
    {
      name: "Бесплатный",
      priceMonth: "0",
      priceYear: "0",
      description: "Для малых команд до 5 человек",
      features: [
        "До 5 пользователей",
        "5 ГБ в облаке",
        "CRM: воронка продаж, компании, контакты",
        "Задачи и проекты: канбан, список, календарь",
        "Чаты, видеозвонки до 4 участников",
        "Диск и документы онлайн",
        "Лента новостей компании",
        "Календарь событий",
        "База знаний",
        "Мобильное приложение"
      ],
      isFree: true
    },
    {
      name: "Базовый",
      priceMonth: "2 490",
      priceYear: "1 990",
      description: "Для небольших команд",
      features: [
        "До 5 пользователей",
        "24 ГБ в облаке",
        "CRM + лидогенерация через формы",
        "Автоматизация продаж (роботы)",
        "Задачи и проекты с диаграммой Ганта",
        "Контакт-центр: email, телефония",
        "Конструктор сайтов и магазинов",
        "Видеозвонки до 24 участников",
        "Онлайн-документы и совместная работа",
        "CRM-аналитика и отчеты",
        "Интеграция с 1С",
        "Техподдержка 24/7"
      ]
    },
    {
      name: "Стандартный",
      priceMonth: "5 990",
      priceYear: "3 990",
      popular: true,
      description: "Для растущих команд",
      features: [
        "До 50 пользователей",
        "100 ГБ в облаке",
        "CRM + автоматизация + аналитика BI",
        "Интернет-магазин с приёмом оплаты",
        "Маркетинг: рассылки, сегментация, триггеры",
        "Продажи через соцсети и мессенджеры",
        "HR и рекрутинг: вакансии, резюме",
        "Видеозвонки до 48 участников",
        "Бизнес-процессы и автоматизация",
        "Права доступа и роли",
        "Отчёты по сотрудникам",
        "Интеграция с сервисами",
        "Техподдержка с приоритетом"
      ]
    },
    {
      name: "Профессиональный",
      priceMonth: "11 990",
      priceYear: "7 990",
      description: "Для больших команд",
      features: [
        "До 100 пользователей",
        "1 ТБ в облаке",
        "Все возможности Стандартного",
        "Расширенная CRM-аналитика",
        "Скрипты продаж и контроль качества",
        "Бизнес-процессы любой сложности",
        "Продажи через мессенджеры (WhatsApp, Telegram)",
        "Видеозвонки до 102 участников",
        "Аналитика и BI-конструктор",
        "Администрирование и безопасность",
        "Управление структурой компании",
        "API и веб-хуки для интеграций",
        "Персональный менеджер поддержки"
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
              onClick={() => setBillingPeriod("month")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                billingPeriod === "month"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              На месяц
            </button>
            <button
              onClick={() => setBillingPeriod("year")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                billingPeriod === "year"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              На год
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-33%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
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
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    plan.popular ? "bg-blue-500" : plan.isFree ? "bg-green-100" : "bg-blue-100"
                  }`}>
                    <Icon 
                      name={plan.isFree ? "Gift" : index === 1 ? "User" : index === 2 ? "Users" : "Rocket"} 
                      size={24} 
                      className={plan.popular ? "text-white" : plan.isFree ? "text-green-600" : "text-blue-600"} 
                    />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="mb-6">
                  {plan.isFree ? (
                    <span className="text-4xl font-heading font-bold text-green-600">
                      Бесплатно
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-heading font-bold text-gray-900">
                        ₽{billingPeriod === "month" ? plan.priceMonth : plan.priceYear}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">/мес</span>
                    </>
                  )}
                  {!plan.isFree && billingPeriod === "year" && (
                    <div className="text-xs text-gray-500 mt-1">
                      ₽{plan.priceYear} × 12 мес = ₽{(parseInt(plan.priceYear.replace(/\s/g, '')) * 12).toLocaleString('ru-RU')}
                    </div>
                  )}
                </div>
                
                <Button
                  className={`w-full py-4 rounded-xl font-semibold mb-6 ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : plan.isFree
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-50 hover:bg-blue-100 text-gray-800"
                  }`}
                >
                  {plan.isFree ? "НАЧАТЬ БЕСПЛАТНО" : "ВЫБРАТЬ ТАРИФ"}
                </Button>
                
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