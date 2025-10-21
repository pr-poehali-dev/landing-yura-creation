import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative pt-20 md:pt-[32rem] pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-visible min-h-screen md:min-h-0 flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/5089df72-01d4-4dc5-9c9b-b594c380383d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%'
        }}
      />
      <div className="max-w-[1460px] mx-auto relative z-10 w-full">
        <div className="text-center mb-4 md:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs md:text-base mb-3 md:mb-6">
            <span>ЛУЧШЕЕ РЕШЕНИЕ КОРПОРАТИВНОГО ПОРТАЛА В РОССИИ</span>
            <Icon name="Sparkles" size={16} className="md:w-5 md:h-5" />
          </div>
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-7xl text-center mb-4 md:mb-6 animate-scale-in leading-tight">
          Лучшая <span className="text-blue-600 relative inline-block px-2 md:px-4">
            <img 
              src="https://cdn.poehali.dev/files/8dbe9fa5-1ce6-436a-b136-80125156b80c.png" 
              alt="" 
              className="absolute -bottom-2 md:-bottom-4 left-1/2 w-[120%] h-auto -z-10 animate-float"
            />
            <span className="relative z-10">CRM</span>
          </span><br className="md:hidden" /> Система Для<br />Бизнеса
        </h1>

        <p className="text-center text-gray-600 text-sm md:text-xl max-w-xs md:max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in leading-relaxed">
          Битрикс24 помогает автоматизировать бизнес-процессы, увеличивать продажи и улучшать взаимодействие с клиентами
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-20 animate-fade-in">
          <Button 
            onClick={() => scrollToSection("pricing")}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold text-sm md:text-lg shadow-xl hover:shadow-2xl transition-all uppercase"
          >
            ВЫБРАТЬ ТАРИФ
            <Icon name="ArrowRight" size={18} className="ml-2 md:w-5 md:h-5" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("why-choose")}
            className="w-full md:w-auto border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold text-sm md:text-lg hover:bg-gray-900 hover:text-white transition-all uppercase"
          >
            ПОДРОБНЕЕ
          </Button>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <p className="text-blue-600 font-semibold text-xs md:text-sm mb-4 md:mb-6">
            АВТОРИТЕТНЫЕ КОМПАНИИ<br className="md:hidden" /> ДОВЕРЯЮТ БИТРИКС24:
          </p>
        </div>

        <div className="hidden md:flex md:flex-wrap items-center justify-center gap-12 opacity-60">
          <img src="https://cdn.poehali.dev/files/3e7b1363-d0d1-4f12-9644-94da7a9ea465.png" alt="Forbes" className="h-8 object-contain grayscale" />
          <img src="https://cdn.poehali.dev/files/922771ca-9697-401c-91c1-ed264b71b559.png" alt="PC" className="h-8 object-contain grayscale" />
          <img src="https://cdn.poehali.dev/files/ca20920e-4234-4e3d-ac24-344f6b285b1d.png" alt="Лайфхакер" className="h-8 object-contain grayscale" />
          <img src="https://cdn.poehali.dev/files/d531be2e-5a7f-4cc2-869a-7b698164a5bd.png" alt="ITworld" className="h-8 object-contain grayscale" />
        </div>

        <div className="md:hidden relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            <img src="https://cdn.poehali.dev/files/3e7b1363-d0d1-4f12-9644-94da7a9ea465.png" alt="Forbes" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/922771ca-9697-401c-91c1-ed264b71b559.png" alt="PC" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/ca20920e-4234-4e3d-ac24-344f6b285b1d.png" alt="Лайфхакер" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/d531be2e-5a7f-4cc2-869a-7b698164a5bd.png" alt="ITworld" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/3e7b1363-d0d1-4f12-9644-94da7a9ea465.png" alt="Forbes" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/922771ca-9697-401c-91c1-ed264b71b559.png" alt="PC" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/ca20920e-4234-4e3d-ac24-344f6b285b1d.png" alt="Лайфхакер" className="h-6 object-contain grayscale opacity-60" />
            <img src="https://cdn.poehali.dev/files/d531be2e-5a7f-4cc2-869a-7b698164a5bd.png" alt="ITworld" className="h-6 object-contain grayscale opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;