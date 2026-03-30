import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import StarRating from "@/components/shared/StarRating";
import Icon from "@/components/ui/icon";

const comments = [
  { name: "Алексей К.", date: "27 фев 2026", text: "Очень полезная статья! Сам столкнулся с недобросовестным мастером, теперь знаю как проверять.", likes: 12, replies: [
    { name: "Редакция CityService", date: "27 фев 2026", text: "Спасибо за ваш отзыв! Надеемся, советы помогут вам в будущем." }
  ]},
  { name: "Наталья М.", date: "26 фев 2026", text: "Добавила в закладки! Сейчас как раз ищу сантехника, очень пригодится.", likes: 8, replies: [] },
  { name: "Павел Д.", date: "26 фев 2026", text: "Можно добавить ещё один совет — проверяйте наличие официального договора. Без него нет смысла спорить о качестве.", likes: 15, replies: [] },
];

export default function Article() {
  const [useful, setUseful] = useState<"yes" | "no" | null>(null);
  const [commentText, setCommentText] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[
          { label: "Блог", path: "/blog" },
          { label: "Советы по ремонту", path: "/blog" },
          { label: "Как выбрать сантехника" },
        ]} />

        <div className="flex gap-8">
          {/* Main */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs px-2.5 py-1 rounded-full font-golos" style={{ backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}>Советы по ремонту</span>
              <h1 className="font-cormorant font-bold text-3xl lg:text-4xl mt-3 mb-4" style={{ color: "hsl(var(--navy))" }}>
                Как выбрать сантехника: 10 советов от профессионалов
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-golos pb-4 border-b">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm" style={{ background: "hsl(var(--secondary))" }}>👨‍🔧</div>
                  <span>Иван Петров, сантехник с 10-летним стажем</span>
                </div>
                <span className="flex items-center gap-1"><Icon name="Calendar" size={11} />25 февраля 2026</span>
                <span className="flex items-center gap-1"><Icon name="Clock" size={11} />7 минут</span>
                <span className="flex items-center gap-1"><Icon name="Eye" size={11} />3 456</span>
                <span className="flex items-center gap-1"><Icon name="MessageSquare" size={11} />28</span>
              </div>

              {/* Social sharing */}
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="text-xs text-gray-500 font-golos">Поделиться:</span>
                {[
                  { name: "VK", color: "#4C75A3" },
                  { name: "TG", color: "#2CA5E0" },
                  { name: "WA", color: "#25D366" },
                  { name: "TW", color: "#1DA1F2" },
                ].map((s) => (
                  <button key={s.name} className="px-3 py-1 rounded text-xs font-golos font-medium border" style={{ color: s.color, borderColor: `${s.color}50` }}>
                    {s.name}
                  </button>
                ))}
                <button className="px-3 py-1 rounded text-xs font-golos border text-gray-500 flex items-center gap-1">
                  <Icon name="Link" size={11} /> Копировать
                </button>
                <span className="text-xs text-gray-400 font-golos ml-auto">156 репостов</span>
              </div>
            </div>

            {/* Main image */}
            <div className="rounded-xl overflow-hidden mb-6 h-64 flex items-center justify-center text-8xl" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%), hsl(220,45%,28%))" }}>
              🔧
            </div>

            {/* Table of contents */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 border">
              <div className="font-golos font-semibold text-sm mb-2" style={{ color: "hsl(var(--navy))" }}>Содержание статьи</div>
              <ol className="space-y-1.5">
                {["Введение", "Проверьте документы", "Изучите портфолио", "Читайте отзывы", "Уточните стоимость заранее", "Требуйте договор", "Проверьте инструменты", "Оцените коммуникацию", "Спросите о гарантии", "Не платите вперёд", "Доверяйте интуиции"].map((item, i) => (
                  <li key={i}>
                    <a href={`#item-${i}`} className="text-sm font-golos hover:underline flex items-center gap-2" style={{ color: "hsl(var(--navy))" }}>
                      {i > 0 && <span className="text-xs text-gray-400 w-5 text-right">{i}.</span>}
                      {i === 0 && <span className="text-xs text-gray-400 w-5" />}
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Article text */}
            <div className="prose max-w-none">
              <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                Выбор сантехника — задача не из простых. Рынок услуг переполнен предложениями, и среди них попадаются как настоящие профессионалы, так и те, кто испортит работу и исчезнет с авансом. В этой статье мы собрали 10 проверенных советов, которые помогут вам сделать правильный выбор.
              </p>

              <h2 className="font-cormorant font-bold text-2xl mt-6 mb-3" style={{ color: "hsl(var(--navy))" }}>Совет 1: Проверьте документы</h2>
              <p className="text-sm font-golos text-gray-600 leading-relaxed mb-3">
                Прежде всего попросите мастера показать документы. Профессиональный сантехник всегда имеет при себе:
              </p>
              <ul className="text-sm font-golos text-gray-600 space-y-1.5 mb-4 pl-4">
                {["Паспорт или иной документ удостоверения личности", "Сертификаты о прохождении обучения", "Лицензии (если требуются для конкретного вида работ)", "Свидетельство ИП или договор с компанией"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={14} className="mt-0.5 shrink-0" style={{ color: "hsl(var(--gold))" }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <blockquote className="border-l-4 pl-4 py-2 my-5 italic" style={{ borderColor: "hsl(var(--gold))" }}>
                <p className="text-sm font-golos text-gray-600">"Хороший специалист никогда не откажется показать документы. Если мастер юлит или говорит что документы не нужны — это тревожный сигнал."</p>
                <footer className="text-xs text-gray-400 font-golos mt-1">— Иван Петров, сантехник</footer>
              </blockquote>

              <h2 className="font-cormorant font-bold text-2xl mt-6 mb-3" style={{ color: "hsl(var(--navy))" }}>Совет 2: Изучите портфолио</h2>
              <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                Попросите показать примеры работ — фотографии до и после. Хороший мастер ведёт портфолио и с удовольствием его показывает. Обратите внимание на аккуратность швов, качество монтажа, чистоту работы.
              </p>

              <h2 className="font-cormorant font-bold text-2xl mt-6 mb-3" style={{ color: "hsl(var(--navy))" }}>Совет 3: Читайте отзывы</h2>
              <p className="text-sm font-golos text-gray-600 leading-relaxed mb-4">
                Отзывы — ваш главный инструмент проверки. Смотрите на реальные отзывы на нашем портале: они верифицированы и оставлены только после выполнения заказа. Обращайте внимание не только на оценку, но и на содержание отзыва.
              </p>

              {/* Comparison table */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-sm font-golos border-collapse border rounded-xl overflow-hidden">
                  <thead>
                    <tr style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>
                      <th className="px-4 py-2.5 text-left text-xs font-medium">Критерий</th>
                      <th className="px-4 py-2.5 text-left text-xs font-medium">Хороший мастер</th>
                      <th className="px-4 py-2.5 text-left text-xs font-medium">Плохой мастер</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Документы", "Показывает без вопросов", "Отказывается / нет документов"],
                      ["Смета", "Подробная, заранее", "Называет цену \"по факту\""],
                      ["Договор", "Всегда заключает", "Работает без договора"],
                      ["Гарантия", "Даёт письменно", "Не даёт или даёт устно"],
                    ].map(([crit, good, bad]) => (
                      <tr key={crit} className="border-t">
                        <td className="px-4 py-2.5 font-medium text-gray-700">{crit}</td>
                        <td className="px-4 py-2.5 text-green-600">{good}</td>
                        <td className="px-4 py-2.5 text-red-500">{bad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rate article */}
            <div className="my-8 p-5 rounded-xl border text-center">
              <p className="font-golos font-medium mb-3" style={{ color: "hsl(var(--navy))" }}>Была ли статья полезной?</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setUseful("yes")}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg font-golos font-semibold text-sm transition-all"
                  style={useful === "yes" ? { backgroundColor: "hsl(160,55%,30%)", color: "white" } : { backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}
                >
                  <Icon name="ThumbsUp" size={15} /> Да (78%)
                </button>
                <button
                  onClick={() => setUseful("no")}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg font-golos font-semibold text-sm transition-all"
                  style={useful === "no" ? { backgroundColor: "hsl(0,84%,60%)", color: "white" } : { backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--slate))" }}
                >
                  <Icon name="ThumbsDown" size={15} /> Нет (22%)
                </button>
              </div>
            </div>

            {/* Author */}
            <div className="p-5 rounded-xl border mb-8 flex gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shrink-0" style={{ background: "hsl(var(--secondary))" }}>👨‍🔧</div>
              <div>
                <div className="font-golos font-semibold text-sm mb-0.5" style={{ color: "hsl(var(--navy))" }}>Иван Петров</div>
                <div className="text-xs text-gray-500 font-golos mb-2">Сантехник с 10-летним стажем, автор более 20 статей на портале</div>
                <Link to="/executors/profile" className="text-xs font-golos font-medium hover:underline" style={{ color: "hsl(var(--navy))" }}>
                  Профиль исполнителя →
                </Link>
              </div>
            </div>

            {/* Comments */}
            <div>
              <h2 className="font-cormorant font-bold text-2xl mb-5" style={{ color: "hsl(var(--navy))" }}>Комментарии (28)</h2>

              <div className="mb-6 p-4 border rounded-xl">
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <input placeholder="Ваше имя" className="px-3 py-2 border rounded-lg text-sm font-golos focus:outline-none" />
                  <input placeholder="Email" type="email" className="px-3 py-2 border rounded-lg text-sm font-golos focus:outline-none" />
                </div>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Ваш комментарий..."
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg text-sm font-golos focus:outline-none resize-none mb-3"
                />
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <label className="flex items-center gap-2 text-xs font-golos text-gray-500 cursor-pointer">
                    <input type="checkbox" className="w-3.5 h-3.5" />
                    Сохранить имя для следующих комментариев
                  </label>
                  <button className="px-5 py-2 rounded-lg font-golos font-semibold text-sm" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                    Отправить
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {comments.map((c, i) => (
                  <div key={i} className="border rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "hsl(var(--navy))" }}>{c.name[0]}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-golos font-semibold text-sm" style={{ color: "hsl(var(--navy))" }}>{c.name}</span>
                          <span className="text-xs text-gray-400 font-golos">{c.date}</span>
                        </div>
                        <p className="text-sm font-golos text-gray-600 leading-relaxed mb-2">{c.text}</p>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 text-xs text-gray-400 font-golos hover:text-gray-600">
                            <Icon name="ThumbsUp" size={11} /> {c.likes}
                          </button>
                          <button className="text-xs font-golos font-medium hover:underline" style={{ color: "hsl(var(--navy))" }}>Ответить</button>
                        </div>
                        {c.replies.map((r, j) => (
                          <div key={j} className="mt-3 ml-4 pl-3 border-l-2 border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-golos font-semibold text-xs" style={{ color: "hsl(var(--navy))" }}>{r.name}</span>
                              <span className="text-xs text-gray-400 font-golos">{r.date}</span>
                            </div>
                            <p className="text-xs font-golos text-gray-600 leading-relaxed">{r.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-64 shrink-0 hidden xl:block">
            <div className="sticky top-24 space-y-5">
              <div className="bg-white border rounded-xl p-4">
                <h4 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Похожие статьи</h4>
                {[
                  { title: "Как принять работу сантехника", emoji: "✅" },
                  { title: "Ремонт своими руками: когда стоит рискнуть", emoji: "🔩" },
                  { title: "Признаки плохого исполнителя", emoji: "⚠️" },
                ].map((a, i) => (
                  <Link key={i} to="/blog/article" className="flex items-start gap-2.5 py-2.5 border-b last:border-0 hover:opacity-80">
                    <span className="text-xl shrink-0">{a.emoji}</span>
                    <span className="text-xs font-golos" style={{ color: "hsl(var(--navy))" }}>{a.title}</span>
                  </Link>
                ))}
              </div>

              <div className="rounded-xl p-4 text-white" style={{ background: "linear-gradient(135deg, hsl(220,55%,18%), hsl(220,45%,28%))" }}>
                <div className="text-2xl mb-2">🔧</div>
                <h4 className="font-cormorant font-bold text-lg mb-1">Нужен сантехник?</h4>
                <p className="text-xs font-golos opacity-70 mb-3">Найдите проверенного мастера на нашем портале</p>
                <Link to="/catalog" className="block w-full py-2 rounded text-xs font-golos font-semibold text-center" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>
                  Найти мастера
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
