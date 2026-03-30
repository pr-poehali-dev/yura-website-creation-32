import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";

const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "Исполнители", path: "/executors" },
  { label: "Цены", path: "/prices" },
  { label: "Блог", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const location = useLocation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = ["Сантехник", "Электрик", "Уборка квартиры", "Ремонт", "Грузчики"];

  return (
    <>
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "hsl(var(--navy))" }}>
        {/* Top bar */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-1.5 flex justify-between items-center text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span>Пн–Пт: 09:00–21:00 | Сб–Вс: 10:00–18:00</span>
            <span>+7 (495) 123-45-67 | support@cityservice.ru</span>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded flex items-center justify-center" style={{ backgroundColor: "hsl(var(--gold))" }}>
                <Icon name="MapPin" size={20} style={{ color: "hsl(var(--navy))" }} />
              </div>
              <div>
                <div className="text-white font-golos font-bold text-lg leading-tight">CityService</div>
                <div className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>Городской портал услуг</div>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded text-sm font-golos font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-navy font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={location.pathname === link.path ? { backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" } : {}}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon name="Search" size={18} />
              </button>
              <button
                onClick={() => setLoginOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded border border-white/30 text-white text-sm font-golos hover:bg-white/10 transition-colors"
              >
                <Icon name="LogIn" size={15} />
                Войти
              </button>
              <button
                onClick={() => setRegisterOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded text-sm font-golos font-semibold transition-colors"
                style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
              >
                <Icon name="UserPlus" size={15} />
                Регистрация
              </button>
              <button
                className="lg:hidden p-2 text-white/70 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="mt-3 animate-fade-in">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск услуг и исполнителей..."
                  className="w-full pl-9 pr-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-golos focus:outline-none focus:border-white/50"
                />
                {searchQuery === "" && (
                  <div className="absolute top-full left-0 right-0 mt-1 rounded bg-white shadow-lg z-10 py-2">
                    <div className="px-3 py-1 text-xs text-gray-500 font-golos">Популярные запросы:</div>
                    {popularSearches.map((s) => (
                      <button key={s} className="w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 font-golos flex items-center gap-2">
                        <Icon name="TrendingUp" size={13} className="text-gray-400" />
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 animate-fade-in">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-golos font-medium transition-colors ${
                    location.pathname === link.path ? "text-navy font-semibold" : "text-white/80"
                  }`}
                  style={location.pathname === link.path ? { backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" } : {}}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t border-white/10">
                <button onClick={() => { setLoginOpen(true); setMobileOpen(false); }} className="flex-1 py-2 border border-white/30 text-white text-sm rounded font-golos">Войти</button>
                <button onClick={() => { setRegisterOpen(true); setMobileOpen(false); }} className="flex-1 py-2 text-sm rounded font-golos font-semibold" style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}>Регистрация</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onRegister={() => { setLoginOpen(false); setRegisterOpen(true); }} />
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} onLogin={() => { setRegisterOpen(false); setLoginOpen(true); }} />
    </>
  );
}
