import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const categories = ["Все статьи", "Советы по ремонту", "Лайфхаки для дома", "Новости портала", "Интервью с мастерами"];

const featured = [
  { title: "Как выбрать сантехника: 10 советов", emoji: "🔧", category: "Советы по ремонту", views: 5670, comments: 28 },
  { title: "Секреты генеральной уборки", emoji: "🧹", category: "Лайфхаки для дома", views: 4120, comments: 15 },
  { title: "Топ мастеров марта 2026", emoji: "🏆", category: "Новости портала", views: 3450, comments: 42 },
];

const articles = [
  { title: "Как выбрать сантехника: 10 советов от профессионалов", category: "Советы по ремонту", desc: "Проверяйте документы, изучайте портфолио и читайте отзывы — советы от наших лучших мастеров.", author: "Редакция CityService", date: "25 фев 2026", readTime: "5 мин", views: 3456, comments: 23, rating: 4.8, emoji: "🔧" },
  { title: "Генеральная уборка: пошаговый план", category: "Лайфхаки для дома", desc: "Всё, что нужно знать о генеральной уборке — от нужных средств до правильной последовательности действий.", author: "Ольга Смирнова", date: "20 фев 2026", readTime: "7 мин", views: 2890, comments: 18, rating: 4.9, emoji: "🧹" },
  { title: "Как подготовиться к переезду: чек-лист", category: "Лайфхаки для дома", desc: "Полный чек-лист для тех, кто планирует переезд — от сбора вещей до подключения коммуникаций.", author: "Дмитрий Новиков", date: "15 фев 2026", readTime: "4 мин", views: 4120, comments: 31, rating: 4.7, emoji: "📦" },
  { title: "Ремонт в новостройке: на что обратить внимание", category: "Советы по ремонту", desc: "Первый ремонт в новой квартире — это серьёзно. Рассказываем, как сэкономить и не пожалеть потом.", author: "Сергей Морозов", date: "10 фев 2026", readTime: "8 мин", views: 5670, comments: 45, rating: 4.9, emoji: "🏗️" },
  { title: "Интервью с лучшим электриком портала", category: "Интервью с мастерами", desc: "Михаил Козлов рассказал нам о своей работе, принципах и советах клиентам при выборе электрика.", author: "Редакция CityService", date: "5 фев 2026", readTime: "6 мин", views: 2340, comments: 12, rating: 4.6, emoji: "⚡" },
  { title: "Новые категории услуг на CityService", category: "Новости портала", desc: "Мы добавили новые категории: репетиторы, ветеринары и услуги по уходу за садом. Подробности внутри.", author: "Редакция CityService", date: "1 фев 2026", readTime: "3 мин", views: 1890, comments: 8, rating: 4.5, emoji: "🆕" },
];

const tags = [
  { name: "ремонт", count: 45 }, { name: "сантехника", count: 23 }, { name: "уборка", count: 67 },
  { name: "электрика", count: 12 }, { name: "переезд", count: 34 }, { name: "советы", count: 89 },
  { name: "лайфхаки", count: 56 }, { name: "новости", count: 18 }, { name: "мастера", count: 29 },
  { name: "цены", count: 41 }, { name: "акции", count: 15 }, { name: "безопасность", count: 7 },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Все статьи");
  const [email, setEmail] = useState("");

  const filtered = articles.filter((a) => activeCategory === "Все статьи" || a.category === activeCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Блог" }]} />

        <div className="mb-8">
          <h1 className="font-cormorant font-bold text-4xl lg:text-5xl mb-2" style={{ color: "hsl(var(--navy))" }}>Полезные статьи и советы</h1>
          <div className="gold-line mb-5" />
          <div className="flex gap-2">
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input placeholder="Поиск по блогу..." className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-1" />
            </div>
            <button className="px-4 py-2.5 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>Найти</button>
          </div>
        </div>

        {/* Categories chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-golos font-medium transition-all"
              style={activeCategory === cat ? { backgroundColor: "hsl(var(--navy))", color: "white" } : { backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured carousel */}
        {activeCategory === "Все статьи" && (
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {featured.map((f, i) => (
              <Link key={i} to="/blog/article" className={`rounded-xl overflow-hidden relative block card-hover ${i === 0 ? "md:col-span-1" : ""}`} style={{ background: `linear-gradient(135deg, hsl(220,55%,${18 + i * 6}%), hsl(220,45%,${28 + i * 6}%))` }}>
                <div className="p-6 text-white relative z-10">
                  <div className="text-4xl mb-3">{f.emoji}</div>
                  <div className="text-xs font-golos px-2 py-0.5 rounded-full inline-block mb-2" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>{f.category}</div>
                  <h2 className="font-cormorant font-bold text-xl leading-tight mb-3">{f.title}</h2>
                  <div className="flex items-center gap-3 text-xs opacity-70 font-golos">
                    <span className="flex items-center gap-1"><Icon name="Eye" size={11} />{f.views}</span>
                    <span className="flex items-center gap-1"><Icon name="MessageSquare" size={11} />{f.comments}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {/* Articles grid */}
          <div className="flex-1 min-w-0">
            <div className="grid md:grid-cols-2 gap-5">
              {filtered.map((a, i) => (
                <Link key={i} to="/blog/article" className="bg-white border rounded-xl overflow-hidden card-hover block">
                  <div className="h-36 flex items-center justify-center text-6xl" style={{ background: `linear-gradient(135deg, hsl(210,20%,${92 + i}%), hsl(210,20%,${88 + i}%))` }}>
                    {a.emoji}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-golos" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>{a.category}</span>
                    </div>
                    <h3 className="font-golos font-semibold text-sm mb-1.5 leading-snug line-clamp-2" style={{ color: "hsl(var(--navy))" }}>{a.title}</h3>
                    <p className="text-xs font-golos text-gray-500 mb-3 line-clamp-2 leading-relaxed">{a.desc}</p>
                    <div className="flex items-center gap-1 mb-3">
                      <StarRating rating={a.rating} size="sm" showValue />
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 font-golos">
                      <div className="flex items-center gap-2">
                        <span>{a.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5"><Icon name="Clock" size={10} />{a.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5"><Icon name="Eye" size={10} />{a.views}</span>
                        <span className="flex items-center gap-0.5"><Icon name="MessageSquare" size={10} />{a.comments}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8 flex-wrap gap-2">
              <span className="text-sm font-golos text-gray-500">Страница 1 из 10</span>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 border rounded text-sm font-golos text-gray-500">← Пред.</button>
                {[1, 2, 3, "...", 10].map((p, i) => (
                  <button key={i} className={`w-8 h-8 rounded text-sm font-golos ${p === 1 ? "font-semibold text-white" : "border text-gray-600"}`} style={p === 1 ? { backgroundColor: "hsl(var(--navy))" } : {}}>{p}</button>
                ))}
                <button className="px-3 py-1.5 border rounded text-sm font-golos text-gray-500">След. →</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-60 shrink-0 hidden lg:block space-y-5">
            {/* Tags */}
            <div className="bg-white border rounded-xl p-4">
              <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Популярные теги</h4>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <button key={tag.name} className="text-xs px-2.5 py-1 rounded-full font-golos transition-colors hover:text-white" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>
                    #{tag.name} <span className="opacity-60">({tag.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white border rounded-xl p-4">
              <h4 className="font-golos font-semibold text-sm mb-1" style={{ color: "hsl(var(--navy))" }}>Рассылка статей</h4>
              <p className="text-xs text-gray-500 font-golos mb-3">Получайте новые статьи на почту</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="w-full px-3 py-2 border rounded-lg text-xs font-golos mb-2 focus:outline-none"
              />
              <button className="w-full py-2 rounded-lg text-xs font-golos font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                Подписаться
              </button>
            </div>

            {/* Archive */}
            <div className="bg-white border rounded-xl p-4">
              <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Архив статей</h4>
              <div className="space-y-1.5">
                {[
                  { month: "Март 2026", count: 8 },
                  { month: "Февраль 2026", count: 12 },
                  { month: "Январь 2026", count: 15 },
                  { month: "Декабрь 2025", count: 10 },
                ].map((a) => (
                  <button key={a.month} className="w-full flex justify-between text-xs font-golos text-gray-600 hover:text-gray-900 py-1">
                    <span>{a.month}</span>
                    <span className="text-gray-400">({a.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
