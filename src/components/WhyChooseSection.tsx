import Icon from "@/components/ui/icon";

const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1460px] mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[40px] px-8 md:px-16 py-16 text-white">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-white">
            Почему Выбирают Битрикс24?
          </h2>
          <p className="text-center text-white/90 text-lg mb-12 max-w-3xl mx-auto">
            Битрикс24 — это комплексное решение для управления бизнес-процессами,
            объединяющее CRM, задачи, документы, чаты и видеозвонки в единой системе.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">
                Для всей компании
              </h3>
              <p className="text-white/80 leading-relaxed">
                Подходит для всех отделов – от продаж до бухгалтерии. Интегрируйте все процессы в одной системе.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Cloud" size={40} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">
                Облачное решение
              </h3>
              <p className="text-white/80 leading-relaxed">
                Работайте из любой точки мира. Не требует установки и обслуживания серверов.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Smartphone" size={40} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">
                Мобильные приложения
              </h3>
              <p className="text-white/80 leading-relaxed">
                Полный функционал в мобильных приложениях для iOS и Android. Работайте в дороге.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;