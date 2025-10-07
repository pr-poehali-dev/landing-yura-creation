import Icon from "@/components/ui/icon";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/c857b3d6-aebf-4ad0-afad-3b5aed8530cb.png" 
                alt="ЦАВ - Центр автоматизаций и внедрений" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Центр автоматизаций и внедрений
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  О сервисе
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">
                  Тарифы
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("capabilities")} className="hover:text-white transition-colors">
                  Возможности
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:ivanickiy@centerai.tech" className="hover:text-white transition-colors">
                  ivanickiy@centerai.tech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79582400010" className="hover:text-white transition-colors">
                  +7 958 240-00-10
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <div className="text-xs leading-relaxed">
                  <p className="font-semibold text-gray-300 mb-1">ООО "Молотов траст"</p>
                  <p>ИНН/КПП: 5906060110/590401001</p>
                  <p>ОГРН: 1045901011860</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2024 ЦАВ - Центр автоматизаций и внедрений. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;