import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const tabs = ["Описание", "Характеристики", "Отзывы (156)", "Вопросы (23)", "Фото работ"];

const reviews = [
  { name: "Александра К.", date: "10 марта 2026", rating: 5, text: "Мастер приехал вовремя, сделал всё быстро и аккуратно. Очень доволен результатом!" },
  { name: "Виктор М.", date: "5 марта 2026", rating: 5, text: "Отличный специалист. Всё объяснил, показал что делал. Рекомендую!" },
  { name: "Марина П.", date: "1 марта 2026", rating: 4, text: "Работа выполнена хорошо, чуть задержался но предупредил заранее. В целом доволен." },
  { name: "Олег В.", date: "25 фев 2026", rating: 5, text: "Уже второй раз заказываю. Всегда на высоком уровне. Буду заказывать ещё!" },
  { name: "Татьяна Л.", date: "20 фев 2026", rating: 5, text: "Очень порадовало, что убрал за собой. Профессионал своего дела!" },
];

const similar = [
  { title: "Установка смесителя на кухне", price: 1200, rating: 4.7, emoji: "🚰" },
  { title: "Замена прокладок в кране", price: 600, rating: 4.8, emoji: "🔧" },
  { title: "Установка водяного счётчика", price: 2000, rating: 4.9, emoji: "💧" },
  { title: "Прочистка канализации", price: 1800, rating: 4.6, emoji: "🪠" },
];

export default function ServiceDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const imgs = ["🚿", "🔧", "💧", "🪠"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { label: "Каталог", path: "/catalog" },
          { label: "Сантехника", path: "/catalog" },
          { label: "Установка смесителя в ванной" },
        ]} />

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h1 className="font-cormorant font-bold text-3xl lg:text-4xl" style={{ color: "hsl(var(--navy))" }}>
              Установка смесителя в ванной
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-sm font-golos text-gray-500 hover:bg-gray-50">
              <Icon name="Heart" size={15} /> В избранное
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-sm font-golos text-gray-500 hover:bg-gray-50">
              <Icon name="Flag" size={15} /> Пожаловаться
            </button>
          </div>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row">
          {/* Gallery */}
          <div className="lg:w-3/5">
            <div className="bg-gray-50 rounded-xl border flex items-center justify-center" style={{ height: "360px", fontSize: "100px" }}>
              {imgs[activeImg]}
            </div>
            <div className="flex gap-2 mt-3">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="w-16 h-16 rounded-lg border-2 flex items-center justify-center text-2xl transition-all"
                  style={{ borderColor: i === activeImg ? "hsl(var(--gold))" : "hsl(var(--border))", background: "hsl(var(--secondary))" }}
                >
                  {img}
                </button>
              ))}
              <button className="w-16 h-16 rounded-lg border flex items-center justify-center gap-1 text-xs text-gray-400 font-golos" style={{ borderColor: "hsl(var(--border))" }}>
                <Icon name="Play" size={14} />
              </button>
            </div>
          </div>

          {/* Info card */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl border p-5 sticky top-24">
              <div className="flex items-start gap-3 mb-4 pb-4 border-b">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "hsl(var(--secondary))" }}>👨‍🔧</div>
                <div>
                  <Link to="/executors/profile" className="font-golos font-semibold text-sm hover:underline" style={{ color: "hsl(var(--navy))" }}>Иван Петров, Сантехник</Link>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <StarRating rating={4.8} size="sm" showValue count={156} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-golos mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> На сайте сейчас
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-golos">Цена:</span>
                  <span className="font-golos font-bold text-2xl" style={{ color: "hsl(var(--navy))" }}>1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-golos">Срок выполнения:</span>
                  <span className="text-sm font-golos font-medium">2–3 часа</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-golos">Гарантия:</span>
                  <span className="text-sm font-golos font-medium text-green-600">6 месяцев</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg font-golos font-bold text-base mb-2.5" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                Заказать услугу
              </button>
              <button className="w-full py-2.5 rounded-lg font-golos font-semibold text-sm border" style={{ borderColor: "hsl(var(--navy))", color: "hsl(var(--navy))" }}>
                Связаться с исполнителем
              </button>

              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                {[
                  { icon: "ShieldCheck", label: "Безопасная сделка" },
                  { icon: "RotateCcw", label: "Гарантия возврата" },
                  { icon: "Clock", label: "Быстрый отклик" },
                  { icon: "BadgeCheck", label: "Проверен порталом" },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-1 p-2 rounded-lg" style={{ backgroundColor: "hsl(var(--secondary))" }}>
                    <Icon name={b.icon as any} size={16} style={{ color: "hsl(var(--gold))" }} />
                    <span className="text-xs text-gray-500 font-golos">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-1 border-b overflow-x-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-2.5 text-sm font-golos font-medium whitespace-nowrap transition-colors border-b-2"
                style={
                  activeTab === i
                    ? { borderColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }
                    : { borderColor: "transparent", color: "hsl(var(--muted-foreground))" }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 0 && (
              <div className="max-w-2xl">
                <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                  Профессиональная установка смесителя в ванной или на кухне. Мастер работает с любыми моделями смесителей — от эконом до премиум класса. Все работы выполняются с использованием качественных материалов и профессионального инструмента.
                </p>
                <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                  Перед началом работ мастер проводит диагностику состояния труб и запорной арматуры. В случае необходимости будет дана рекомендация по дополнительным работам.
                </p>
                <h3 className="font-golos font-semibold text-base mb-2" style={{ color: "hsl(var(--navy))" }}>Что входит в услугу:</h3>
                <ul className="text-sm font-golos text-gray-600 space-y-1 mb-4 list-none">
                  {["Демонтаж старого смесителя", "Проверка состояния подводки", "Установка нового смесителя", "Проверка герметичности соединений", "Уборка рабочего места"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={14} style={{ color: "hsl(var(--gold))" }} />
                      {i}
                    </li>
                  ))}
                </ul>
                <h3 className="font-golos font-semibold text-base mb-2" style={{ color: "hsl(var(--navy))" }}>Не входит в услугу:</h3>
                <ul className="text-sm font-golos text-gray-600 space-y-1 list-none">
                  {["Стоимость самого смесителя", "Замена подводящих труб", "Ремонт запорной арматуры"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="XCircle" size={14} className="text-gray-400" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 1 && (
              <div className="max-w-lg">
                <table className="w-full text-sm font-golos border-collapse">
                  <tbody>
                    {[
                      ["Тип работ", "Сантехнические"],
                      ["Сложность", "Средняя"],
                      ["Время выполнения", "2–3 часа"],
                      ["Инструмент", "Есть у мастера"],
                      ["Выезд на дом", "Да"],
                      ["Работа в выходные", "Да"],
                    ].map(([key, val]) => (
                      <tr key={key} className="border-b">
                        <td className="py-2.5 pr-4 text-gray-500 w-1/2">{key}</td>
                        <td className="py-2.5 font-medium" style={{ color: "hsl(var(--navy))" }}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                {/* Rating summary */}
                <div className="flex gap-8 mb-6 p-5 bg-gray-50 rounded-xl max-w-xl">
                  <div className="text-center">
                    <div className="font-cormorant font-bold text-5xl" style={{ color: "hsl(var(--navy))" }}>4.8</div>
                    <StarRating rating={4.8} size="lg" />
                    <div className="text-xs text-gray-400 font-golos mt-1">156 отзывов</div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[{ stars: 5, count: 120 }, { stars: 4, count: 30 }, { stars: 3, count: 5 }, { stars: 2, count: 1 }, { stars: 1, count: 0 }].map((r) => (
                      <div key={r.stars} className="flex items-center gap-2 text-xs font-golos">
                        <span className="w-3 text-right text-gray-500">{r.stars}</span>
                        <span style={{ color: "hsl(var(--gold))" }}>★</span>
                        <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${(r.count / 156) * 100}%`, backgroundColor: "hsl(var(--gold))" }} />
                        </div>
                        <span className="w-6 text-gray-400">{r.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 max-w-2xl">
                  {reviews.map((r, i) => (
                    <div key={i} className="p-4 border rounded-xl bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "hsl(var(--navy))" }}>{r.name[0]}</div>
                          <span className="font-golos font-medium text-sm" style={{ color: "hsl(var(--navy))" }}>{r.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-golos">{r.date}</span>
                      </div>
                      <StarRating rating={r.rating} size="sm" />
                      <p className="text-sm font-golos text-gray-600 mt-2 leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-5 px-6 py-2.5 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                  Оставить отзыв
                </button>
              </div>
            )}

            {activeTab === 3 && (
              <div className="max-w-xl">
                <div className="mb-4 p-4 border rounded-xl">
                  <textarea placeholder="Задайте вопрос исполнителю..." className="w-full text-sm font-golos focus:outline-none resize-none" rows={3} />
                  <button className="mt-2 px-4 py-1.5 rounded font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>Отправить</button>
                </div>
                {[
                  { q: "Работаете ли вы в выходные?", a: "Да, по предварительной записи в субботу и воскресенье.", date: "10 марта 2026" },
                  { q: "Нужно ли мне покупать смеситель заранее?", a: "Можете купить сами, или я помогу с подбором и куплю за небольшую доплату.", date: "5 марта 2026" },
                ].map((qa, i) => (
                  <div key={i} className="p-4 border rounded-xl mb-3">
                    <div className="text-sm font-golos font-medium mb-2" style={{ color: "hsl(var(--navy))" }}>❓ {qa.q}</div>
                    <div className="text-sm font-golos text-gray-600 pl-4 border-l-2" style={{ borderColor: "hsl(var(--gold))" }}>✅ {qa.a}</div>
                    <div className="text-xs text-gray-400 font-golos mt-2">{qa.date}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 4 && (
              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {["🚿", "🔧", "💧", "🪠", "🛁", "🚰"].map((e, i) => (
                  <div key={i} className="aspect-square rounded-xl flex items-center justify-center text-4xl cursor-pointer hover:scale-105 transition-transform" style={{ background: "hsl(var(--secondary))" }}>
                    {e}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Similar */}
        <div className="mt-10">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Похожие услуги</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {similar.map((s, i) => (
              <Link key={i} to="/catalog/service" className="bg-white border rounded-xl p-4 card-hover block">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <div className="font-golos font-medium text-sm mb-1" style={{ color: "hsl(var(--navy))" }}>{s.title}</div>
                <StarRating rating={s.rating} size="sm" showValue />
                <div className="font-golos font-bold mt-2" style={{ color: "hsl(var(--navy))" }}>от {s.price} ₽</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Executor other services */}
        <div className="mt-10 mb-8">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Другие услуги Ивана Петрова</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Замена труб", price: 3000, emoji: "🔩" },
              { title: "Установка унитаза", price: 2500, emoji: "🚽" },
              { title: "Ремонт крана", price: 800, emoji: "🔧" },
            ].map((s, i) => (
              <Link key={i} to="/catalog/service" className="bg-white border rounded-xl p-4 flex items-center gap-3 card-hover">
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <div className="font-golos font-medium text-sm" style={{ color: "hsl(var(--navy))" }}>{s.title}</div>
                  <div className="font-golos text-sm text-gray-500">от {s.price} ₽</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
