import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "Как быстро можно начать работу с системой?",
      a: "Регистрация занимает 2 минуты. После этого вы сразу получаете доступ ко всем функциям выбранного тарифа."
    },
    {
      q: "Есть ли бесплатный период?",
      a: "Да, мы предоставляем 30-дневный бесплатный пробный период для всех новых пользователей."
    },
    {
      q: "Можно ли интегрировать с другими сервисами?",
      a: "Битрикс24 поддерживает интеграцию с более чем 100 популярными сервисами через API и готовые коннекторы."
    },
    {
      q: "Какая поддержка предоставляется?",
      a: "Мы предоставляем техническую поддержку 24/7 через email, чат и телефон. Для корпоративных клиентов - персональный менеджер."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          Вопросы и ответы
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-gray-200 rounded-2xl px-6 bg-white"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;