import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const services = [
  { id: 1, category: "Сантехника", title: "Установка смесителя", executor: "Иван Петров", rating: 4.8, reviews: 45, price: 1500, duration: "1–2 часа", tags: ["Выезд", "Гарантия"], emoji: "🚿" },
  { id: 2, category: "Электрика", title: "Замена розетки", executor: "Сергей Орлов", rating: 4.9, reviews: 78, price: 800, duration: "30 мин", tags: ["Срочно", "Выезд"], emoji: "⚡" },
  { id: 3, category: "Клининг", title: "Уборка квартиры", executor: "Ольга Смирнова", rating: 5.0, reviews: 123, price: 2500, duration: "3–4 часа", tags: ["Выезд", "Инвентарь"], emoji: "🧹" },
  { id: 4, category: "Перевозки", title: "Перевозка мебели", executor: "Дмитрий Новиков", rating: 4.7, reviews: 56, price: 3000, duration: "2–6 часов", tags: ["Срочно", "Грузчики"], emoji: "🚚" },
  { id: 5, category: "Обучение", title: "Репетитор по математике", executor: "Анна Волкова", rating: 5.0, reviews: 89, price: 1200, duration: "60 мин", tags: ["Онлайн", "Договор"], emoji: "📚" },
  { id: 6, category: "Ремонт", title: "Поклейка обоев", executor: "Михаил Козлов", rating: 4.8, reviews: 34, price: 4000, duration: "1 день", tags: ["Гарантия", "Договор"], emoji: "🖼️" },
];

const recentlyViewed = [
  { title: "Чистка дивана", price: 1200, emoji: "🛋️" },
  { title: "Установка кондиционера", price: 3500, emoji: "❄️" },
  { title: "Мойка окон", price: 800, emoji: "🪟" },
  { title: "Вскрытие замка", price: 1500, emoji: "🔑" },
];

export default function Catalog() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(10000);
  const [expandedCats, setExpandedCats] = useState<string[]>(["Ремонт и строительство"]);

  const toggleCat = (cat: string) => setExpandedCats((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Каталог услуг" }]} />

        <h1 className="font-cormorant font-bold text-4xl mb-6" style={{ color: "hsl(var(--navy))" }}>Каталог услуг</h1>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl border p-4 sticky top-24">
              {/* Search */}
              <div className="mb-5">
                <div className="relative">
                  <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input placeholder="Поиск по каталогу..." className="w-full pl-8 pr-3 py-2 text-sm border rounded-lg font-golos focus:outline-none focus:ring-1" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Категории</h4>
                {[
                  { name: "Ремонт и строительство", items: ["Сантехники (45)", "Электрики (32)", "Отделочники (78)"] },
                  { name: "Уборка", items: ["Клининг квартир (56)", "Мойка окон (23)"] },
                  { name: "Перевозки", items: ["Грузоперевозки (34)", "Переезды (28)"] },
                  { name: "Красота", items: ["Маникюр (67)", "Парикмахер (43)"] },
                ].map((cat) => (
                  <div key={cat.name} className="border-b last:border-0 pb-2 mb-2">
                    <button
                      onClick={() => toggleCat(cat.name)}
                      className="w-full flex items-center justify-between py-1.5 text-sm font-golos font-medium text-gray-700 hover:text-gray-900"
                    >
                      {cat.name}
                      <Icon name={expandedCats.includes(cat.name) ? "ChevronUp" : "ChevronDown"} size={14} className="text-gray-400" />
                    </button>
                    {expandedCats.includes(cat.name) && (
                      <div className="pl-2 space-y-1 animate-fade-in">
                        {cat.items.map((item) => (
                          <label key={item} className="flex items-center gap-2 py-0.5 cursor-pointer">
                            <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                            <span className="text-xs text-gray-600 font-golos">{item}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Price range */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Цена (руб.)</h4>
                <div className="flex gap-2 mb-2">
                  <input type="number" value={priceFrom} onChange={(e) => setPriceFrom(+e.target.value)} className="w-full px-2.5 py-1.5 text-xs border rounded font-golos focus:outline-none" placeholder="От" />
                  <input type="number" value={priceTo} onChange={(e) => setPriceTo(+e.target.value)} className="w-full px-2.5 py-1.5 text-xs border rounded font-golos focus:outline-none" placeholder="До" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Рейтинг</h4>
                {[{ val: "4.5+", count: 234 }, { val: "4.0+", count: 567 }, { val: "3.5+", count: 890 }].map((r) => (
                  <label key={r.val} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                    <span className="text-xs text-gray-600 font-golos flex items-center gap-1">
                      <span style={{ color: "hsl(var(--gold))" }}>★</span> {r.val} ({r.count})
                    </span>
                  </label>
                ))}
              </div>

              {/* Experience */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Опыт работы</h4>
                {["Любой опыт", "До 1 года", "1–3 года", "Более 3 лет"].map((e) => (
                  <label key={e} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="radio" name="exp" className="w-3.5 h-3.5" />
                    <span className="text-xs text-gray-600 font-golos">{e}</span>
                  </label>
                ))}
              </div>

              {/* Payment */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Оплата</h4>
                {["Наличные", "Банковская карта", "Безналичный расчёт"].map((p) => (
                  <label key={p} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                    <span className="text-xs text-gray-600 font-golos">{p}</span>
                  </label>
                ))}
              </div>

              {/* Extra */}
              <div className="mb-5">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Дополнительно</h4>
                {["Срочное выполнение", "Выезд на дом", "Работаем по договору"].map((o) => (
                  <label key={o} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                    <span className="text-xs text-gray-600 font-golos">{o}</span>
                  </label>
                ))}
              </div>

              <button className="w-full py-2.5 rounded-lg font-golos font-semibold text-sm mb-2" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                Применить фильтры
              </button>
              <button className="w-full py-2 rounded-lg font-golos text-sm text-gray-500 border hover:bg-gray-50">
                Сбросить фильтры
              </button>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
              <span className="text-sm font-golos text-gray-500">Найдено <strong style={{ color: "hsl(var(--navy))" }}>284 услуги</strong></span>
              <div className="flex items-center gap-3">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm border rounded-lg px-3 py-1.5 font-golos focus:outline-none">
                  <option value="popularity">По популярности</option>
                  <option value="price_asc">По цене (возр.)</option>
                  <option value="price_desc">По цене (убыв.)</option>
                  <option value="rating">По рейтингу</option>
                </select>
                <div className="flex border rounded-lg overflow-hidden">
                  {(["grid", "list"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setView(v)}
                      className="px-2.5 py-1.5 transition-colors"
                      style={view === v ? { backgroundColor: "hsl(var(--navy))", color: "white" } : { color: "hsl(var(--muted-foreground))" }}
                    >
                      <Icon name={v === "grid" ? "LayoutGrid" : "List"} size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services grid */}
            <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" : "flex flex-col gap-3"}>
              {services.map((s) => (
                <div key={s.id} className={`bg-white rounded-xl border card-hover ${view === "list" ? "flex gap-4 items-center p-4" : "overflow-hidden"}`}>
                  {view === "grid" && (
                    <div className="h-36 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, hsl(210,20%,96%), hsl(210,20%,92%))" }}>
                      {s.emoji}
                    </div>
                  )}
                  {view === "list" && (
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl shrink-0" style={{ background: "hsl(var(--secondary))" }}>
                      {s.emoji}
                    </div>
                  )}
                  <div className={view === "grid" ? "p-4" : "flex-1 min-w-0"}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-golos px-2 py-0.5 rounded-full" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>{s.category}</span>
                      <button className="text-gray-300 hover:text-red-400 transition-colors">
                        <Icon name="Heart" size={16} />
                      </button>
                    </div>
                    <h3 className="font-golos font-semibold text-sm mb-0.5 leading-snug" style={{ color: "hsl(var(--navy))" }}>{s.title}</h3>
                    <p className="text-xs text-gray-500 font-golos mb-2">{s.executor}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <StarRating rating={s.rating} size="sm" showValue count={s.reviews} />
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded font-golos" style={{ backgroundColor: "hsl(38,92%,50%,0.1)", color: "hsl(var(--gold-dark))" }}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-golos font-bold text-base" style={{ color: "hsl(var(--navy))" }}>от {s.price} ₽</div>
                        <div className="text-xs text-gray-400 font-golos">{s.duration}</div>
                      </div>
                      <Link to="/catalog/service" className="px-4 py-1.5 rounded font-golos font-semibold text-xs" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                        Заказать
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8 flex-wrap gap-3">
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 rounded border text-sm font-golos text-gray-500 hover:bg-gray-50">← Пред.</button>
                {[1, 2, 3, "...", 10].map((p, i) => (
                  <button key={i} className={`w-8 h-8 rounded text-sm font-golos ${p === 1 ? "font-semibold text-white" : "text-gray-600 hover:bg-gray-50 border"}`} style={p === 1 ? { backgroundColor: "hsl(var(--navy))" } : {}}>
                    {p}
                  </button>
                ))}
                <button className="px-3 py-1.5 rounded border text-sm font-golos text-gray-500 hover:bg-gray-50">След. →</button>
              </div>
              <select className="text-sm border rounded px-2 py-1.5 font-golos focus:outline-none">
                <option>12 на стр.</option>
                <option>24 на стр.</option>
                <option>36 на стр.</option>
              </select>
            </div>

            {/* Recently viewed */}
            <div className="mt-10">
              <h3 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Вы смотрели недавно</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {recentlyViewed.map((r, i) => (
                  <Link key={i} to="/catalog/service" className="bg-white border rounded-lg p-3 flex items-center gap-3 hover:shadow-sm transition-shadow">
                    <span className="text-2xl">{r.emoji}</span>
                    <div>
                      <div className="text-xs font-golos font-medium" style={{ color: "hsl(var(--navy))" }}>{r.title}</div>
                      <div className="text-xs text-gray-400 font-golos">от {r.price} ₽</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
