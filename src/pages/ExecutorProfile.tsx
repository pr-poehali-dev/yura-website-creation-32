import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const profileTabs = ["Обо мне", "Услуги и цены", "Портфолио", "Отзывы", "Сертификаты"];

const services = [
  { name: "Установка смесителя", price: "1 500 ₽", duration: "2 часа" },
  { name: "Замена труб", price: "от 3 000 ₽", duration: "4 часа" },
  { name: "Установка унитаза", price: "2 500 ₽", duration: "3 часа" },
  { name: "Прочистка канализации", price: "1 800 ₽", duration: "1–2 часа" },
  { name: "Замена радиаторов", price: "от 5 000 ₽", duration: "6 часов" },
];

const reviews = [
  { name: "Александр П.", date: "15 марта 2026", rating: 5, text: "Отличный мастер! Сделал всё быстро и качественно. Рекомендую!" },
  { name: "Мария С.", date: "10 марта 2026", rating: 5, text: "Профессионал своего дела. Приехал в назначенное время, убрал за собой. Спасибо!" },
  { name: "Николай В.", date: "5 марта 2026", rating: 4, text: "Работа выполнена хорошо. Немного задержался, но предупредил заранее." },
];

export default function ExecutorProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Исполнители", path: "/executors" }, { label: "Иван Петров" }]} />

        {/* Profile header */}
        <div className="rounded-xl overflow-hidden mb-6 border">
          <div className="h-40 relative" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%) 0%, hsl(220,45%,28%) 100%)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          </div>
          <div className="bg-white px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start gap-5 -mt-12 relative z-10">
              <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-5xl shadow-lg flex-shrink-0" style={{ background: "hsl(var(--secondary))" }}>
                👨‍🔧
              </div>
              <div className="flex-1 pt-2 sm:pt-14">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="font-cormorant font-bold text-3xl" style={{ color: "hsl(var(--navy))" }}>Иван Петров</h1>
                  <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-golos font-medium" style={{ backgroundColor: "hsl(38,92%,50%,0.15)", color: "hsl(var(--gold-dark))" }}>
                    <Icon name="BadgeCheck" size={13} /> Проверенный специалист
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <StarRating rating={4.9} size="md" showValue count={345} />
                  <span className="text-sm text-gray-400 font-golos">На портале с 2020 года</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                    Заказать услугу
                  </button>
                  <button className="px-4 py-2 rounded-lg border font-golos font-semibold text-sm" style={{ borderColor: "hsl(var(--navy))", color: "hsl(var(--navy))" }}>
                    Написать сообщение
                  </button>
                  <button className="px-3 py-2 rounded-lg border font-golos text-sm text-gray-500 hover:bg-gray-50">
                    <Icon name="Heart" size={16} />
                  </button>
                  <button className="px-3 py-2 rounded-lg border font-golos text-sm text-gray-500 hover:bg-gray-50">
                    <Icon name="Flag" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { num: "1 250", label: "Выполнено заказов", icon: "CheckCircle" },
            { num: "345", label: "Отзывов", icon: "MessageSquare" },
            { num: "4.9", label: "Средняя оценка", icon: "Star" },
            { num: "67%", label: "Повторных клиентов", icon: "RotateCcw" },
          ].map((s) => (
            <div key={s.label} className="bg-white border rounded-xl p-5 text-center">
              <Icon name={s.icon as any} size={22} className="mx-auto mb-2" style={{ color: "hsl(var(--gold))" }} />
              <div className="font-cormorant font-bold text-3xl" style={{ color: "hsl(var(--navy))" }}>{s.num}</div>
              <div className="text-xs font-golos text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="flex gap-1 border-b px-2 overflow-x-auto">
            {profileTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-3 text-sm font-golos font-medium whitespace-nowrap border-b-2 transition-colors"
                style={activeTab === i ? { borderColor: "hsl(var(--gold))", color: "hsl(var(--navy))" } : { borderColor: "transparent", color: "hsl(var(--muted-foreground))" }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-golos font-semibold text-base mb-3" style={{ color: "hsl(var(--navy))" }}>О себе</h3>
                  <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                    Профессиональный сантехник с 10-летним стажем работы. Выполняю все виды сантехнических работ: установка, замена и ремонт водопроводных систем, канализации, отопления.
                  </p>
                  <p className="text-sm font-golos text-gray-600 leading-relaxed mb-5">
                    Работаю официально с гарантией на все виды работ. Имею все необходимые инструменты. Всегда убираю за собой рабочее место.
                  </p>
                  <h3 className="font-golos font-semibold text-base mb-2" style={{ color: "hsl(var(--navy))" }}>Специализация</h3>
                  <ul className="space-y-1 mb-4">
                    {["Монтаж и ремонт водопровода", "Установка сантехнического оборудования", "Ремонт и замена систем отопления", "Устранение засоров канализации"].map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm font-golos text-gray-600">
                        <Icon name="Check" size={14} style={{ color: "hsl(var(--gold))" }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-golos font-semibold text-base mb-3" style={{ color: "hsl(var(--navy))" }}>График работы</h3>
                  <div className="space-y-2 mb-5">
                    {[
                      { day: "Пн–Пт", hours: "09:00–20:00" },
                      { day: "Суббота", hours: "10:00–18:00 (запись)" },
                      { day: "Воскресенье", hours: "По договорённости" },
                    ].map((g) => (
                      <div key={g.day} className="flex justify-between text-sm font-golos">
                        <span className="text-gray-500">{g.day}</span>
                        <span style={{ color: "hsl(var(--navy))" }} className="font-medium">{g.hours}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="font-golos font-semibold text-base mb-2" style={{ color: "hsl(var(--navy))" }}>Рабочие районы</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Центр", "Северный", "Южный", "Восточный", "ЗАО"].map((r) => (
                      <span key={r} className="text-xs px-2.5 py-1 rounded-full font-golos" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <table className="w-full text-sm font-golos">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2.5 text-left font-semibold" style={{ color: "hsl(var(--navy))" }}>Услуга</th>
                      <th className="py-2.5 text-left font-semibold" style={{ color: "hsl(var(--navy))" }}>Цена</th>
                      <th className="py-2.5 text-left font-semibold" style={{ color: "hsl(var(--navy))" }}>Срок</th>
                      <th className="py-2.5 w-24"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((s) => (
                      <tr key={s.name} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 text-gray-700">{s.name}</td>
                        <td className="py-3 font-semibold" style={{ color: "hsl(var(--navy))" }}>{s.price}</td>
                        <td className="py-3 text-gray-500">{s.duration}</td>
                        <td className="py-3">
                          <Link to="/catalog/service" className="px-3 py-1.5 rounded text-xs font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Заказать</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid grid-cols-3 gap-3">
                {["🚿", "🔧", "💧", "🪠", "🛁", "🚰", "🔩", "🪣", "🔨"].map((e, i) => (
                  <div key={i} className="aspect-square rounded-xl flex items-center justify-center text-5xl cursor-pointer hover:scale-105 transition-transform" style={{ background: "hsl(var(--secondary))" }}>
                    {e}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <div className="space-y-4 mb-6">
                  {reviews.map((r, i) => (
                    <div key={i} className="border rounded-xl p-4">
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
              </div>
            )}

            {activeTab === 4 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Сертификат сантехника", year: 2022 },
                  { name: "Разрешение на газовые работы", year: 2021 },
                  { name: "Удостоверение электрика 3 гр.", year: 2020 },
                ].map((c) => (
                  <div key={c.name} className="border rounded-xl p-4 flex flex-col items-center text-center">
                    <div className="text-4xl mb-3">📜</div>
                    <div className="font-golos font-medium text-sm mb-1" style={{ color: "hsl(var(--navy))" }}>{c.name}</div>
                    <div className="text-xs text-gray-400 font-golos">{c.year} год</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Leave review */}
        <div className="mt-8 bg-white border rounded-xl p-6 mb-8">
          <h2 className="font-cormorant font-bold text-2xl mb-4" style={{ color: "hsl(var(--navy))" }}>Оставить отзыв</h2>
          <div className="mb-4">
            <label className="block text-sm font-golos font-medium text-gray-700 mb-2">Оценка</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => setReviewRating(s)}
                  onMouseEnter={() => setHoverRating(s)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-2xl transition-transform hover:scale-110"
                  style={{ color: s <= (hoverRating || reviewRating) ? "hsl(var(--gold))" : "#d1d5db" }}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-golos font-medium text-gray-700 mb-1.5">Текст отзыва</label>
            <textarea rows={3} placeholder="Расскажите о своём опыте работы с мастером..." className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-1 resize-none" />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="px-4 py-2 border rounded-lg text-sm font-golos text-gray-500 hover:bg-gray-50 flex items-center gap-1.5">
              <Icon name="Paperclip" size={14} /> Прикрепить фото
            </button>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm font-golos text-gray-600">Анонимно</span>
            </label>
            <button className="ml-auto px-6 py-2 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
              Отправить отзыв
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
