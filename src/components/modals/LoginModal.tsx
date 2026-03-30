import { useState } from "react";
import Icon from "@/components/ui/icon";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onRegister: () => void;
}

export default function LoginModal({ open, onClose, onRegister }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b flex items-center justify-between">
          <div>
            <h2 className="font-cormorant font-bold text-2xl" style={{ color: "hsl(var(--navy))" }}>
              Вход в личный кабинет
            </h2>
            <p className="text-sm text-gray-500 font-golos mt-0.5">Войдите, чтобы управлять заказами</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-golos font-medium text-gray-700 mb-1.5">Email или телефон</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.ru"
              className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: "hsl(var(--navy))" }}
            />
          </div>
          <div>
            <label className="block text-sm font-golos font-medium text-gray-700 mb-1.5">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 border rounded-lg text-sm font-golos focus:outline-none focus:ring-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm font-golos text-gray-600">Запомнить меня</span>
            </label>
            <button className="text-sm font-golos font-medium transition-colors hover:underline" style={{ color: "hsl(var(--navy))" }}>
              Забыли пароль?
            </button>
          </div>

          <button
            className="w-full py-3 rounded-lg font-golos font-semibold text-sm transition-all hover:opacity-90 active:scale-98"
            style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}
          >
            Войти
          </button>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-xs text-gray-400 font-golos">или войдите через</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[
              { name: "VK", color: "#4C75A3" },
              { name: "Google", color: "#DB4437" },
              { name: "Яндекс", color: "#FC3F1D" },
            ].map((s) => (
              <button
                key={s.name}
                className="py-2 border rounded-lg text-sm font-golos font-medium hover:bg-gray-50 transition-colors"
                style={{ color: s.color, borderColor: `${s.color}30` }}
              >
                {s.name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm font-golos text-gray-500">
            Нет аккаунта?{" "}
            <button onClick={onRegister} className="font-semibold hover:underline" style={{ color: "hsl(var(--navy))" }}>
              Зарегистрироваться
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
