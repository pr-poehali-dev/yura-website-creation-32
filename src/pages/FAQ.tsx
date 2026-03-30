import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Icon from "@/components/ui/icon";

const faqData = {
  clients: [
    { q: "Как заказать услугу?", a: "Найдите нужную услугу в каталоге, выберите исполнителя, нажмите «Заказать» и заполните форму. Исполнитель свяжется с вами в течение часа для подтверждения деталей." },
    { q: "Как происходит оплата?", a: "Оплата производится после выполнения работы. Поддерживаем наличные, карты и безналичный расчёт. Предоплата возможна только через нашу защищённую систему расчётов." },
    { q: "Что делать, если не устроило качество?", a: "Обратитесь в нашу службу поддержки в течение 7 дней. Мы рассмотрим претензию, организуем повторный выезд или вернём средства согласно гарантии." },
    { q: "Как оставить отзыв?", a: "После выполнения заказа вы получите уведомление с просьбой оценить работу. Оставить отзыв также можно на странице профиля исполнителя." },
    { q: "Можно ли отменить заказ?", a: "Заказ можно отменить бесплатно за 24 часа до выезда мастера. При более поздней отмене может взиматься компенсация за выезд." },
  ],
  executors: [
    { q: "Как зарегистрироваться в качестве исполнителя?", a: "Нажмите «Регистрация», выберите «Я исполнитель», заполните профиль и загрузите документы. После проверки вы сможете принимать заказы." },
    { q: "Сколько стоит размещение на портале?", a: "Базовое размещение бесплатно. Мы берём комиссию 10% с выполненных заказов. Есть платные тарифы для расширенных возможностей продвижения." },
    { q: "Как вывести заработанные средства?", a: "Деньги поступают на ваш внутренний счёт. Вывод доступен на карту или расчётный счёт в любое время при балансе от 1 000 ₽." },
    { q: "Как повысить рейтинг?", a: "Выполняйте заказы качественно и в срок, просите клиентов оставлять отзывы, оперативно отвечайте на сообщения и пополняйте портфолио." },
  ],
  payment: [
    { q: "Какие способы оплаты доступны?", a: "Мы принимаем банковские карты Visa/MasterCard/МИР, оплату через СБП, наличные, а также корпоративные безналичные переводы." },
    { q: "Насколько безопасны платежи?", a: "Все платежи защищены шифрованием TLS 1.3. Мы не храним данные карт. Платёж поступает исполнителю только после вашего подтверждения выполнения заказа." },
    { q: "Могу ли я получить возврат средств?", a: "Да. Если работа не выполнена или выполнена некачественно, средства возвращаются на счёт в течение 3–5 рабочих дней." },
  ],
  tech: [
    { q: "Как сбросить пароль?", a: "На странице входа нажмите «Забыли пароль?», введите email — на него придут инструкции по сбросу." },
    { q: "Не приходит email с подтверждением?", a: "Проверьте папку «Спам». Если письма нет, обратитесь в поддержку через форму на странице «Контакты»." },
    { q: "Как изменить личные данные?", a: "Войдите в личный кабинет, перейдите в раздел «Настройки профиля» и обновите нужные поля." },
  ],
};

const tabKeys = ["clients", "executors", "payment", "tech"] as const;
type TabKey = typeof tabKeys[number];
const tabLabels: Record<TabKey, string> = {
  clients: "Для клиентов",
  executors: "Для исполнителей",
  payment: "Оплата и безопасность",
  tech: "Технические вопросы",
};

const popular = [
  "Как заказать услугу?",
  "Как происходит оплата?",
  "Как зарегистрироваться в качестве исполнителя?",
  "Что делать, если не устроило качество?",
  "Насколько безопасны платежи?",
];

const videos = [
  { title: "Как заказать услугу за 5 минут", duration: "3:45", emoji: "🎬" },
  { title: "Как выбрать исполнителя по рейтингу", duration: "4:12", emoji: "🎬" },
  { title: "Безопасная оплата на CityService", duration: "2:58", emoji: "🎬" },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<TabKey>("clients");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggle = (key: string) => {
    setOpenItems((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  const currentFaq = faqData[activeTab];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Вопросы и ответы" }]} />

        <div className="text-center mb-10">
          <h1 className="font-cormorant font-bold text-4xl lg:text-5xl mb-2" style={{ color: "hsl(var(--navy))" }}>Часто задаваемые вопросы</h1>
          <div className="gold-line mx-auto mb-3" />
          <p className="text-sm font-golos text-gray-500 mb-6">Найдите ответы на популярные вопросы о нашем сервисе</p>

          <div className="max-w-lg mx-auto flex gap-2">
            <div className="relative flex-1">
              <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по вопросам..."
                className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-1"
              />
            </div>
            <button className="px-4 py-2.5 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>Найти</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b mb-6 overflow-x-auto">
          {tabKeys.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2.5 text-sm font-golos font-medium whitespace-nowrap border-b-2 transition-colors"
              style={activeTab === tab ? { borderColor: "hsl(var(--gold))", color: "hsl(var(--navy))" } : { borderColor: "transparent", color: "hsl(var(--muted-foreground))" }}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Accordion */}
          <div className="flex-1 min-w-0 space-y-2">
            {currentFaq
              .filter((item) => !search || item.q.toLowerCase().includes(search.toLowerCase()))
              .map((item, i) => {
                const key = `${activeTab}-${i}`;
                const isOpen = openItems.includes(key);
                return (
                  <div key={key} className="bg-white border rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-golos font-medium text-sm pr-4" style={{ color: "hsl(var(--navy))" }}>{item.q}</span>
                      <Icon
                        name={isOpen ? "ChevronUp" : "ChevronDown"}
                        size={16}
                        className="shrink-0 text-gray-400 transition-transform"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 animate-fade-in">
                        <div className="border-t pt-4">
                          <p className="text-sm font-golos text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block space-y-5">
            {/* Popular questions */}
            <div className="bg-white border rounded-xl p-4">
              <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Популярные вопросы</h4>
              <div className="space-y-2">
                {popular.map((q, i) => (
                  <button key={i} className="w-full text-left text-xs font-golos text-gray-600 hover:text-gray-900 py-1.5 border-b last:border-0 flex items-start gap-2">
                    <Icon name="ArrowRight" size={12} className="mt-0.5 shrink-0" style={{ color: "hsl(var(--gold))" }} />
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact block */}
            <div className="rounded-xl p-4 text-white" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%), hsl(220,45%,28%))" }}>
              <Icon name="MessageCircle" size={24} style={{ color: "hsl(var(--gold))" }} className="mb-2" />
              <h4 className="font-cormorant font-bold text-lg mb-1">Не нашли ответ?</h4>
              <p className="text-xs font-golos opacity-70 mb-3">Задайте вопрос нашей службе поддержки</p>
              <a href="/contacts" className="block w-full py-2 rounded text-xs font-golos font-semibold text-center" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                Написать нам
              </a>
            </div>
          </aside>
        </div>

        {/* Videos */}
        <div className="mt-12 mb-8">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Видеоинструкции</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {videos.map((v, i) => (
              <div key={i} className="bg-white border rounded-xl overflow-hidden card-hover">
                <div className="h-36 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%), hsl(220,45%,28%))" }}>
                  <div className="text-5xl">{v.emoji}</div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-golos bg-black/50 text-white">{v.duration}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-golos font-medium text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>{v.title}</h3>
                  <button className="flex items-center gap-1.5 text-xs font-golos font-semibold" style={{ color: "hsl(var(--gold-dark))" }}>
                    <Icon name="Play" size={14} /> Смотреть
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
