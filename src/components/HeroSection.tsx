import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/5089df72-01d4-4dc5-9c9b-b594c380383d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="max-w-[1460px] mx-auto relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6">
            <span>ЛУЧШАЯ CRM В РОССИИ</span>
            <Icon name="Sparkles" size={20} />
          </div>
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-7xl text-center mb-6 animate-scale-in">
          Лучшая <span className="text-blue-600 relative inline-block px-4">
            CRM
            <img 
              src="https://cdn.poehali.dev/files/8dbe9fa5-1ce6-436a-b136-80125156b80c.png" 
              alt="" 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-auto"
            />
          </span> Система Для<br />Вашего Бизнеса
        </h1>

        <p className="text-center text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-fade-in">
          Битрикс24 помогает автоматизировать бизнес-процессы, увеличивать
          продажи и улучшать взаимодействие с клиентами
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 animate-fade-in">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all">
            ПОПРОБОВАТЬ БЕСПЛАТНО
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 px-8 py-6 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all"
          >
            ПОДРОБНЕЕ
          </Button>
        </div>

        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold text-sm mb-6">
            АВТОРИТЕТНЫЕ КОМПАНИИ ДОВЕРЯЮТ БИТРИКС24:
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          <div className="text-4xl font-bold text-gray-400">Forbes</div>
          <div className="text-4xl font-bold text-gray-400">PC</div>
          <div className="text-4xl font-bold text-gray-400">ЛАЙФХАКЕР</div>
          <div className="text-4xl font-bold text-gray-400">ITworld</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;