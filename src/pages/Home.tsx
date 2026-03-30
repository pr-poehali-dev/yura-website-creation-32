import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Icon from "@/components/ui/icon";
import StarRating from "@/components/shared/StarRating";

const categories = [
  { title: "Ремонт и отделка", icon: "Hammer", count: 234, color: "#1e3a5f" },
  { title: "Уборка и клининг", icon: "Sparkles", count: 156, color: "#1a4731" },
  { title: "Грузоперевозки", icon: "Truck", count: 89, color: "#4a1942" },
  { title: "Красота и здоровье", icon: "Heart", count: 312, color: "#7c2d12" },
  { title: "Обучение и репетиторы", icon: "BookOpen", count: 145, color: "#1e3a5f" },
  { title: "Компьютерная помощь", icon: "Monitor", count: 78, color: "#1a3a4a" },
];

const executors = [
  { name: "Иван Петров", role: "Сантехник", rating: 4.9, reviews: 234, price: 800, avatar: "👨‍🔧" },
  { name: "Ольга Смирнова", role: "Клинер", rating: 4.8, reviews: 178, price: 500, avatar: "👩‍💼" },
  { name: "Михаил Козлов", role: "Электрик", rating: 4.9, reviews: 312, price: 900, avatar: "👨‍🔧" },
  { name: "Анна Волкова", role: "Репетитор", rating: 5.0, reviews: 89, price: 1200, avatar: "👩‍🏫" },
  { name: "Дмитрий Новиков", role: "Грузчик", rating: 4.7, reviews: 156, price: 600, avatar: "👨‍💼" },
  { name: "Екатерина Лис", role: "Дизайнер", rating: 4.8, reviews: 203, price: 2000, avatar: "👩‍🎨" },
  { name: "Сергей Морозов", role: "Отделочник", rating: 4.9, reviews: 145, price: 1100, avatar: "👨‍🔨" },
  { name: "Наталья Белова", role: "Косметолог", rating: 5.0, reviews: 267, price: 1500, avatar: "👩‍⚕️" },
];

const reviews = [
  { name: "Александра К.", date: "15 марта 2026", rating: 5, text: "Отличный сервис! Мастер приехал вовремя, всё сделал качественно и аккуратно. Очень доволен работой.", service: "Установка смесителя" },
  { name: "Виктор М.", date: "12 марта 2026", rating: 5, text: "Пользуюсь порталом уже 3 года. Всегда нахожу хороших специалистов. Рекомендую всем!", service: "Ремонт квартиры" },
  { name: "Ирина Т.", date: "10 марта 2026", rating: 4, text: "Уборка выполнена на высшем уровне. Всё чисто и быстро. Точно закажу ещё раз.", service: "Клининг квартиры" },
  { name: "Павел Н.", date: "8 марта 2026", rating: 5, text: "Замечательный специалист! Починил всё быстро, цена соответствует качеству.", service: "Электромонтаж" },
  { name: "Людмила С.", date: "5 марта 2026", rating: 5, text: "Очень профессиональный мастер. Работа выполнена аккуратно и в срок. Советую!", service: "Поклейка обоев" },
  { name: "Антон Д.", date: "2 марта 2026", rating: 4, text: "Хороший сервис, понятный интерфейс. Нашёл мастера за 10 минут. Работой доволен.", service: "Сборка мебели" },
];

const articles = [
  { title: "10 советов по выбору сантехника", desc: "Как не ошибиться при выборе специалиста для ремонта труб", date: "25 фев 2026", views: 3456 },
  { title: "Генеральная уборка: с чего начать", desc: "Пошаговое руководство для подготовки к уборке всей квартиры", date: "20 фев 2026", views: 2890 },
  { title: "Как подготовиться к переезду", desc: "Чек-лист для успешного переезда без стресса и потерь", date: "15 фев 2026", views: 4120 },
  { title: "Ремонт в новостройке: советы", desc: "На что обратить внимание при первом ремонте в новой квартире", date: "10 фев 2026", views: 5670 },
];

const steps = [
  { icon: "FileText", num: "01", title: "Опишите задачу", desc: "Заполните форму с деталями вашего запроса" },
  { icon: "Bell", num: "02", title: "Получите предложения", desc: "Исполнители откликнутся в течение часа" },
  { icon: "UserCheck", num: "03", title: "Выберите исполнителя", desc: "Сравните по рейтингу, отзывам и цене" },
  { icon: "ShieldCheck", num: "04", title: "Оплатите результат", desc: "Безопасная сделка с гарантией возврата" },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const visible = 4;

  const prev = () => setCarouselIndex((i) => Math.max(0, i - 1));
  const next = () => setCarouselIndex((i) => Math.min(executors.length - visible, i + 1));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%) 0%, hsl(220,45%,25%) 50%, hsl(220,55%,18%) 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-golos font-medium mb-6 animate-fade-in" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "hsl(var(--gold))" }}>
              <Icon name="Star" size={12} />
              Более 5000 проверенных исполнителей
            </div>
            <h1 className="font-cormorant font-bold text-4xl lg:text-6xl text-white leading-tight mb-5 animate-fade-in delay-100">
              Найдите лучших<br />
              <span style={{ color: "hsl(var(--gold))" }}>специалистов</span> в вашем городе
            </h1>
            <p className="text-lg font-golos mb-8 animate-fade-in delay-200" style={{ color: "rgba(255,255,255,0.75)" }}>
              Более 5000 проверенных исполнителей готовы помочь вам прямо сейчас
            </p>

            {/* Search */}
            <div className="bg-white rounded-xl p-3 shadow-2xl flex flex-col sm:flex-row gap-2 animate-fade-in delay-300">
              <input
                type="text"
                placeholder="Что нужно сделать? (ремонт, уборка, перевозка...)"
                className="flex-1 px-4 py-2.5 text-sm font-golos text-gray-800 focus:outline-none rounded-lg"
              />
              <select className="px-3 py-2.5 text-sm font-golos text-gray-600 border rounded-lg focus:outline-none bg-gray-50 sm:w-48">
                <option>Все категории</option>
                <option>Ремонт</option>
                <option>Клининг</option>
                <option>Перевозки</option>
                <option>Обучение</option>
                <option>Красота</option>
                <option>Здоровье</option>
              </select>
              <button className="px-6 py-2.5 rounded-lg font-golos font-semibold text-sm flex items-center gap-2 shrink-0" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                <Icon name="Search" size={15} />
                Найти
              </button>
            </div>

            {/* Popular searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 animate-fade-in delay-400">
              <span className="text-sm font-golos" style={{ color: "rgba(255,255,255,0.5)" }}>Популярно:</span>
              {["Сантехник", "Электрик", "Уборка", "Ремонт", "Грузчики", "Репетитор"].map((t) => (
                <button key={t} className="text-sm font-golos px-3 py-1 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors">{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: "5 000+", label: "Исполнителей" },
              { num: "48 000+", label: "Заказов выполнено" },
              { num: "4.8", label: "Средняя оценка" },
              { num: "98%", label: "Довольных клиентов" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-cormorant font-bold text-3xl lg:text-4xl" style={{ color: "hsl(var(--navy))" }}>{s.num}</div>
                <div className="text-sm font-golos text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-cormorant font-bold text-4xl mb-2" style={{ color: "hsl(var(--navy))" }}>Что вам нужно?</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to="/catalog"
                className="group relative overflow-hidden rounded-xl p-6 text-white card-hover cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${cat.color} 0%, ${cat.color}cc 100%)` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-white" />
                <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                  <Icon name={cat.icon as any} size={22} className="text-white" />
                </div>
                <div className="font-golos font-semibold text-base mb-1">{cat.title}</div>
                <div className="text-sm opacity-70 font-golos">{cat.count} мастеров</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/catalog" className="btn-outline inline-flex items-center gap-2">
              Все категории
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Best executors */}
      <section className="py-16" style={{ backgroundColor: "hsl(var(--secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-cormorant font-bold text-4xl mb-2" style={{ color: "hsl(var(--navy))" }}>Наши лучшие специалисты</h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-300"
                style={{ transform: `translateX(-${carouselIndex * (100 / visible)}%)` }}
              >
                {executors.map((ex, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-sm card-hover flex-shrink-0" style={{ width: `calc(${100 / visible}% - 12px)`, minWidth: "220px" }}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 shadow-md" style={{ backgroundColor: "hsl(var(--secondary))" }}>
                        {ex.avatar}
                      </div>
                      <div className="font-golos font-semibold text-sm mb-0.5" style={{ color: "hsl(var(--navy))" }}>{ex.name}</div>
                      <div className="text-xs text-gray-500 font-golos mb-2">{ex.role}</div>
                      <StarRating rating={ex.rating} size="sm" showValue count={ex.reviews} />
                      <div className="mt-2 text-xs font-golos text-gray-500">от {ex.price} ₽/час</div>
                      <Link to="/executors/profile" className="mt-3 w-full py-1.5 rounded text-xs font-golos font-semibold text-center transition-all hover:opacity-90" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                        Заказать
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prev} disabled={carouselIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full shadow-lg flex items-center justify-center transition-all disabled:opacity-30 hover:scale-110" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button onClick={next} disabled={carouselIndex >= executors.length - visible} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full shadow-lg flex items-center justify-center transition-all disabled:opacity-30 hover:scale-110" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>
              <Icon name="ChevronRight" size={16} />
            </button>

            <div className="flex justify-center gap-1.5 mt-5">
              {Array.from({ length: executors.length - visible + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ backgroundColor: i === carouselIndex ? "hsl(var(--gold))" : "hsl(var(--border))", width: i === carouselIndex ? "20px" : "8px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-cormorant font-bold text-4xl mb-2" style={{ color: "hsl(var(--navy))" }}>Всего 4 шага до решения вашей задачи</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5" style={{ backgroundColor: "hsl(var(--border))" }} />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: "hsl(var(--navy))" }}>
                  <Icon name={step.icon as any} size={24} className="text-white" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-golos font-bold flex items-center justify-center" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-golos font-semibold text-sm mb-1.5" style={{ color: "hsl(var(--navy))" }}>{step.title}</h3>
                <p className="text-xs text-gray-500 font-golos leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-12" style={{ backgroundColor: "hsl(var(--secondary))" }}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-5">
          <div className="rounded-xl p-7 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%), hsl(220,45%,28%))" }}>
            <div className="absolute right-0 top-0 w-32 h-32 opacity-10" style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />
            <div className="text-xs font-golos font-semibold mb-2 px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>АКЦИЯ</div>
            <h3 className="font-cormorant font-bold text-2xl mb-2">Скидка 20% на первый заказ</h3>
            <p className="text-sm font-golos mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Для новых клиентов при заказе любой услуги от 2000 руб.</p>
            <button className="px-5 py-2 rounded font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Подробнее</button>
          </div>
          <div className="rounded-xl p-7 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(35,85%,35%), hsl(38,92%,45%))" }}>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
            <div className="text-xs font-golos font-semibold mb-2 px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>БЕСПЛАТНО</div>
            <h3 className="font-cormorant font-bold text-2xl mb-2">Бесплатный выезд мастера</h3>
            <p className="text-sm font-golos mb-4 text-white/80">При заключении договора на ремонт от 10 000 руб. выезд и оценка бесплатно</p>
            <button className="px-5 py-2 rounded font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>Подробнее</button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-cormorant font-bold text-4xl mb-2" style={{ color: "hsl(var(--navy))" }}>Что говорят наши клиенты</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-xl p-5 border card-hover bg-white" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-golos font-bold text-white flex-shrink-0" style={{ backgroundColor: "hsl(var(--navy))" }}>
                    {r.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-golos font-semibold text-sm" style={{ color: "hsl(var(--navy))" }}>{r.name}</span>
                      <span className="text-xs text-gray-400 font-golos shrink-0">{r.date}</span>
                    </div>
                    <StarRating rating={r.rating} size="sm" />
                  </div>
                </div>
                <p className="text-sm font-golos text-gray-600 leading-relaxed mb-2">{r.text}</p>
                <div className="text-xs font-golos px-2 py-1 rounded inline-block" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>
                  {r.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16" style={{ backgroundColor: "hsl(var(--secondary))" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-cormorant font-bold text-4xl mb-2" style={{ color: "hsl(var(--navy))" }}>Полезные статьи</h2>
              <div className="gold-line" />
            </div>
            <Link to="/blog" className="text-sm font-golos font-medium flex items-center gap-1 hover:underline" style={{ color: "hsl(var(--navy))" }}>
              Все статьи <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((a, i) => (
              <Link key={i} to="/blog/article" className="bg-white rounded-xl overflow-hidden shadow-sm card-hover block">
                <div className="h-36 flex items-center justify-center text-4xl" style={{ background: `linear-gradient(135deg, hsl(220,55%,${18 + i * 5}%) 0%, hsl(220,45%,${25 + i * 5}%) 100%)` }}>
                  {["🔧", "🧹", "📦", "🏗️"][i]}
                </div>
                <div className="p-4">
                  <h3 className="font-golos font-semibold text-sm mb-1.5 leading-snug" style={{ color: "hsl(var(--navy))" }}>{a.title}</h3>
                  <p className="text-xs text-gray-500 font-golos leading-relaxed mb-3 line-clamp-2">{a.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-golos">
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1"><Icon name="Eye" size={11} />{a.views}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ backgroundColor: "hsl(var(--navy))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cormorant font-bold text-4xl text-white mb-2">Будьте в курсе новостей и акций</h2>
          <p className="font-golos text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>Подпишитесь и получайте лучшие предложения первыми</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2 mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email адрес"
                className="flex-1 px-4 py-3 rounded-lg text-sm font-golos focus:outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
              />
              <button className="px-6 py-3 rounded-lg font-golos font-semibold text-sm shrink-0" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                Подписаться
              </button>
            </div>
            <label className="flex items-center justify-center gap-2 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 rounded" />
              <span className="text-xs font-golos" style={{ color: "rgba(255,255,255,0.5)" }}>Согласен на обработку персональных данных</span>
            </label>
          </div>
        </div>
      </section>
    </Layout>
  );
}
