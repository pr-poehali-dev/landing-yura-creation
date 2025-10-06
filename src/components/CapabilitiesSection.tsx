import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CapabilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const capabilities = [
    {
      icon: "Filter",
      title: "CRM и продажи",
      description: "Управляйте воронкой продаж, автоматизируйте бизнес-процессы, анализируйте эффективность менеджеров."
    },
    {
      icon: "LayoutGrid",
      title: "Задачи и проекты",
      description: "Гибкое управление задачами, контроль сроков, автоматизация бизнес-процессов, канбан-доски и диаграммы Ганта."
    },
    {
      icon: "MessageSquare",
      title: "Коммуникации",
      description: "Корпоративный чат, видеозвонки, рабочие группы, интеграция с почтой и соцсетями."
    },
    {
      icon: "FileText",
      title: "Документы",
      description: "Облачное хранилище документов с совместным доступом, версионирование и история изменений."
    },
    {
      icon: "Phone",
      title: "Телефония",
      description: "Виртуальная АТС, звонки через интернет, запись разговоров и аналитика входящих/исходящих звонков."
    },
    {
      icon: "PieChart",
      title: "Аналитика",
      description: "Мощные бизнес-аналитические отчеты, KPI сотрудников, анализ воронки продаж и эффективности рекламы."
    }
  ];

  return (
    <section ref={ref} id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1460px] mx-auto">
        <h2 className={`font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-gray-800 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Возможности Сервиса
        </h2>
        <p className={`text-center text-gray-600 mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Все инструменты для эффективного управления бизнесом в одной системе
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card 
              key={index} 
              className={`border-0 bg-gray-50 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={capability.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
