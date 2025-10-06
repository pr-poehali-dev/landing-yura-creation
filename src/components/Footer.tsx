import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1460px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="LayoutGrid" size={20} className="text-white" />
              </div>
              <span className="font-heading font-bold">BITRIX24 Партнер</span>
            </div>
            <p className="text-gray-400 text-sm">
              Официальный партнер Битрикс24 в России
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>О сервисе</li>
              <li>Тарифы</li>
              <li>Возможности</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Документация</li>
              <li>FAQ</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@bitrix24.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2024 BITRIX24 Партнер. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;