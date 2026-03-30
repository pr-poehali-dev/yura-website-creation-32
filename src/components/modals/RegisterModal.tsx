import { useState } from "react";
import Icon from "@/components/ui/icon";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function RegisterModal({ open, onClose, onLogin }: RegisterModalProps) {
  const [tab, setTab] = useState<"client" | "executor">("client");
  const [agreed, setAgreed] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-4 border-b flex items-center justify-between">
          <div>
            <h2 className="font-cormorant font-bold text-2xl" style={{ color: "hsl(var(--navy))" }}>Регистрация</h2>
            <p className="text-sm text-gray-500 font-golos mt-0.5">Создайте аккаунт на CityService</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 rounded-lg" style={{ backgroundColor: "hsl(var(--secondary))" }}>
            {(["client", "executor"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="py-2 rounded-md text-sm font-golos font-medium transition-all"
                style={
                  tab === t
                    ? { backgroundColor: "hsl(var(--navy))", color: "white" }
                    : { color: "hsl(var(--muted-foreground))" }
                }
              >
                {t === "client" ? "Я клиент" : "Я исполнитель"}
              </button>
            ))}
          </div>

          {["Имя", "Email", "Телефон", "Пароль", "Подтверждение пароля"].map((label) => (
            <div key={label}>
              <label className="block text-sm font-golos font-medium text-gray-700 mb-1.5">{label}</label>
              <input
                type={label.includes("Пароль") ? "password" : "text"}
                placeholder={label === "Email" ? "example@mail.ru" : label === "Телефон" ? "+7 (999) 000-00-00" : ""}
                className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-2"
              />
            </div>
          ))}

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded mt-0.5"
            />
            <span className="text-sm font-golos text-gray-600">
              Согласен с{" "}
              <span className="font-medium hover:underline" style={{ color: "hsl(var(--navy))" }}>
                условиями использования
              </span>{" "}
              и обработкой персональных данных
            </span>
          </label>

          <button
            className="w-full py-3 rounded-lg font-golos font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "hsl(var(--gold))", color: "hsl(var(--navy))" }}
          >
            Зарегистрироваться
          </button>

          <p className="text-center text-sm font-golos text-gray-500">
            Уже есть аккаунт?{" "}
            <button onClick={onLogin} className="font-semibold hover:underline" style={{ color: "hsl(var(--navy))" }}>
              Войти
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
