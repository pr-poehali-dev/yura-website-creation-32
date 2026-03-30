import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const executors = [
  { name: "Иван Петров", category: "Сантехник", rating: 4.9, reviews: 234, online: true, desc: "Сантехник с 10-летним стажем. Быстро и качественно.", price: 800, orders: 1250, avatar: "👨‍🔧" },
  { name: "Ольга Смирнова", category: "Клинер", rating: 4.8, reviews: 178, online: true, desc: "Профессиональная уборка любой сложности. Свои материалы.", price: 500, orders: 890, avatar: "👩‍💼" },
  { name: "Михаил Козлов", category: "Электрик", rating: 4.9, reviews: 312, online: false, desc: "Электромонтажные работы любой сложности с гарантией.", price: 900, orders: 2100, avatar: "👨‍🔧" },
  { name: "Анна Волкова", category: "Репетитор", rating: 5.0, reviews: 89, online: true, desc: "Репетитор по математике и физике. Подготовка к ЕГЭ/ОГЭ.", price: 1200, orders: 456, avatar: "👩‍🏫" },
  { name: "Дмитрий Новиков", category: "Грузчик", rating: 4.7, reviews: 156, online: false, desc: "Грузоперевозки и переезды по городу и области.", price: 600, orders: 780, avatar: "👨‍💼" },
  { name: "Екатерина Лис", category: "Дизайнер", rating: 4.8, reviews: 203, online: true, desc: "Дизайн интерьера и 3D-визуализация. Портфолио 200+ проектов.", price: 2000, orders: 340, avatar: "👩‍🎨" },
  { name: "Сергей Морозов", category: "Отделочник", rating: 4.9, reviews: 145, online: true, desc: "Все виды отделочных работ. Работаю по договору с гарантией.", price: 1100, orders: 670, avatar: "👨‍🔨" },
  { name: "Наталья Белова", category: "Косметолог", rating: 5.0, reviews: 267, online: false, desc: "Косметологические процедуры на дому. Опыт 8 лет.", price: 1500, orders: 920, avatar: "👩‍⚕️" },
];

const topExecutors = executors.slice(0, 5).sort((a, b) => b.rating - a.rating);

export default function Executors() {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Исполнители" }]} />

        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <h1 className="font-cormorant font-bold text-4xl" style={{ color: "hsl(var(--navy))" }}>Исполнители и компании</h1>
        </div>

        {/* Search */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Поиск по имени или компании..." className="w-full pl-9 pr-3 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-1" />
          </div>
          <button className="px-4 py-2.5 border rounded-lg text-sm font-golos text-gray-500 hover:bg-gray-50 flex items-center gap-1.5">
            <Icon name="SlidersHorizontal" size={15} /> Расширенный поиск
          </button>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-56 shrink-0 hidden lg:block">
            <div className="bg-white rounded-xl border p-4 sticky top-24 space-y-5">
              {/* Rating */}
              <div>
                <h4 className="font-golos font-semibold text-sm mb-2.5" style={{ color: "hsl(var(--navy))" }}>Рейтинг</h4>
                {["4.5+ (234)", "4.0+ (567)", "3.5+ (890)"].map((r) => (
                  <label key={r} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                    <span className="text-xs font-golos text-gray-600">{r}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <h4 className="font-golos font-semibold text-sm mb-2.5" style={{ color: "hsl(var(--navy))" }}>Цена за час (₽)</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="От" className="w-full px-2 py-1.5 text-xs border rounded font-golos focus:outline-none" />
                  <input type="number" placeholder="До" className="w-full px-2 py-1.5 text-xs border rounded font-golos focus:outline-none" />
                </div>
              </div>

              {/* District */}
              <div>
                <h4 className="font-golos font-semibold text-sm mb-2.5" style={{ color: "hsl(var(--navy))" }}>Район города</h4>
                <select className="w-full text-xs border rounded px-2 py-1.5 font-golos focus:outline-none">
                  <option>Любой район</option>
                  <option>Центр</option>
                  <option>Север</option>
                  <option>Юг</option>
                  <option>Восток</option>
                  <option>Запад</option>
                </select>
              </div>

              {/* Extra */}
              <div>
                <h4 className="font-golos font-semibold text-sm mb-2.5" style={{ color: "hsl(var(--navy))" }}>Дополнительно</h4>
                {["Только с отзывами", "Сейчас онлайн"].map((o) => (
                  <label key={o} className="flex items-center gap-2 mb-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                    <span className="text-xs font-golos text-gray-600">{o}</span>
                  </label>
                ))}
              </div>

              <button className="w-full py-2 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Применить</button>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
              <span className="text-sm font-golos text-gray-500">Найдено <strong style={{ color: "hsl(var(--navy))" }}>128 исполнителей</strong></span>
              <div className="flex items-center gap-2">
                <select className="text-sm border rounded-lg px-3 py-1.5 font-golos focus:outline-none">
                  <option>По рейтингу</option>
                  <option>По цене</option>
                  <option>По количеству заказов</option>
                </select>
                <div className="flex border rounded-lg overflow-hidden">
                  {(["list", "grid"] as const).map((v) => (
                    <button key={v} onClick={() => setView(v)} className="px-2.5 py-1.5 transition-colors" style={view === v ? { backgroundColor: "hsl(var(--navy))", color: "white" } : { color: "hsl(var(--muted-foreground))" }}>
                      <Icon name={v === "grid" ? "LayoutGrid" : "List"} size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {view === "list" ? (
              <div className="space-y-3">
                {executors.map((ex, i) => (
                  <div key={i} className="bg-white border rounded-xl p-4 flex items-center gap-4 card-hover">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "hsl(var(--secondary))" }}>{ex.avatar}</div>
                      {ex.online && <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white bg-green-500" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap">
                        <Link to="/executors/profile" className="font-golos font-semibold text-sm hover:underline" style={{ color: "hsl(var(--navy))" }}>{ex.name}</Link>
                        <span className="text-xs px-2 py-0.5 rounded-full font-golos" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>{ex.category}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <StarRating rating={ex.rating} size="sm" showValue count={ex.reviews} />
                        <span className="text-xs text-gray-400 font-golos">·</span>
                        <span className="text-xs text-gray-400 font-golos">{ex.orders} заказов</span>
                        {ex.online && <span className="text-xs text-green-600 font-golos">· Онлайн</span>}
                      </div>
                      <p className="text-xs font-golos text-gray-500 mt-1 line-clamp-1">{ex.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-golos font-bold text-base mb-1" style={{ color: "hsl(var(--navy))" }}>от {ex.price} ₽/ч</div>
                      <div className="flex gap-2">
                        <Link to="/executors/profile" className="px-3 py-1.5 border rounded text-xs font-golos hover:bg-gray-50" style={{ color: "hsl(var(--navy))" }}>Профиль</Link>
                        <button className="px-3 py-1.5 rounded text-xs font-golos font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Заказать</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {executors.map((ex, i) => (
                  <div key={i} className="bg-white border rounded-xl p-5 text-center card-hover">
                    <div className="relative inline-block mb-3">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto" style={{ background: "hsl(var(--secondary))" }}>{ex.avatar}</div>
                      {ex.online && <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white bg-green-500" />}
                    </div>
                    <Link to="/executors/profile" className="block font-golos font-semibold text-sm mb-0.5 hover:underline" style={{ color: "hsl(var(--navy))" }}>{ex.name}</Link>
                    <span className="text-xs font-golos text-gray-500">{ex.category}</span>
                    <div className="flex justify-center mt-2"><StarRating rating={ex.rating} size="sm" showValue count={ex.reviews} /></div>
                    <div className="font-golos font-bold mt-2 mb-3" style={{ color: "hsl(var(--navy))" }}>от {ex.price} ₽/ч</div>
                    <button className="w-full py-1.5 rounded text-xs font-golos font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Заказать</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top-10 table */}
        <div className="mt-12 mb-8">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Рейтинг лучших исполнителей</h2>
          <div className="bg-white border rounded-xl overflow-hidden">
            <table className="w-full text-sm font-golos">
              <thead>
                <tr style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>
                  <th className="px-4 py-3 text-left font-golos font-medium text-xs w-12">#</th>
                  <th className="px-4 py-3 text-left font-golos font-medium text-xs">Исполнитель</th>
                  <th className="px-4 py-3 text-left font-golos font-medium text-xs">Рейтинг</th>
                  <th className="px-4 py-3 text-left font-golos font-medium text-xs">Заказов</th>
                  <th className="px-4 py-3 text-left font-golos font-medium text-xs w-28"></th>
                </tr>
              </thead>
              <tbody>
                {topExecutors.map((ex, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-cormorant font-bold text-lg" style={{ color: i === 0 ? "hsl(var(--gold))" : "hsl(var(--slate))" }}>
                        {i + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: "hsl(var(--secondary))" }}>{ex.avatar}</div>
                        <div>
                          <Link to="/executors/profile" className="font-medium hover:underline" style={{ color: "hsl(var(--navy))" }}>{ex.name}</Link>
                          <div className="text-xs text-gray-400">{ex.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3"><StarRating rating={ex.rating} size="sm" showValue count={ex.reviews} /></td>
                    <td className="px-4 py-3 text-gray-600">{ex.orders}</td>
                    <td className="px-4 py-3">
                      <Link to="/executors/profile" className="px-3 py-1.5 rounded text-xs font-golos font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Профиль</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
