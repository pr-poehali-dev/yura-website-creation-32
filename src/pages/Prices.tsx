import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Icon from "@/components/ui/icon";

const priceData = [
  { category: "Сантехника", service: "Установка смесителя", avg: 1500, min: 1000, max: 2500 },
  { category: "Сантехника", service: "Замена труб (1 м)", avg: 5000, min: 3000, max: 10000 },
  { category: "Сантехника", service: "Установка унитаза", avg: 2500, min: 1800, max: 4000 },
  { category: "Электрика", service: "Замена розетки", avg: 800, min: 500, max: 1500 },
  { category: "Электрика", service: "Установка люстры", avg: 1200, min: 800, max: 2000 },
  { category: "Электрика", service: "Монтаж электрощита", avg: 8000, min: 5000, max: 15000 },
  { category: "Клининг", service: "Уборка квартиры 1-к", avg: 2000, min: 1500, max: 3000 },
  { category: "Клининг", service: "Мойка окон (1 окно)", avg: 400, min: 250, max: 700 },
  { category: "Перевозки", service: "Переезд по городу", avg: 4000, min: 2500, max: 8000 },
  { category: "Перевозки", service: "Доставка мебели", avg: 2500, min: 1500, max: 5000 },
];

const promos = [
  { title: "Скидка 30% на первый заказ", desc: "Для новых клиентов при заказе от 3 000 ₽", expires: "31.03.2026", code: "NEW30", color: "hsl(220,55%,18%)", emoji: "🎁" },
  { title: "Бесплатный выезд мастера", desc: "При заключении договора на ремонт от 10 000 ₽", expires: "15.04.2026", code: "FREE10K", color: "hsl(35,85%,38%)", emoji: "🚗" },
  { title: "Уборка + мойка окон = -20%", desc: "Закажите уборку и получите мойку окон со скидкой", expires: "30.04.2026", code: "CLEAN20", color: "hsl(160,55%,30%)", emoji: "🧹" },
];

const seasonal = [
  { title: "Осенняя уборка -20%", desc: "Генеральная уборка перед зимой", emoji: "🍂", discount: "−20%" },
  { title: "Весенний ремонт -15%", desc: "Подготовим квартиру к сезону", emoji: "🌱", discount: "−15%" },
  { title: "Горячий сезон переездов", desc: "Специальные тарифы на июнь–август", emoji: "☀️", discount: "−10%" },
  { title: "Новогодняя уборка -25%", desc: "Встречайте праздники в чистоте", emoji: "🎄", discount: "−25%" },
];

const packages = [
  { name: "Базовый абонемент", includes: "4 уборки в месяц", price: "8 000 ₽", save: "20%", color: "hsl(210,20%,96%)", accent: "hsl(220,55%,18%)" },
  { name: "Расширенный пакет", includes: "8 уборок + мойка окон", price: "14 000 ₽", save: "25%", color: "hsl(220,55%,18%)", accent: "hsl(var(--gold))", popular: true },
  { name: "Премиум уход", includes: "Неограниченные визиты", price: "22 000 ₽", save: "30%", color: "hsl(35,85%,38%)", accent: "white" },
];

export default function Prices() {
  const [sortCol, setSortCol] = useState<string>("category");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [filterCat, setFilterCat] = useState("Все");

  const cats = ["Все", ...Array.from(new Set(priceData.map((p) => p.category)))];
  const filtered = priceData.filter((p) => filterCat === "Все" || p.category === filterCat);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Цены и акции" }]} />

        <div className="text-center mb-10">
          <h1 className="font-cormorant font-bold text-4xl lg:text-5xl mb-2" style={{ color: "hsl(var(--navy))" }}>Цены и специальные предложения</h1>
          <div className="gold-line mx-auto mb-3" />
          <p className="text-sm font-golos text-gray-500">Выгодные предложения от проверенных исполнителей</p>
        </div>

        {/* Price table */}
        <div className="bg-white border rounded-xl overflow-hidden mb-10">
          <div className="p-4 border-b flex items-center justify-between flex-wrap gap-3">
            <h2 className="font-golos font-semibold" style={{ color: "hsl(var(--navy))" }}>Популярные услуги с ценами</h2>
            <div className="flex gap-1.5">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCat(c)}
                  className="px-3 py-1 rounded-full text-xs font-golos font-medium transition-all"
                  style={filterCat === c ? { backgroundColor: "hsl(var(--navy))", color: "white" } : { backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-golos">
              <thead>
                <tr style={{ backgroundColor: "hsl(var(--secondary))" }}>
                  {[["category", "Категория"], ["service", "Услуга"], ["avg", "Средняя"], ["min", "Мин."], ["max", "Макс."]].map(([col, label]) => (
                    <th key={col} className="px-4 py-3 text-left">
                      <button
                        onClick={() => { setSortCol(col); setSortDir((d) => d === "asc" ? "desc" : "asc"); }}
                        className="flex items-center gap-1 font-semibold text-xs hover:underline"
                        style={{ color: "hsl(var(--navy))" }}
                      >
                        {label}
                        {sortCol === col && <Icon name={sortDir === "asc" ? "ArrowUp" : "ArrowDown"} size={11} />}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="text-xs px-2 py-0.5 rounded-full font-golos" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>{p.category}</span>
                    </td>
                    <td className="px-4 py-3 font-medium" style={{ color: "hsl(var(--navy))" }}>{p.service}</td>
                    <td className="px-4 py-3 font-bold" style={{ color: "hsl(var(--navy))" }}>{p.avg.toLocaleString()} ₽</td>
                    <td className="px-4 py-3 text-green-600">{p.min.toLocaleString()} ₽</td>
                    <td className="px-4 py-3 text-gray-400">{p.max.toLocaleString()} ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Promos */}
        <div className="mb-10">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Текущие акции</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {promos.map((p, i) => (
              <div key={i} className="rounded-xl p-6 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-cormorant font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-sm font-golos opacity-80 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-golos opacity-60">До {p.expires}</div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-golos opacity-60">Промокод:</span>
                  <span className="px-2.5 py-1 bg-white/20 rounded text-sm font-golos font-bold tracking-wider">{p.code}</span>
                </div>
                <button className="w-full py-2 rounded-lg font-golos font-semibold text-sm bg-white" style={{ color: p.color }}>
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal */}
        <div className="mb-10">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Сезонные предложения</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {seasonal.map((s, i) => (
              <div key={i} className="bg-white border rounded-xl p-5 card-hover text-center">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-golos font-bold mb-2" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>{s.discount}</div>
                <h3 className="font-golos font-semibold text-sm mb-1" style={{ color: "hsl(var(--navy))" }}>{s.title}</h3>
                <p className="text-xs font-golos text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-10">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Абонементы и пакеты</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((p, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 relative ${p.popular ? "shadow-xl" : ""}`} style={{ background: i === 1 ? `hsl(var(--navy))` : "white", borderColor: i === 1 ? "hsl(var(--gold))" : "hsl(var(--border))" }}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-golos font-bold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                    Популярный
                  </div>
                )}
                <h3 className={`font-cormorant font-bold text-xl mb-1 ${i === 1 ? "text-white" : ""}`} style={i !== 1 ? { color: "hsl(var(--navy))" } : {}}>
                  {p.name}
                </h3>
                <p className={`text-sm font-golos mb-4 ${i === 1 ? "text-white/70" : "text-gray-500"}`}>{p.includes}</p>
                <div className={`font-cormorant font-bold text-3xl mb-1 ${i === 1 ? "text-white" : ""}`} style={i !== 1 ? { color: "hsl(var(--navy))" } : {}}>
                  {p.price}
                </div>
                <div className="text-xs font-golos mb-5" style={{ color: i === 1 ? "hsl(var(--gold))" : "hsl(var(--gold-dark))" }}>
                  Экономия {p.save}
                </div>
                <button
                  className="w-full py-2.5 rounded-lg font-golos font-semibold text-sm"
                  style={i === 1 ? { backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" } : { backgroundColor: "hsl(var(--navy))", color: "white" }}
                >
                  Купить абонемент
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
