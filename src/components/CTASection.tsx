import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-heading font-bold text-4xl md:text-5xl mb-6 ${isVisible ? 'animate-scroll-in' : 'opacity-0'}`}>
          Готовы начать?
        </h2>
        <p className={`text-xl mb-8 opacity-90 ${isVisible ? 'animate-scroll-in-delay-1' : 'opacity-0'}`}>
          Присоединяйтесь к тысячам компаний, которые уже используют Битрикс24
        </p>
        <Button className={`bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 rounded-full font-semibold text-lg shadow-xl ${isVisible ? 'animate-scroll-in-delay-2' : 'opacity-0'}`}>
          Попробовать бесплатно
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;