import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Icon from "@/components/ui/icon";

const socials = [
  { name: "ВКонтакте", followers: "12K", color: "#4C75A3", emoji: "💬" },
  { name: "Telegram", followers: "8K", color: "#2CA5E0", emoji: "✈️" },
  { name: "WhatsApp", followers: "5K", color: "#25D366", emoji: "📱" },
  { name: "YouTube", followers: "24K", color: "#FF0000", emoji: "▶️" },
  { name: "Instagram", followers: "18K", color: "#E1306C", emoji: "📷" },
  { name: "Одноклассники", followers: "6K", color: "#F7931E", emoji: "👥" },
  { name: "TikTok", followers: "32K", color: "#000000", emoji: "🎵" },
  { name: "Дзен", followers: "4K", color: "#FFCC00", emoji: "📰" },
];

const partners = ["🏢", "🏪", "🏬", "🏭", "🏦", "🏗️"];

const faqPreview = [
  { q: "Как быстро ответит поддержка?", a: "В рабочее время — в течение часа. Онлайн-чат работает круглосуточно." },
  { q: "Можно ли прийти в офис?", a: "Да, приём по предварительной записи пн–пт с 10:00 до 18:00." },
  { q: "Есть ли телефон горячей линии?", a: "Да: +7 (495) 123-45-67, работает ежедневно с 9:00 до 21:00." },
];

export default function Contacts() {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  const addFile = () => setFiles((f) => [...f, `Документ_${f.length + 1}.pdf`]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Контакты" }]} />

        <div className="text-center mb-10">
          <h1 className="font-cormorant font-bold text-4xl lg:text-5xl mb-2" style={{ color: "hsl(var(--navy))" }}>Свяжитесь с нами</h1>
          <div className="gold-line mx-auto mb-3" />
          <p className="text-sm font-golos text-gray-500">Мы всегда готовы помочь вам</p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67", sub: "Круглосуточно", color: "hsl(160,55%,30%)" },
            { icon: "Mail", title: "Email", value: "support@cityservice.ru", sub: "Ответ в течение часа", color: "hsl(220,55%,35%)" },
            { icon: "MapPin", title: "Адрес", value: "г. Москва, ул. Примерная, 10", sub: "офис 205", color: "hsl(35,85%,38%)" },
          ].map((c) => (
            <div key={c.title} className="bg-white border rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${c.color}15` }}>
                <Icon name={c.icon as any} size={22} style={{ color: c.color }} />
              </div>
              <h3 className="font-golos font-semibold text-sm mb-1" style={{ color: "hsl(var(--navy))" }}>{c.title}</h3>
              <div className="font-golos font-medium text-base mb-0.5">{c.value}</div>
              <div className="text-xs font-golos text-gray-400">{c.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Form */}
          <div className="flex-1">
            <div className="bg-white border rounded-xl p-6 mb-6">
              <h2 className="font-cormorant font-bold text-2xl mb-5" style={{ color: "hsl(var(--navy))" }}>Форма обратной связи</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Тема обращения</label>
                  <select value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none">
                    <option value="">Выберите тему</option>
                    <option>Общий вопрос</option>
                    <option>Техническая поддержка</option>
                    <option>Сотрудничество</option>
                    <option>Претензия</option>
                    <option>Предложение</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Ваше имя *</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Иванов" className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="mail@example.ru" className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Телефон</label>
                    <input placeholder="+7 (999) 000-00-00" className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Номер заказа</label>
                    <input placeholder="Если есть вопрос по заказу" className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Сообщение * (минимум 20 символов)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Опишите ваш вопрос или проблему подробно..."
                    className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none resize-none"
                  />
                  <div className="text-xs text-gray-400 font-golos mt-1 text-right">{message.length} / 1000</div>
                </div>

                {/* Files */}
                <div>
                  <label className="block text-xs font-golos font-medium text-gray-600 mb-1.5">Прикрепить файл</label>
                  <button onClick={addFile} className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-golos text-gray-500 hover:bg-gray-50 border-dashed">
                    <Icon name="Paperclip" size={14} /> Прикрепить файл
                  </button>
                  <div className="text-xs text-gray-400 font-golos mt-1">jpg, png, pdf, doc — не более 10 МБ</div>
                  {files.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {files.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-golos text-gray-600 bg-gray-50 px-3 py-1.5 rounded">
                          <Icon name="File" size={12} />
                          {f}
                          <button onClick={() => setFiles((fl) => fl.filter((_, j) => j !== i))} className="ml-auto text-gray-400 hover:text-red-400">
                            <Icon name="X" size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Captcha mock */}
                <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
                  <div className="bg-white border rounded px-4 py-2 font-cormorant font-bold text-xl tracking-widest select-none" style={{ color: "hsl(var(--navy))", letterSpacing: "0.3em" }}>
                    K7M2P
                  </div>
                  <input placeholder="Введите код с картинки" className="flex-1 px-3 py-2 border rounded text-sm font-golos focus:outline-none" />
                  <button className="text-gray-400 hover:text-gray-600">
                    <Icon name="RefreshCw" size={16} />
                  </button>
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 rounded mt-0.5" />
                  <span className="text-xs font-golos text-gray-600">
                    Согласен на{" "}
                    <span className="font-medium" style={{ color: "hsl(var(--navy))" }}>обработку персональных данных</span>
                    {" "}согласно Политике конфиденциальности
                  </span>
                </label>

                <button
                  className="w-full py-3 rounded-lg font-golos font-bold text-base transition-all hover:opacity-90"
                  style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
                >
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-80 space-y-5">
            {/* Map mock */}
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="h-48 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, hsl(210,30%,90%), hsl(210,25%,85%))" }}>
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="text-xs font-golos text-gray-500">г. Москва, ул. Примерная, 10</div>
                </div>
                <button className="absolute bottom-3 right-3 text-xs font-golos font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5" style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}>
                  <Icon name="Navigation" size={12} /> Маршрут
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border rounded-xl p-4">
              <h3 className="font-golos font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: "hsl(var(--navy))" }}>
                <Icon name="Clock" size={16} style={{ color: "hsl(var(--gold))" }} />
                Часы работы поддержки
              </h3>
              {[
                { days: "Пн–Пт", hours: "09:00 – 21:00" },
                { days: "Сб–Вс", hours: "10:00 – 18:00" },
                { days: "Онлайн-чат", hours: "24/7" },
              ].map((h) => (
                <div key={h.days} className="flex justify-between py-1.5 border-b last:border-0 text-sm font-golos">
                  <span className="text-gray-500">{h.days}</span>
                  <span className="font-medium" style={{ color: "hsl(var(--navy))" }}>{h.hours}</span>
                </div>
              ))}
            </div>

            {/* Company details */}
            <div className="bg-white border rounded-xl p-4">
              <h3 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Реквизиты компании</h3>
              <div className="space-y-1.5 text-xs font-golos">
                {[
                  ["Полное наименование", "ООО «СитиСервис»"],
                  ["ИНН", "1234567890"],
                  ["КПП", "123456789"],
                  ["ОГРН", "1234567890123"],
                  ["Банк", "ПАО «Сбербанк»"],
                  ["БИК", "044525225"],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span className="text-gray-400">{label}:</span>
                    <span className="font-medium text-gray-600 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ preview */}
            <div className="bg-white border rounded-xl p-4">
              <h3 className="font-golos font-semibold text-sm mb-3" style={{ color: "hsl(var(--navy))" }}>Частые вопросы</h3>
              {faqPreview.map((f, i) => (
                <div key={i} className="border-b last:border-0 py-2.5">
                  <div className="text-xs font-golos font-medium mb-1" style={{ color: "hsl(var(--navy))" }}>{f.q}</div>
                  <div className="text-xs font-golos text-gray-500">{f.a}</div>
                </div>
              ))}
              <Link to="/faq" className="text-xs font-golos font-medium mt-2 block hover:underline" style={{ color: "hsl(var(--navy))" }}>
                Все вопросы →
              </Link>
            </div>
          </div>
        </div>

        {/* Social networks */}
        <div className="mt-10">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Мы в социальных сетях</h2>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
            {socials.map((s) => (
              <button key={s.name} className="bg-white border rounded-xl p-4 flex flex-col items-center gap-2 card-hover text-center">
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-xs font-golos font-medium" style={{ color: s.color }}>{s.name}</span>
                <span className="text-xs font-golos text-gray-400">{s.followers}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-10 mb-8">
          <h2 className="font-cormorant font-bold text-3xl mb-5" style={{ color: "hsl(var(--navy))" }}>Наши партнёры</h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {partners.map((p, i) => (
              <div
                key={i}
                className="w-24 h-16 bg-white border rounded-xl flex items-center justify-center text-3xl cursor-pointer transition-all hover:shadow-md grayscale hover:grayscale-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
