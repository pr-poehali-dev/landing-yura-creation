import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import TariffModal from "@/components/TariffModal";

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [billingPeriod, setBillingPeriod] = useState<"month" | "year">("month");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState("");

  const plans = [
    {
      name: "Бесплатный",
      priceMonth: "0",
      priceYear: "0",
      description: "Для малых команд до 5 человек",
      iconUrl: "https://cdn.poehali.dev/files/3b204b2a-b201-43f8-b5f1-8302de3b5707.png",
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
        "Мобильное приложение",
      ],
      isFree: true,
    },
    {
      name: "Базовый",
      priceMonth: "2 490",
      priceYear: "1 990",
      description: "Для небольших команд",
      iconUrl: "https://cdn.poehali.dev/files/3b204b2a-b201-43f8-b5f1-8302de3b5707.png",
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
        "Техподдержка 24/7",
      ],
    },
    {
      name: "Стандартный",
      priceMonth: "6 990",
      priceYear: "5 990",
      popular: true,
      description: "Для растущих команд",
      iconUrl: "https://cdn.poehali.dev/files/1b090d13-b2ec-475c-878e-365c87d5995b.png",
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
        "Техподдержка с приоритетом",
      ],
    },
    {
      name: "ПРО",
      nameSmall: "фессиональный",
      priceMonth: "13 990",
      priceYear: "11 990",
      description: "Для больших команд",
      iconUrl: "https://cdn.poehali.dev/files/2787cc67-c2c0-4231-879e-512d039dbb98.png",
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
        "Персональный менеджер поддержки",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-[1460px] mx-auto">
        <h2
          className={`font-heading font-bold text-4xl md:text-5xl text-center mb-4 ${isVisible ? "animate-scroll-in" : "opacity-0"}`}
        >
          Тарифы
        </h2>
        <p
          className={`text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto ${isVisible ? "animate-scroll-in-delay-1" : "opacity-0"}`}
        >
          Выберите оптимальный план для вашего бизнеса
        </p>

        <div
          className={`flex justify-center mb-12 ${isVisible ? "animate-scroll-in-delay-1" : "opacity-0"}`}
        >
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("month")}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                billingPeriod === "month"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              На месяц
            </button>
            <button
              onClick={() => setBillingPeriod("year")}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                billingPeriod === "year"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <span className="hidden sm:inline">На год</span>
              <span className="sm:hidden">Год</span>
              <span className="ml-1 sm:ml-2 text-xs bg-green-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto items-start">
          {plans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            const isMobileExpanded = expandedMobileCard === index;
            const displayedFeaturesDesktop = isHovered
              ? plan.features
              : plan.features.slice(0, 5);
            const displayedFeaturesMobile = plan.features.slice(0, 5);
            const remainingFeaturesMobile = plan.features.slice(5);

            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-visible ${isVisible ? "animate-scroll-in-delay-2" : "opacity-0"} ${
                  plan.popular
                    ? "border-2 border-blue-300 bg-gradient-to-b from-blue-50 to-white shadow-xl"
                    : "border border-gray-200 bg-white shadow-md"
                } md:hover:shadow-2xl transition-all duration-300 rounded-3xl ${
                  isHovered ? "md:scale-110 md:z-10" : "scale-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Рекомендуем
                  </div>
                )}
                <CardContent className="p-8 pt-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <img src={plan.iconUrl} alt={plan.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-3 text-gray-900">
                    {plan.name}
                    {'nameSmall' in plan && <span className="text-base font-normal">{plan.nameSmall}</span>}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    {plan.isFree ? (
                      <>
                        <span className="text-5xl font-heading font-bold text-gray-900">
                          ₽0
                        </span>
                        <span className="text-gray-400 text-base ml-2">
                          /месяц
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-5xl font-heading font-bold text-gray-900">
                          ₽
                          {billingPeriod === "month"
                            ? plan.priceMonth
                            : plan.priceYear}
                        </span>
                        <span className="text-gray-400 text-base ml-2">
                          /месяц
                        </span>
                      </>
                    )}
                  </div>

                  <Button
                    onClick={() => {
                      setSelectedTariff(plan.name);
                      setModalOpen(true);
                    }}
                    className={`w-full py-4 rounded-2xl font-semibold mb-8 text-sm uppercase tracking-wide ${
                      plan.popular
                        ? "bg-blue-100 hover:bg-blue-200 text-gray-800"
                        : "bg-blue-50 hover:bg-blue-100 text-gray-800"
                    }`}
                  >
                    Выбрать тариф
                  </Button>

                  {/* Desktop: показываем с hover-эффектом */}
                  <ul className="space-y-4 hidden md:block">
                    {displayedFeaturesDesktop.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {!isHovered && plan.features.length > 5 && (
                      <li className="flex items-center gap-2 pt-2">
                        <Icon
                          name="ChevronDown"
                          size={16}
                          className="text-gray-400"
                        />
                        <span className="text-xs text-gray-400 italic">
                          Ещё {plan.features.length - 5} возможностей
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* Mobile: первые 5 + слайдер остальных */}
                  <div className="md:hidden">
                    <ul className="space-y-4 mb-4">
                      {displayedFeaturesMobile.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {remainingFeaturesMobile.length > 0 && (
                      <div>
                        <button
                          onClick={() => setExpandedMobileCard(isMobileExpanded ? null : index)}
                          className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-3"
                        >
                          <Icon 
                            name={isMobileExpanded ? "ChevronUp" : "ChevronDown"} 
                            size={16} 
                          />
                          {isMobileExpanded ? 'Скрыть' : `Ещё ${remainingFeaturesMobile.length} возможностей`}
                        </button>
                        
                        {isMobileExpanded && (
                          <ul className="space-y-4 animate-fade-in">
                            {remainingFeaturesMobile.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon name="Check" size={14} className="text-white" />
                                </div>
                                <span className="text-sm text-gray-600 leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <TariffModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tariffName={selectedTariff}
      />
    </section>
  );
};

export default PricingSection;