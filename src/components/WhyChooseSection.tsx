import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
      <div className="max-w-[1460px] mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[40px] px-8 md:px-16 py-16 text-white relative overflow-hidden">
          {/* Hexagonal grid pattern - decorative honeycomb */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="120" height="104" patternUnits="userSpaceOnUse">
                {/* Main hexagons with varied opacity */}
                <polygon points="60,0 105,26 105,78 60,104 15,78 15,26" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                <polygon points="0,52 45,26 45,78 0,104 -45,78 -45,26" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <polygon points="120,52 165,26 165,78 120,104 75,78 75,26" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                {/* Small accent hexagons */}
                <polygon points="30,78 45,70 45,86 30,94 15,86 15,70" fill="rgba(255,255,255,0.25)" stroke="none"/>
                <polygon points="90,26 105,18 105,34 90,42 75,34 75,18" fill="rgba(255,255,255,0.2)" stroke="none"/>
                {/* Decorative circles */}
                <circle cx="60" cy="52" r="3" fill="rgba(255,255,255,0.3)"/>
                <circle cx="105" cy="26" r="2" fill="rgba(255,255,255,0.2)"/>
                <circle cx="15" cy="78" r="2.5" fill="rgba(255,255,255,0.25)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
          
          <div className="relative z-10">
          <h2 className={`font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-white ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
            Почему Выбирают Битрикс24?
          </h2>
          <p className={`text-center text-white/90 text-lg mb-12 max-w-3xl mx-auto ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
            Битрикс24 — это комплексное решение для управления бизнес-процессами,
            объединяющее CRM, задачи, документы, чаты и видеозвонки в единой системе.
          </p>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className={`text-center ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
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

            <div className={`text-center ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
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

            <div className={`text-center ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
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
      </div>
    </section>
  );
};

export default WhyChooseSection;