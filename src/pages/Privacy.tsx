import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            На главную
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="font-heading font-bold text-4xl mb-8 text-gray-900">
            Политика конфиденциальности
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                1. Общие положения
              </h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении 
                всей информации, которую сайт <strong>AASBX24</strong>, расположенный на доменном имени 
                aasbx24.ru, может получить о Пользователе во время использования сайта.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой 
                и указанными в ней условиями обработки его персональной информации.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                2. Персональная информация пользователей
              </h2>
              <p className="mb-4">
                В рамках настоящей Политики под «персональной информацией Пользователя» понимаются:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Персональные данные, предоставленные Пользователем самостоятельно при заполнении форм 
                  обратной связи, включая ФИО, телефон, email, название организации.
                </li>
                <li>
                  Данные, которые автоматически передаются в процессе использования сайта с помощью 
                  программного обеспечения, включая IP-адрес, информацию из cookies, информацию о 
                  браузере, время доступа, адрес запрашиваемой страницы.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                3. Цели обработки персональной информации
              </h2>
              <p className="mb-4">
                Мы собираем и обрабатываем персональные данные Пользователей для следующих целей:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связь с Пользователем для обработки запросов и заявок</li>
                <li>Предоставление информации о продуктах и услугах</li>
                <li>Улучшение качества обслуживания и работы сайта</li>
                <li>Проведение статистических и маркетинговых исследований</li>
                <li>Таргетирование рекламных материалов</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                4. Условия обработки персональной информации
              </h2>
              <p className="mb-4">
                Обработка персональных данных Пользователя осуществляется в соответствии с 
                законодательством Российской Федерации:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Федеральный закон №152-ФЗ «О персональных данных» от 27.07.2006</li>
                <li>Изменения согласно поправкам от 01.09.2025</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                5. Использование cookies
              </h2>
              <p className="mb-4">
                Сайт использует cookie-файлы для:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Хранения информации о согласии на обработку персональных данных</li>
                <li>Сбора статистики посещаемости сайта</li>
                <li>Улучшения функционирования сайта</li>
                <li>Аналитики поведения пользователей (Яндекс.Метрика)</li>
              </ul>
              <p>
                Пользователь может отключить cookies в настройках браузера, однако это может 
                повлиять на функциональность сайта.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                6. Меры защиты персональной информации
              </h2>
              <p className="mb-4">
                Мы принимаем необходимые организационные и технические меры для защиты 
                персональной информации Пользователя от неправомерного доступа, уничтожения, 
                изменения, блокирования, копирования, распространения:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Использование шифрования данных (SSL/TLS)</li>
                <li>Ограничение доступа к персональным данным</li>
                <li>Регулярное резервное копирование</li>
                <li>Контроль за действиями сотрудников</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                7. Передача персональных данных третьим лицам
              </h2>
              <p className="mb-4">
                Персональные данные Пользователей могут быть переданы третьим лицам в следующих случаях:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Пользователь явно выразил свое согласие на такие действия</li>
                <li>Передача необходима для использования Пользователем определенного сервиса</li>
                <li>Передача предусмотрена российским или иным применимым законодательством</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                8. Права пользователя
              </h2>
              <p className="mb-4">
                В соответствии с ФЗ-152 «О персональных данных» Пользователь имеет право:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию о том, какие персональные данные о нем обрабатываются</li>
                <li>Требовать уточнения, блокирования или уничтожения своих персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие в уполномоченный орган</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                9. Изменение политики конфиденциальности
              </h2>
              <p>
                Администрация сайта имеет право вносить изменения в настоящую Политику конфиденциальности. 
                При внесении изменений в актуальной редакции указывается дата последнего обновления. 
                Новая редакция Политики вступает в силу с момента ее размещения на сайте.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                10. Контактная информация
              </h2>
              <p className="mb-4">
                Все предложения и вопросы по настоящей Политике следует направлять через форму 
                обратной связи на сайте или по контактным данным, указанным на главной странице.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-6">
                <p className="text-sm text-gray-600">
                  <strong>Дата последнего обновления:</strong> 07 октября 2025 года
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
