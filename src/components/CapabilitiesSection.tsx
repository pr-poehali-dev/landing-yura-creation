import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Icon from "@/components/ui/icon";

const CapabilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const capabilities = [
    {
      iconUrl: "https://cdn.poehali.dev/files/aaa41dd3-9007-4942-ba60-e2a8190df158.png",
      title: "CRM и продажи",
      description: "Управляйте воронкой продаж, автоматизируйте бизнес-процессы, анализируйте эффективность менеджеров."
    },
    {
      iconUrl: "https://cdn.poehali.dev/files/8e50949b-fffa-4dfa-b288-c4b23ed8f172.png",
      title: "Задачи и проекты",
      description: "Гибкое управление задачами, контроль сроков, автоматизация бизнес-процессов, канбан-доски и диаграммы Ганта."
    },
    {
      iconUrl: "https://cdn.poehali.dev/files/3d674af2-eaa9-4b9d-be8c-ce6f4783435d.png",
      title: "Коммуникации",
      description: "Корпоративный чат, видеозвонки, рабочие группы, интеграция с почтой и соцсетями."
    },
    {
      iconUrl: "https://cdn.poehali.dev/files/f0f9b68e-ca9a-47d6-adb9-fb7789e0f51d.png",
      title: "Документы",
      description: "Облачное хранилище документов с совместным доступом, версионирование и история изменений."
    },
    {
      iconUrl: "https://cdn.poehali.dev/files/2d1e5244-9a6a-48ff-9927-cedb975c94ae.png",
      title: "Телефония",
      description: "Виртуальная АТС, звонки через интернет, запись разговоров и аналитика входящих/исходящих звонков."
    },
    {
      iconUrl: "https://cdn.poehali.dev/files/aaa41dd3-9007-4942-ba60-e2a8190df158.png",
      title: "Аналитика",
      description: "Мощные бизнес-аналитические отчеты, KPI сотрудников, анализ воронки продаж и эффективности рекламы."
    }
  ];

  return (
    <section ref={ref} id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1460px] mx-auto">
        <h2 className={`font-heading font-bold text-3xl md:text-4xl text-center mb-3 text-gray-900 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Возможности Сервиса
        </h2>
        <p className={`text-center text-gray-500 text-base mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Все инструменты для эффективного управления бизнесом в одной системе
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`bg-gray-50/60 rounded-xl p-8 hover:bg-gray-100/60 transition-all duration-300 ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}
            >
              <div className="mb-5">
                <img src={capability.iconUrl} alt={capability.title} className="w-12 h-12" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-gray-900">
                {capability.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;