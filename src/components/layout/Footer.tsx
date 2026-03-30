import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const socials = [
  { name: "VK", icon: "Users", color: "#4C75A3" },
  { name: "Telegram", icon: "Send", color: "#2CA5E0" },
  { name: "WhatsApp", icon: "MessageCircle", color: "#25D366" },
  { name: "YouTube", icon: "Play", color: "#FF0000" },
  { name: "Instagram", icon: "Camera", color: "#E1306C" },
  { name: "OK", icon: "Star", color: "#F7931E" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(var(--navy))" }} className="text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "hsl(var(--gold))" }}>
                <Icon name="MapPin" size={16} style={{ color: "hsl(var(--navy))" }} />
              </div>
              <span className="font-golos font-bold text-lg">CityService</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Городской портал услуг. Более 5000 проверенных исполнителей для решения любых задач в вашем городе.
            </p>
            <div className="flex items-center gap-1.5 text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Icon name="Phone" size={13} style={{ color: "hsl(var(--gold))" }} />
              +7 (495) 123-45-67
            </div>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Icon name="Mail" size={13} style={{ color: "hsl(var(--gold))" }} />
              support@cityservice.ru
            </div>
          </div>

          {/* Col 2: Sections */}
          <div>
            <h4 className="font-golos font-semibold text-base mb-4 pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Разделы</h4>
            <ul className="space-y-2">
              {[
                { label: "Главная", path: "/" },
                { label: "Каталог услуг", path: "/catalog" },
                { label: "Исполнители", path: "/executors" },
                { label: "Цены и акции", path: "/prices" },
                { label: "Блог", path: "/blog" },
                { label: "Контакты", path: "/contacts" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-amber-400" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="font-golos font-semibold text-base mb-4 pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Поддержка</h4>
            <ul className="space-y-2">
              {[
                { label: "Частые вопросы (FAQ)", path: "/faq" },
                { label: "Контакты", path: "/contacts" },
                { label: "Помощь клиентам", path: "/faq" },
                { label: "Для исполнителей", path: "/faq" },
                { label: "Правила сервиса", path: "/faq" },
                { label: "Конфиденциальность", path: "/faq" },
              ].map((l, i) => (
                <li key={i}>
                  <Link to={l.path} className="text-sm transition-colors hover:text-amber-400" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="font-golos font-semibold text-base mb-4 pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Мы в соцсетях</h4>
            <div className="grid grid-cols-3 gap-2.5">
              {socials.map((s) => (
                <button
                  key={s.name}
                  className="flex flex-col items-center gap-1.5 py-2.5 px-2 rounded border border-white/10 hover:border-white/30 transition-all text-xs font-golos"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  <Icon name={s.icon as any} size={18} style={{ color: s.color }} />
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 p-3 rounded" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="text-xs font-golos mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Счётчики посещаемости</div>
              <div className="flex gap-3">
                <div className="text-center">
                  <div className="font-golos font-bold text-lg" style={{ color: "hsl(var(--gold))" }}>84K</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>сегодня</div>
                </div>
                <div className="text-center">
                  <div className="font-golos font-bold text-lg" style={{ color: "hsl(var(--gold))" }}>2.1M</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>в месяц</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.2)" }}>
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 CityService. Все права защищены.
          </span>
          <div className="flex gap-4">
            <Link to="/faq" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Условия</Link>
            <Link to="/faq" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Конфиденциальность</Link>
            <Link to="/contacts" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>Реквизиты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
