import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ============================================================
// Конфиг сборки для Google Sites
// ============================================================
// Google Sites не поддерживает загрузку HTML/JS/CSS напрямую.
// Правильный способ — захостить сайт на GitHub Pages / Netlify,
// а затем вставить в Google Sites через "Вставить → По URL" (iframe).
//
// Эта сборка:
//   1. Использует base: './' — все пути относительные
//   2. Встраивает маленькие ресурсы (< 100kb) прямо в JS/CSS (base64)
//   3. Создаёт папку dist-google/ — готовую к деплою на любой хостинг
//
// Запуск: npm run build:google
// ============================================================

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-google",
    // Встраиваем ресурсы < 100kb прямо в бандл (нет отдельных fetch-запросов)
    assetsInlineLimit: 102400,
    // Минимизируем CSS
    cssMinify: true,
    rollupOptions: {
      output: {
        // Читаемые имена файлов
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Разбиваем на логические чанки для кэширования
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-tabs",
            "@radix-ui/react-accordion",
            "@radix-ui/react-select",
            "@radix-ui/react-tooltip",
          ],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
