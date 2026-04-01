import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Конфиг для сборки статического сайта под Google Drive
// Все пути — относительные (base: './'), чтобы файлы открывались
// прямо с диска или из любой папки без сервера
export default defineConfig({
    base: './',
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: 'dist-google',
        // Встраиваем маленькие ресурсы прямо в JS/CSS
        assetsInlineLimit: 8192,
        rollupOptions: {
            output: {
                // Читаемые имена файлов
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },
    },
});
