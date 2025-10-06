import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1460px] mx-auto">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
          О сервисе
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Битрикс24 — это комплексная CRM-система, которая объединяет все
              инструменты для успешного ведения бизнеса в одном месте.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы помогаем компаниям автоматизировать работу с клиентами,
              управлять проектами, координировать команду и увеличивать
              продажи.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-12 text-center">
            <Icon name="Building2" size={80} className="text-blue-600 mx-auto mb-6" />
            <p className="text-2xl font-heading font-bold text-gray-900">
              10,000+ компаний доверяют нам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;