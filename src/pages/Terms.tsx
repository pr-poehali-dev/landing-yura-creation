import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Terms = () => {
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
            Пользовательское соглашение
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                1. Общие положения
              </h2>
              <p className="mb-4">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения 
                между ООО "Молотов траст" (ИНН 5906060110, далее — «Администрация») и пользователем 
                сайта <strong>aasbx24.ru</strong> (далее — «Сайт»).
              </p>
              <p className="mb-4">
                Используя Сайт, Пользователь подтверждает, что:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ознакомился с условиями настоящего Соглашения в полном объеме</li>
                <li>Принимает все условия Соглашения без исключений и ограничений</li>
                <li>Обязуется соблюдать условия Соглашения</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                2. Предмет соглашения
              </h2>
              <p className="mb-4">
                Администрация предоставляет Пользователю доступ к информации о продукте Битрикс24, 
                включая:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Описание возможностей и функций системы</li>
                <li>Информацию о тарифных планах и стоимости</li>
                <li>Консультационные услуги по внедрению</li>
                <li>Техническую поддержку при использовании</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                3. Права и обязанности пользователя
              </h2>
              
              <h3 className="font-semibold text-xl mb-3 text-gray-800">3.1. Пользователь имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Получать информацию о продуктах и услугах, представленных на Сайте</li>
                <li>Обращаться в службу поддержки через формы обратной связи</li>
                <li>Запрашивать консультации по продуктам</li>
                <li>Оформлять заявки на подключение тарифных планов</li>
              </ul>

              <h3 className="font-semibold text-xl mb-3 text-gray-800">3.2. Пользователь обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию при заполнении форм</li>
                <li>Не использовать Сайт в незаконных целях</li>
                <li>Не размещать материалы, нарушающие законодательство РФ</li>
                <li>Не совершать действия, направленные на нарушение работы Сайта</li>
                <li>Соблюдать права интеллектуальной собственности</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                4. Права и обязанности администрации
              </h2>
              
              <h3 className="font-semibold text-xl mb-3 text-gray-800">4.1. Администрация имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Изменять содержание Сайта без предварительного уведомления</li>
                <li>Вносить изменения в настоящее Соглашение</li>
                <li>Ограничивать доступ к Сайту для проведения технических работ</li>
                <li>Прекратить работу Сайта без объяснения причин</li>
              </ul>

              <h3 className="font-semibold text-xl mb-3 text-gray-800">4.2. Администрация обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию о продуктах</li>
                <li>Обрабатывать обращения Пользователей в разумные сроки</li>
                <li>Защищать персональные данные в соответствии с законодательством РФ</li>
                <li>Поддерживать работоспособность Сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                5. Условия оказания услуг
              </h2>
              <p className="mb-4">
                <strong>5.1. Консультации.</strong> Администрация предоставляет бесплатные консультации 
                по выбору и внедрению Битрикс24. Консультации осуществляются по телефону, электронной 
                почте или через формы обратной связи.
              </p>
              <p className="mb-4">
                <strong>5.2. Подключение тарифов.</strong> Стоимость тарифных планов указана на Сайте 
                и может быть изменена Администрацией в одностороннем порядке. Изменение цен не 
                распространяется на уже оплаченные периоды.
              </p>
              <p className="mb-4">
                <strong>5.3. Техническая поддержка.</strong> Объем и условия технической поддержки 
                определяются выбранным тарифным планом.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                6. Оплата услуг
              </h2>
              <p className="mb-4">
                <strong>6.1.</strong> Стоимость услуг указывается в рублях РФ и не включает НДС 
                (при применении УСН).
              </p>
              <p className="mb-4">
                <strong>6.2.</strong> Оплата производится на основании выставленного счета или 
                договора оферты.
              </p>
              <p className="mb-4">
                <strong>6.3.</strong> Способы оплаты:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Безналичный перевод для юридических лиц</li>
                <li>Банковские карты</li>
                <li>Электронные платежные системы</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                7. Интеллектуальная собственность
              </h2>
              <p className="mb-4">
                <strong>7.1.</strong> Все объекты, размещенные на Сайте, включая элементы дизайна, 
                текст, графические изображения, являются объектами интеллектуальной собственности.
              </p>
              <p className="mb-4">
                <strong>7.2.</strong> Использование объектов интеллектуальной собственности 
                возможно только с письменного разрешения правообладателя.
              </p>
              <p className="mb-4">
                <strong>7.3.</strong> Товарный знак «Битрикс24» принадлежит компании 
                «1С-Битрикс» и используется на основании партнерского соглашения.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                8. Ответственность сторон
              </h2>
              <p className="mb-4">
                <strong>8.1.</strong> Администрация не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Временную недоступность Сайта по техническим причинам</li>
                <li>Действия третьих лиц, направленные на нарушение работы Сайта</li>
                <li>Убытки, возникшие в результате использования или невозможности использования Сайта</li>
                <li>Содержание информации, размещенной Пользователями</li>
              </ul>
              <p className="mb-4">
                <strong>8.2.</strong> Пользователь несет ответственность за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Достоверность предоставленной информации</li>
                <li>Соблюдение законодательства РФ при использовании Сайта</li>
                <li>Нарушение прав третьих лиц</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                9. Конфиденциальность
              </h2>
              <p className="mb-4">
                Обработка персональных данных Пользователей осуществляется в соответствии с 
                <Link to="/privacy" className="text-blue-600 hover:underline mx-1">
                  Политикой конфиденциальности
                </Link>
                и Федеральным законом №152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                10. Разрешение споров
              </h2>
              <p className="mb-4">
                <strong>10.1.</strong> Все споры по настоящему Соглашению решаются путем переговоров. 
                В случае невозможности урегулирования спора в досудебном порядке, спор подлежит 
                рассмотрению в судебном порядке по месту нахождения Администрации.
              </p>
              <p className="mb-4">
                <strong>10.2.</strong> К отношениям между Пользователем и Администрацией применяется 
                законодательство Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                11. Срок действия соглашения
              </h2>
              <p className="mb-4">
                <strong>11.1.</strong> Настоящее Соглашение вступает в силу с момента начала 
                использования Сайта и действует бессрочно.
              </p>
              <p className="mb-4">
                <strong>11.2.</strong> Администрация имеет право в любое время изменять условия 
                настоящего Соглашения в одностороннем порядке без специального уведомления. 
                Новая редакция вступает в силу с момента размещения на Сайте.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900">
                12. Реквизиты
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-2">
                <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью "Молотов траст"</p>
                <p><strong>Сокращенное наименование:</strong> ООО "Молотов траст"</p>
                <p><strong>ИНН/КПП:</strong> 5906060110 / 590401001</p>
                <p><strong>ОГРН:</strong> 1045901011860</p>
                <p><strong>Email:</strong> <a href="mailto:ivanickiy@centerai.tech" className="text-blue-600 hover:underline">ivanickiy@centerai.tech</a></p>
                <p><strong>Телефон:</strong> <a href="tel:+79582400010" className="text-blue-600 hover:underline">+7 958 240-00-10</a></p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-6">
                <p className="text-sm text-gray-600">
                  <strong>Дата публикации:</strong> 07 октября 2025 года<br/>
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

export default Terms;
