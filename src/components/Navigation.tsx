import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-0 md:pt-[70px] px-0 md:px-4 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className={`w-full max-w-[1460px] bg-white/80 backdrop-blur-md border border-gray-200 md:rounded-full shadow-lg transition-all duration-300 ${scrolled ? 'md:scale-95' : 'md:scale-100'}`}>
        <div className="px-4 sm:px-6 lg:px-[28px]">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 sm:gap-3 bg-blue-100 px-3 sm:px-6 py-2 sm:py-4 rounded-full -ml-2 sm:-ml-5">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="LayoutGrid" size={16} className="text-white sm:w-5 sm:h-5" />
              </div>
              <span className="font-heading font-bold text-sm sm:text-lg text-gray-900 whitespace-nowrap">
                BITRIX24 Партнер
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8 mx-[10px]">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                О сервисе
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Тарифы
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Возможности
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Контакты
              </button>
            </div>

            <div className="flex items-center gap-4 -mr-5">
              <Button className="hidden md:flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 rounded-full font-semibold shadow-lg">
                Купить подписку
              </Button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Меню"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl animate-fade-in">
          <div className="max-w-[1460px] mx-auto px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
            >
              О сервисе
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
            >
              Возможности
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
            >
              Контакты
            </button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold shadow-lg">
              Купить подписку
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;