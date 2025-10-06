import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-0 md:pt-[70px] px-0 md:px-4">
        <nav className="w-full max-w-[1460px] bg-white/80 backdrop-blur-md border border-gray-200 md:rounded-[30px] shadow-lg">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="LayoutGrid" size={20} className="text-white" />
                </div>
                <span className="font-heading font-bold text-lg text-gray-900">
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

              <div className="flex items-center gap-4">
                <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold shadow-lg">
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
            Лучшая <span className="text-blue-600 relative">
              CRM
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
              </svg>
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

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1460px] mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
            Возможности
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Всё необходимое для эффективного управления бизнесом
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Zap",
                title: "Скорость",
                description: "Быстрая обработка заявок и автоматизация процессов"
              },
              {
                icon: "TrendingUp",
                title: "Аналитика",
                description: "Детальная статистика и отчеты по всем направлениям"
              },
              {
                icon: "Settings",
                title: "Настройка",
                description: "Гибкая кастомизация под ваши бизнес-процессы"
              },
              {
                icon: "Users",
                title: "Команда",
                description: "Эффективная коммуникация и совместная работа"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name={feature.icon} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1460px] mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
            Тарифы
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Выберите оптимальный план для вашего бизнеса
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "1 990",
                features: [
                  "До 5 пользователей",
                  "Базовая CRM",
                  "Email поддержка",
                  "5 ГБ хранилище"
                ]
              },
              {
                name: "Профессиональный",
                price: "4 990",
                popular: true,
                features: [
                  "До 50 пользователей",
                  "Полная CRM + автоматизация",
                  "Приоритетная поддержка",
                  "100 ГБ хранилище"
                ]
              },
              {
                name: "Корпоративный",
                price: "9 990",
                features: [
                  "Неограниченно пользователей",
                  "Все возможности + API",
                  "Персональный менеджер",
                  "1 ТБ хранилище"
                ]
              }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl scale-105"
                    : "border-gray-200 shadow-lg"
                } hover:shadow-xl transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-heading font-bold">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">₽/мес</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon
                          name="Check"
                          size={20}
                          className="text-green-600 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-6 rounded-full font-semibold ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1460px] mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
            Отзывы
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Иванов",
                role: "CEO, Tech Solutions",
                text: "Битрикс24 полностью изменил наш подход к работе с клиентами. Продажи выросли на 40% за первые 3 месяца.",
                rating: 5
              },
              {
                name: "Мария Петрова",
                role: "Директор по маркетингу",
                text: "Отличная система для автоматизации. Особенно нравится аналитика и интеграции с другими сервисами.",
                rating: 5
              },
              {
                name: "Дмитрий Смирнов",
                role: "Владелец бизнеса",
                text: "Удобный интерфейс, быстрая поддержка. Рекомендую всем, кто хочет масштабировать бизнес.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16">
            Вопросы и ответы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Как быстро можно начать работу с системой?",
                a: "Регистрация занимает 2 минуты. После этого вы сразу получаете доступ ко всем функциям выбранного тарифа."
              },
              {
                q: "Есть ли бесплатный период?",
                a: "Да, мы предоставляем 30-дневный бесплатный пробный период для всех новых пользователей."
              },
              {
                q: "Можно ли интегрировать с другими сервисами?",
                a: "Битрикс24 поддерживает интеграцию с более чем 100 популярными сервисами через API и готовые коннекторы."
              },
              {
                q: "Какая поддержка предоставляется?",
                a: "Мы предоставляем техническую поддержку 24/7 через email, чат и телефон. Для корпоративных клиентов - персональный менеджер."
              }
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-2xl px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам компаний, которые уже используют Битрикс24
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 rounded-full font-semibold text-lg shadow-xl">
            Попробовать бесплатно
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

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
    </div>
  );
};

export default Index;