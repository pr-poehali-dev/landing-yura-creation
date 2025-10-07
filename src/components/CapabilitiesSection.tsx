import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CapabilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const capabilities = [
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/1.webp.webp?1709719053105799",
      title: "CRM и управление продажами",
      description: "Собирайте заявки со всех каналов: формы на сайте, онлайн-чаты, телефонные звонки и соцсети. Контакты, вся переписка и записи разговоров сохранятся в CRM."
    },
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/2.webp.webp?170971905352607",
      title: "Автоматизация продаж",
      description: "Десятки роботов для автоматизации продаж и маркетинга сэкономят ваше время и деньги. Настройте автоматические напоминания, рассылки и обработку заявок."
    },
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/3.webp.webp?170971905369464",
      title: "Задачи и проекты",
      description: "Выбирайте удобный режим работы с проектами, назначайте ответственных, используйте чек-листы и шаблоны регулярных задач. Используйте списки, диаграмму Ганта, календарь."
    },
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/4.webp.webp?170971905314419",
      title: "Коммуникации и совместная работа",
      description: "Корпоративный чат, видеозвонки, рабочие группы. Живая лента для обмена новостями. Все коммуникации в едином пространстве для максимальной эффективности."
    },
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/5.webp.webp?170971905387046",
      title: "Сайты и интернет-магазины",
      description: "Создайте свой сайт, используя готовые блоки и шаблоны. Подключите онлайн-чат и собирайте заявки от клиентов! Сайт создается внутри CRM и не требует интеграции."
    },
    {
      image: "https://www.bitrix24.ru/upload/optimizer/converted/bitrix/images/landing/business/images/b24__CRM_promo_icons/6.webp.webp?170971905315524",
      title: "Документы и диск",
      description: "Облачное хранилище данных с возможностью совместной работы над документами. Интеграция с Google Drive, OneDrive и Dropbox. Работа офлайн и онлайн."
    }
  ];

  return (
    <section ref={ref} id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1460px] mx-auto">
        <h2 className={`font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-gray-900 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Возможности Битрикс24
        </h2>
        <p className={`text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Единая платформа для организации работы всей компании. Вместо десятков сервисов — все инструменты в одном месте
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img 
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-gray-900">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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