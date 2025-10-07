import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section ref={ref} id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
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
          
          {/* Animated sparkle corners */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-white/40 rounded-full animate-sparkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-[25%] left-[22%] w-1.5 h-1.5 bg-white/50 rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-[45%] left-[12%] w-2.5 h-2.5 bg-white/35 rounded-full animate-sparkle" style={{ animationDelay: '2.4s' }}></div>
            <div className="absolute top-[65%] left-[18%] w-1 h-1 bg-white/60 rounded-full animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
            
            <div className="absolute top-[20%] right-[15%] w-2 h-2 bg-white/45 rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute top-[38%] right-[8%] w-1.5 h-1.5 bg-white/40 rounded-full animate-sparkle" style={{ animationDelay: '2.1s' }}></div>
            <div className="absolute top-[58%] right-[20%] w-2.5 h-2.5 bg-white/30 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[75%] right-[12%] w-1.5 h-1.5 bg-white/55 rounded-full animate-sparkle" style={{ animationDelay: '2.8s' }}></div>
            
            <div className="absolute top-[10%] left-[45%] w-1 h-1 bg-white/50 rounded-full animate-sparkle" style={{ animationDelay: '1.6s' }}></div>
            <div className="absolute top-[70%] left-[55%] w-2 h-2 bg-white/40 rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-[32%] left-[62%] w-1.5 h-1.5 bg-white/45 rounded-full animate-sparkle" style={{ animationDelay: '2.6s' }}></div>
            <div className="absolute top-[85%] left-[35%] w-2 h-2 bg-white/35 rounded-full animate-sparkle" style={{ animationDelay: '1.1s' }}></div>
          </div>
          
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
              <div className="flex items-center justify-center mx-auto mb-6">
                <img src="https://cdn.poehali.dev/files/1a040f83-8a4f-4634-86ca-fed5f97d7d52.png" alt="Для всей компании" className="w-16 h-16" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">
                Для всей компании
              </h3>
              <p className="text-white/80 leading-relaxed">
                Подходит для всех отделов – от продаж до бухгалтерии. Интегрируйте все процессы в одной системе.
              </p>
            </div>

            <div className={`text-center ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
              <div className="flex items-center justify-center mx-auto mb-6">
                <img src="https://cdn.poehali.dev/files/faebe2d9-ee5c-4a7b-8afa-abc5d3dbc830.png" alt="Облачное решение" className="w-16 h-16" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-white">
                Облачное решение
              </h3>
              <p className="text-white/80 leading-relaxed">
                Работайте из любой точки мира. Не требует установки и обслуживания серверов.
              </p>
            </div>

            <div className={`text-center ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
              <div className="flex items-center justify-center mx-auto mb-6">
                <img src="https://cdn.poehali.dev/files/3818dc4b-bc3b-41ca-863c-5ede2f12bbe5.png" alt="Мобильные приложения" className="w-16 h-16" />
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